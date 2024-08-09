import { useNavigate, Form, redirect } from 'react-router-dom'
import { deleteClient } from '../data/clients'

export async function action ({ params }) {
  await deleteClient(params.clientId)
  return redirect('/admin')
}

function Client ({ cliente }) {
  const {  role, email, username,subscriptionstatus, _id : id } = cliente
  const navigate = useNavigate()

  return (
    <tr className='border-b'>
      <td className='p-6 space-y-2'>
        <p className='text-2xl text-gray-800'>{username}</p>

      </td>
      <td className='p-6'>
        <p className='text-gray-600'> <span className='text-gray-800 uppercase font-bold'> {email} </span></p>
 
      </td>
      <td className='p-6'>
 
        <p className='text-gray-600'> {role}</p>
      </td>
      <td className='p-6'>
       <p className='text-gray-800'></p>
       <p className='text-gray-600'> <span className='text-gray-800 uppercase font-bold'> {subscriptionstatus}</span></p>
      </td>
      <td className='p-6 flex gap-3'>
        <button
          type='button'
          className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Edit
        </button>

        <Form
          method='POST'
          action={`/admin/delete/${id}/`}
          onSubmit={(e) => {
            if (!confirm('Do you want to delete this client?')) {
              e.preventDefault()
            }
          }}
        >
          <button
            type='submit'
            className='text-red-600 hover:text-red-700 uppercase font-bold text-xs ml-2'
          >
            Delete
          </button>
        </Form>
      </td>
    </tr>
  )
}

export default Client
