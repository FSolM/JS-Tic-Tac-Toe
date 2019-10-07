/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-undef

export const Player = (name, token) => {
  const getName = () => name;
  const getToken = () => token;
  return { getName, getToken };
};
