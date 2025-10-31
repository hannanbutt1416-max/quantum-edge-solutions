// This is a utility script to seed the default admin credentials
// Run this once to create the default admin account

import * as kv from "./kv_store.tsx";

// Helper function to hash passwords (same as in index.tsx)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function seedDefaultAdmin() {
  const email = "admin@quantomedge.io";
  const password = "Testing@12345";
  const name = "Admin User";

  try {
    // Check if admin already exists
    const existingAdmin = await kv.get(`admin_${email}`);
    if (existingAdmin) {
      console.log(`Admin ${email} already exists`);
      return;
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

    console.log(`✅ Default admin created successfully!`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  } catch (error) {
    console.error("❌ Error seeding admin:", error);
  }
}

// Run the seed function
seedDefaultAdmin();
