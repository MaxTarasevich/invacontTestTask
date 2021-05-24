const mediaQuery = window.matchMedia('(max-width: 700px)')

const burgerMenu = document.querySelector(`.header_burger-menu`)
const nav = document.querySelector(`.nav`)
const links = document.querySelectorAll(`.header .nav li`)




 
burgerMenu.addEventListener(`click`, () => {

    if(mediaQuery.matches){

        if(nav.classList.contains(`active`)){
            setTimeout(() => {
                nav.classList.remove(`active`)
            },1100)
            nav.style.top = `-100vh`
        }else{
            nav.classList.toggle(`active`)
            setTimeout(()=> {
                nav.style.top = `0`
            },10)
        }
    }
})

links.forEach((link) => {
    link.addEventListener(`click`, () => {
        if(mediaQuery.matches){

            if(nav.classList.contains(`active`)){
                setTimeout(() => {
                    nav.classList.remove(`active`)
                },1100)
                nav.style.top = `-100vh`
            }else{
                nav.classList.toggle(`active`)
                setTimeout(()=> {
                    nav.style.top = `0`
                },10)
            }
        }
    })
});





