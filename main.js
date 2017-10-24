//challenge #1 created and linked main.js file
//challenge #2
/*console.log("This file is linked!");
var teacher = "Teacher: Sally Jones";
var department = "Department: Physics";
var ratings = [4.2, 3.8, 2.0];

console.log(teacher);
console.log(department);
console.log("Ratings: " + ratings[0] + ", " + ratings[1] + ", " + ratings[2]);
//challenge #3
avgRating = (ratings[1] + ratings[2] + ratings [3]) / 3;
console.log("Teacher: " + teacher + "/nDeparment: " + department + "/nRatings: " + ratings[0] + ", " + ratings[1] + ", " + ratings[2]);
//challenge #4
var student = "Sally Jones";
var email = "sally@cg.edu";
var gpa = 6.0;
var courses = ["Calculus", "Econ 101"];

console.log(student);
console.log("Email: " + email);
console.log("GPA: " + gpa);
console.log("Courses: " + courses[0] + " " + courses[1]);

var student = ["Jasmine Turner", "Sally Jones", "Michael Jordan"];
var teacher = ["Sally Jones", "Jasmine Turner", "Whitney Houston"];
var courses = ["Physics", "Astronomy", "StinkMath"];
var semester = ["Fall 2017", "Spring 2018"];

console.log("Student: " + student[0]);
console.log("Teacher: " + teacher[2]);
console.log("Course: " + courses[1]);
console.log(semester[0]);
*/

//PART 2 Challenge #1
var teacher = "Sally Jones";
var ratings = [4.2, 3.8, 2.0];

var avgRating = function addTeacherRating (ratingsArray, newRating) {
  ratings.push(newRating);
  var sum = 0;
  var avg = 0;
  for (i=0; i < ratings.length; i++) {
      return i;
      sum += ratings[i];
      avg = ratings[i]/ratings.length;

  }
  return avg;
};

var response = prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0.");

if (prompt >= 0.0 && prompt <= 5.0) {
  avgRating;
}
else {
  response;
}
alert("Thanks for your review! " + teacher + " 's average rating is now ");
