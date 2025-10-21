import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Moon, Sun } from 'lucide-react';
import FileExplorer from '../components/FileExplorer';
import CodeEditor from '../components/CodeEditor';
import api from '../api/axios';
import styles from './IDE.module.css';

function IDE({ user }) {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProject();
  }, [projectId]);

  const fetchProject = async () => {
    try {
      const { data } = await api.get(`/projects/${projectId}`);
      setProject(data.project);
      setFiles(data.files);
      
      const defaultFile = data.files.find((f) => f.type === 'file' && f.name === 'App.js');
      if (defaultFile) {
        setActiveFile(defaultFile);
      }
    } catch (error) {
      console.error('Error fetching project:', error);
      alert('Failed to load project');
      navigate('/dashboard');
    }
  };

  const handleFileSelect = (file) => {
    if (file.type === 'file') {
      setActiveFile(file);
    }
  };

  const handleFileCreate = async (parentId, name, type) => {
    try {
      const { data } = await api.post('/files', {
        projectId,
        parentId,
        name,
        type,
        content: type === 'file' ? '' : undefined,
      });
      setFiles([...files, data]);
      if (type === 'file') {
        setActiveFile(data);
      }
    } catch (error) {
      console.error('Error creating file:', error);
      alert('Failed to create file');
    }
  };

  const handleFileDelete = async (fileId) => {
    try {
      await api.delete(`/files/${fileId}`);
      setFiles(files.filter((f) => f._id !== fileId && f.parentId !== fileId));
      if (activeFile?._id === fileId) {
        setActiveFile(null);
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Failed to delete file');
    }
  };

  const handleFileRename = async (fileId, newName) => {
    try {
      const { data } = await api.put(`/files/${fileId}`, { name: newName });
      setFiles(files.map((f) => (f._id === fileId ? data : f)));
      if (activeFile?._id === fileId) {
        setActiveFile(data);
      }
    } catch (error) {
      console.error('Error renaming file:', error);
      alert('Failed to rename file');
    }
  };

  const handleContentChange = (newContent) => {
    if (activeFile) {
      setActiveFile({ ...activeFile, content: newContent });
      setFiles(files.map((f) => (f._id === activeFile._id ? { ...f, content: newContent } : f)));
    }
  };

  const handleSave = async () => {
    if (!activeFile) return;
    
    setSaving(true);
    try {
      await api.put(`/files/${activeFile._id}`, {
        content: activeFile.content,
      });
      alert('File saved successfully!');
    } catch (error) {
      console.error('Error saving file:', error);
      alert('Failed to save file');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveAll = async () => {
    setSaving(true);
    try {
      const fileUpdates = files
        .filter((f) => f.type === 'file')
        .map((file) => api.put(`/files/${file._id}`, { content: file.content }));
      
      await Promise.all(fileUpdates);
      alert('All files saved successfully!');
    } catch (error) {
      console.error('Error saving files:', error);
      alert('Failed to save files');
    } finally {
      setSaving(false);
    }
  };

  if (!project) {
    return <div className={styles.loading}>Loading project...</div>;
  }

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button onClick={() => navigate('/dashboard')} className={styles.backBtn}>
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <div className={styles.projectInfo}>
            <span className={styles.projectIcon}>⚡</span>
            <h1 className={styles.projectName}>{project.name}</h1>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className={styles.themeBtn}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>
          <button onClick={handleSave} className={styles.saveBtn} disabled={saving || !activeFile}>
            <Save size={20} />
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button onClick={handleSaveAll} className={styles.saveAllBtn} disabled={saving}>
            <Save size={20} />
            Save All
          </button>
        </div>
      </header>

      <div className={styles.workspace}>
        <FileExplorer
          files={files}
          activeFile={activeFile}
          onFileSelect={handleFileSelect}
          onFileCreate={handleFileCreate}
          onFileDelete={handleFileDelete}
          onFileRename={handleFileRename}
          isDarkMode={isDarkMode}
        />
        <CodeEditor
          files={files}
          activeFile={activeFile}
          onContentChange={handleContentChange}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}

export default IDE;
