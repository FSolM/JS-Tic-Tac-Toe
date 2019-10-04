// eslint-disable-next-line no-undef
class Player {
  create = (name, token) => {
    const getName = () => name;
    const getToken = () => token;
    return { getName, getToken };
  }
}

module.exports = Player;
