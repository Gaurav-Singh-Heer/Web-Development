// let lecture=10;
// let section=3;
// let title='Javascript';

const course={
    lecture:10,                      //Property
    section:3,
    title:'JavaScript',
    notes:{
        Introduction:"Welcome to JS course"
    },
    enroll(){                                       //Method
        console.log('you are successfully enrolled');
    }
}

course.enroll()                     //Access Method
console.log(course.title)           //Access Property
console.log(course)                 //Access Whole Object


// function enroll(){
//     console.log('you are successfully enrolled');
// }