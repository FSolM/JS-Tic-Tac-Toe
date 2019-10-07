// eslint-disable-next-line no-undef
 const Player = (name, token) => {

    const getName = () =>  name;
    const getToken = () => token;

    return { getName, getToken }
 };

 export { Player }

