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

  const lockToggle = (employeeId: string) => {
    if (lockList.includes(employeeId)) {
      setLockList(lockList.filter((favoriteId) => favoriteId !== employeeId));
    } else {
      setLockList([...lockList, employeeId]);
    }
  };

  return { lockList, lockToggle };
}

export default useLockList