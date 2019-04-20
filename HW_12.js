/*Task 2
localStorage
- Объявить функцию, которая будет вызываться в момент изменения хэш-части адреса 
страницы
- и сохранять в localStorage клиента hash-часть адреса страницы как pageId
и время входа ( в секундах ) как startTime
- Назначить эту функцию обработчиком события hashchange объекта window
- Желательно, чтобы при изменении хеш-части адреса происходило обновление 
контента страницы без перезагрузки
( например, изменялся заголовок и картинка, чтобы создать иллюзию перехода на новую страницу )
- Отслеживать в панели разработчика изменения в localStorage*/

let addElement = (tagName) => document.body.appendChild(
    document.createElement(tagName)
)

let title = addElement('h3')
title.innerText = "What is your favorite picture?"
title.style = `
    color: #008080;
    margin-left: 20px;
`

let img = addElement('img')
img.src = 'https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_680/rc40bk5defzal8gqedo8'
img.style = `
    height: 200px;
    border: solid 2px #008080;
    padding: 10px;
    margin-left: 20px;
    margin-bottom: 20px;
`

let button = addElement('button')
button.innerText = 'Next picture'
button.style = `
    display: block;
    padding: 10px;
    background-color: #008080;
    margin-left: 100px;
`

let index = 1
button.onclick = function(){
    location.hash = `#${index++}`
}

let historyArr = []
function setLocalStorage (event) {
   
    let pageHash = {
        pageId: location.hash,
        startTime: new Date()
    }
 historyArr.push(pageHash)

    localStorage.setItem(
        'history', 
        JSON.stringify(historyArr)
 )
    
    console.log('hash was changed')
    console.log(localStorage.getItem ( "history" ))

    contentChange ()
}

window.addEventListener('hashchange', setLocalStorage)

function contentChange () {
    location.hash === '#1'? img.src = 'https://image.shutterstock.com/image-photo/couple-holding-hands-wooden-toy-260nw-1131088085.jpg':
        location.hash === '#2' ? img.src = 'https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500':
            location.hash === '#3' ? img.src = 'https://c2.thejournal.ie/media/2018/01/declutter-your-friendships-752x501.jpg':
                location.hash === '#4' ? img.src = 'https://www.shethepeople.tv/wp-content/uploads/2018/04/girl-friends-levi-guzman-268866-unsplash.jpg':
                    location.hash === '#5' ? img.src = 'https://essays-experts.com/media/uploads/blog/21.11.Essay-about-life-and-friendship.jpg':
                        title.innerText = 'No more pictures here'
}

