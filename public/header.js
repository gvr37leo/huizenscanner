class Header{

    root

    render(){
        this.root = cr('div',{style:'display:flex; justify-content:space-between'})
            cr('div',{style:'display:flex; gap:10px;'})
                crend('a','home',{href:'/'})
                crend('a','profile',{href:'/user'})
                crend('a','room',{href:'/room'})
            end()

            cr('div',{style:'display:flex; gap:10px;'})
                crend('a','login',{href:'/login'})
                crend('a','sign up',{href:'/signup'})
            end()
        end()
    }
}