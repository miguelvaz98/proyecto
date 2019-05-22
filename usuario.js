window.addEventListener("load", iniciar)
console.log("nepe")
alert("nepe")

function iniciar(){
    console.log("nepe")
    document.getElementById("perfil").addEventListener("click", mperfil)
    document.getElementById("Comentarios").addEventListener("click", mcomen)
    document.getElementById("Compras").addEventListener("click", mcomp)
}

function mperfil(){
    console.log("nepe")
    document.getElementById("comments").style.display="none";
    document.getElementById("sales").style.display="none";
    document.getElementById("profile").style.display="inline";
}

function mcomen(){
    console.log("nepe")
    document.getElementById("profile").style.display="none";
    document.getElementById("sales").style.display="none";
    document.getElementById("comments").style.display="inline";
}

function mcomp(){
    console.log("nepe")
    document.getElementById("comments").style.display="none";
    document.getElementById("profile").style.display="none";
    document.getElementById("sales").style.display="inline";
}