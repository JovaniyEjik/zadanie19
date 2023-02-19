const fs = require('fs')
fs.writeFileSync('./index.html', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`, (error) =>{
    error ? console.log(error) : null
})
fs.mkdirSync('./styles', () => {})
fs.writeFileSync('./styles/style.css', `body, html{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}`, () => {})
setTimeout(() =>{
    fs.unlink('./styles/style.css', () => {})
    fs.rmdir('./styles', () => {})
    fs.unlink('./index.html', () => {})
}, 5000)