const createTokenUser = (user) => {
  // console.log(user[0].email)
  return {
    email: user[0].email,
    firstname: user[0].firstname,
    userid: user[0].userid,
    roleid: user[0].roleid,
    lastname: user[0].lastname,
  };
};

module.exports = createTokenUser;
