
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function useLocalStorage<T,>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        // Special handling for Set
        if (initialValue instanceof Set) {
            const parsed = JSON.parse(item);
            return new Set(parsed) as unknown as T;
        }
        return JSON.parse(item);
      }
      return initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      let valueToStore = storedValue;
       // Special handling for Set
      if (storedValue instanceof Set) {
          valueToStore = Array.from(storedValue) as unknown as T;
      }
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export { useLocalStorage };
