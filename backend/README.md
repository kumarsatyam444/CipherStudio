# CipherStudio Backend

Express.js REST API for CipherStudio IDE platform.

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

Create `.env` file:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
```

## API Routes

- `/api/users` - Authentication
- `/api/projects` - Project management
- `/api/files` - File operations
