const course={
    title:'Javascript',
    enroll(){                                 
        console.log('you are successfully enrolled');
    }
}

const course_1= {...course}     //Cloning
course_1.title="C++"
//In console check by writing
// course and course_1