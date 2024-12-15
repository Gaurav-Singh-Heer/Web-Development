const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');  // text/html to read html code
  res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image" href="logo.png">
    <title>Book Review Website</title>
</head>
<div align="center" bgcolor="lightgrey">
    <header>
        <nav>
            <a href="index.html">Home</a>&nbsp;&nbsp;&nbsp;|
            <a href="Login.html">Login/Sign Up</a>
        </nav>
    </header>
</div>
<body bgcolor="antiquewhite">
    <h1><marquee behavior="scroll" direction="left" scrollamount="10"><i>"Books are a uniquely portable magic."</i> <sub>By Stephen King</sub>📚✨</marquee></h1>
    <div align="center">
        <img src="https://th.bing.com/th/id/OIP.mLNmxHcxJdQeKdVixQeZcAHaEK?w=369&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width="70%" height="25%">
    </div>
    <div align="center" top="25%">
        <p><b>Problem in finding the books?, No problem we are their for your conveinience.You can read here any book.</b><br><i>Step into a world of imagination, knowledge, and adventure at our library! With shelves brimming with literary treasures, our collection invites you to explore diverse genres, from timeless classics to contemporary bestsellers. Whether you seek solace in the hushed corners of historical fiction or crave the adrenaline rush of gripping mysteries, our library is your gateway to countless worlds. Join us on this literary journey, where every page turns into a new discovery!” 📚✨</i><br>
        </p>
    </div>
    <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/self-help-motivation-book-design-cover-templa-template-26c376df59ba7677eb7e94a28449323f.webp?ts=1709938821" alt="">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/escape-room-fiction-thriller-book-cover-design-template-62e0fd4c8cb025948da890343a7984e4.webp?ts=1714694454" alt="">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/road-to-success-book-cover-template-design-abfb359021b5f09bdc9b54b8df402379.webp?ts=1698304114" alt="">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-halloween-book-cover-template-design-c19bb4f1c7e92b1a276f8a9c780f1033.webp?ts=1698273803" alt="">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/white-maximalist-book-kindle-book-covers-design-template-f9da99f2e43eea74ead453aa4704f4ed.webp?ts=1716973291" alt="">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br>
        <br>

    </div>
</body>
<!-- <div align="center">
    <footer>
        <nav>
            <a href="index.html">Home</a>&nbsp;&nbsp;&nbsp;|
            <a href="books2.html">Books</a>&nbsp;&nbsp;&nbsp;|
            <a href="contact.html">Contact Us</a>
        </nav>
    </footer>
</div> -->
<div align="center">
    My_Library&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy; <strong>Library Rights taken by GSH</strong>
</div>
<!-- <div align="center">
    <footer>
        <nav>
            <a href="index.html">Home</a>&nbsp;&nbsp;&nbsp;
            <a href="index.html">Home</a>&nbsp;&nbsp;&nbsp;
            <a href="index.html">Home</a>
        </nav>
    </footer>
</div> -->
<!-- My_Library&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="index.html">Home</a>&nbsp;&nbsp;&nbsp;<a href="index.html">Books</a>&nbsp;&nbsp;&nbsp;<a href="index.html">Review</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy; <strong>Library Rights taken by GSH</strong> -->
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
