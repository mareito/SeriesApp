export const validateData = (
  name: string,
  password: string,
): Promise<boolean> => {
  return new Promise<boolean>(resolve => {
    setTimeout(() => {
      if (
        (name === 'maria' && password === 'password') ||
        (name === 'pedro' && password === '123456')
      ) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  });
};
