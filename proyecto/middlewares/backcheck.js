const backCheck = (data, type) => {
  switch (type) {
    case "name":
      if (data.match(/[A-Za-z0-9]/g) == null) {
        return false;
      } else if (
        data.match(/[A-Za-z0-9]/g).length != data.length ||
        data.length < 4 ||
        data.length > 25
      ) {
        return false;
      } else {
        return true;
      }
    case "password":
      if (data.match(/[A-Za-z0-9\!\$\?\¿\.\,\_\-]/g) == null) {
        return false;
      } else if (
        data.match(/[A-Za-z0-9\!\$\?\¿\.\,\_\-]/g).length != data.length ||
        data.length < 4 ||
        data.length > 25
      ) {
        return false;
      } else {
        return true;
      }
    case "email":
      if (data.match(/[A-Za-z0-9\@\.\,\_\-]/g) == null) {
        return false;
      } else if (
        data.match(/[A-Za-z0-9\@\.\,\_\-]/g).length != data.length ||
        data.length < 4 ||
        data.length > 40
      ) {
        return false;
      } else {
        return true;
      }
    case "phone":
      if (data.length === 0) {
        return true;
      } else if (data.match(/[0-9]/g) == null) {
        return false;
      } else if (
        data.match(/[0-9]/g).length != data.length ||
        data.length != 9
      ) {
        return false;
      } else {
        return true;
      }
  }
};
module.exports = backCheck;
