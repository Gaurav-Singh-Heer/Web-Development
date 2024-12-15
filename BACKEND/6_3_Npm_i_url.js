/*
http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

href: The full URL that was originally parsed. Both the protocol and host are lowercased.
Example: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

protocol: The request protocol, lowercased.
Example: 'http:'

host: The full lowercased host portion of the URL, including port information.
Example: 'host.com:8080'

auth: The authentication information portion of a URL.
Example: 'user:pass'

hostname: Just the lowercased hostname portion of the host.
Example: 'host.com'

port: The port number portion of the host.
Example: '8080'

pathname: The path section of the URL, that comes after the host and before the query, including the initial slash if present.
Example: '/p/a/t/h'

search: The 'query string' portion of the URL, including the leading question mark.
Example: '?query=string'

path: Concatenation of pathname and search.
Example: '/p/a/t/h?query=string'

query: Either the 'params' portion of the query string, or a querystring-parsed object.
Example: 'query=string' or {'query':'string'}

hash: The 'fragment' portion of the URL including the pound-sign.
Example: '#hash'



npm i url  OR npm install url

Create Dependency URL at package.json and also created folder node_modules with it's actual code
{
  "name": "backend",
  "version": "1.0.0",
  "main": "5_1_Http_Server.js",
  "scripts": {
    "start": "node 5_3_Http_Server_html.js",
    "hello": "node 1_1_Hello.js"
  },
  "author": "Gaurav",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "url": "^0.11.4"
  }
}

*/