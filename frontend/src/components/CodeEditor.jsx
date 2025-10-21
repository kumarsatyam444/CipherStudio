import { Sandpack } from '@codesandbox/sandpack-react';
import { aquaBlue, githubLight } from '@codesandbox/sandpack-themes';
import styles from './CodeEditor.module.css';

function CodeEditor({ files, activeFile, onContentChange, isDarkMode }) {
  const sandpackFiles = {};
  
  files.forEach((file) => {
    if (file.type === 'file') {
      const path = `/${file.name}`;
      sandpackFiles[path] = {
        code: file.content || '',
      };
    }
  });

  if (Object.keys(sandpackFiles).length === 0) {
    sandpackFiles['/App.js'] = {
      code: `export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to CipherStudio! 🚀</h1>
      <p>Start coding your React app here.</p>
    </div>
  );
}`,
    };
  }

  if (!sandpackFiles['/index.js']) {
    sandpackFiles['/index.js'] = {
      code: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
    };
  }

  const activeFilePath = activeFile ? `/${activeFile.name}` : '/App.js';

  return (
    <div className={styles.container}>
      <Sandpack
        template="react"
        theme={isDarkMode ? aquaBlue : githubLight}
        files={sandpackFiles}
        options={{
          showTabs: true,
          showLineNumbers: true,
          showInlineErrors: true,
          wrapContent: true,
          editorHeight: '100%',
          editorWidthPercentage: 60,
          activeFile: activeFilePath,
        }}
        customSetup={{
          dependencies: {
            react: '^18.2.0',
            'react-dom': '^18.2.0',
          },
        }}
      />
    </div>
  );
}

export default CodeEditor;
