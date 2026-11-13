import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);

requestAnimationFrame(() => {
  document.getElementById('app-loading')?.classList.add('is-hidden');
  window.setTimeout(() => document.getElementById('app-loading')?.remove(), 260);
});
