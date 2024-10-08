import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Form'
import Error from '../components/Error'
import { addClient } from '../data/clients'

export async function action ({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const email = formData.get('email')

  const errores = []
  if (Object.values(data).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }
  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
  if (!regex.test(email)) {
    errores.push('El email no es válido')
  }
  if (Object.keys(errores).length) {
    return errores
  }
  console.log(data);
  
  await addClient(data)
  return redirect('/admin') 
}

function NewClient () {
  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className='text-4xl font-black text-blue-900'>Clientes</h1>
      <p className='mt-3'>Completa los campos para registrar un nuevo cliente</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate(-1)} // -1 te lleva a la página anterior
        >
          Volver
        </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method='POST'
          noValidate
        >
          <Formulario />

          <input
            type='submit'
            value='Add New Client'
            className='bg-blue-800 w-full mt-5 p-3 uppercase font-bold text-white text-lg hover:bg-blue-900 cursor-pointer transition-colors'
          />
        </Form>
      </div>
    </>
  )
}

export default NewClient
