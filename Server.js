let fs = require("fs");
let http = require("http");

fs.writeFile('index.html', "<h1>Hello World</h1><p>This is Pushparaj ...</p>", (err) => console.log(err));

let server = http.createServer((req, res) => {
    const data = fs.readFileSync("index.html", ({ encoding: "utf-8" }));
    res.end(data);
});

server.listen(3000, () => console.log("Server is running on port: 3000"));