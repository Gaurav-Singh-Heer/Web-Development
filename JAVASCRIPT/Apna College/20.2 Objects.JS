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

course.price=999 
//If we gave a const and then change the vriable then it will give error ,But it is not happened in Object.
//Object are dynamic in nature