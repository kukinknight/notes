 var fs = require('fs')

 function readFilesAsync(filename){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,function(error,data){
            if(error) throw error;
            resolve(data.toString());
        })
    })
 }

 readFilesAsync('1.txt').then((data)=>{
    console.log(data)
    return readFilesAsync('2.txt')
 }).catch(()=>{

 }).then((data)=>{
    console.log(data)
    return readFilesAsync('1.txt')
 }).then((data)=>{
    console.log(data)
 })
   
 
 
 async function main(){
       let data=await readFilesAsync('1.txt')
       console.log(data)
       let dat1=await readFilesAsync('1.txt')
       console.log(data1)
       let data2=await readFilesAsync('2.txt')
       console.log(data2)
       let data3=await readFilesAsync('1.txt')
       console.log(data3)
 }
 main();