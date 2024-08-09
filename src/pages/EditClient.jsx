import { useLoaderData, useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import { updateClient, getClient } from '../data/clients'
import Error from '../components/Error'
import EditForm from '../components/EditForm'

export async function loader ({ params }) {
  const client = await getClient(params.clientId)
  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Client not found'
    })
  }
  return client
}

export async function action ({ request, params }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const email = formData.get('email')

  // Validación
  const errores = []
  if (Object.values(data).includes('')) {
    errores.push('All fields are required')
  }
  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
  if (!regex.test(email)) {
    errores.push('The email is not valid')
  }
  if (Object.keys(errores).length) {
    return errores
  }

  // Actualizar client
  console.log('los data son',data)
  await updateClient(params.clientId, data)
  return redirect('/admin') //
}

function EditClient () {
  const client = useLoaderData()
  const errores = useActionData()
  const navigate = useNavigate()
  

  return (
    <>
      <h1 className='text-4xl font-black text-yellow-400'>Edit Client</h1>
      <p className='mt-3 text-2xl text-gray-500'>You can edit the information of the client selected</p>

      <div className='flex justify-end'>
        <button
          className='bg-yellow-400 text-white px-3 py-1 font-bold uppercase hover:bg-yellow-500'
          onClick={() => navigate(-1)} // -1 te lleva a la página anterior
        >
          Back
        </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method='POST'
        >
          <EditForm client={client} />

          <input
            type='submit'
            value='Save changes'
            className='bg-yellow-400 w-full mt-5 p-3 uppercase font-bold text-white text-lg hover:bg-yellow-500 cursor-pointer transition-colors'
          />
        </Form>
      </div>
    </>
  )
}

export default EditClient
