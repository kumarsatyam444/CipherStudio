# 🚀 CipherStudio - Browser-Based React IDE

**CipherStudio** is a full-stack MERN web application that provides an online React IDE, similar to CodeSandbox or NextLeap.js. Build, edit, and preview React applications directly in your browser with real-time code execution.

Key Features & Highlights:
• Implemented JWT-based secure authentication with protected routes and hashed credentials.

• Built a complete file system (create, rename, delete, update) stored in MongoDB with hierarchical project structure.

• Integrated Sandpack + Monaco Editor to enable live React code editing and real-time output preview.

• Designed a modern black-red interface using CSS-based gradients, glow effects, shimmer animations, pulse icons, and glassmorphism.

• Added responsive Dashboard with animated header, gradient project cards, user avatar, and interactive empty states.

• Developed full IDE interface with enhanced save actions, custom scrollbar, improved file explorer, and theme-aware styling.

• Ensured fully responsive UI with smooth transitions, accessibility-focused contrast, and optimized animation performance.

• Developed modular backend supporting project CRUD, file CRUD, authentication, and token management.

Tech: ReactJs, NodeJs, ExpressJs, MongoDB, Sandpack, Monaco Editor, Axios, CSS Modules

## ✨ Features

- 🔐 **User Authentication** - Secure JWT-based login and registration
- 📁 **File Management** - Create, delete, rename files and folders
- 💻 **Live Code Editor** - Powered by Sandpack with Monaco Editor
- 🎨 **Live Preview** - Instant React component preview
- 💾 **Cloud Storage** - All projects stored in MongoDB Atlas (no AWS/S3)
- 🌓 **Theme Support** - Toggle between dark and light modes
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ⚡ **Real-time Editing** - See changes as you type

# 🎨 CipherStudio - UI 


### 🎨 Black & Red Theme
- **Color Scheme**: Modern black and red gradient combination
- **Primary Colors**: 
  - Black: `#0a0a0a`, `#1a0000`
  - Red: `#dc2626`, `#991b1b`, `#ff0000`
- **Gradients**: Dynamic linear gradients throughout the UI
- **Animations**: Smooth gradient shifts and transitions

### 🌈 Colorful Animated Header
- **Gradient Background**: Animated red-to-black gradient
- **Shimmer Effect**: Moving light reflection across header
- **User Avatar**: Circular avatar with gradient background
- **Logo Enhancement**: Added lightning bolt icon (⚡) with pulse animation
- **Glassmorphism**: Frosted glass effect on user info section

### 📍 Footer Added
- **Design**: Matching gradient with header
- **Content**: 
  - "Built with ❤️ using React, Node.js & MongoDB"
  - Copyright and platform information
- **Animated Heart**: Pulsing heartbeat animation
- **Gradient Animation**: Synchronized with header

### 🎯 Enhanced Components

#### Login/Register Pages
- Dark themed with radial gradient overlay
- Glowing input fields on focus
- Animated button with shine effect
- Gradient text for title
- Elevated card with red glow

#### Dashboard
- **Header**: 
  - Animated gradient background
  - User avatar with first letter
  - Enhanced logout button with hover effects
- **Project Cards**:
  - Gradient background
  - Glow effect on hover
  - Smooth lift animation
  - Red border highlight
- **Empty State**:
  - Floating folder icon animation
  - Prominent CTA button
- **Footer**: 
  - Synchronized gradient animation
  - Heartbeat animation on heart emoji

#### IDE Interface
- **Header**:
  - Full-width gradient header
  - Enhanced back button
  - Project icon with pulse animation
  - Improved save buttons with uppercase styling
- **File Explorer**:
  - Gradient background (dark black to red-tinted black)
  - Red accent border
  - Enhanced active file highlighting with gradient
  - Improved button hover effects
- **Code Editor**: 
  - Integration with existing Sandpack
  - Theme-aware styling

### 🎭 Animations Added

