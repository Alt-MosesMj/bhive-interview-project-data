import { useState, useEffect } from 'react';

export const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Using 768px as the breakpoint
    };

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);
    
    // Call the function initially to check the window size on load
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
