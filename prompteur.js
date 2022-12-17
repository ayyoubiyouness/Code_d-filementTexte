
const url = "ws://localhost:8080/myWebsocket"
const mywsServer = new WebSocket(url)

const affichageTexte = document.getElementById("affichagetexte")
var defileurTexte
var vitesseDefilement = 100
var defilementActif = false


mywsServer.onopen = function() {
      console.log("OK")
}


mywsServer.onmessage = function(event) {
    message = JSON.parse(event.data) 
    console.log(message)
    switch (message.typemessage){
        case "texte":
            affichageTexte.innerText = message.contenu
            break

        case "changement taille":
            affichageTexte.style.fontSize = message.contenu + "px"
            break
        
        case "Démarrer défilement":
            defilementActif = true
            defileurTexte = setInterval(function(){
                window.scrollBy(0,1)
            },vitesseDefilement)
            break

        case "Arreter défilement":
            defilementActif = false
            clearInterval(defileurTexte)
            break
        
        case "Remettre à zéro":
            defilementActif = false
            clearInterval(defileurTexte)
            window.scrollTo(0,0)

            break
        
        case "changement vitesse":
            vitesseDefilement = message.contenu
            if (defilementActif){
                clearInterval(defileurTexte)
                defileurTexte = setInterval(function(){
                    window.scrollBy(0,1)
                },vitesseDefilement)
                
            }
            break
            
    }



    
}

