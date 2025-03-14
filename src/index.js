
import React from 'react'; // <-- Add this line
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById("root");
if (!container) {
  throw new Error("No element with id 'root' found in index.html!");
}
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode> {/* Now React is defined */}
    <App />
  </React.StrictMode>
);
