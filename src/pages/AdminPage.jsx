import { useLoaderData } from 'react-router-dom'
import { getClients } from '../data/clients'
import Cliente from '../components/Client'

export function loader () {
  const clients = getClients()
  return clients
}
export default function AdminPage() {

  const clients  = useLoaderData()
  
  return (
    <div>
      <h1 className='text-4xl font-black text-yellow-400'>Client List</h1>

      {clients.length
        ? (
          <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className='bg-yellow-400'>
              <tr>
                <th className='p-2'>User</th>
                <th className='p-2'>Email</th>
                <th className='p-2'>Role</th>
                <th className='p-2'>Subscription</th>
                <th className='p-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <Cliente
                  key={client._id}
                  cliente={client}
                />
              ))}
            </tbody>
          </table>
          )
        : (
          <p className='mt-10 text-center text-gray-600 font-bold'>There are no clients...</p>
          )}

    </div>
  )
}
