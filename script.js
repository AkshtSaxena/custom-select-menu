const btn = document.getElementById('arrowimg');
let selectoptions = document.querySelector('.select-container');
const options = document.querySelectorAll('.options');
let inputText = document.getElementById('text');

btn.addEventListener("click", () => {
   if (selectoptions.style.display === "none") {
    selectoptions.style.display = "block";
   } else if (selectoptions.style.display === "block") {
    selectoptions.style.display = "none";
   } else {selectoptions.style.display = "none";}
});

options.forEach((option)=>{
   option.addEventListener('click',()=>{
      inputText.innerText = option.innerText 
      selectoptions.style.display = "none";
   });
})