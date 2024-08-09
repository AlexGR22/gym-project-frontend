export async function getClients () {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/users`)
    const resultado = await respuesta.json()
  
    return resultado
  }


  export async function getClient (id) {
    const fetchedCliente = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`)
    const cliente = await fetchedCliente.json()
  
    return cliente
  }

  export async function addClient (datos) {
    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      await respuesta.json()
    } catch (e) {
      console.log(e)
    }
  }

  export async function updateClient (id, datos) {
    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      await respuesta.json()
    } catch (e) {
      console.log(e)
    }
  }



  export async function deleteClient (id) {
    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/delete/${id}`, {
        method: 'DELETE'
      })
  
      await respuesta.json()
    } catch (e) {
      console.log(e)
    }
  }
  

 