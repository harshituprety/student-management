// Task: Student Grade Management System

/**You need to create a simple student grade management system. This system will manage student information & their grades for different subjects. The task includes the following steps:

 * Create Student objects:
 -Each Student Should have the following Properties: id, name & grades.
 -The grades property should be an object with subjects as keys & corresponding grades as values.
 
 * Store Students in an Array:
 -Create an array to store multiple student objects.

 * Functions: 
 -* Add a Student: Create a function to add a new student to the array.
 -* Remove a Student: Create a function to remove a student from the array by their id.
 **/

let students = [];

const addStudent = (id, sname, grades = {}) => {
    const newStudent = { id, sname, grades };
    students.push(newStudent);
    console.log(`Students ${sname} added`);
};

addStudent(1, "Joe Biden", { Math: 45, Science: 50 });

const removeStudent = (id) => {
    students = students.filter(student => student.id !== id);
    console.log(`Student with ID ${id} removed`);
};

const getStudents = () => students;

addStudent(2, "Donald Trump", { Math: 39, English: 49 });

console.log(getStudents(1));

removeStudent(1);

console.log(getStudents(2));