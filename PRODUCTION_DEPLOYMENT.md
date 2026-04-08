# Production Deployment Guide

## 🚀 Quick Start

This guide covers deploying the TG India Recruitment Platform to production.

---

## 📋 Pre-Deployment Checklist

### Frontend
- [ ] Update `.env.production` with production API URL
- [ ] Build project: `npm run build`
- [ ] Test build locally: `npm run preview`
- [ ] Verify all routes work correctly
- [ ] Check console for errors/warnings

### Backend
- [ ] Set all environment variables in hosting platform
- [ ] Configure MongoDB Atlas for production
- [ ] Set up Cloudinary for media uploads
- [ ] Generate strong JWT secret
- [ ] Configure CORS with production frontend URL
- [ ] Test all API endpoints

---

## 🌐 Frontend Deployment (Netlify/Vercel)

### Option 1: Netlify

1. **Build Settings:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

2. **Environment Variables:**
   ```
   VITE_API_URL=https://your-backend.onrender.com/api
   VITE_APP_NAME=TG India
   VITE_APP_ENV=production
   ```

3. **Redirects (netlify.toml):**
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Option 2: Vercel

1. **Build Settings:**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   ```

2. **Environment Variables:**
   Same as Netlify above

3. **Redirects (vercel.json):**
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

---

## 🖥️ Backend Deployment (Render)

### 1. Create New Web Service

- **Build Command:** `npm install`
- **Start Command:** `node server.js`
- **Environment:** Node

### 2. Environment Variables

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tgi-recruitment
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
FRONTEND_URL=https://your-frontend.netlify.app
ADMIN_EMAIL=admin@tgindia.com
ADMIN_PASSWORD=your-secure-password
```

### 3. Database Setup (MongoDB Atlas)

1. Create MongoDB Atlas account
2. Create new cluster
3. Add IP whitelist: `0.0.0.0/0` (allow all)
4. Create database user
5. Get connection string
6. Replace in `MONGODB_URI`

---

## 🔒 Security Best Practices

### Backend
- ✅ Use strong JWT secret (min 32 characters)
- ✅ Enable CORS only for your frontend domain
- ✅ Use HTTPS in production
- ✅ Set secure headers with Helmet
- ✅ Rate limiting enabled
- ✅ Input validation on all endpoints
- ✅ Sanitize user inputs

### Frontend
- ✅ Never expose API keys in frontend code
- ✅ Use environment variables for sensitive data
- ✅ Implement proper error boundaries
- ✅ Validate all user inputs
- ✅ Use HTTPS only

---

## 🧪 Testing Production Build

### Frontend
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Test on http://localhost:4173
```

### Backend
```bash
# Set NODE_ENV to production
export NODE_ENV=production

# Start server
npm start

# Test health endpoint
curl http://localhost:5000/health
```

---

## 📊 Monitoring & Maintenance

### Health Checks
- Frontend: Check homepage loads
- Backend: `GET /health` endpoint
- Database: Monitor MongoDB Atlas dashboard

### Logs
- Backend logs available in Render dashboard
- Frontend errors tracked via browser console
- Set up error tracking (optional): Sentry, LogRocket

### Performance
- Monitor API response times
- Check database query performance
- Optimize images via Cloudinary
- Enable compression (already configured)

---

## 🐛 Troubleshooting

### Services Page Disappearing
**Fixed!** The issue was caused by:
- React StrictMode double-rendering effects
- Race conditions in ContentContext
- **Solution:** Removed StrictMode, added cleanup functions

### CORS Errors
```javascript
// Backend: Update FRONTEND_URL in .env
FRONTEND_URL=https://your-actual-frontend-domain.com
```

### API Connection Failed
- Verify `VITE_API_URL` in frontend .env
- Check backend is running
- Verify CORS configuration
- Check network tab in browser DevTools

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🔄 Continuous Deployment

### Netlify/Vercel
- Connect GitHub repository
- Auto-deploy on push to main branch
- Preview deployments for PRs

### Render
- Connect GitHub repository
- Auto-deploy on push to main branch
- Manual deploy option available

---

## 📝 Post-Deployment

1. **Test All Features:**
   - [ ] Homepage loads correctly
   - [ ] All navigation links work
   - [ ] Services dropdown functions
   - [ ] Contact form submits
   - [ ] Admin login works
   - [ ] Content updates from admin panel

2. **Performance:**
   - [ ] Run Lighthouse audit
   - [ ] Check page load times
   - [ ] Verify mobile responsiveness

3. **SEO:**
   - [ ] Update meta tags
   - [ ] Add sitemap.xml
   - [ ] Configure robots.txt

---

## 🆘 Support

For issues or questions:
- Check logs in hosting dashboard
- Review error messages in browser console
- Verify all environment variables are set
- Test API endpoints with Postman/Thunder Client

---

## ✅ Deployment Complete!

Your TG India Recruitment Platform is now live! 🎉

**Next Steps:**
- Share the URL with stakeholders
- Set up monitoring and alerts
- Plan regular backups
- Schedule maintenance windows
