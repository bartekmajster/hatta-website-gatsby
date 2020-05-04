import { useEffect } from 'react';

const useDetectOutsideClick = (ref, handler) => {
  const listener = e => {
    e.stopPropagation();
    if (!ref.current || ref.current.contains(e.target)) {
      return null;
    }
    handler(false);

    return null;
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, []);

  return null;
};

export default useDetectOutsideClick;
