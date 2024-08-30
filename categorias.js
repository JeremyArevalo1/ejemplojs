const requestCategorias = fetch('http://localhost:8086/categoria/').then((resp) =>{
    resp.json().then((data) =>{
        const listarCategorias = document.getElementById('listaCategorias')
        
        data.map(({id, nombreCategoria}) => {
            const categoria = document.createElement('li')
            categoria.innerHTML = `ID: ${id} Nombre: ${nombreCategoria}`
            listarCategorias.appendChild(categoria)
        })
    })
}).catch(console.warn)