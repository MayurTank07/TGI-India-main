# Vercel Deployment Troubleshooting

## Critical: Environment Variable

**MUST BE SET in Vercel Dashboard:**

Go to: Project Settings → Environment Variables

```
VITE_API_URL=https://tgi-india-backend.onrender.com/api
```

**Apply to:** Production, Preview, Development

**After setting:** Redeploy from Deployments tab

---

## Common Issues & Fixes

### Issue 1: CORS Error
```
Access to fetch at 'https://tgi-india-backend.onrender.com/api/content' 
from origin 'https://tgi-india-main.vercel.app' 
has been blocked by CORS policy
```

**Root Cause:** Backend not allowing Vercel origin

**Fix:**
1. Backend must have latest code deployed on Render
2. Check Render logs for: `🔒 CORS Allowed Origins: [...]`
3. Should include: `https://tgi-india-main.vercel.app`
4. If not, redeploy backend from GitHub

---

### Issue 2: Failed to Fetch / 521 Error
```
GET /api/content → net::ERR_FAILED 521
```

**Root Causes:**
1. Backend server is sleeping (Render cold start)
2. Backend crashed or not running
3. Wrong API URL in frontend

**Fix:**
1. **Test backend directly:** Visit `https://tgi-india-backend.onrender.com/health`
   - Should return: `{"status":"OK",...}`
   - If 404/error: Backend not running properly
   
2. **Check Render logs:**
   - Look for errors or crash messages
   - Verify server started successfully
   
3. **Verify API URL:**
   - Check Vercel env var is correct
   - Should end with `/api` (not `/`)

---

### Issue 3: Admin Login Not Working
```
POST /api/auth/login → Failed to fetch
```

**Root Causes:**
1. CORS blocking the request
2. Backend auth route not working
3. Wrong credentials

**Fix:**
1. **Test backend auth endpoint:**
   ```bash
   curl -X POST https://tgi-india-backend.onrender.com/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@tgindia.com","password":"tgi@admin2024"}'
   ```
   - Should return token
   
2. **Check browser console:**
   - Look for CORS errors
   - Check Network tab for request details
   
3. **Verify credentials:**
   - Email: `admin@tgindia.com`
   - Password: `tgi@admin2024`

---

### Issue 4: Slow Loading / Buffering
```
Website keeps showing "Loading..." for long time
```

**Root Causes:**
1. Render cold start (30 seconds)
2. No cached content
3. API taking too long

**Fix:**
1. **Wait for first load:** First request after sleep takes 30s
2. **Clear cache and reload:** Should load instantly from cache
3. **Check keep-alive:** Backend should ping itself every 14 minutes
4. **Verify in logs:** Look for "Keep-alive ping successful"

---

## Verification Steps

### Step 1: Test Backend Directly

Open these URLs in browser:

1. **Root:** https://tgi-india-backend.onrender.com/
   - Should show API info
   
2. **Health:** https://tgi-india-backend.onrender.com/health
   - Should show: `{"status":"OK"}`
   
3. **Content:** https://tgi-india-backend.onrender.com/api/content
   - Should return content data

**If any fail:** Backend has issues, check Render logs

---

### Step 2: Test Frontend

1. **Open:** https://tgi-india-main.vercel.app
2. **Open DevTools:** F12 → Console tab
3. **Check for errors:**
   - CORS errors → Backend issue
   - Failed to fetch → Backend not responding
   - No errors → Working correctly

---

### Step 3: Test Admin Login

1. **Go to:** https://tgi-india-main.vercel.app/admin/login
2. **Enter credentials:**
   - Email: `admin@tgindia.com`
   - Password: `tgi@admin2024`
3. **Check result:**
   - Success → Working
   - Failed to fetch → Backend issue
   - Invalid credentials → Check backend env vars

---

## Debug Checklist

- [ ] Backend deployed on Render (check GitHub commits)
- [ ] Render environment variables set (all required vars)
- [ ] Backend health endpoint responding
- [ ] Vercel environment variable set (`VITE_API_URL`)
- [ ] Vercel redeployed after setting env var
- [ ] CORS origins include Vercel URL
- [ ] MongoDB connection working
- [ ] No errors in Render logs
- [ ] No CORS errors in browser console

---

## Quick Fixes

### Force Redeploy Backend:
1. Go to Render Dashboard
2. Click "Manual Deploy" → "Deploy latest commit"
3. Wait 2-3 minutes

### Force Redeploy Frontend:
1. Go to Vercel Dashboard
2. Deployments tab → Click "..." → "Redeploy"
3. Wait 1-2 minutes

### Clear Frontend Cache:
```javascript
// In browser console on Vercel site:
localStorage.clear();
location.reload();
```

---

## Expected Behavior (After Fixes)

1. **First Visit:**
   - May take 30 seconds if backend was sleeping
   - Should load with default content
   - Background API fetch updates content

2. **Subsequent Visits:**
   - Instant load from cache
   - No loading screen
   - Smooth navigation

3. **Admin Login:**
   - Fast response (< 1 second)
   - Successful authentication
   - Redirect to dashboard

4. **Content Updates:**
   - Changes visible after 5 minutes (cache expiry)
   - Or clear localStorage to see immediately

---

## Contact Points

**Backend Logs:** Render Dashboard → Logs
**Frontend Logs:** Vercel Dashboard → Deployments → View Function Logs
**Browser Logs:** DevTools → Console + Network tabs

---

## Last Resort

If nothing works:

1. **Delete and recreate Render service**
2. **Delete and recreate Vercel project**
3. **Ensure all environment variables are set correctly**
4. **Deploy from scratch following deployment guides**
