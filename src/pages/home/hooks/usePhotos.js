import axios from 'axios';
import { useEffect, useState } from 'react';

import { useSnackbar } from 'react-simple-snackbar';
import { ACCESS_KEY, API_BASE_URL } from '../../../constants/config';
import { getStatusProps } from '../../../utils';

export const usePhotos = ({ page, perPage }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('loading');

  const getPhotos = async () => {
    setStatus('loading');
    try {
      const res = await axios({
        url: `${API_BASE_URL}/photos`,
        method: 'get',
        params: {
          page,
          per_page: perPage,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      });
      setData([...data, ...res.data]);
      // console.log(data)
      setStatus('success');
    } catch (e) {
      console.log(e, '!!!!');
      openSnackbar(e.message);
      setStatus('error');
    }
  };

  useEffect(() => {
    getPhotos();
  }, [page, perPage]);

  return {
    data,
    ...getStatusProps(status),
  };
};
