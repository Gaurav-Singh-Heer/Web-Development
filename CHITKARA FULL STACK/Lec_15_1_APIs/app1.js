const http = require('http');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET'
};

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('✅ Response received:');
        console.log(data);
    });
});

req.on('error', (err) => {
    console.error('❌ Error:', err.message);
});

req.end();
