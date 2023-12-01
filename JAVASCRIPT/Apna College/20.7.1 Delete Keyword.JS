//Constructor Function

function Course(title){                        //Course               in Passcalcase
    this.title = title,                        //this points at function 
    this.enroll=function(){
        console.log('you are successfully enrolled');
    }
}

const course =new Course('JavaScript') //by writing new here we don't have to write  return this  in Comstructor Function 

delete course.title;
course.checkEnrollment=function(){
    console.log('30 users are enrolled')
}
course.enroll()

console.log(course);