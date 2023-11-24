


const mywsServer = new WebSocket('ws://localhost:8080/myWebsocket');

const myInput = document.getElementById("champtexte")
const boutonCharger = document.getElementById("chargertexte")

boutonCharger.addEventListener("click",function(){
    const text = myInput.value
    mywsServer.send( JSON.stringify({
        typemessage: "texte",
        contenu: text
    }))
}, false)

const boutonDemarrer = document.getElementById("demarrerdefilement")

boutonDemarrer.addEventListener("click",function(){
    mywsServer.send( JSON.stringify({
        typemessage: "Démarrer défilement",
        contenu: ""
    }))
}, false)

const boutonArreter = document.getElementById("arreterdefilement")

boutonArreter.addEventListener("click",function(){
    mywsServer.send( JSON.stringify({
        typemessage: "Arreter défilement",
        contenu: ""
    }))
}, false)

const boutonRemettreazero = document.getElementById("remettreazero")

boutonRemettreazero.addEventListener("click",function(){
    mywsServer.send( JSON.stringify({
        typemessage: "Remettre à zéro",
        contenu: ""
    }))
}, false)

function sliderTailleTexte() {
    var slider = document.getElementById("slidertaille");
    mywsServer.send( JSON.stringify({
        typemessage: "changement taille",
        contenu: slider.value
    }))

}

function sliderVitesse() {
    var slider = document.getElementById("slidervitesse");
    mywsServer.send( JSON.stringify({
        typemessage: "changement vitesse",
        contenu: slider.value
    }))

}



mywsServer.onopen = function() {
      console.log("OK")
}





