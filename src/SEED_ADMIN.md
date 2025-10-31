# 🌱 Seed Default Admin Credentials

## Quick Setup Instructions

Follow these steps to create your default admin account:

---

## Method 1: Browser Console (Easiest)

1. **Open your website in a browser**
2. **Press F12 to open Developer Console**
3. **Copy and paste this code:**

```javascript
// Replace {projectId} and {publicAnonKey} with actual values from utils/supabase/info.tsx
fetch('https://{projectId}.supabase.co/functions/v1/make-server-398bae6f/admin/seed', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {publicAnonKey}',
    'Content-Type': 'application/json'
  }
})
.then(r => r.json())
.then(data => {
  if (data.success) {
    console.log('✅ Admin created successfully!');
    console.log('Email:', data.credentials.email);
    console.log('Password:', data.credentials.password);
  } else {
    console.log('ℹ️ Admin already exists');
  }
})
.catch(err => console.error('❌ Error:', err));
```

4. **Press Enter**
5. **You should see:**
   ```
   ✅ Admin created successfully!
   Email: admin@quantomedge.io
   Password: Testing@12345
   ```

---

## Method 2: Via Admin Setup Page

1. **Go to:** `#admin-setup`
2. **Fill in:**
   - **Name:** Admin User
   - **Email:** admin@quantomedge.io
   - **Password:** Testing@12345
3. **Click "Create Admin Account"**
4. **Done!**

---

## Method 3: Using cURL (Command Line)

```bash
curl -X POST \
  https://{projectId}.supabase.co/functions/v1/make-server-398bae6f/admin/seed \
  -H "Authorization: Bearer {publicAnonKey}" \
  -H "Content-Type: application/json"
```

---

## After Setup

### Login:
1. Go to `#admin`
2. Enter:
   - **Email:** admin@quantomedge.io
   - **Password:** Testing@12345
3. Click "Sign In"
4. You're in! 🎉

---

## Troubleshooting

### "Admin already exists"
✅ This is normal! The admin was already created. Just login with the credentials.

### "Unauthorized" or "Invalid token"
❌ Check that you replaced `{projectId}` and `{publicAnonKey}` with actual values

### Can't find projectId or publicAnonKey
📁 Look in `/utils/supabase/info.tsx` file

---

## Create Additional Admins

Once you're logged in, you can create more admin accounts:

1. Go to `#admin-setup`
2. Create new account with different email
3. Share credentials with team members

---

**That's it! Your admin system is ready to use.**
