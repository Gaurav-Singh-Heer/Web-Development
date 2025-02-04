class User {
  constructor(email, verified = false) {
    this.email = email;
    this.verified = verified;
  }
}

module.exports = User;
