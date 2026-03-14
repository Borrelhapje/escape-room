import { StrictMode, startTransition, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './style.module.css';
const div = document.createElement('div');
document.body.appendChild(div);


const Application = () => {
    return <StrictMode>

    </StrictMode>
};

createRoot(div).render(<Application/>);
