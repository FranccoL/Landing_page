var setad = window.document.getElementById("setad")
var leo = window.document.getElementById("leo")
var maria = window.document.getElementById("maria")
var sam = window.document.getElementById("sam")
var setae = window.document.getElementById("setae")

function RolarParaDireita() {
    leo.style ="display:none"
    sam.style ="display:flex"
    setad.style = "display:none"
    setae.style = "display:flex"
}

function RolarParaEsquerda(){
    sam.style="display:none"
    leo.style="display:flex"
    setad.style = "display:flex; margin-top:55px"
    setae.style = "display:none"
}