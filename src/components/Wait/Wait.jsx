import { useEffect, useState } from 'react';

export const Wait = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => setData(true), 500);
  }, []);

  return data ? <div>i have delayed data</div> : null;
};
