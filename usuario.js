window.addEventListener("load", iniciar)
alert("entra")
function iniciar(){
    document.getElementById("perfil").addEventListener("click", mperfil)
    document.getElementById("Comentarios").addEventListener("click", mcomen)
    document.getElementById("Compras").addEventListener("click", mcomp)
}

function mperfil(){
    document.getElementById("comments").style.display="none";
    document.getElementById("sales").style.display="none";
    document.getElementById("profile").style.display="inline";
}

function mcomen(){
    document.getElementById("profile").style.display="none";
    document.getElementById("sales").style.display="none";
    document.getElementById("comments").style.display="inline";
}

function mcomp(){
    document.getElementById("comments").style.display="none";
    document.getElementById("profile").style.display="none";
    document.getElementById("sales").style.display="inline";
}