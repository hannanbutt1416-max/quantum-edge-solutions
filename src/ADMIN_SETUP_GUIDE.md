# 🔐 Admin System Setup Guide - Database-Backed Authentication

## ✅ What Changed

Your admin system now uses **database-backed authentication** instead of Supabase Auth. All admin credentials are stored securely in the KV database with hashed passwords.

---

## 🎯 Key Improvements

### ✅ **Database Storage**
- Admin credentials stored directly in KV store
- Passwords hashed using SHA-256
- No dependency on Supabase Auth service
- Session tokens with 24-hour expiration

### ✅ **Logo Integration**
- Admin Login now uses **QuantomEdgeLogo** component
- Admin Setup uses **QuantomEdgeLogo** component
- Admin Dashboard uses **QuantomEdgeLogo** component
- Consistent branding throughout admin panel

### ✅ **Simple Authentication**
- Custom login endpoint: `/admin/login`
- Custom signup endpoint: `/admin/signup`
- Token-based sessions (24-hour validity)
- Easy credential management

---

## 🚀 Quick Start - Option 1: Seed Default Admin

### **Method A: Via API Endpoint (Recommended)**

1. **Make a POST request to seed endpoint:**
   ```bash
   curl -X POST https://{projectId}.supabase.co/functions/v1/make-server-398bae6f/admin/seed \
     -H "Authorization: Bearer {publicAnonKey}" \
     -H "Content-Type: application/json"
   ```

2. **Or use JavaScript in browser console:**
   ```javascript
   fetch('https://{projectId}.supabase.co/functions/v1/make-server-398bae6f/admin/seed', {
     method: 'POST',
     headers: {
       'Authorization': 'Bearer {publicAnonKey}',
       'Content-Type': 'application/json'
     }
   }).then(r => r.json()).then(console.log);
   ```

3. **Response will include:**
   ```json
   {
     "success": true,
     "message": "Default admin credentials created successfully",
     "credentials": {
       "email": "admin@quantomedge.io",
       "password": "Testing@12345",
       "note": "Please change this password after first login"
     }
   }
   ```

---

## 🚀 Quick Start - Option 2: Create Admin via UI

1. **Navigate to Admin Setup:**
   ```
   https://your-website.com/#admin-setup
   ```

2. **Fill in the form:**
   - **Name:** Admin User
   - **Email:** admin@quantomedge.io
   - **Password:** Testing@12345

3. **Click "Create Admin Account"**

4. **Success!** You can now login at `#admin`

---

## 🔐 Default Admin Credentials

```
Email:    admin@quantomedge.io
Password: Testing@12345
```

**⚠️ Important:** These credentials are pre-configured in the seed endpoint. You can create this admin account once and then use these credentials to login.

---

## 📊 How It Works

### **1. Admin Signup Flow**

```
User submits form → Server receives request
  ↓
Check if admin exists (by email)
  ↓
Hash password (SHA-256)
  ↓
Store in KV: admin_{email}
  {
    email: "admin@quantomedge.io",
    password_hash: "hashed_password",
    name: "Admin User",
    created_at: "2025-01-01T00:00:00Z"
  }
  ↓
Return success
```

### **2. Admin Login Flow**

```
User enters credentials → Server receives request
  ↓
Fetch admin from KV: admin_{email}
  ↓
Hash submitted password
  ↓
Compare hashes
  ↓
If match: Generate access token
  {
    email: "admin@quantomedge.io",
    timestamp: Date.now(),
    random: "uuid"
  }
  ↓
Encode token (Base64)
  ↓
Return token to frontend
```

### **3. Protected Endpoint Flow**

```
Frontend sends request with token in Authorization header
  ↓
Server extracts token from header
  ↓
Decode token (Base64)
  ↓
Check token age (< 24 hours)
  ↓
Verify admin exists in KV store
  ↓
If valid: Process request
If invalid: Return 401 Unauthorized
```

---

## 🔧 API Endpoints

### **POST /admin/seed**
Creates default admin credentials (one-time setup)

**Request:**
```bash
POST /make-server-398bae6f/admin/seed
Authorization: Bearer {publicAnonKey}
```

**Response:**
```json
{
  "success": true,
  "credentials": {
    "email": "admin@quantomedge.io",
    "password": "Testing@12345"
  }
}
```

### **POST /admin/signup**
Create new admin account

**Request:**
```json
{
  "email": "admin@quantomedge.io",
  "password": "Testing@12345",
  "name": "Admin User"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Admin user created successfully",
  "user": {
    "email": "admin@quantomedge.io",
    "name": "Admin User"
  }
}
```

### **POST /admin/login**
Authenticate admin

