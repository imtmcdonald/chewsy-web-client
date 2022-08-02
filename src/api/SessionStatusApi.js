import { useEffect, useState } from 'react';
import { postApi } from './PostApi';

export function useSessionStatusApi({ sessionId, index }) {
  const [complete, setComplete] = useState(false);
  
  const url = 'https://chewsy-session.azurewebsites.net';
  // const url = 'http://localhost:8090';

  const checkStatus = () => {
    postApi.get(`${url}/sessions/${sessionId}/status`)
      .then((response) => {
        console.log(response.data);
        if (response.data === "COMPLETED") {
          console.log("here");
          setComplete(true);
          console.log(complete);
        } else {
          setComplete(false);
        }
    });
  }

  useEffect(() => {
    checkStatus();
  }, [index]);

  return { complete };
}
