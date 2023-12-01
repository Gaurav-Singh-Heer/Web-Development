const course={
    title:'Javascript',
    enroll(){                                 
        console.log('you are successfully enrolled');
    }
}

const course_1={};
for(let key of Object.keys(course)){
    course_1[key] = course[key];
}

//In console check by writing
// course and course_1