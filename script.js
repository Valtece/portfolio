var pos = document.documentElement;
        pos.addEventListener("mousemove", e => {
            pos.style.setProperty("--x", e .clientX + "px")
            pos.style.setProperty("--y", e .clientY + "px")
        })

var menuItem = document.querySelectorAll('.active')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo'));
        this.classList.add('ativo');
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)