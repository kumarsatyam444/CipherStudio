# 🚀 CipherStudio Deployment Guide

Complete guide for deploying CipherStudio to production.

## Prerequisites

- GitHub account (for code hosting)
- Vercel account (for frontend)
- Render or Railway account (for backend)
- MongoDB Atlas account (already configured)

## 📦 Prepare for Deployment

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - CipherStudio"
git branch -M main
git remote add origin https://github.com/yourusername/cipherstudio.git
git push -u origin main
```

## 🎨 Frontend Deployment (Vercel)

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Select the repository

### Step 2: Configure Build Settings

- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Add Environment Variables

In Vercel project settings, add:

```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

(You'll get the backend URL after deploying backend)

### Step 4: Deploy

Click "Deploy" and wait for build to complete.

## 🔧 Backend Deployment (Render)

### Step 1: Create New Web Service

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository

### Step 2: Configure Service

- **Name**: cipherstudio-backend
- **Region**: Choose nearest to your users
- **Branch**: main
- **Root Directory**: `backend`
- **Runtime**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: Free (or paid for better performance)

### Step 3: Add Environment Variables

Add all variables from your `.env` file:

```
MONGO_URI=mongodb+srv://ndakumarsatyam_db_user:G1QNHYdjhAy4TzX8@cluster0.vtbyj7i.mongodb.net/cipherstudio?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET=cipherstudio_super_secret_key_2025_production_ready

PORT=5000

NODE_ENV=production
```

### Step 4: Deploy

Click "Create Web Service"

### Step 5: Get Backend URL

Once deployed, copy your backend URL (e.g., `https://cipherstudio-backend.onrender.com`)

### Step 6: Update Frontend

Go back to Vercel and update `VITE_API_URL` with your Render backend URL.

Redeploy frontend on Vercel.

## 🚂 Alternative: Backend on Railway

### Step 1: Create New Project

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository

### Step 2: Configure

- Select `backend` folder as root
- Railway will auto-detect Node.js

### Step 3: Add Environment Variables

In Railway project settings → Variables, add:

```
MONGO_URI=mongodb+srv://ndakumarsatyam_db_user:G1QNHYdjhAy4TzX8@cluster0.vtbyj7i.mongodb.net/cipherstudio?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET=cipherstudio_super_secret_key_2025_production_ready

PORT=5000

NODE_ENV=production
```

### Step 4: Generate Domain

Railway will provide a domain. Copy it and update Vercel's `VITE_API_URL`.

## 🗄️ MongoDB Atlas Configuration

### Ensure Production Access

1. Go to MongoDB Atlas dashboard
2. **Network Access**:
   - Add IP: `0.0.0.0/0` (allows all IPs - for production)
   - Or add specific Render/Railway IPs

3. **Database Access**:
   - Ensure your user has read/write permissions

## ✅ Post-Deployment Checklist

- [ ] Backend is running (visit backend-url and see "CipherStudio API is running...")
- [ ] Frontend loads correctly
- [ ] Can register new user
- [ ] Can login
- [ ] Can create project
- [ ] Can edit and save files
- [ ] Live preview works
- [ ] Theme toggle works
- [ ] All CRUD operations work

## 🔍 Troubleshooting

### Frontend can't reach backend

**Issue**: CORS or network errors

**Solution**:
1. Verify `VITE_API_URL` is correct in Vercel
2. Check backend CORS allows frontend domain
3. Ensure backend is running

### Backend crashes on startup

**Issue**: Environment variables or MongoDB connection

**Solution**:
1. Check all env variables are set correctly
2. Test MongoDB connection string locally first
3. Check Render/Railway logs for errors

### MongoDB connection fails

**Issue**: IP whitelist or authentication

**Solution**:
1. Add `0.0.0.0/0` to MongoDB Network Access
2. Verify connection string is correct
3. Check database user permissions

### Build fails on Vercel

**Issue**: Dependencies or build configuration

**Solution**:
1. Ensure `frontend` is set as root directory
2. Check `package.json` has correct scripts
3. Clear Vercel cache and redeploy

## 🎉 Success!

Your CipherStudio IDE is now live and accessible worldwide!

### Share Your Project

- Frontend URL: `https://your-project.vercel.app`
- Backend API: `https://your-backend.onrender.com/api`

## 📊 Monitoring

### Render Dashboard
- View logs
- Monitor CPU/Memory
- Check request metrics

### Vercel Analytics
- Track page views
- Monitor performance
- View deployment logs

## 🔄 Continuous Deployment

Both Vercel and Render/Railway support automatic deployments:

1. Push to GitHub main branch
2. Automatic build and deploy triggered
3. New version live in minutes

## 💰 Pricing

### Free Tier Limits

**Vercel Free**:
- Unlimited personal projects
- 100 GB bandwidth/month
- Serverless function executions

**Render Free**:
- 750 hours/month
- Sleeps after 15 min inactivity
- Slower cold starts

**Railway Free Trial**:
- $5 credit (then paid only)

**MongoDB Atlas Free**:
- 512 MB storage
- Shared cluster
- Perfect for development/small projects

### Upgrade Recommendations

For production with many users:
- **Vercel Pro**: $20/month
- **Render Starter**: $7/month (no sleep)
- **MongoDB M10**: $0.08/hour (~$57/month)

---

**🎊 Congratulations! Your React IDE is now live!** 🎊
