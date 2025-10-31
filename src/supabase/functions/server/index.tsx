import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Helper function to hash passwords
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// Helper function to generate access token
function generateAccessToken(email: string): string {
  const payload = {
    email,
    timestamp: Date.now(),
    random: crypto.randomUUID()
  };
  return btoa(JSON.stringify(payload));
}

// Helper function to validate access token
async function validateAccessToken(token: string): Promise<string | null> {
  try {
    const payload = JSON.parse(atob(token));
    // Check if token is less than 24 hours old
    const hoursDiff = (Date.now() - payload.timestamp) / (1000 * 60 * 60);
    if (hoursDiff > 24) {
      return null;
    }
    // Verify admin exists
    const admin = await kv.get(`admin_${payload.email}`);
    if (!admin) {
      return null;
    }
    return payload.email;
  } catch (error) {
    return null;
  }
}

// Enable logger
app.use("*", logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization", "X-Access-Token"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  })
);

// Health check endpoint
app.get("/make-server-398bae6f/health", (c) => {
  return c.json({ status: "ok" });
});

// Seed default admin credentials (can be called once to initialize)
app.post("/make-server-398bae6f/admin/seed", async (c) => {
  try {
    const email = "admin@quantomedge.io";
    const password = "Testing@12345";
    const name = "Admin User";

    // Check if admin already exists
    const existingAdmin = await kv.get(`admin_${email}`);
    if (existingAdmin) {
      return c.json({ 
        success: false,
        message: `Admin ${email} already exists` 
      }, 400);
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create admin object
    const admin = {
      email,
      password_hash: passwordHash,
      name,
      created_at: new Date().toISOString(),
    };

    // Store in KV store
    await kv.set(`admin_${email}`, admin);

    console.log(`Default admin created: ${email}`);

    return c.json({
      success: true,
      message: "Default admin credentials created successfully",
      credentials: {
        email,
        password,
        note: "Please change this password after first login"
      }
    });
  } catch (error) {
    console.error("Error seeding admin:", error);
    return c.json({ error: `Failed to seed admin: ${error.message}` }, 500);
  }
});

// Submit contact form
app.post("/make-server-398bae6f/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, company, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !company || !service || !message) {
      return c.json(
        { error: "Missing required fields: name, email, company, service, and message are required" },
        400
      );
    }

    // Create submission object
    const submission = {
      id: crypto.randomUUID(),
      name,
      email,
      phone: phone || "",
      company,
      service,
      budget: budget || "",
      message,
      created_at: new Date().toISOString(),
      status: "new",
    };

    // Store in KV store with prefix for easy retrieval
    const key = `contact_submission_${submission.id}`;
    await kv.set(key, submission);

    console.log(`Contact form submission saved: ${submission.id}`);

    return c.json({
      success: true,
      message: "Contact form submitted successfully",
      submission_id: submission.id,
    });
  } catch (error) {
    console.error("Error saving contact form submission:", error);
    return c.json(
      { error: `Failed to save contact form submission: ${error.message}` },
      500
    );
  }
});

