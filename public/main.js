
//todo
// https://www.pararius.com/english
// https://kamernet.nl/
// https://www.funda.nl/
// https://www.huurwoningen.com/
// https://rentola.nl/



//homepage
//search for rooms
//filter

//user page
//kamer page

var header = new Header()
var front = new Front()
var router = new Router()
var profile = new Profile()
var login = new Login()
var signup = new Signup()
var room = new Room()
var pageroot = document.querySelector('#app')
startContext(pageroot)

router.listen(/^\/$/,() => {
    renderpage(() => {
        front.render()
    })
})

router.listen(/^\/user/,() => {
    renderpage(() => {
        profile.render()
    })
})

router.listen(/^\/room/,() => {
    renderpage(() => {
        room.render()
    })
})

router.listen(/^\/login/,() => {
    renderpage(() => {
        login.render()
    })
})

router.listen(/^\/signup/,() => {
    renderpage(() => {
        signup.render()
    })
})


function renderpage(cb){
    pageroot.innerHTML = ''
    header.render()
    cb()
}

router.locationListen()
router.trigger(window.location.pathname)

