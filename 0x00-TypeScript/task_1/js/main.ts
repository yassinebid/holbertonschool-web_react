
// Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Interface for the StudentClass constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Function that prints a teacher's name
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};