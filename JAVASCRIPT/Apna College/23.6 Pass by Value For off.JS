const course={
    title:'Javascript',
    enroll(){                                 
        console.log('you are successfully enrolled');
    }
}

for(let key of Object.keys(course)){
    console.log(key,course[key]);
}