1. **gradient-shift**: Animated gradient movement (15s loop)
2. **shimmer**: Light shine effect across headers (3s loop)
3. **pulse**: Scale pulsing for icons (2s loop)
4. **spin**: Loading spinner rotation
5. **float**: Gentle up-down movement for empty state icon
6. **heartbeat**: Heart emoji scale animation (1.5s loop)
7. **glow**: Red glow pulsing effect

### 🎨 Scrollbar Styling
- Custom red gradient scrollbar
- Hover effect with brighter red
- Rounded corners
- Smooth transitions

### 📱 Responsive Design
- All new elements maintain responsiveness
- Gradients adapt to screen sizes
- Animations optimized for performance



## 🎯 Key Improvements

1. **Visual Hierarchy**: Better contrast with red accents
2. **Brand Identity**: Consistent red/black theme throughout
3. **User Engagement**: Eye-catching animations
4. **Professional Look**: Dark theme with premium feel
5. **Accessibility**: Maintained good contrast ratios
6. **Performance**: CSS-only animations, no JavaScript overhead


## 🎨 Color Palette

### Primary Colors
```css
--primary-black: #0a0a0a
--secondary-black: #1a0000
--card-dark: rgba(20, 20, 20, 0.95)

--primary-red: #dc2626
--secondary-red: #991b1b
--bright-red: #ff0000
--hover-red: #ef4444
```

### Gradients
```css
/* Header/Footer */
linear-gradient(135deg, #1a0000 0%, #dc2626 50%, #1a0000 100%)

/* Background */
linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)

/* Cards */
linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(26, 0, 0, 0.95) 100%)

/* Buttons */
linear-gradient(135deg, #dc2626 0%, #991b1b 100%)

/* Title Text */
linear-gradient(135deg, #ff0000 0%, #dc2626 50%, #991b1b 100%)
```

## ✨ Special Effects

### Glassmorphism
```css
backdrop-filter: blur(10px);
background: rgba(20, 20, 20, 0.95);
```

### Glow Effect
```css
box-shadow: 0 0 40px rgba(220, 38, 38, 0.2);
```

### Border Glow
```css
border: 1px solid rgba(220, 38, 38, 0.3);
box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
```

## 🎯 User Experience Improvements

1. **Visual Feedback**: 
   - Hover effects on all interactive elements
   - Smooth transitions (0.3s ease)
   - Scale transforms on buttons

2. **Loading States**:
   - Animated spinner with red gradient
   - Smooth opacity transitions

3. **Active States**:
   - Clear visual indication
   - Gradient highlights
   - Border accents

4. **Empty States**:
   - Animated floating icon
   - Clear call-to-action
   - Helpful messaging

## 🚀 How to See the Changes

1. **Start the application**:
   ```bash
   # Run backend
   cd backend && npm run dev
   
   # Run frontend
   cd frontend && npm run dev
   ```

2. **Visit**: http://localhost:3000

3. **Experience**:
   - ✅ New black/red login screen with animations
   - ✅ Colorful animated header on dashboard
   - ✅ Footer with heartbeat animation
   - ✅ Gradient project cards with glow
   - ✅ Enhanced IDE interface
   - ✅ Smooth transitions everywhere

## 🎊 Result

CipherStudio now has a **premium, professional dark theme** with:
- 🎨 Stunning black & red color scheme
- ✨ Smooth animations throughout
- 🌈 Colorful animated headers
- 📍 Beautiful footer
- 💫 Glassmorphism effects
- 🎭 Gradient overlays
- ⚡ Lightning-fast performance

---

**The UI is now unique, modern, and visually stunning!** 🚀

*All changes are CSS-only with no breaking changes to functionality.*



## 🛠️ Tech Stack

### Frontend
- **React.js** (with Vite)
- **Sandpack** (@codesandbox/sandpack-react) - Code editor and preview
- **React Router** - Navigation
- **Axios** - API communication
- **Lucide React** - Modern icons
- **CSS Modules** - Scoped styling

