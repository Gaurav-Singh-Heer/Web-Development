//Factory Function

function createCourse(title){
    return{
        title:title,
        enroll(){                                       //Method
            console.log('you are successfully enrolled');
        }
    }
}

const newcourse = createCourse('JavaScript')


//Constructor Function

function Course(title){                        //Course               in Passcalcase
    this.title = title,                        //this points at function 
    this.enroll=function(){
        console.log('you are successfully enrolled');
    }
}


//Function here is Constructor Function
const Course_1= new Function('title',`  
this.title=title,
this.enroll = function (){
    console.log('you are successfully enrolled);
}
`)

const course_2=new Course_1('Javascript');
course_2.enroll();

//OUTPUT MUST BE:- you are successfully Enrolled