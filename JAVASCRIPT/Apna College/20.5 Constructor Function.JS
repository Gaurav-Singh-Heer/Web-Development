//Factory Function

function createCourse(title){             //createCourse         in Camelcase
    return{
        title:title,
        enroll(){                                       //Method
            console.log('you are successfully enrolled');
        }
    }
}

//Constructor Function

function Course(title){                        //Course               in Passcalcase
    this.title = title,                        //this points at function 
    this.enroll=function(){
        console.log('you are successfully enrolled');
    }
}

const course =new Course('JavaScript') //by writing new here we don't have to write  return this  in Comstructor Function 
course.enroll()