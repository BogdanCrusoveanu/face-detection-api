handleUsersGet = (db) => (req, res) => {
  db.select('*')
    .from('users')
    .then((users) => {
      if (users.length) {
        res.json(users);
      } else {
        res.status(404).json('error getting users');
      }
    });
};

module.exports = {
  handleUsersGet: handleUsersGet,
};