**Request:**
```json
{
  "email": "admin@quantomedge.io",
  "password": "Testing@12345"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "access_token": "eyJlbWFpbCI6ImFkbWluQHF1YW50b21lZGdlLmlvIiwidGltZXN0YW1wIjoxNzAwMDAwMDAwLCJyYW5kb20iOiJ1dWlkIn0=",
  "user": {
    "email": "admin@quantomedge.io",
    "name": "Admin User"
  }
}
```

### **GET /admin/submissions**
Get contact form submissions (requires auth)

**Request:**
```bash
GET /make-server-398bae6f/admin/submissions?page=1&limit=10
Authorization: Bearer {access_token}
```

### **PUT /admin/submissions/:id/status**
Update submission status (requires auth)

**Request:**
```json
{
  "status": "in-progress"
}
```

---

## 🎨 Updated Components

### **AdminLogin.tsx**
✅ Uses `QuantomEdgeLogo` component
✅ Authenticates via `/admin/login` endpoint
✅ Stores token in state and passes to dashboard
✅ No Supabase Auth dependency

### **AdminSetup.tsx**
✅ Uses `QuantomEdgeLogo` component
✅ Creates admin via `/admin/signup` endpoint
✅ Validates password length (min 6 characters)
✅ Checks for existing admin accounts

### **AdminDashboard.tsx**
✅ Uses `QuantomEdgeLogo` component
✅ Validates token on protected requests
✅ Simple logout (clears token)
✅ No Supabase Auth dependency

---

## 🔒 Security Features

### **Password Hashing**
- SHA-256 hashing algorithm
- Stored as hex string
- Never stored in plain text

### **Token Security**
- Base64 encoded JSON payload
- Includes timestamp for expiration
- Random UUID for uniqueness
- 24-hour validity period

### **Authorization**
- All admin endpoints check for valid token
- Tokens validated on every request
- Expired tokens automatically rejected

---

## 📝 Testing Your Setup

### **1. Seed Default Admin**
```javascript
// In browser console
fetch('https://{projectId}.supabase.co/functions/v1/make-server-398bae6f/admin/seed', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {publicAnonKey}',
    'Content-Type': 'application/json'
  }
}).then(r => r.json()).then(console.log);
```

### **2. Test Login**
1. Go to `#admin`
2. Enter:
   - Email: `admin@quantomedge.io`
   - Password: `Testing@12345`
3. Click "Sign In"
4. Should redirect to dashboard

### **3. Test Dashboard**
1. View should show "Admin Dashboard"
2. QuantomEdge logo should appear in header
3. Can view contact submissions
4. Can update submission status
5. Can logout

---

## 🎯 Multiple Admin Accounts

You can create multiple admin accounts:

### **Via UI:**
1. Go to `#admin-setup`
2. Create new account with different email

### **Via API:**
```javascript
fetch('https://{projectId}.supabase.co/functions/v1/make-server-398bae6f/admin/signup', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {publicAnonKey}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'team@quantomedge.io',
    password: 'SecurePassword123!',
    name: 'Team Member'
  })
}).then(r => r.json()).then(console.log);
```

---

## 🐛 Troubleshooting

### **Issue: Can't login**
**Solution:**
1. Make sure admin account exists (run seed endpoint)
2. Check password is exactly: `Testing@12345`
3. Check email is: `admin@quantomedge.io`
4. Clear browser cache and try again

### **Issue: "Invalid or expired token"**
**Solution:**
1. Token expires after 24 hours
2. Logout and login again
3. Check that token is being sent in Authorization header

### **Issue: "Admin already exists"**
**Solution:**
1. This means the account was already created
2. Just login with existing credentials
3. If you forgot password, you'll need to delete the KV entry or create a new admin

---

## 📖 Related Files

### **Backend:**
- `/supabase/functions/server/index.tsx` - Main server with all endpoints
- `/supabase/functions/server/kv_store.tsx` - KV store utilities
- `/supabase/functions/server/seed-admin.tsx` - Seed script (reference only)

### **Frontend:**
- `/components/AdminLogin.tsx` - Login page with logo
- `/components/AdminSetup.tsx` - Setup page with logo
- `/components/AdminDashboard.tsx` - Dashboard with logo
- `/components/QuantomEdgeLogo.tsx` - Logo component

---

## ✅ Summary

Your admin system now:
- ✅ Stores credentials in database (KV store)
- ✅ Uses custom authentication (no Supabase Auth)
- ✅ Displays QuantomEdge logo throughout
- ✅ Has default credentials pre-configured
- ✅ Supports multiple admin accounts
- ✅ Has 24-hour session tokens
- ✅ Includes seed endpoint for easy setup

**Next Steps:**
1. Call the seed endpoint to create default admin
2. Login at `#admin` with default credentials
3. Test the dashboard functionality
4. Create additional admin accounts if needed

🎉 **Your admin system is ready to use!**
