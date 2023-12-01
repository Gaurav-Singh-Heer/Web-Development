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

const course = 'Jewellry'

// IN CONSOLE WRITE
// course.                                     Then all Properties will be shown