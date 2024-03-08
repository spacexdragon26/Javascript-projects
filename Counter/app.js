let count = 0;
//create a reference for value
let value = document.getElementById("value");

//create a reference for buttons
let btns = document.querySelectorAll(".btn");
//run a forEach loop to iterate over all the elements within the btns array
btns.forEach(function(btn) {
 btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
        count--;
       }
    else if(styles.contains('increase')){
        count++;
        }
    else{
        count = 0;
       }
       if(count > 0){
        value.style.color = "green";
       }
       else if(count < 0){
        value.style.color = "red";
       }
       else{
        value.style.color = "#222";
       }
    value.textContent = count;
 });
});
