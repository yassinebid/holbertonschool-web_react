namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingC?: number;
    }
  
    export class subject {
      protected teacher: Teacher;
  
      public setTeacher(teacher: Teacher) {
        this.teacher = teacher;
      }
    }
  
    export class Cpp extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Cpp";
      }
  
      getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingC) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }