'use client'

import { useEffect, useState } from 'react';

function getCurrentTime() {
  return new Date().toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

export default function Layout({ children }) {
  useEffect(() => {
    const updateClock = () => {
      document.title = getCurrentTime();
    };

    const timer = setInterval(updateClock, 1000);
    updateClock(); // Initial update

    return () => clearInterval(timer);
  }, []);

  return <div>{children}</div>;
}