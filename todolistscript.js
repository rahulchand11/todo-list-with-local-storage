let userinp = document.getElementById("myinput");
const btn = document.querySelector(".btn-add");
let newtasks = document.querySelector(".user-task");
const inpwrapper = document.querySelector(".user-input");




btn.addEventListener("click", function(){
    let userval = userinp.value;
    if (userval === "") {
        alert("Please Enter a Valid Task");      
    } else {
        const newli = document.createElement("li");
    newli.setAttribute("type" , "checkbox");
    newli.textContent = `${userval}`;
    newli.setAttribute("class", "newlists");
    newtasks.appendChild(newli); 
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    newli.appendChild(span); 
    }
    userinp.value = "";
    savedata();
    
});

newtasks.addEventListener("click", function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

// Saving data in local storage in browser

function savedata() {
    localStorage.setItem("data", newtasks.innerHTML);
    
}

function showtaks() {
    newtasks.innerHTML = localStorage.getItem("data");
}
showtaks();


