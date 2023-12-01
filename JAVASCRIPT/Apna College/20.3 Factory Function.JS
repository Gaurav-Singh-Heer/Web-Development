//Factory Function

function createCourse(title){
    const course={
        lecture:10,                      //Property
        section:3,
        title:title,
        notes:{
            Introduction:"Welcome to JS course"
        },
        enroll(){                                       //Method
            console.log('you are successfully enrolled');
        }
    }
    return course
}

const course = createCourse('JavaScript')

course.enroll()
console.log(course)