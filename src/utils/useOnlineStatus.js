// whenever you write custom hooks make sure you are guesing  input/output
import {useState,useEffect} from 'react'

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  // I want to run this once that is why empty array
  useEffect(() => {
    getOnlineStatus();
  }, [isOnline]);

  // get online status
  function getOnlineStatus() {
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    window.addEventListener('online',()=>{
        setIsOnline(true)
    })
  }

  return isOnline;
};

export default useOnlineStatus;
