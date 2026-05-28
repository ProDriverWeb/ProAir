//MENU
let nav = document.querySelectorAll("nav")[0];
let menu = document.querySelectorAll("menu")[0];
let menuH = menu.scrollHeight;
let boolNav = true;
nav.addEventListener("click",function(){
    // menu.classList.toggle("none");

    if(boolNav){
        menu.style.height = menuH + "px";
    }else{
        menu.style.height = 0 + "px";
    }
    boolNav = !boolNav;

    for (const bar of nav.children) {
        bar.classList.toggle("none");
    }
})
for (const li of menu.children[0].children) {
    li.addEventListener("click",function(){
        // menu.classList.toggle("none");

        if(boolNav){
            menu.style.height = menuH + "px";
        }else{
            menu.style.height = 0 + "px";
        }
        boolNav = !boolNav;

        for (const bar of nav.children) {
            bar.classList.toggle("none");
        }
    })
}

/* 增加一個小 Button Top
const btnTop = document.getElementById("btnTop");

// 滾動顯示按鈕
window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        btnTop.classList.add("show");
    }else{
        btnTop.classList.remove("show");
    }
});

// 點擊回到頂部（平滑滾動）
btnTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
//小 Button Top 結束 */

//增加一個小 Button Top
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        btnTop.classList.add("show");
    }else{
        btnTop.classList.remove("show");
    }
});

btnTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
//小 Button Top 結束


//YEAR
document.getElementById("year").textContent = new Date().getFullYear();