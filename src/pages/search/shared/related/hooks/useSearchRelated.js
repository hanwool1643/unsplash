import axios from 'axios';
import { useEffect, useState } from 'react';

import { useSnackbar } from 'react-simple-snackbar';
import { ACCESS_KEY, API_BASE_URL } from '../../../../../constants/config';
import { getStatusProps } from '../../../../../utils';

export const useSearchRelated = ({ query }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const [relatedKeyWords, setRelatedKeyWords] = useState([]);
  const [status, setStatus] = useState('loading');
  getStatusProps();
  const searchRelated = async () => {
    setStatus('loading');
    try {
      const res = await axios({
        url: `${API_BASE_URL}/search`,
        params: {
          query,
        },
        method: 'get',
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      });
      setRelatedKeyWords(res.data.related_searches);
      console.log(res.data);
      setStatus('success');
    } catch (e) {
      console.log(e, '!!!!');
      openSnackbar(e.message);
      setStatus('error');
    }
  };
  useEffect(() => {
    searchRelated();
  }, []);

  return {
    data: relatedKeyWords,
    ...getStatusProps(status),
  };
};
