# 🔑 Admin Panel - Access Information

## ⚡ NEW: Database-Backed Authentication

**Your admin system now uses database-backed authentication!**
- All credentials stored securely in KV database
- Passwords hashed with SHA-256
- Custom token-based sessions (24-hour validity)
- QuantomEdge logo displayed throughout admin panel

See **ADMIN_SETUP_GUIDE.md** for complete technical details.

---

## 📍 Access URLs

### Admin Panel Login
```
https://your-website.com/#admin
```
**Or click "Admin" link at the bottom of any page (footer)**

### Admin Setup (Create New Admin)
```
https://your-website.com/#admin-setup
```

---

## 🚀 Quick Setup - Seed Default Admin

### **Option 1: Auto-Create via Seed Endpoint (Fastest)**

Run this in your browser console:
```javascript
fetch('https://{projectId}.supabase.co/functions/v1/make-server-398bae6f/admin/seed', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {publicAnonKey}',
    'Content-Type': 'application/json'
  }
}).then(r => r.json()).then(console.log);
```

This creates the default admin account instantly!

### **Option 2: Manual Creation via UI**

1. **Navigate to Admin Setup:**
   - Go to `#admin-setup` in your browser
   - Or click "Admin" in footer

2. **Enter Default Credentials:**
   ```
   Name:     Admin User
   Email:    admin@quantomedge.io
   Password: Testing@12345
   ```

3. **Click "Create Admin Account"**
   - Account is created and stored in database
   - Password is hashed automatically

4. **Success!**
   - Now you can login at `#admin`

---

## 🔐 Default Admin Credentials

### Primary Admin
```
Email:    admin@quantomedge.io
Password: Testing@12345
Name:     Admin User
```

### Team Member (Optional - Create Manually)
```
Email:    team@quantomedge.io
Password: Testing@12345
Name:     Team Member
```

**⚠️ IMPORTANT:** These are default credentials. You can create the account once and use these credentials to login.

---

## 🚪 How to Login

1. **Go to:** `#admin`
2. **Enter credentials:**
   - Email: `admin@quantomedge.io`
   - Password: `[your password]`
3. **Click "Sign In"**
4. **You're in!** Dashboard loads automatically

---

## 📊 What You'll See After Login

### Admin Dashboard Features:

✅ **Submission Count:** Total number of contact forms  
✅ **Submission List:** All contact forms with details  
✅ **Status Badges:** Color-coded (New, In Progress, Completed)  
✅ **Pagination:** Navigate through submissions (10 per page)  
✅ **Status Updates:** Click to change submission status  
✅ **Full Details:** Name, email, phone, company, service, budget, message  
✅ **Timestamps:** When each form was submitted  
✅ **Logout Button:** Sign out securely  

---

## 🎯 Navigation Shortcuts

### URL Hash Method (Bookmark These!)
```javascript
// Public Pages
#home         - Homepage
#services     - Services page
#about        - About/Solutions page
#portfolio    - Case Studies
#blog         - Insights/Blog
#contact      - Contact form

// Admin Pages (Protected)
#admin        - Admin login/dashboard
#admin-setup  - Create admin account
```

### Console Method (Developer Tool)
```javascript
// Navigate to admin
window.location.hash = 'admin'

// Navigate to setup
window.location.hash = 'admin-setup'

// Navigate to contact form
window.location.hash = 'contact'
```

---

## 🔄 Session Management

### Login Persistence
- ✅ **Stays logged in** across page refreshes
- ✅ **Secure session** stored in browser
- ✅ **Auto-logout** if session expires
- ✅ **Manual logout** via logout button

### When You Need to Re-login
- After clearing browser cache/cookies
- After clicking logout
- After session expires (extended period)
- When switching devices

---

## 📝 Testing Your Setup

### Complete Test Workflow:

1. **Create Admin Account**
   ```
   Navigate to: #admin-setup
   Create account with your email
   ```

2. **Submit Test Contact Form**
   ```
   Navigate to: #contact
   Fill out form with test data
   Submit
   ```

3. **View Submission in Admin**
   ```
   Navigate to: #admin
   Login with your credentials
   See your test submission
   Update status to "In Progress"
   Refresh page - status persists!
   ```

4. **Test Complete!** ✅

---

## 🛡️ Security Best Practices

✅ **Use strong passwords** (mix of letters, numbers, symbols)  
✅ **Don't share credentials** publicly  
✅ **Create separate accounts** for team members  
✅ **Logout** when using shared computers  
✅ **Keep credentials** in a password manager  

---

## 📞 Admin Contact Form Integration

### How It Works:

1. **User fills contact form** on your website (`#contact`)
2. **Form submits** to Supabase backend
3. **Data is stored** in secure database
4. **Admin receives notification** (appears in dashboard)
5. **Admin reviews** and responds to lead
6. **Admin updates status** to track progress

### Form Fields Captured:
- ✅ Name (required)
- ✅ Email (required)
- ✅ Phone (optional)
- ✅ Company (required)
- ✅ Service Interest (required)
- ✅ Budget Range (optional)
- ✅ Message/Project Details (required)
- ✅ Submission Timestamp (automatic)
- ✅ Status (automatic - starts as "new")

---

## 🎨 Admin Panel Design

Your admin panel matches the Quantom Edge brand:
- 🎨 Dark background (#14141A)
- 💠 Electric cyan accents (#00D0FF)
- ⚡ Digital lime CTAs (#75FF00)
- 📊 Modern card layouts
- 🎭 Smooth animations
- 📱 Mobile responsive

---

## 🚀 Quick Reference

| Task | URL | Credentials Needed |
|------|-----|-------------------|
| Create admin | `#admin-setup` | Create new email/password |
| Login | `#admin` | Existing email/password |
| View submissions | `#admin` (after login) | Must be logged in |
| Submit contact form | `#contact` | No login needed |

---

## 💡 Pro Tips

1. **Bookmark Admin URL:** Save `#admin` for quick access
2. **Create Team Accounts:** One for each team member
3. **Check Daily:** Review new submissions regularly
4. **Use Status Updates:** Track your progress
5. **Test First:** Submit a test form to see how it works

---

## 📖 Additional Resources

- **QUICK_START.md** - Fast setup guide
- **ADMIN_GUIDE.md** - Complete technical documentation
- **Footer Link** - Quick access from any page

---

**Your admin system is ready to use! 🎉**

Start by creating your account at `#admin-setup`, then login at `#admin` to view contact form submissions.
