import { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FolderOpen, Plus, Trash2, Edit2 } from 'lucide-react';
import styles from './FileExplorer.module.css';

function FileExplorer({ files, activeFile, onFileSelect, onFileCreate, onFileDelete, onFileRename, isDarkMode }) {
  const [expandedFolders, setExpandedFolders] = useState(new Set());
  const [contextMenu, setContextMenu] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createType, setCreateType] = useState('file');
  const [createParentId, setCreateParentId] = useState(null);
  const [newItemName, setNewItemName] = useState('');
  const [renamingFile, setRenamingFile] = useState(null);
  const [renameValue, setRenameValue] = useState('');

  const toggleFolder = (folderId) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const handleContextMenu = (e, file) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, file });
  };

  const handleCreateClick = (type, parentId = null) => {
    setCreateType(type);
    setCreateParentId(parentId);
    setShowCreateModal(true);
    setContextMenu(null);
  };

  const handleCreate = () => {
    if (newItemName.trim()) {
      onFileCreate(createParentId, newItemName, createType);
      setNewItemName('');
      setShowCreateModal(false);
    }
  };

  const handleRenameClick = (file) => {
    setRenamingFile(file._id);
    setRenameValue(file.name);
    setContextMenu(null);
  };

  const handleRename = () => {
    if (renameValue.trim() && renameValue !== renamingFile) {
      onFileRename(renamingFile, renameValue);
    }
    setRenamingFile(null);
    setRenameValue('');
  };

  const handleDeleteClick = (file) => {
    if (window.confirm(`Are you sure you want to delete ${file.name}?`)) {
      onFileDelete(file._id);
    }
    setContextMenu(null);
  };

  const renderFile = (file, level = 0) => {
    const isFolder = file.type === 'folder';
    const isExpanded = expandedFolders.has(file._id);
    const isActive = activeFile?._id === file._id;
    const children = files.filter((f) => f.parentId === file._id);
    const isRenaming = renamingFile === file._id;

    return (
      <div key={file._id}>
        <div
          className={`${styles.fileItem} ${isActive ? styles.active : ''}`}
          style={{ paddingLeft: `${level * 20 + 8}px` }}
          onClick={() => {
            if (isFolder) {
              toggleFolder(file._id);
            } else {
              onFileSelect(file);
            }
          }}
          onContextMenu={(e) => handleContextMenu(e, file)}
        >
          {isFolder && (
            <span className={styles.chevron}>
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          )}
          {isFolder ? (
            isExpanded ? <FolderOpen size={16} /> : <Folder size={16} />
          ) : (
            <File size={16} />
          )}
          {isRenaming ? (
            <input
              type="text"
              value={renameValue}
              onChange={(e) => setRenameValue(e.target.value)}
              onBlur={handleRename}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleRename();
                if (e.key === 'Escape') setRenamingFile(null);
              }}
              className={styles.renameInput}
              autoFocus
            />
          ) : (
            <span className={styles.fileName}>{file.name}</span>
          )}
        </div>
        {isFolder && isExpanded && children.map((child) => renderFile(child, level + 1))}
      </div>
    );
  };

  const rootFiles = files.filter((f) => !f.parentId);

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <div className={styles.header}>
        <span>Explorer</span>
        <div className={styles.actions}>
          <button onClick={() => handleCreateClick('file')} title="New File">
            <File size={16} />
          </button>
          <button onClick={() => handleCreateClick('folder')} title="New Folder">
            <Folder size={16} />
          </button>
        </div>
      </div>

      <div className={styles.fileList}>
        {rootFiles.map((file) => renderFile(file))}
      </div>

      {contextMenu && (
        <>
          <div className={styles.overlay} onClick={() => setContextMenu(null)} />
          <div
            className={styles.contextMenu}
            style={{ top: contextMenu.y, left: contextMenu.x }}
          >
            {contextMenu.file.type === 'folder' && (
              <>
                <button onClick={() => handleCreateClick('file', contextMenu.file._id)}>
                  <Plus size={16} /> New File
                </button>
                <button onClick={() => handleCreateClick('folder', contextMenu.file._id)}>
                  <Plus size={16} /> New Folder
                </button>
                <div className={styles.divider} />
              </>
            )}
            <button onClick={() => handleRenameClick(contextMenu.file)}>
              <Edit2 size={16} /> Rename
            </button>
            <button onClick={() => handleDeleteClick(contextMenu.file)} className={styles.deleteOption}>
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </>
      )}

      {showCreateModal && (
        <div className={styles.modal} onClick={() => setShowCreateModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3>Create New {createType === 'file' ? 'File' : 'Folder'}</h3>
            <input
              type="text"
              placeholder={`Enter ${createType} name`}
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCreate();
                if (e.key === 'Escape') setShowCreateModal(false);
              }}
              className={styles.input}
              autoFocus
            />
            <div className={styles.modalActions}>
              <button onClick={() => setShowCreateModal(false)} className={styles.cancelBtn}>
                Cancel
              </button>
              <button onClick={handleCreate} className={styles.createBtn}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileExplorer;
