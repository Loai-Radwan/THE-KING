let articlesBoxes = document.querySelectorAll('.articles .box')

// articlesBoxes.forEach(box => {
//     if
// })










let skills = document.querySelectorAll('.the-procces span')

let day = document.getElementById('day')
let hour = document.getElementById('hour')
let min = document.getElementById('min')
let second = document.getElementById('second')

const date = new Date('2026-07-01')
let time = setInterval( () => {
    let diff = date - new Date()

    let days = Math.floor(diff / 1000 /60 / 60 / 24)
    let hours = Math.floor(diff % (1000  * 60 * 60 * 24) / 1000 /60 /60)
    let mins = Math.floor(diff % (1000  * 60 * 60 ) / 1000 /60 )
    let seconds = Math.floor(diff % (1000  * 60  ) / 1000  )
    
    day.innerHTML = days  < 10 ? `0${days}` : days
    hour.innerHTML = hours  < 10 ? `0${hours}` : hours
    min.innerHTML = mins  < 10 ? `0${mins}` : mins
    second.innerHTML = seconds < 10 ? `0${seconds}` : seconds



    if (diff === 0){
        clearInterval(time)
    }

} ,1000)



let money = document.getElementById('money')

let clients = document.getElementById('clients')
let projects = document.getElementById('projects')
let countries = document.getElementById('countries')
let started = false

let state = [clients , projects , money , countries]

window.addEventListener('scroll' , function(){

        if (isInView(`#state`)){
            if (!started){
                state.forEach(box => startCount(box))
            }
            started = true
        }

        if (isInView('#our-skills')){
            skills.forEach(skill => {
                skill.style.width = `${skill.dataset.width}%`
            })
            
        }
})


function startCount(el){
    let goal =  el.dataset.goal
    let time = 2500 / goal

    let count = setInterval(() => {
        el.textContent++

        if(Number(el.textContent) === Number(goal)){
            clearInterval(count)
        }

    } , time)
}


function isInView(ele) {
    // Select element section
    let element = document.querySelector(ele);
    
    // testimonials offset top
    let elementTop = element.offsetTop;
    
    // testimonials outer hight
    let elementHeight = element.offsetHeight;
    
    //window height
    let windowHeight = this.innerHeight;
    
    // Window Y offset
    let windowScrollTop = this.pageYOffset;

    return windowScrollTop >= elementTop + elementHeight / 2  - windowHeight;
}