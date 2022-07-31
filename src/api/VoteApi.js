import { useEffect, useState } from 'react';
import { postApi } from './PostApi';

export function useVoteApi(sessionId, email, restaurant, vote, complete) {
  const [submitted, setSubmitted] = useState(false);

  const url = 'https://chewsy-vote.azurewebsites.net';
  // const url = 'http://localhost:8091';

  const body = JSON.stringify({ session:sessionId, email, restaurant });

  const headers = {
    'Content-Type': 'application/json',
  };

  const castVote = () => {
    if (vote) {
        postApi.post(`${url}/vote/${sessionId}/cast`, body, { headers })
        .then((response) => {
            if (response.status == 200) {
                setSubmitted(true);
            }
        });
    } else {
        setSubmitted(false);
    }
  };

  useEffect(() => {
    if (!complete) {
      castVote();
    }
  }, [restaurant]);

  return submitted;
}
