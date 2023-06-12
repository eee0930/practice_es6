class User {
  constructor({ name, lastName, email, password }) {
    this.username = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  getProfile() {
    console.log(`${this.username} ${this.email} ${this.password}`);
  }
  updatePassword(newPassword, currentPassword) {
    if(currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change password");
    }
  }
};

const cuteUser = new User({
  username: "Hwayeon",
  lastName: "Song", 
  email: "lasyhysong@com", 
  password: "1234",
});

class Admin extends User {
  constructor({ name, lastName, email, password, superAdmin, isActive }) {
    super({ name, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
};

const superAdmin = new Admin({
  username: "Hwayeon",
  lastName: "Song", 
  email: "lasyhysong@com", 
  password: "1234",
  superAdmin: true,
  isActive: true,
});