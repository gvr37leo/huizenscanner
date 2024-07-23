async function get(collection,id){
    return fetch(`/api/${collection}/${id}`,{
        method:'GET',
    }).then(res => res.json())
}

async function getall(collection){
    return fetch(`/api/${collection}`,{
        method:'GET',
    }).then(res => res.json())
}

async function post(collection,data){
    return fetch(`/api/${collection}`,{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res => res.json())
}

async function put(collection,data){
    return fetch(`/api/${collection}/${id}`,{
        method:'PUT',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res => res.json())
}

async function remove(collection,id){
    return fetch(`/api/${collection}/${id}`,{
        method:'DELETE',
        headers:{
            "content-type":"application/json"
        },
    }).then(res => res.json())
}