import React from 'react';
import { createRoot } from 'react-dom/client';
import Reduxapplist from './pages/Reduxapplist';
 
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<Reduxapplist />);
root.render(<Reduxapplist />);