let togglebtn = document.getElementById("togglebtn");
let menu = document.getElementById("menu");
let menuitems = document.querySelector(".menuitems");
let togglebtnimg = document.querySelector("togglebtnimg");
let body = document.getElementsByTagName("body");
let blur = document.querySelector(".blur");

// menuitems == {home , new , popular , trnding , categories}

togglebtn.addEventListener('click' , ()=>{
    if(menuitems.style.display != "none"){
        togglebtn.style.backgroundImage = "url('icon-menu.svg')";
        togglebtn.style.right =0;
        // menuitems.style.transform = "translateX(150%)"
        menuitems.style.display = "none";
        menu.style.background = "none";
        // menu.style.height="fit-content";
        menu.style.height = "auto";
     
    }else{
        console.log("else");
        console.log( "------"+blur);
        menuitems.style.display = "block";
        menuitems.style.transition = "all 0.3s"
        // menu.style.background = "white";
        menu.style.opacity = 0.8;
        menuitems.style.color = "black";
        menu.style.width = "70vw";
        menu.style.height = "100%";
        togglebtn.style.backgroundImage = "url('icon-menu-close.svg')"
        // body.style.backgroundColor="hsl(0,0%,100%,0.1)";
        // body.style.background = "black";
        blur.style.background = "hsl(0,0%,100%,0.1)";
        blur.style.backdrop_filter = "blur(1rem)"
        console.log(body);
        // body.style.backdrop_filter="blur(1rem)";
        // menuitems.style.transform = "translateX(20%)"
        
        
    }
    
})