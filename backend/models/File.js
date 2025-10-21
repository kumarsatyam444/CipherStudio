import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'File',
      default: null,
    },
    name: {
      type: String,
      required: [true, 'File/Folder name is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: ['file', 'folder'],
      required: true,
    },
    content: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model('File', fileSchema);

export default File;
