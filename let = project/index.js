let cards = [
    ["THE LEGO MOVIE", "Познакомься с наборами из серии THE LEGO® MOVIE 2™, посмотри, как Эммет разворачивает свой новый дом мечты/спасательную ракету, когда Мими Катавасия прибывает на звездолёте.", "img/series/series1.jpg"],
    ["Star Wars", "Отправляйтесь навстречу захватывающим галактическим приключениям с наборами LEGO® Star Wars™. Строители и коллекционеры любого возраста смогут собирать детальные модели техники и звездолетов, культовые сцены из фильмов и копии любимых героев и подлых злодеев из далекой-далекой галактики.", "img/series/series2.jpg"],
    ["NINJAGO","LEGO® NINJAGO® — удивительный мир, в котором ниндзя сражаются со злом. Ваш ребенок с удовольствием познакомится с этими героями и будет придумывать их новые удивительные приключения. Кроме того, дети смогут воссоздать эпизоды из популярного телесериала и вместе с друзьями соревноваться за звание мастера Кружитцу!","img/series/series3.jpg"],
    ["City", "Город LEGO® City — реалистичный мир LEGO, который вашему ребенку предстоит исследовать. На улицах этого оживленного города вы увидите легендарные транспортные средства и здания, среди которых обычные герои ловят плохих парней и тушат пожары. Этот веселый мир обладает особым очарованием и легко разбудит воображение ваших юных строителей.", "img/series/series4.jpg"],
    ["Technic", "Если вам хочется попробовать себя в продвинутой сборке, то LEGO® Technic — это сложные, но увлекательные модели реальной техники и мощных строительных машин. Дети постарше и взрослые могут познакомиться с миром инженерии для создания реалистичных и детальных моделей с работающими функциями.", "img/series/series5.jpg"]
]
let cardindex = 0;
let right = document.querySelector(".slider_arrow_right")
let left = document.querySelector(".slider_arrow_left")
let seriestitle = document.querySelector("h3")
let seriesdesk = document.querySelector(".serdesk")
let seriesimg = document.querySelector(".serimg")
let linebar = document.querySelector(".linebar")
let upButton = document.querySelector(".UpBtn")
let box = document.querySelector("main")
let sendBtn = document.querySelector(".send")
let orderAlert = document.querySelector('.order-alert')
let addToCartBtns = document.querySelectorAll('.goods-wrapper button')
let itemnum = document.querySelectorAll('.mainnav li')[4].innerHTML.split("> ")[1]
let itemobj = document.querySelectorAll('.mainnav li')[4]
let legohead = document.querySelector('.legohead')
let header = document.querySelector('.mainheader')
let products = document.querySelectorAll('.product')
let goodsWarper = document.querySelector('.goods-wrapper')
let titles = document.querySelectorAll('h2')
let headers = document.querySelectorAll('li')




for (let i = 0; i < headers.length; i++)
{
    headers[i].addEventListener('click', function () {
        if (titles[i].getBoundingClientRect().top <= 83)
        {
            let inter = setInterval(function () {
                if (titles[i].getBoundingClientRect().top < 75)
                {
                    window.scrollBy(0, -100)
                }
                else
                {
                    clearInterval(inter)
                }
            },0.5)
        }
        else
        {
            let inter = setInterval(function () {
                if (titles[i].getBoundingClientRect().top > 180)
                {
                    window.scrollBy(0, 100)
                }
                else
                {
                    clearInterval(inter)
                }
            },0.5)
        }
    })
}



let body = document.querySelector('body')





header.style.display = 'none'
box.style.display = 'none'
legohead.style.opacity = 1
let timerInterval = setInterval(function () {
    if (legohead.style.width == "100px")
    {
        legohead.style.width = "150px"
        legohead.style.height = "150px"
    }
    else
    {
        legohead.style.width = "100px"
        legohead.style.height = "100px"
    }

},700)
let timerId = setTimeout(function () {
    header.style.transition = "1s"
    header.style.display = ''
    box.style.display = ''
    legohead.style.display = 'none'
    clearInterval(timerInterval)
},3700)





for (let i = 0; i < addToCartBtns.length; i++)
{
    addToCartBtns[i].addEventListener('click', function () {
        itemnum = parseInt(itemnum) + 1
        itemobj.innerHTML = '<img src="img/cart25.png"> ' + itemnum
    })    
}





right.addEventListener('click', function () {
    cardindex += 1;
    if (cardindex > 4)
    {
        cardindex = 0;
    }
    seriesimg.src = cards[cardindex][2]
    seriesdesk.innerHTML = cards[cardindex][1]
    seriestitle.innerHTML = cards[cardindex][0]
})
left.addEventListener('click', function () {
    cardindex -= 1;
    if (cardindex < 0)
    {
        cardindex = 4;
    }
    seriesimg.src = cards[cardindex][2]
    seriesdesk.innerHTML = cards[cardindex][1]
    seriestitle.innerHTML = cards[cardindex][0]
})

//SCROLL

window.addEventListener("scroll", function () {
    linebar.style.width = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100 + "%"
    
    if (window.scrollY > box.scrollHeight/4)
    {   
        upButton.classList.add("vis")
    }
    else if(window.scrollY < box.scrollHeight/4)
    {
        upButton.classList.remove("vis")
    }
    kindamax = titles[0].getBoundingClientRect().top
    obj = titles[0]
    objindex = 0
    for (let i = 0; i < titles.length; i++)
    {
        if (titles[i].getBoundingClientRect().top - 160 <= 0 && titles[i].getBoundingClientRect().top > kindamax)
        {
            obj = titles[i]
            objindex = i
        }
        
    }
    console.log(objindex)
    for (let i = 0; i < titles.length; i++)
    {
        
        if (i != objindex)
        {
            headers[i].classList.remove('active')
        }
        else
        {
            headers[i].classList.add('active')
        }
    }
   

    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        for (let i = 0; i < 6; i++) {
            let newEl = document.createElement('div')
            let btnEl = document.createElement('button')
            btnEl.addEventListener('click', function () {
                itemnum = parseInt(itemnum) + 1
                itemobj.innerHTML = '<img src="img/cart25.png"> ' + itemnum

            })
            btnEl.innerHTML = '<img src="img/cart16.png">'
            newEl.classList.add('product')
            newEl.innerHTML += '<img src="img/goods/1.png">'
            newEl.innerHTML += '<h4>Пожарная машина</h4>'
            newEl.appendChild(btnEl)
            goodsWarper.appendChild(newEl)
            
        
        }
    }

    

})
upButton.addEventListener("click", function (e) {
    let inter = setInterval(function () {
        if (window.pageYOffset != 0)
        {
            window.scrollBy(0, -100)
        }
        else
        {
            clearInterval(inter)
        }
    },0.1)
})
sendBtn.addEventListener('click', function () {
    orderAlert.style.opacity = "1"
})