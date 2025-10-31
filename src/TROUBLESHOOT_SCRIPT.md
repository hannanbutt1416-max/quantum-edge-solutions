# 🔧 Browser Console Troubleshooting Script

Copy and paste this into your browser console (F12) to diagnose issues:

## 🧪 Complete Diagnostic Script

```javascript
// ========================================
// ADMIN DASHBOARD DIAGNOSTIC SCRIPT
// ========================================

console.clear();
console.log('🔍 Starting Admin Dashboard Diagnostics...\n');

// 1. Check if we're on the admin page
const currentHash = window.location.hash;
console.log('📍 Current Page:', currentHash);
if (currentHash !== '#admin' && currentHash !== '#admin-dashboard') {
  console.warn('⚠️  You should be on #admin or #admin-dashboard page');
}

// 2. Check access token
const accessToken = sessionStorage.getItem('adminAccessToken');
console.log('\n🔑 Access Token Check:');
if (accessToken) {
  console.log('✅ Access token found:', accessToken.substring(0, 20) + '...');
  
  // Try to decode it
  try {
    const decoded = JSON.parse(atob(accessToken));
    console.log('📝 Token contents:', decoded);
    
    // Check expiration
    const hoursSinceCreation = (Date.now() - decoded.timestamp) / (1000 * 60 * 60);
    console.log('⏰ Token age:', hoursSinceCreation.toFixed(2), 'hours');
    if (hoursSinceCreation > 24) {
      console.error('❌ Token expired! Please re-login.');
    } else {
      console.log('✅ Token valid for', (24 - hoursSinceCreation).toFixed(2), 'more hours');
    }
  } catch (e) {
    console.error('❌ Failed to decode token:', e);
  }
} else {
  console.error('❌ No access token found! Please login.');
}

// 3. Check Supabase configuration
console.log('\n🔧 Supabase Configuration:');
const supabaseUrlMeta = document.querySelector('meta[name="supabase-url"]');
const supabaseKeyMeta = document.querySelector('meta[name="supabase-anon-key"]');

if (supabaseUrlMeta && supabaseKeyMeta) {
  console.log('✅ Supabase config found in meta tags');
} else {
  console.warn('⚠️  Checking via module import...');
}

// 4. Test API endpoint
console.log('\n🌐 Testing API Endpoint...');

// You'll need to get these from your info.tsx
// Replace with your actual values
const testAPI = async () => {
  try {
    // Try to dynamically import
    const { projectId, publicAnonKey } = await import('./utils/supabase/info');
    
    console.log('Project ID:', projectId);
    console.log('Anon Key:', publicAnonKey.substring(0, 20) + '...');
    
    const apiUrl = `https://${projectId}.supabase.co/functions/v1/make-server-398bae6f/admin/submissions?page=1&limit=10`;
    
    console.log('\n📡 Making test request to:', apiUrl);
    
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
        'X-Access-Token': accessToken || ''
      }
    });
    
    console.log('Response Status:', response.status);
    
    const data = await response.json();
    console.log('Response Data:', data);
    
    if (response.ok) {
      console.log('\n✅ ✅ ✅ API WORKING PERFECTLY! ✅ ✅ ✅');
      console.log('📊 Submissions found:', data.data?.length || 0);
    } else {
      console.error('\n❌ API Error:', data);
      
      // Provide specific guidance
      if (data.message === 'Invalid JWT') {
        console.log('\n🔧 FIX: The JWT error should be fixed now.');
        console.log('   1. Hard refresh: Ctrl+Shift+R');
        console.log('   2. Clear cache and reload');
        console.log('   3. Re-login to get fresh token');
      } else if (data.error?.includes('Unauthorized')) {
        console.log('\n🔧 FIX: Authentication issue');
        console.log('   1. Re-login at #admin');
        console.log('   2. Check admin exists (run seed)');
        console.log('   3. Verify token is valid');
      }
    }
  } catch (error) {
    console.error('\n❌ Test failed:', error);
    console.log('\n💡 Manual test:');
    console.log('Replace YOUR_PROJECT_ID and YOUR_ANON_KEY below:');
    console.log(`
fetch('https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-398bae6f/admin/submissions?page=1&limit=10', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ANON_KEY',
    'X-Access-Token': '${accessToken || 'YOUR_ACCESS_TOKEN'}'
  }
}).then(r => r.json()).then(console.log);
    `);
  }
};

// Run the test
if (accessToken) {
  testAPI();
} else {
  console.log('\n⚠️  Skipping API test (no access token)');
  console.log('Please login first, then run this script again.');
}

// 5. Check for React components
console.log('\n⚛️  React Component Check:');
setTimeout(() => {
  const statsCards = document.querySelectorAll('[class*="gradient"]');
  console.log('Found premium components:', statsCards.length > 0 ? '✅' : '❌');
}, 1000);

// 6. Summary
console.log('\n' + '='.repeat(50));
console.log('📋 DIAGNOSTIC SUMMARY');
console.log('='.repeat(50));
console.log('Page:', currentHash);
console.log('Token:', accessToken ? 'Present ✅' : 'Missing ❌');
console.log('Next Step:', accessToken ? 'Check API response above' : 'Login at #admin');
console.log('='.repeat(50));

console.log('\n✨ Diagnostics complete!');
```

---

## 🎯 Quick Tests

### **Test 1: Check Access Token**
```javascript
const token = sessionStorage.getItem('adminAccessToken');
console.log(token ? '✅ Token exists' : '❌ No token - please login');
```

### **Test 2: Decode Token**
```javascript
const token = sessionStorage.getItem('adminAccessToken');
if (token) {
  const decoded = JSON.parse(atob(token));
  console.log('Token data:', decoded);
  console.log('Age (hours):', (Date.now() - decoded.timestamp) / (1000 * 60 * 60));
}
```

### **Test 3: Manual API Call**
```javascript
// Replace YOUR_PROJECT_ID and YOUR_ANON_KEY
const projectId = 'YOUR_PROJECT_ID';
const publicAnonKey = 'YOUR_ANON_KEY';
const accessToken = sessionStorage.getItem('adminAccessToken');

