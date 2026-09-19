function carregar() {
    var msg = window.document.getElementById('msg')
    //var data = new Date()
    var hora = getHours()
    msg.innerHTML = `Agora são ${hora} horas`
}