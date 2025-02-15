# Node.js vs Other Web Technologies

## KickStart with Node.js

### Creating a Node.js Server

**server.js**
```javascript
// Import http module
let http = require('http');
// Import url module
let url = require('url');
let server = http.createServer((req, res) => {
    let obj = url.parse(req.url, true).query;
    let uname = obj.uname;
    let upwd = obj.upwd;
    // Set MIME type
    res.writeHead(200, { 'content-type': 'text/html' });
    if (uname === 'admin' && upwd === 'admin')
        res.write("<h1> Login Success </h1>");
    else
        res.write("<h1> Login Failed </h1>");
    res.end();
});
// Assign port no
server.listen(8080);
console.log('Server listening on port 8080');
```

**URL:** `http://localhost:8080/?uname=admin&upwd=admin`

---

## HTTP GET Parameters

- 'url' is a predefined module in Node.js.
- The `url` module is used to read GET parameters in an HTTP server.

### Example Frontend (index.html)
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="http://localhost:8080" method="get" class="box">
        <h1>Login</h1>
        <input type="text" placeholder="Username" name="uname">
        <input type="password" placeholder="Password" name="upwd">
        <input type="submit" value="Login">
    </form>
</body>
</html>
```

### Example CSS (style.css)
```css
h1 {
    color: white;
    text-transform: uppercase;
    font-weight: normal;
}
body {
    background: radial-gradient(white, black);
    font-family: sans-serif;
}
.box {
    background-color: black;
    width: 300px;
    margin: 50px auto;
    padding: 40px;
    border-radius: 20px;
    text-align: center;
}
input {
    margin: 20px auto;
    text-align: center;
    padding: 14px 10px;
    width: 200px;
    border-radius: 24px;
    background: none;
}
input[type="text"], input[type="password"] {
    border: 2px solid skyblue;
    color: lightyellow;
}
input[type="submit"] {
    border: 2px solid burlywood;
    color: white;
    cursor: pointer;
}
```

---

## HTTP POST Parameters

- 'querystring' is a predefined module in Node.js.
- `querystring` module is used to read POST parameters in an HTTP server.

### Example Backend (server.js)
```javascript
// Import http module
let http = require('http');
// Import querystring module
let qs = require('querystring');
let server = http.createServer((req, res) => {
    // Set MIME type
    res.writeHead(200, { 'content-type': 'text/html' });
    let body = '';
    req.on('data', (result) => {
        body += result;
    });
    req.on('end', () => {
        let obj = qs.parse(body);
        let uname = obj.uname;
        let upwd = obj.upwd;
        if (uname === 'admin' && upwd === 'admin')
            res.write("<h1 style='color:green'> Login Success </h1>");
        else
            res.write("<h1 style='color:red'> Login Failed </h1>");
        res.end();
    });
});
// Assign port no
server.listen(8080);
console.log('Server listening on port 8080');
```

### Example Frontend (index.html)
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="http://localhost:8080" method="post" class="box">
        <h1>Login</h1>
        <input type="text" placeholder="Username" name="uname">
        <input type="password" placeholder="Password" name="upwd">
        <input type="submit" value="Login">
    </form>
</body>
</html>
```

---

## Similar Technologies to Node.js

| Technology        | Language | Key Features |
|------------------|----------|-------------|
| Django          | Python   | Full-stack framework, ORM, Security |
| Ruby on Rails   | Ruby     | MVC, ORM, Rapid development |
| Spring Boot     | Java     | Microservices, REST APIs, Enterprise |
| Flask           | Python   | Lightweight, REST APIs |
| ASP.NET Core    | C#       | High performance, Cloud-native |

### Quick Comparison

| Feature           | Node.js & Express | Django | Ruby on Rails | Spring Boot | Flask | ASP.NET Core |
|------------------|------------------|--------|--------------|------------|-------|--------------|
| Language        | JavaScript        | Python | Ruby        | Java       | Python | C#          |
| Performance    | High              | Moderate | Moderate  | High      | Moderate | High       |
| Scalability    | Good (Clustering) | Moderate | Moderate  | Excellent | Moderate | Excellent  |
| Learning Curve | Low               | Moderate | Moderate  | High      | Low      | High       |
| Built-in Tools | Few (Minimalist)  | Many    | Many      | Many      | Few      | Many       |

---

## Advantages & Disadvantages of Node.js vs Other Technologies

| Technology      | Advantages of Node.js | Disadvantages of Node.js |
|----------------|----------------------|--------------------------|
| Django        | Faster for I/O tasks, single-language stack | Slower for CPU-heavy tasks, lacks built-in structure |
| Ruby on Rails | Better for real-time apps, event-driven | Less opinionated than Rails, Express is simpler |
| Spring Boot   | Faster I/O handling, lightweight | Java is complex, not ideal for small apps |
| Flask         | High performance, async I/O | Lacks built-in full-stack features |
| ASP.NET Core  | High-speed, modular | Requires .NET knowledge |

### Conclusion
- Node.js is excellent for real-time applications and I/O-heavy tasks.
- Other frameworks provide more built-in functionality but may not match Node.js for performance in event-driven scenarios.
- Choosing the right technology depends on the project requirements, scalability needs, and developer expertise.