fetch(`https://${projectId}.supabase.co/functions/v1/make-server-398bae6f/admin/submissions?page=1&limit=10`, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${publicAnonKey}`,
    'X-Access-Token': accessToken
  }
})
.then(r => {
  console.log('Status:', r.status);
  return r.json();
})
.then(data => {
  console.log('Data:', data);
  if (data.success) {
    console.log('✅ Working! Found', data.data.length, 'submissions');
  } else {
    console.error('❌ Error:', data.error);
  }
})
.catch(err => console.error('❌ Request failed:', err));
```

### **Test 4: Create Test Submission**
```javascript
// Replace YOUR_PROJECT_ID and YOUR_ANON_KEY
const projectId = 'YOUR_PROJECT_ID';
const publicAnonKey = 'YOUR_ANON_KEY';

fetch(`https://${projectId}.supabase.co/functions/v1/make-server-398bae6f/contact`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${publicAnonKey}`
  },
  body: JSON.stringify({
    name: "Test User",
    email: "test@example.com",
    phone: "555-0000",
    company: "Test Company",
    service: "digitalmarketing",
    budget: "10k50k",
    message: "This is a test submission created via console."
  })
})
.then(r => r.json())
.then(data => {
  console.log('✅ Test submission created:', data);
  console.log('Now refresh your dashboard to see it!');
})
.catch(err => console.error('❌ Failed to create submission:', err));
```

### **Test 5: Seed Admin Account**
```javascript
// Replace YOUR_PROJECT_ID and YOUR_ANON_KEY
const projectId = 'YOUR_PROJECT_ID';
const publicAnonKey = 'YOUR_ANON_KEY';

fetch(`https://${projectId}.supabase.co/functions/v1/make-server-398bae6f/admin/seed`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${publicAnonKey}`
  }
})
.then(r => r.json())
.then(data => {
  console.log('Seed result:', data);
  if (data.success) {
    console.log('✅ Admin created!');
    console.log('Email:', data.credentials.email);
    console.log('Password:', data.credentials.password);
  } else {
    console.log('ℹ️', data.message);
  }
})
.catch(err => console.error('❌ Seed failed:', err));
```

---

## 🔍 Interpreting Results

### **✅ Success Signs:**
- "✅ Token exists"
- "✅ Token valid for X more hours"
- "Response Status: 200"
- "✅ ✅ ✅ API WORKING PERFECTLY!"
- "📊 Submissions found: X"

### **❌ Error Signs:**
- "❌ No access token found!"
- "❌ Token expired!"
- "Response Status: 401"
- "Invalid JWT" (should be fixed now)
- "Unauthorized"

---

## 🔧 Based on Results

### **If Token Missing:**
1. Go to `#admin`
2. Login with: `admin@quantomedge.io / Testing@12345`
3. Run script again

### **If Token Expired:**
1. Logout
2. Login again
3. Fresh token lasts 24 hours

### **If JWT Error (shouldn't happen now):**
1. Hard refresh: `Ctrl+Shift+R`
2. Clear site data
3. Re-login

### **If No Data:**
1. Run "Test 4" to create submission
2. Refresh dashboard
3. Should appear immediately

### **If Admin Doesn't Exist:**
1. Run "Test 5" to seed admin
2. Note the credentials
3. Login with provided details

---

## 📊 Expected Output

**Successful Diagnostic:**
```
🔍 Starting Admin Dashboard Diagnostics...

📍 Current Page: #admin

🔑 Access Token Check:
✅ Access token found: eyJlbWFpbCI6ImFkbWl...
📝 Token contents: {email: "admin@quantomedge.io", timestamp: 1234567890, random: "..."}
⏰ Token age: 2.34 hours
✅ Token valid for 21.66 more hours

🔧 Supabase Configuration:
✅ Supabase config found

🌐 Testing API Endpoint...
Project ID: xxx-xxx-xxx
Anon Key: eyJhbGciOiJIUzI1NiIsIn...

📡 Making test request to: https://xxx.supabase.co/...
Response Status: 200
Response Data: {success: true, data: [...], pagination: {...}}

✅ ✅ ✅ API WORKING PERFECTLY! ✅ ✅ ✅
📊 Submissions found: 5

⚛️  React Component Check:
Found premium components: ✅

==================================================
📋 DIAGNOSTIC SUMMARY
==================================================
Page: #admin
Token: Present ✅
Next Step: Check API response above
==================================================

✨ Diagnostics complete!
```

---

## 💡 Pro Tips

1. **Run after every login** - Verify token is valid
2. **Check before reporting issues** - Shows exact problem
3. **Share output** - Helps with debugging
4. **Bookmark this page** - Quick access to tests
5. **Modify for your needs** - Add custom checks

---

## 🎯 Quick Reference

| Test | Purpose | When to Use |
|------|---------|-------------|
| Complete Diagnostic | Full system check | After login, when troubleshooting |
| Token Check | Verify authentication | When getting auth errors |
| API Call | Test endpoint directly | When data not loading |
| Create Submission | Add test data | When dashboard empty |
| Seed Admin | Create admin account | First time setup |

---

## ✅ Next Steps

1. **Run the complete diagnostic script**
2. **Review the output**
3. **Fix any issues found**
4. **Test dashboard functionality**
5. **Enjoy your premium dashboard!**

**Your admin system is ready to go!** 🚀
