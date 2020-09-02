import { useEffect, useState } from 'react';

const useLockList = (listName: string) => {
  const [lockList, setLockList] = useState<string[]>([]);

  useEffect(() => {
    const storedNames = JSON.parse(window.localStorage.getItem(listName));
    if (storedNames !== null) {
      setLockList(storedNames);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(listName, JSON.stringify(lockList));
  }, [lockList]);

  const lockToggle = (item: string) => {
    if (lockList.includes(item)) {
      setLockList(lockList.filter((favoriteId) => favoriteId !== item));
    } else {
      setLockList([...lockList, item]);
    }
  };

  return { lockList, lockToggle };
}

export default useLockList