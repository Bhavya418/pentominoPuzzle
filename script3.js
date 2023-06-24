// var JSZip = require("jszip");
let data = {
    
    A:  "Letters/letter1.jpg",
    B:  "Letters/letter2.jpg",
    C:  "Letters/letter3.jpg",
    D:  "Letters/letter4.jpg",
    E:  "Letters/letter5.jpg",
    F:  "Letters/letter6.jpg",
    G:  "Letters/letter7.jpg",
    H:  "Letters/letter8.jpg",
    I:  "Letters/letter9.jpg",
    J:  "Letters/letter10.jpg",
    K:  "Letters/letter11.jpg",
    L:  "Letters/letter12.jpg",
    M:  "Letters/letter13.jpg",
    N:  "Letters/letter14.jpg",
    O:  "Letters/letter15.jpg",
    P:  "Letters/letter16.jpg",
    Q:  "Letters/letter17.jpg",
    R:  "Letters/letter18.jpg",
    S:  "Letters/letter19.jpg",
    T:  "Letters/letter20.jpg",
    U:  "Letters/letter21.jpg",
    V:  "Letters/letter22.jpg",
    
    W:  "Letters/letter23.jpg",
    X:  "Letters/letter24.jpg",
    Y:  "Letters/letter25.jpg",
    Z:  "Letters/letter26.jpg"
    
       
};

const img = [];
let textInput = document.getElementById('textInput');
textInput.addEventListener('submit',(e)=>{
e.preventDefault();

let text= document.getElementById('text');
var d=text.value;
d = d.toUpperCase();
console.log(d)
let arr = d.split("");
console.log(arr);

let target = document.querySelector('#target');

target.innerHTML="";
arr.forEach(element => {
    console.log(element);
    img.push(data[element])
        target.innerHTML += `<div class="d-inline-flex"><img class ="m-2" style="width:300px;height:300px" alt="Enter the letter only" src ="${data[element]}"  /></div>`
});
text.value="";

})


const btn = document.getElementById('download')
console.log(btn);
btn.addEventListener('click',async ()=>{
    console.log(img);
    const promises = img.map(async (img)=>{
           const res = await  fetch(img);
           const blob = await res.blob();
           return blob;
        })
    const res = await Promise.all(promises);
    console.log(res);
    
    const  zip = new JSZip();
     res.forEach((blob,index)=>{
        zip.file(`image${index}.jpg`,blob);
     })
     const readme = zip.folder('readme');
     readme.file('readme.txt','created a zip of the template');
     const zipFile = await zip.generateAsync({type:'blob'});
     console.log(zipFile);
     downloadZip(zipFile);


})
function downloadZip(file){
    const a = document.createElement('a');
    a.download ='test.zip';
    const url = URL.createObjectURL(file);
    a.href = url;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}




