const v = {
  errors: {},

  validateEnter: function (userData) {
    this.errors = {};

    for (let prop in userData) {
      if (userData[prop].length > 50) {
        if (!this.errors.hasOwnProperty(prop)) this.errors[prop] = [];
        this.errors[prop].push("Too many symbols");
      }

      if (userData[prop] === "") {
        if (!this.errors.hasOwnProperty(prop)) this.errors[prop] = [];
        this.errors[prop].push("Empty input");
      }
    }

    if (/[а-яА-я]+/.test(userData.password)) {
      if (!this.errors.hasOwnProperty("password")) this.errors["password"] = [];
      this.errors["password"].push("Passwrod cant contain cyrillic alphabet");
    }

    if (!/^\S+@\S+\.\S+$/.test(userData.email)) {
      if (!this.errors.hasOwnProperty("email")) this.errors["email"] = [];
      this.errors["email"].push("Not an email");
    }

    if (/\D+/g.test(userData.phone)) {
      if (!this.errors.hasOwnProperty("phone")) this.errors["phone"] = [];
      this.errors["phone"].push("Phone number can contain only numbers");
    }
  },
};

export default v;
