passbuttton = document.querySelector('.passbutton');
passbuttton.addEventListener('click', () => {
    pass = document.querySelector('.pass');
    if (pass.type == "text") {
        pass.type = "password"
        passbuttton.src = 'imgs/icons/visible.png'
    } else {
        pass.type = "text"
        passbuttton.src = 'imgs/icons/offvisible.png'
    }
})

ideafrom = document.querySelector('.ideator .nick')
ideatext = document.querySelector('.ideator .ideatextarea')
ideabutton = document.querySelector('.ideator .sendbutton')
ideabutton.addEventListener('click', () => {
    window.open('mailto:leotol1432@gmail.com?subject=Идея&body=' + ideatext.value);
})