var student={rolno:1001,name:"anu",course:"python"}
console.log(student)
student["total"]=150;
console.log(student)
console.log("gender" in student);
console.log("name" in student);
student["total"]+=200;
console.log(student.total);
for (key in student){
    console.log(key)
}
for (key in student){
    console.log(key+","+student[key])
}