import { Subject } from "./Subjects/subjects";
import { Cpp } from "./Cpp/subjects";
import { Java } from "./Java/subjects";
import { React } from "./React/subjects";
import  Teacher  from "./Teacher.ts/subjects";


const cpp = new Cpp();
const java = new Java();
const react = new React();
const cTeacher: Teacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };

cpp.setTeacher(cTeacher);
console.log("C++:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log("Java:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log("React:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());