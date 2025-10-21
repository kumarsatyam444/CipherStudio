import express from 'express';
import Project from '../models/Project.js';
import File from '../models/File.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Project name is required' });
    }

    const project = await Project.create({
      userId: req.user._id,
      name,
    });

    const defaultFiles = [
      {
        projectId: project._id,
        parentId: null,
        name: 'src',
        type: 'folder',
      },
      {
        projectId: project._id,
        parentId: null,
        name: 'App.js',
        type: 'file',
        content: `export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to CipherStudio! 🚀</h1>
      <p>Start coding your React app here.</p>
    </div>
  );
}`,
      },
      {
        projectId: project._id,
        parentId: null,
        name: 'index.js',
        type: 'file',
        content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
      },
    ];

    const createdFiles = await File.insertMany(defaultFiles);

    res.status(201).json({ project, files: createdFiles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/user/:userId', protect, async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.params.userId }).sort({ updatedAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const files = await File.find({ projectId: req.params.id });

    res.json({ project, files });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const { name } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    if (project.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    project.name = name || project.name;
    const updatedProject = await project.save();

    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    if (project.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await File.deleteMany({ projectId: req.params.id });
    await Project.findByIdAndDelete(req.params.id);

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
