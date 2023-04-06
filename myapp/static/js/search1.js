let toggle=false;

let searchbtn1 = document.getElementById("search_btn1");
let searchbar1 = document.getElementById("search_bar1");
let searchform = document.querySelector(".searchbar");

console.log(searchbar1)
console.log(searchbtn1)
console.log(searchform)


searchbtn1.addEventListener("click", (event)=>{
    if(toggle==false){
        searchbar1.style.width='140px';
        searchform.style.border='1px solid lightblue';
        toggle=true;
    }else{
        searchbar1.style.width='0px';
        searchform.style.border='none';
        toggle=false;
    }
    event.preventDefault();
})