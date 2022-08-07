import { useEffect, useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';
import { useParams } from 'react-router-dom';
import { httpClient } from '../../../../api/httpClient';
import { ACCESS_KEY, API_BASE_URL } from '../../../../constants/config';
import { delay, getStatusProps } from '../../../../utils';

export const useSearchPhotos = () => {
  const [openSnackbar] = useSnackbar();
  const [searchResult, setSearchResult] = useState({
    results: [],

  });
  const { query } = useParams();
  const [status, setStatus] = useState('loading');

  const searchPhotos = async () => {
    setStatus('loading');
    delay(1000);
    try {
      const { data } = await httpClient({
        url: `${API_BASE_URL}/search/photos`,
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
        params: {
          query,
        },
      });
      // await delay(500)
      setStatus('success');
      setSearchResult(data);
    } catch (e) {
      // openSnackbar(e.message);
      setStatus('error');
    }
  };

  useEffect(() => {
    searchPhotos();
  }, [query]);

  return {
    data: searchResult,
    ...getStatusProps(status),

  };
};
