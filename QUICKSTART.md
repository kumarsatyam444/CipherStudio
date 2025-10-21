# 🚀 CipherStudio - Quick Start Guide

Get CipherStudio running in 5 minutes!

## Step 1: Install Backend Dependencies

Open terminal in the project root:

```bash
cd backend
npm install
```

## Step 2: Start Backend Server

The `.env` file is already configured with your MongoDB Atlas credentials.

```bash
npm run dev
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB Connected: cluster0.vtbyj7i.mongodb.net
```

**Keep this terminal running!**

## Step 3: Install Frontend Dependencies

Open a **NEW terminal** window:

```bash
cd frontend
npm install
```

This will install React, Vite, Sandpack, and all dependencies (~2-3 minutes).

## Step 4: Start Frontend

```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

## Step 5: Open in Browser

Visit: **http://localhost:3000**

## 🎯 Test the Application

### 1. Register
- Click "Register"
- Enter name, email, password
- You'll be redirected to Dashboard

### 2. Create Project
- Click "New Project"
- Enter project name
- You'll be taken to the IDE

### 3. Code!
- Edit `App.js` in the editor
- See live preview on the right
- Create new files with toolbar buttons
- Right-click files for more options

### 4. Save
- Click "Save" to persist changes to MongoDB
- Reload page - your code is still there!

## ✅ You're Done!

CipherStudio is now running locally.

## 🐛 Common Issues

### Backend won't start
```bash
cd backend
npm install
# Check .env file exists
npm run dev
```

### Frontend won't start
```bash
cd frontend
npm install
npm run dev
```

### Can't register/login
- Check backend is running (port 5000)
- Check MongoDB connection in backend terminal

### Preview not showing
- Wait a few seconds for Sandpack to load
- Check browser console for errors
- Try refreshing the page

## 📁 Default Project Structure

When you create a new project, it includes:

```
MyProject/
├── src/          (folder)
├── App.js        (React component)
└── index.js      (entry point)
```

## 🎨 Features to Try

- ✅ Create/delete/rename files
- ✅ Create folders
- ✅ Live React preview
- ✅ Theme toggle (dark/light)
- ✅ Save to MongoDB
- ✅ Multiple projects
- ✅ Auto-complete in editor

## 🚀 Next Steps

1. Read [README.md](README.md) for full documentation
2. Check [DEPLOYMENT.md](DEPLOYMENT.md) to deploy online
3. Start building your React apps!

---

**Need help?** Check the logs in your terminals for error messages.

**Happy Coding! 🎉**
