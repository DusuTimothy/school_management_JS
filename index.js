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

  static studentSignUp(fullName, id, password, email, classAssigned) {
    const exist = StudentList.some(stud => stud.email === email);
    if (exist) {
      console.log(`This ${email} is SignedUp! Please Login.`);
      return;
    }
    const newStudent = new Student(fullName, id, password, email, classAssigned);
    StudentList.push(newStudent);
    console.log(`SignUp successful for ${fullName}!`);
  }

  static toAccessGrades(id, classAssigned) {
    // Search to match student ID and classAssigned
    const SearchStudent = StudentList.find(stud => stud.id === id);
    if (!SearchStudent || SearchStudent.classAssigned !== classAssigned) {
      console.log(`Invalid ID or class Assigned`);
      return;
    }
    // Search to match classAssigned
    const searchStaff = StaffList.find(staf => staf.classAssigned === classAssigned);
    if (!searchStaff) {
      console.log(`No staff assigned for ${classAssigned}`);
      return;
    }

    console.log(`Fetching ${id} from ${classAssigned} grades`);
    console.log(`${id} grades are ${JSON.stringify(searchStaff.grades, null, 2)}!`)
  }
}

// <<<<<<<<<<STAFF INPUT>>>>>>>>>>>>>>
const staff1 = new Staffs("Aaron Solomon", "STF001", 2345, "Vitalik", { HTML: "Advance", CSS: "Advance", JavaScript: "Intermediate" });
const staff2 = new Staffs("Samuel James", "STF002", 3456, "Engineer", { HTML: "Advance", CSS: "Advance", JavaScript: "Advance" });
const staff3 = new Staffs("David John", "STF003", 4567, "Devcon", { HTML: "Advance", CSS: "Advance", JavaScript: "Intermediate" });

// >>>>>>>>>>>STUDENT INPUT<<<<<<<<<<<<
const student1 = new Student("Timothy Dusu", "BFL001", 6789, "timo@gmail.com", "Vitalik");
const student2 = new Student("Amos Paul", "BFL002", 1020, "amos@gmail.com", "Devcon");
const student3 = new Student("Gideon Lot", "BFL003", 2020, "gideon@gmail.com", "Engineer");

// >>>>>>>> DASHBOARD SECTION <<<<<<<<<<<<<<<<
const StaffList = [];
const StudentList = [];
StaffList.push(staff1, staff2, staff3);
StudentList.push(student1, student2, student3);

// // Test 
// Student.studentLogin("amos@gmail.com", 1020);
// Student.studentSignUp("Lois Samson", "BFL004", 5678, "Lois@gmail.com", "Devcon");
Student.toAccessGrades("BFL001", "Vitalik");

