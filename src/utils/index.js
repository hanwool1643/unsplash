export const getStatusProps = (status) => ({
  status,
  isLoading: status === 'loading',
  isSuccess: status === 'success',
  isError: status === 'error',
});

export const delay = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});
