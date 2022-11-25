const hamburgerButton = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay')
const mobileMenu = document.getElementById('mobile-menu')
const counters = document.querySelectorAll('.counter')
let scrollStarted = false;

hamburgerButton.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)

function navToggle(){
    hamburgerButton.classList.toggle('open')
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    mobileMenu.classList.toggle('show-menu')
}

function scrollPage(){
    const scrollPosition = window.scrollY;

    if(scrollPosition > 100 && !scrollStarted){
        countUp()
        scrollStarted = true;
    }else if(scrollPosition < 100 && scrollStarted){
        reset()
        scrollStarted = false;
    }
}


function countUp(){
    counters.forEach( (counter)=>{
        counter.innerText = '0'

        const updateCounter = () =>{
            // get count target
            const target = +counter.getAttribute('data-target')
            // get current counter value
            const c = +counter.innerText
            // create increment
            const increment = target / 100

            //if counter is less than target add increment
            if(c < target){
                counter.innerText = `${Math.ceil(c + increment)}`
            }else{
                counter.innerText = target
            }

            setTimeout(updateCounter,25)
        }

        updateCounter()
    })
}

function reset(){
    counters.forEach((counter)=> {
        counter.innerText = '0'
    })
}