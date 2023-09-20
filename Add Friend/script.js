var h5 = document.querySelector("h5");
var add = document.querySelector("#add");
var flag = 0;

add.addEventListener("click",function(){
    if(flag == 0){
        h5.innerHTML = "Friends";
        h5.style.color = "green";
        add.innerHTML = "Remove Friend";
        flag = 1;
    }
    else{
        h5.innerHTML = "Stranger";
        h5.style.color = "red";
        add.innerHTML = "Add Friend";
        flag = 0;
    }
})