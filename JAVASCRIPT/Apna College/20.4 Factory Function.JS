//Factory Function

function createCourse(title){
    return{
        title:title,
        enroll(){                                       //Method
            console.log('you are successfully enrolled');
        }
    }
}

const course = createCourse('JavaScript')

course.enroll()
console.log(course)