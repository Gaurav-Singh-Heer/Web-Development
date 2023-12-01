const course={
    title:'Javascript',
    enroll(){                                 
        console.log('you are successfully enrolled');
    }
}

for(let key in course){
    console.log(key,course[key]);
}