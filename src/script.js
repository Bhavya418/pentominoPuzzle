let data = {
    
        da1:  "Solutions/Date1.png",
        da2:  "Solutions/Date2.png",
        da3:  "Solutions/Date3.png",
        da4:  "Solutions/Date4.png",
        da5:  "Solutions/Date5.png",
        da6:  "Solutions/Date6.png",
        da7:  "Solutions/Date7.png",
        da8:  "Solutions/Date8.png",
        da9:  "Solutions/Date9.png",
        da10:  "Solutions/Date10.png",
        da11:  "Solutions/Date11.png",
        da12:  "Solutions/Date12.png",
        da13:  "Solutions/Date13.png",
        da14:  "Solutions/Date14.png",
        da15:  "Solutions/Date15.png",
        da16:  "Solutions/Date16.png",
        da17:  "Solutions/Date17.png",
        da18:  "Solutions/Date18.png",
        da19:  "Solutions/Date19.png",
        da20:  "Solutions/Date20.png",
        da21:  "Solutions/Date21.png",
        da22:  "Solutions/Date22.png",
        da23:  "Solutions/Date23.png",
        da24:  "Solutions/Date24.png",
        da25:  "Solutions/Date25.png",
        da26:  "Solutions/Date26.png",
        da27:  "Solutions/Date27.png",
        da28:  "Solutions/Date28.png",
        da29:  "Solutions/Date29.png",
        da30:  "Solutions/Date30.png",
        da31:  "Solutions/Date31.png"
           
};
let dateInput = document.getElementById('dateInput');
dateInput.addEventListener('submit',(e)=>{
    e.preventDefault();
    let date= document.getElementById('date');
    var d=date.value;
    console.log(typeof(d))
    
    let target = document.querySelector('#target');
    
    let string1 = "da";
    let string2 = string1.concat(d);
    console.log(string2);
    console.log(data[string2]);
    
    target.innerHTML = `<div><img class ="ms-3" style="width:700px;" alt="Enter a date between 1 to 31" src ="${data[string2]}"  /></div><button  class="btn btn-primary"><a href="https://drive.google.com/drive/folders/1Eq13ZldyJgjb8ltvl7OBuA3gT9fc2yI3?usp=drive_link" style="color: white;">More Solution</a></button>`;
    

})

