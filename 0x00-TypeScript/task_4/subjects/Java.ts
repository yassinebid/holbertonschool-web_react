namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingC?: number;
      experienceTeachingReact?: number;
      experienceTeachingJava?: number;
    }
  
    export class Java implements subject {
      teacher: Teacher;
  
      setTeacher(teacher: Teacher) {
        this.teacher = teacher;
      }
  
      getRequirements() {
        return "Here is the list of requirements for Java";
      }
  
      getAvailableTeacher() {
        if (this.teacher.experienceTeachingJava !== undefined) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }