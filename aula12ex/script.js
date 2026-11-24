 function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
        msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >=0 && hora <= 12) {
        msg.innerHTML += '<br><strong>Bom dia!</strong>'
        img.src = 'manha.png'
        document.body.style.background = '#E9C577'
    } else if (hora > 12 && hora <= 18) {
        msg.innerHTML += '<br><strong>Boa tarde!</strong>'
        img.src = 'tarde.png'
        document.body.style.background = '#da7e54'
    } else {
        msg.innerHTML += '<br><strong>Boa noite!</strong>'
        img.src = 'noite.png'
        document.body.style.background = '#423d43'
    }

 }