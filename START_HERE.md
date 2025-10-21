# 🚀 Welcome to CipherStudio!

## Your React IDE is Ready! 🎉

CipherStudio is a **complete, production-ready** browser-based React IDE built with the MERN stack.

---

## ⚡ Quick Start (Choose One Method)

### Method 1: Easy Windows Batch Files ⭐ (RECOMMENDED)

**Step 1:** Run Installation
```
Double-click: INSTALL.bat
```
Wait for installation to complete (2-3 minutes)

**Step 2:** Start the Application
```
Double-click: START.bat
```
This will open two terminal windows (backend and frontend)

**Step 3:** Open in Browser
```
Visit: http://localhost:3000
```

### Method 2: Manual Setup

**Step 1:** Install Backend
```bash
cd backend
npm install
npm run dev
```
✅ Keep this terminal open

**Step 2:** Install Frontend (New Terminal)
```bash
cd frontend
npm install
npm run dev
```
✅ Keep this terminal open

**Step 3:** Open Browser
```
http://localhost:3000
```

---

## 📚 Documentation Guide

| File | Description | When to Read |
|------|-------------|--------------|
| **QUICKSTART.md** | 5-minute setup guide | Read this first |
| **README.md** | Complete documentation | For full understanding |
| **CHECKLIST.md** | Step-by-step verification | If something doesn't work |
| **FEATURES.md** | All features explained | To learn what you can do |
| **DEPLOYMENT.md** | Deploy to internet | When ready to go live |
| **PROJECT_SUMMARY.md** | Technical overview | For developers |

---

## 🎯 First Time User Guide

### 1. Register Your Account
- Open http://localhost:3000
- Click "Register"
- Enter your name, email, and password
- Click "Register"

### 2. Create Your First Project
- You'll land on the Dashboard
- Click "New Project"
- Name it "My First React App"
- Click "Create"

### 3. Start Coding!
- You're now in the IDE
- Edit `App.js` in the middle panel
- See live preview on the right
- Click "Save" to persist changes

### 4. Explore Features
- **File Explorer (Left)**: Right-click for options
- **Code Editor (Middle)**: Full Monaco editor
- **Live Preview (Right)**: See your React app run
- **Theme Toggle**: Click sun/moon icon
- **Save**: Click "Save" or "Save All"

---

## 🔧 What's Already Configured

✅ MongoDB Atlas connection (your database URL is set)  
✅ JWT authentication  
✅ All backend API endpoints  
✅ React + Vite frontend  
✅ Sandpack code editor  
✅ File system operations  
✅ Dark/Light theme  
✅ Responsive design  

**You don't need to configure anything!** Just install and run.

---

## 📁 Project Structure

```
CipherStudio/
├── backend/           ← Node.js + Express API
│   ├── models/       ← MongoDB schemas
│   ├── routes/       ← API endpoints
│   └── server.js     ← Express server
│
├── frontend/          ← React + Vite app
│   ├── src/
│   │   ├── pages/    ← Login, Dashboard, IDE
│   │   └── components/ ← FileExplorer, CodeEditor
│   └── index.html
│
└── Documentation files
```

---

## 🌟 Key Features

| Feature | Description |
|---------|-------------|
| 🔐 **Authentication** | Secure login/register with JWT |
| 📁 **File Management** | Create, rename, delete files & folders |
| 💻 **Code Editor** | Monaco editor with syntax highlighting |
| 🎨 **Live Preview** | Instant React component preview |
| 💾 **Cloud Storage** | MongoDB Atlas (no AWS needed) |
| 🌓 **Themes** | Dark and light mode |
| 📱 **Responsive** | Works on all devices |

---

## 🎓 What You Can Build

With CipherStudio, you can:

- ✅ Practice React concepts
- ✅ Build React components
- ✅ Test code snippets
- ✅ Create mini projects
- ✅ Learn React development
- ✅ Prototype UIs quickly
- ✅ Share projects (after deployment)

---

## ⚠️ Common Issues & Solutions

### Issue: Backend won't start
**Solution:**
1. Check MongoDB URI in `backend/.env`
2. Run `cd backend && npm install` again
3. Make sure port 5000 is free

### Issue: Frontend can't connect
**Solution:**
1. Make sure backend is running first
2. Check `frontend/.env` has correct API URL
3. Restart frontend server

### Issue: Preview not showing
**Solution:**
1. Wait 10-15 seconds (first load is slow)
2. Check internet connection (Sandpack needs CDN)
3. Try refreshing the page

📘 **For more help:** Read CHECKLIST.md

---

## 🚀 Deployment (Optional)

Want to put your IDE online? Follow these steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Deploy Backend** → Render.com (free)
3. **Deploy Frontend** → Vercel.com (free)

📘 **Full guide:** Read DEPLOYMENT.md

---

## 📊 System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Node.js | v16+ | v18+ |
| RAM | 4 GB | 8 GB |
| Browser | Chrome 90+ | Latest Chrome |
| Internet | Required | Fast connection |

---

## 🎯 Learning Path

**Beginner:**
1. Read QUICKSTART.md
2. Install and run locally
3. Create a project
4. Edit code and save

**Intermediate:**
1. Read README.md fully
2. Explore all features
3. Understand the code structure
4. Customize the theme

**Advanced:**
1. Read PROJECT_SUMMARY.md
2. Study the backend API
3. Deploy to production
4. Add new features

---

## 💡 Tips & Tricks

1. **Save Often**: Click "Save All" before closing
2. **Use Context Menu**: Right-click files for options
3. **Theme Toggle**: Try both dark and light modes
4. **Multiple Projects**: Create separate projects for different ideas
5. **Refresh Preview**: If preview freezes, refresh the page

---

## 🆘 Getting Help

**Step 1:** Check documentation
- Read QUICKSTART.md
- Check CHECKLIST.md
- Review README.md

**Step 2:** Check logs
- Backend terminal for API errors
- Frontend terminal for build errors
- Browser console for runtime errors

**Step 3:** Verify setup
- MongoDB connection working?
- Both servers running?
- Environment variables correct?

---

## 🎉 You're All Set!

CipherStudio is a **complete, professional-grade** React IDE that you've successfully set up.

### Next Steps:

1. ✅ Run `INSTALL.bat` to install dependencies
2. ✅ Run `START.bat` to start the servers
3. ✅ Open http://localhost:3000 in browser
4. ✅ Register and create your first project
5. ✅ Start building React applications!

---

## 📞 Quick Commands Reference

```bash
# Install everything
INSTALL.bat

# Start both servers
START.bat

# Or manually:
cd backend && npm run dev    # Terminal 1
cd frontend && npm run dev   # Terminal 2

# Visit
http://localhost:3000        # Frontend
http://localhost:5000        # Backend API
```

---

## 🌟 Features Checklist

After installation, you can:

- [x] Register/Login users
- [x] Create multiple projects
- [x] Add files and folders
- [x] Write React code
- [x] See live preview
- [x] Save to MongoDB
- [x] Rename files
- [x] Delete files
- [x] Toggle themes
- [x] Navigate projects

---

## 🎊 Success!

**Welcome to CipherStudio - Your Personal React IDE!**

Start coding React applications directly in your browser.

No complex setup. No external tools. Just code and preview.

---

**🎉 Happy Coding with CipherStudio! 🚀**

*Built with ❤️ using React, Node.js, Express, and MongoDB*
