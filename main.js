let     input = document.querySelector('.input'),
        btn   = document.querySelector('.btn'),
        time  = document.querySelector('.time'),
        gameZone = document.querySelector('.game__zone'),
        score = 0,
        gameTime = 0,
        interval = 0;
        
   
btn.addEventListener('click', () => {
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        gameZone.innerHTML = ''
        score = 0
        start()
    }else {
        alert('Нужно вести минимум 5 секунд')
    }
})


gameZone.addEventListener('click', (event) => {
       if(event.target.classList.contains('ball')) {
                score++
                event.target.remove()
                createBall()
       }else if (event.target.classList.contains('kvadrat')) {
        score++
        event.target.remove()
        createBall()
        }else if (event.target.classList.contains('treugolnik')) {
        score++
        event.target.remove()
        createBall()
}
        else if (event.target.classList.contains('granik')) {
        score++
        event.target.remove()
        createBall()
}
})


function start() {
        time.innerHTML = gameTime
        interval = setInterval(() => decrease(), 1000)
        createBall()
}

function decrease () {
        if(gameTime == 1) {
                time.innerHTML = 0
                end()
        }else {
             time.innerHTML = --gameTime   
        }
}

function end() {
        gameZone.innerHTML = `<h2>Вы набрали ${score} баллов</h2>`
        clearInterval(interval)
}


function createBall() {
        let ball = document.createElement('div')
        let size = random(20,100)
        ball.classList.add(forma())
        ball.style.width = size + 'px'
        ball.style.height = size + 'px'
        ball.style.background = RandomColor()
        let params = gameZone.getBoundingClientRect()
        
        ball.style.top = random(0,params.height - size) + 'px'
        ball.style.left = random(0,params.width - size) + 'px'
        
        gameZone.append(ball)
        
}

function random(min,max) {
        return Math.floor(Math.random() * (max + 1 - min ) + min)
}

function random(min,max) {
        return Math.floor(Math.random() * (max + 1 - min ) + min)
}

let colors = ['red', 'green','blue','white','orange']

function RandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

let form = ["treugolnik","ball","granik","kvadrat"]
``
function forma() {
        return form[Math.floor(Math.random() * form.length)]
    }