// Admin signup endpoint - stores credentials in KV store
app.post("/make-server-398bae6f/admin/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    if (password.length < 6) {
      return c.json({ error: "Password must be at least 6 characters" }, 400);
    }

    // Check if admin already exists
    const existingAdmin = await kv.get(`admin_${email}`);
    if (existingAdmin) {
      return c.json({ error: "Admin account with this email already exists" }, 400);
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create admin object
    const admin = {
      email,
      password_hash: passwordHash,
      name: name || "Admin User",
      created_at: new Date().toISOString(),
    };

    // Store in KV store
    await kv.set(`admin_${email}`, admin);

    console.log(`Admin user created in KV store: ${email}`);

    return c.json({
      success: true,
      message: "Admin user created successfully",
      user: {
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error) {
    console.error("Error in admin signup:", error);
    return c.json({ error: `Admin signup error: ${error.message}` }, 500);
  }
});

// Admin login endpoint - authenticates against KV store
app.post("/make-server-398bae6f/admin/login", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;

    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    // Get admin from KV store
    const admin = await kv.get(`admin_${email}`);
    if (!admin) {
      return c.json({ error: "Invalid email or password" }, 401);
    }

    // Verify password
    const passwordHash = await hashPassword(password);
    if (passwordHash !== admin.password_hash) {
      return c.json({ error: "Invalid email or password" }, 401);
    }

    // Generate access token
    const accessToken = generateAccessToken(email);

    console.log(`Admin login successful: ${email}`);

    return c.json({
      success: true,
      message: "Login successful",
      access_token: accessToken,
      user: {
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (error) {
    console.error("Error in admin login:", error);
    return c.json({ error: `Admin login error: ${error.message}` }, 500);
  }
});

// Get all contact submissions (paginated, requires auth)
app.get("/make-server-398bae6f/admin/submissions", async (c) => {
  try {
    // Check authorization - read from custom header (not Authorization)
    const accessToken = c.req.header("X-Access-Token");
    if (!accessToken) {
      console.error("Authorization error: No X-Access-Token header provided");
      return c.json({ error: "Unauthorized: No access token provided" }, 401);
    }

    const email = await validateAccessToken(accessToken);
    
    if (!email) {
      console.error("Authorization error while fetching submissions: Invalid or expired token");
      return c.json({ error: "Unauthorized: Invalid or expired access token" }, 401);
    }

    // Get pagination parameters
    const page = parseInt(c.req.query("page") || "1");
    const limit = parseInt(c.req.query("limit") || "10");

    // Fetch all submissions from KV store with prefix
    const allSubmissions = await kv.getByPrefix("contact_submission_");
    
    // Sort by created_at descending (newest first)
    const sortedSubmissions = allSubmissions.sort((a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    // Calculate pagination
    const totalCount = sortedSubmissions.length;
    const totalPages = Math.ceil(totalCount / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedSubmissions = sortedSubmissions.slice(startIndex, endIndex);

    console.log(`Fetched ${paginatedSubmissions.length} submissions for page ${page}`);

    return c.json({
      success: true,
      data: paginatedSubmissions,
      pagination: {
        page,
        limit,
        total_count: totalCount,
        total_pages: totalPages,
        has_next: page < totalPages,
        has_prev: page > 1,
      },
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return c.json(
      { error: `Failed to fetch submissions: ${error.message}` },
      500
    );
  }
});

// Update submission status (requires auth)
app.put("/make-server-398bae6f/admin/submissions/:id/status", async (c) => {
  try {
    // Check authorization - read from custom header (not Authorization)
    const accessToken = c.req.header("X-Access-Token");
    if (!accessToken) {
      console.error("Authorization error: No X-Access-Token header provided");
      return c.json({ error: "Unauthorized: No access token provided" }, 401);
    }

    const email = await validateAccessToken(accessToken);
    
    if (!email) {
      console.error("Authorization error while updating submission status: Invalid or expired token");
      return c.json({ error: "Unauthorized: Invalid or expired access token" }, 401);
    }

    const submissionId = c.req.param("id");
    const { status } = await c.req.json();

    if (!status) {
      return c.json({ error: "Status is required" }, 400);
    }

    // Get existing submission
    const key = `contact_submission_${submissionId}`;
    const submission = await kv.get(key);

    if (!submission) {
      return c.json({ error: "Submission not found" }, 404);
    }

    // Update status
    submission.status = status;
    submission.updated_at = new Date().toISOString();
    await kv.set(key, submission);

    console.log(`Updated submission ${submissionId} status to ${status}`);

    return c.json({
      success: true,
      message: "Submission status updated",
      submission,
    });
  } catch (error) {
    console.error("Error updating submission status:", error);
    return c.json({ error: `Failed to update status: ${error.message}` }, 500);
  }
});

Deno.serve(app.fetch);
