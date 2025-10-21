# ✅ CipherStudio - Setup Checklist

Use this checklist to ensure everything is set up correctly.

## 📋 Pre-Flight Checklist

### Prerequisites
- [ ] Node.js v16+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Git installed (optional, for version control)
- [ ] Modern browser (Chrome, Firefox, Edge, Safari)

### Initial Setup
- [x] Project files created ✅
- [x] MongoDB Atlas URI configured ✅
- [x] Backend `.env` file created ✅
- [x] Frontend `.env` file created ✅
- [x] All code files generated ✅

---

## 🚀 First Time Setup

### Step 1: Backend Setup
```bash
cd backend
npm install
```

**Verify:**
- [ ] `node_modules/` folder created
- [ ] No error messages during install
- [ ] All dependencies installed successfully

### Step 2: Test Backend
```bash
npm run dev
```

**Expected Output:**
```
🚀 Server running on port 5000
✅ MongoDB Connected: cluster0.vtbyj7i.mongodb.net
```

**Checklist:**
- [ ] Server starts without errors
- [ ] MongoDB connects successfully
- [ ] Port 5000 is available
- [ ] "Server running" message appears

### Step 3: Frontend Setup (New Terminal)
```bash
cd frontend
npm install
```

**Verify:**
- [ ] `node_modules/` folder created
- [ ] Sandpack packages installed
- [ ] React and Vite installed
- [ ] No error messages

### Step 4: Test Frontend
```bash
npm run dev
```

**Expected Output:**
```
VITE v5.x.x ready in xxx ms
➜ Local: http://localhost:3000/
```

**Checklist:**
- [ ] Vite starts without errors
- [ ] Port 3000 is available
- [ ] "ready" message appears
- [ ] Local URL displayed

---

## 🧪 Testing the Application

### Register Flow
- [ ] Open http://localhost:3000
- [ ] Click "Register"
- [ ] Enter name, email, password (min 6 chars)
- [ ] Submit form
- [ ] Redirected to Dashboard
- [ ] No error messages

### Login Flow
- [ ] Logout if logged in
- [ ] Click "Sign In"
- [ ] Enter credentials
- [ ] Submit form
- [ ] Redirected to Dashboard
- [ ] Projects load (empty state or with projects)

### Create Project
- [ ] Click "New Project"
- [ ] Enter project name
- [ ] Click "Create"
- [ ] Redirected to IDE
- [ ] Default files loaded (App.js, index.js, src/)

### File Explorer
- [ ] File tree visible on left
- [ ] Can expand/collapse folders
- [ ] Can click files to open
- [ ] Active file highlighted
- [ ] Right-click shows context menu

### Code Editor
- [ ] Editor loads with syntax highlighting
- [ ] Can type and edit code
- [ ] Line numbers visible
- [ ] Tabs show at top
- [ ] Active tab highlighted

### Live Preview
- [ ] Preview pane visible on right
- [ ] "Welcome to CipherStudio!" message appears
- [ ] Preview updates when code changes
- [ ] Console accessible (if errors)
- [ ] No "Cannot connect" errors

### File Operations
**Create File:**
- [ ] Click file icon in toolbar
- [ ] Enter filename (e.g., "Button.js")
- [ ] File appears in tree
- [ ] File opens in editor

**Create Folder:**
- [ ] Click folder icon in toolbar
- [ ] Enter folder name
- [ ] Folder appears in tree
- [ ] Can expand folder

**Rename:**
- [ ] Right-click file/folder
- [ ] Click "Rename"
- [ ] Type new name, press Enter
- [ ] Name updates in tree

**Delete:**
- [ ] Right-click file/folder
- [ ] Click "Delete"
- [ ] Confirm deletion
- [ ] Item removed from tree

### Save Operations
**Save Current File:**
- [ ] Edit a file
- [ ] Click "Save" button
- [ ] "File saved successfully!" message
- [ ] Reload page
- [ ] Changes persisted

**Save All Files:**
- [ ] Edit multiple files
- [ ] Click "Save All"
- [ ] "All files saved successfully!" message
- [ ] Reload page
- [ ] All changes persisted

### Theme Toggle
- [ ] Click sun/moon icon
- [ ] Theme switches
- [ ] Editor theme updates
- [ ] File explorer updates
- [ ] Colors change appropriately

### Navigation
- [ ] Click back arrow (← )
- [ ] Returns to Dashboard
- [ ] Project appears in list
- [ ] Can re-open project
- [ ] State preserved

### Logout
- [ ] Click "Logout"
- [ ] Redirected to login
- [ ] Cannot access /dashboard
- [ ] Cannot access /ide routes

---

## 🔍 Verification Checklist

### Backend Health
- [ ] http://localhost:5000 shows "CipherStudio API is running..."
- [ ] MongoDB connection successful
- [ ] No errors in backend terminal
- [ ] JWT token generation working

### Frontend Health
- [ ] http://localhost:3000 loads
- [ ] No errors in browser console
- [ ] No errors in frontend terminal
- [ ] API requests successful (check Network tab)

### Database Verification
- [ ] Login to MongoDB Atlas
- [ ] Navigate to cluster
- [ ] Browse Collections
- [ ] See `users` collection (after register)
- [ ] See `projects` collection (after creating project)
- [ ] See `files` collection (with file content)

---

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
```
❌ MongoDB Connection Error: ...
```
- [ ] Check internet connection
- [ ] Verify MongoDB Atlas URI in `.env`
- [ ] Check MongoDB Atlas Network Access (add 0.0.0.0/0)
- [ ] Verify database user credentials

**Port Already in Use:**
```
Error: listen EADDRINUSE: address already in use :::5000
```
- [ ] Change PORT in `.env` to 5001
- [ ] Or kill process on port 5000
- [ ] Restart backend

**Module Not Found:**
```
Error: Cannot find module '...'
```
- [ ] Run `npm install` again
- [ ] Delete `node_modules` and run `npm install`
- [ ] Check `package.json` exists

### Frontend Issues

**Vite Connection Refused:**
```
[vite] http proxy error: connect ECONNREFUSED 127.0.0.1:5000
```
- [ ] Ensure backend is running first
- [ ] Check backend is on port 5000
- [ ] Verify `VITE_API_URL` in `.env`

**Sandpack Not Loading:**
```
Preview shows loading forever
```
- [ ] Check internet connection (Sandpack needs CDN)
- [ ] Wait 10-15 seconds (first load is slow)
- [ ] Check browser console for errors
- [ ] Try refreshing page

**Cannot Register/Login:**
```
Login failed / Network Error
```
- [ ] Check backend is running
- [ ] Check browser Network tab for request
- [ ] Verify API URL is correct
- [ ] Check backend terminal for errors

---

## ✅ Success Criteria

Your setup is complete when:

1. ✅ Backend runs without errors
2. ✅ Frontend loads in browser
3. ✅ Can register new user
4. ✅ Can create project
5. ✅ Can edit code and see preview
6. ✅ Can save and reload changes
7. ✅ All file operations work
8. ✅ Theme toggle works

---

## 📈 Next Steps

Once all checks pass:

- [ ] Read [README.md](README.md) for full documentation
- [ ] Check [FEATURES.md](FEATURES.md) for feature details
- [ ] Follow [DEPLOYMENT.md](DEPLOYMENT.md) to deploy
- [ ] Start building your React projects!

---

## 🎉 All Done?

If all checkboxes are checked, congratulations! 🎊

**CipherStudio is fully functional and ready to use!**

Start coding React apps in your browser at:
👉 **http://localhost:3000** 👈

---

*Keep this checklist handy for troubleshooting or sharing with others.*
