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



class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerText = initialNumber;
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListeners();
  }
  addEventListeners = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  };
  increase = () => {
    this.count = this.count + 1;
    this.repaintCounter();
  }
  decrease = () => {
    this.count = this.count - 1;
    this.repaintCounter();
  }
  repaintCounter = () => {
    this.counter.innerText = this.count;
  } 
}

new Counter({
  counterId: "count",
  plusId: "plus",
  minusId: "minus",
});

new Counter({
  counterId: "count2",
  plusId: "plus2",
  minusId: "minus2",
  initialNumber: 80,
});