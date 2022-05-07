import { useCallback, useEffect } from 'react';

const useClickOutsideEvent = (ref: React.MutableRefObject<any>, callback: () => void) => {
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) callback();
    },
    [ref, callback],
  );

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);
};

export default useClickOutsideEvent;