### Backend
- **Node.js** + **Express.js**
- **MongoDB Atlas** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt.js** - Password hashing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB Atlas account** (free tier works)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
cd CipherStudio
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder (already created with your MongoDB URI):

```env
MONGO_URI=mongodb+srv://ndakumarsatyam_db_user:G1QNHYdjhAy4TzX8@cluster0.vtbyj7i.mongodb.net/cipherstudio?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=cipherstudio_super_secret_key_2025_production_ready
PORT=5000
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder (optional):

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🎯 Usage

1. **Register/Login**: Create an account or sign in
2. **Create Project**: Click "New Project" on the dashboard
3. **Code Editor**: 
   - Use the file explorer to navigate files
   - Edit code in the Sandpack editor
   - See live preview on the right panel
4. **File Operations**:
   - Right-click files/folders for context menu
   - Create, rename, or delete files
   - Organize with folders
5. **Save**: Click "Save" or "Save All" to persist changes to MongoDB

## 📁 Project Structure

```
CipherStudio/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── models/
│   │   ├── User.js            # User schema
│   │   ├── Project.js         # Project schema
│   │   └── File.js            # File/Folder schema
│   ├── routes/
│   │   ├── userRoutes.js      # Auth routes
│   │   ├── projectRoutes.js   # Project CRUD
│   │   └── fileRoutes.js      # File CRUD
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT verification
│   ├── utils/
│   │   └── generateToken.js   # Token generation
│   ├── .env                   # Environment variables
│   ├── server.js              # Express server
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js       # API client
│   │   ├── components/
│   │   │   ├── FileExplorer.jsx    # File tree view
│   │   │   ├── FileExplorer.module.css
│   │   │   ├── CodeEditor.jsx      # Sandpack editor
│   │   │   └── CodeEditor.module.css
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx       # Project list
│   │   │   ├── IDE.jsx             # Main IDE interface
│   │   │   └── *.module.css
│   │   ├── App.jsx            # Router setup
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user

### Projects
- `POST /api/projects` - Create new project
- `GET /api/projects/user/:userId` - Get all user projects
- `GET /api/projects/:id` - Get project with files
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Files
- `POST /api/files` - Create file/folder
- `GET /api/files/:id` - Get file
- `PUT /api/files/:id` - Update file content/name
- `DELETE /api/files/:id` - Delete file/folder

## 🌐 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Set root directory to `frontend`
5. Add environment variable:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```
6. Deploy!

### Backend (Render/Railway)

#### Render:
1. Go to [Render](https://render.com/)
2. Create new Web Service
3. Connect your repository
4. Set root directory to `backend`
5. Build command: `npm install`
6. Start command: `npm start`
7. Add environment variables from `.env`
8. Deploy!

#### Railway:
1. Go to [Railway](https://railway.app/)
2. New Project → Deploy from GitHub
3. Select `backend` folder
4. Add environment variables
5. Deploy!

### MongoDB Atlas

Your MongoDB connection is already configured. Make sure:
- Network access allows connections (0.0.0.0/0 for production)
- Database user has read/write permissions

## 🔒 Security Notes

- JWT tokens expire in 30 days
- Passwords are hashed with bcrypt (10 rounds)
- Protected routes require authentication
- CORS enabled for cross-origin requests
- No AWS/S3 credentials needed

## 🐛 Troubleshooting

### Backend won't start
- Check MongoDB connection string
- Verify PORT is not in use
- Run `npm install` again

### Frontend can't connect to backend
- Check `VITE_API_URL` in `.env`
- Verify backend is running on correct port
- Check CORS configuration

### Sandpack errors
- Clear browser cache
- Check React version compatibility
- Verify file structure in MongoDB

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📧 Support

For issues or questions, please open a GitHub issue.

---

**Built with ❤️ using MERN Stack**

🎉 Happy Coding with CipherStudio! 🎉
