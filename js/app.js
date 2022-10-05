const templateCard = document.getElementById('templateCard').content
const usuariosHTML = document.getElementById('usuarios')
const fragment = document.createDocumentFragment()
let usuario = []

document.addEventListener('DOMContentLoaded', () =>{
    ObtenerUsuarios()
})

function ObtenerUsuarios () {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(async (data) => {
    usuario = await data.json()
    pintarCards()
  }
  )
  .catch(error => console.log(error))
}