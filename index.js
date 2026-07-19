class SchoolManagementSystem {
  #password; // Private field

  constructor(fullName, id, password, classAssigned) {
    this.fullName = fullName;
    this.id = id;
    this.#password = password;
    this.classAssigned = classAssigned;
  }

  // For child classes to verify the password
  verifyPassword(inputPassword) {
    return this.#password === inputPassword;
  }

  editDetails(id, newName, newPassword) {
    if (id !== this.id) {
      console.log("Invalid User-ID");
      return;
    }
    console.log("Update Details");
    this.fullName = newName ?? this.fullName;
    this.#password = newPassword ?? this.#password;
    console.log(`${id}'s details updated successfully`);
  }
}

class Staffs extends SchoolManagementSystem {
  constructor(fullName, id, password, classAssigned, grades) {
    super(fullName, id, password, classAssigned);
    this.grades = grades;
  }
}
class Student extends SchoolManagementSystem {
  constructor(fullName, id, password, email, classAssigned) {
    super(fullName, id, password, classAssigned);
    this.email = email;
  }

  static studentLogin(email, password) {
    const foundStudent = StudentList.find(stud => stud.email === email);
    if (!foundStudent || !foundStudent.verifyPassword(password)) {
      console.log(`Invalid details please Sign-Up`);
      return;
    }
    console.log(`Welcome To Dashboard! Login successful`);
    console.log(foundStudent);
  }

  