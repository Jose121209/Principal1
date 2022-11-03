const cargarPosts = async() => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    tabla = document.querySelector("#lista");
    data.map(item => {
        tabla.innerHTML += `<tr>
        <th scope="row">${item.id}</th>
        <td>${item.title}</td>
        <td>${item.body}</td>
        <td><button type="button" class="btn btn-primary btn-lg" id="boton1"><i class="bi bi-radioactive m-2"></i>Eliminar</button></td>
        <td><button type="button" class="btn btn-danger btn-lg" id="boton1"><i class="bi bi-bookmark-plus"></i>Editar</button></td>

    </tr>`
    })

}