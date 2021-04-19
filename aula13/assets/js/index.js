
function clicou(tag){
    var tagA = document.querySelector(".navbar > a");
    for(let i = 0; i < tagA.length; i++){
        tagA[i].classList.remove(".active");
    }
    tag.classList.add(".active");
}

