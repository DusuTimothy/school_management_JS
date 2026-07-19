class SchoolManagementSystem {
  #password; // Private field

  constructor(fullName, id, password, classAssigned) {
    this.fullName = fullName;
    this.id = id;
    this.#password = password;
    this.classAssigned = classAssigned;
  }

 
