class Front{

    root
    container

    render(){
        getall('mycollection').then((data) => {
            startContext(this.container)
                for(var item of data){
                    crend('div',JSON.stringify(item))
                }
            endContext()
        })

        this.root = cr('div')
            crend('h1','this is the front page')
            crend('button','button').on('click',() => {
                post('mycollection',{
                    name:'paul',
                    age:12,
                }).then((res) => {
                    console.log(res)
                })
            })
            this.container = crend('div')
        end()
    }
}