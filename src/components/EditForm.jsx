export default function EditForm({client}) {
  return (
    <>
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='username'
        >UserName:
        </label>
        <input
          id='username'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Name of the Client'
          name='username'
          defaultValue={client?.username}
        />
      </div>

      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='email'
        >E-mail:
        </label>
        <input
          id='email'
          type='email'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Email del Client'
          name='email'
          defaultValue={client?.email}
        />
      </div>
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='role'
        >Role:
        </label>
        <select
    id='role'
    name='role'
    className='mt-2 block w-full p-3 bg-gray-50'
    defaultValue={client?.role} 
  >
    <option value='user'>User</option>
    <option value='admin'>Admin</option>
  </select>
      </div>
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='subscriptionstatus'
        >Subscription Status:
        </label>
        <select
    id='subscriptionStatus'
    name='subscriptionStatus'
    className='mt-2 block w-full p-3 bg-gray-50'
    defaultValue={client?.subscriptionStatus || 'Inactive'}
  >
    <option value='inactive'>Inactive</option>
    <option value='active'>Active</option>
  </select>
      </div>


      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='subscription'
        >Subscription:
        </label>
        <input
          id='subscription'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='subscription'
          name='subscription'
          defaultValue={client?.subscription}
        />
      </div>

    </>
  )
}
