let togglebtn = document.getElementById("togglebtn");
let menu = document.getElementById("menu");
let menuitems = document.querySelector(".menuitems");
let togglebtnimg = document.querySelector("togglebtnimg")

// menuitems == {home , new , popular , trnding , categories}

togglebtn.addEventListener('click' , ()=>{
    if(menuitems.style.display != "none"){
        togglebtn.style.backgroundImage = "url('icon-menu.svg')";
        togglebtn.style.right =0;
        menuitems.style.display = "none";
        menu.style.background = "none";
    }else{
        menuitems.style.display = "block";
        menu.style.background = "white";
        menu.style.opacity = 0.8;
        menuitems.style.color = "black";
        menu.style.width = "70vw";
        menu.style.height = "100%";
        togglebtn.style.backgroundImage = "url('icon-menu-close.svg')"
    }
    
})