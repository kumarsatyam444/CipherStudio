import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, Trash2, FolderOpen } from 'lucide-react';
import api from '../api/axios';
import styles from './Dashboard.module.css';

function Dashboard({ user, setUser }) {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await api.get(`/projects/user/${user._id}`);
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;

    try {
      const { data } = await api.post('/projects', { name: newProjectName });
      setProjects([data.project, ...projects]);
      setNewProjectName('');
      setShowModal(false);
      navigate(`/ide/${data.project._id}`);
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project');
    }
  };

  const handleDeleteProject = async (projectId, e) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      await api.delete(`/projects/${projectId}`);
      setProjects(projects.filter((p) => p._id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>
            <span className={styles.logoIcon}>⚡</span>
            CipherStudio
          </h1>
          <div className={styles.userSection}>
            <div className={styles.userInfo}>
              <div className={styles.userAvatar}>{user.name[0].toUpperCase()}</div>
              <span className={styles.userName}>{user.name}</span>
            </div>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.titleSection}>
          <div>
            <h2>My Projects</h2>
            <p className={styles.subtitle}>Build amazing React applications</p>
          </div>
          <button onClick={() => setShowModal(true)} className={styles.createBtn}>
            <Plus size={20} />
            New Project
          </button>
        </div>

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            Loading projects...
          </div>
        ) : projects.length === 0 ? (
          <div className={styles.empty}>
            <FolderOpen size={80} className={styles.emptyIcon} />
            <h3>No projects yet</h3>
            <p>Create your first project to get started with CipherStudio!</p>
            <button onClick={() => setShowModal(true)} className={styles.emptyBtn}>
              <Plus size={20} />
              Create First Project
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {projects.map((project) => (
              <div
                key={project._id}
                className={styles.card}
                onClick={() => navigate(`/ide/${project._id}`)}
              >
                <div className={styles.cardGlow}></div>
                <div className={styles.cardHeader}>
                  <h3>{project.name}</h3>
                  <button
                    onClick={(e) => handleDeleteProject(project._id, e)}
                    className={styles.deleteBtn}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <p className={styles.cardDate}>
                  Updated {new Date(project.updatedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            Built with <span className={styles.heart}>❤️</span> using React, Node.js & MongoDB
          </p>
          <div className={styles.footerLinks}>
            <span>CipherStudio © 2025</span>
            <span className={styles.divider}>•</span>
            <span>React IDE Platform</span>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3>Create New Project</h3>
            <form onSubmit={handleCreateProject}>
              <input
                type="text"
                placeholder="Enter project name..."
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                className={styles.input}
                autoFocus
              />
              <div className={styles.modalActions}>
                <button type="button" onClick={() => setShowModal(false)} className={styles.cancelBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
