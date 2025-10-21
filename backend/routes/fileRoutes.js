import express from 'express';
import File from '../models/File.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, async (req, res) => {
  try {
    const { projectId, parentId, name, type, content } = req.body;

    if (!projectId || !name || !type) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const file = await File.create({
      projectId,
      parentId: parentId || null,
      name,
      type,
      content: content || '',
    });

    res.status(201).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', protect, async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const { name, content } = req.body;

    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    if (name !== undefined) file.name = name;
    if (content !== undefined) file.content = content;

    const updatedFile = await file.save();

    res.json(updatedFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    if (file.type === 'folder') {
      const deleteRecursive = async (folderId) => {
        const children = await File.find({ parentId: folderId });
        for (const child of children) {
          if (child.type === 'folder') {
            await deleteRecursive(child._id);
          }
          await File.findByIdAndDelete(child._id);
        }
      };

      await deleteRecursive(file._id);
    }

    await File.findByIdAndDelete(req.params.id);

    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
