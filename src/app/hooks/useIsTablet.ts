import { useState, useEffect } from 'react';

const getIsTablet = () => window.innerWidth >= 600 && window.innerWidth <= 1200;

export default function useIsTabet() {
  const [isMobile, setIsMobile] = useState(getIsTablet());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsTablet());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
}
