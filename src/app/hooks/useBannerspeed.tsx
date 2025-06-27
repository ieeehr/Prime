import { useEffect, useState } from 'react';

/**
 * Returns banner scroll speed duration based on screen width.
 * You can customize breakpoints and values easily.
 */
const useBannerSpeed = () => {
  const [duration, setDuration] = useState(20); // default speed

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Adjust values as you like
      if (width < 640) setDuration(12);       // mobile: faster
      else if (width < 1024) setDuration(18); // tablet: medium
      else setDuration(24);                   // desktop: slower
    };

    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return duration;
};

export default useBannerSpeed;
