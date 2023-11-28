
/*
console.log("hello my friend");


const amount = 12;
if(amount < 10){
    console.log("it's smaller than common")
}
else{
    console.log("it's ok bro");s
}*/


///////// dirname //////
/*
console.log(__dirname);
*/





/////// modules ////////////

/*
const names = require('./node js tutorial/modelus/1-modules.js')
const func = require('./node js tutorial/modelus/2-modules.js')

console.log(names)
func(names.Mahdi)
func(names.Hesam)
*/



//////////// path module /////////////
/*
const path = require('path')
console.log(path.sep)


const filepath = path.join('Mahdi', 'Rasooli','Everthing')
console.log(filepath)


const base = path.basename(filepath)
console.log(base)


const absolute = path.resolve(__dirname,'node js tutorial','modelus')
console.log(absolute)*/





/////// fs module /////////////
//// it reads and writes in files ///////////

/*
const { readFileSync , writeFileSync} = require('fs')

const first = readFileSync('./files/fisrt.txt','utf8')
const second = readFileSync('./files/second.txt','utf8')


console.log(first,second)

const show = writeFileSync('./files/fisrt.txt',
`here is adding line to : ${first}`
)

console.log(show)


const show2 = writeFileSync('./files/new.txt',
`this made new file bro❤`
)*/





////////// callback ///////////
//////// we use callback for reducing time to spend for reading and it becomes our code messy but its useful //////
/*
const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./files/fisrt.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./files/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './files/new.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')*/





///////////// http module //////////
/*
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req)
    res.write('Hello and welcome to our site')
    res.end()
})

server.listen(5000)*/





/////////// http and url //////

/*
const http = require('http')

const server = http.createServer((req,res)=>{


    if(req.url === '/'){
    res.end('Hello and welcome to our site')
    }

//// here is for when a data or stuff isnt exist or client cant acces////
    // if (req.url === '/about') {
    //         res.end('Here is our short history')
    //      }


     res.end(`
    <h1>Oops!</h1>
   <p>We can't seem to find the page you are looking for</p>
   <a href="/">back home</a>
     `)
})


server.listen(5000)
*/



/////////// packegaes on node.js (npm)/////


const _ = require("lodash")

const items = [1,[3, [2 ,[4]]]]
const newitems = _.flattenDeep(items)

console.log(newitems)















