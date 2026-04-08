# Vercel Deployment Guide

## Environment Variables Required on Vercel

Set this in Vercel Dashboard → Settings → Environment Variables:

```
VITE_API_URL=https://tgi-india-backend.onrender.com/api
```

## Deployment Steps

1. **Connect GitHub Repository**
   - Go to Vercel Dashboard
   - Add New Project
   - Import: `https://github.com/MayurTank07/TGI-India-main.git`

2. **Configure Project**
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Add Environment Variable**
   - Go to Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://tgi-india-backend.onrender.com/api`
   - Apply to: Production, Preview, Development

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your frontend will be live at: `https://tgi-india-main.vercel.app`

## Verify Deployment

1. Visit: `https://tgi-india-main.vercel.app`
2. Check browser console for errors
3. Test admin login: `https://tgi-india-main.vercel.app/admin/login`

## Auto-Deploy

Vercel automatically deploys when you push to `main` branch on GitHub.

## Troubleshooting

**CORS Errors:**
- Backend must allow `https://tgi-india-main.vercel.app` origin
- Check backend is running on Render

**API Not Working:**
- Verify `VITE_API_URL` is set correctly in Vercel
- Check Network tab in browser DevTools
- Ensure backend URL is correct

**Build Failures:**
- Check Vercel build logs
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json`

## Important Notes

- Environment variables starting with `VITE_` are exposed to the browser
- After changing environment variables, redeploy from Vercel dashboard
- Frontend and backend must be deployed separately
