import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

const root = document.getElementById('root');

if (root.innerHTML.trim().length > 0) {
    // Pre-rendered HTML exists — hydrate to preserve it and attach events
    ReactDOM.hydrateRoot(root, <App />);
} else {
    // Dev mode or no pre-render — full client render
    ReactDOM.createRoot(root).render(<App />);
}
