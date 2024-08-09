const Formulario = ({ client }) => {
  // el que encarga de crear el id , es json-server
  return (
    <>
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='username'
        >Nombre:
        </label>
        <input
          id='username'
          type='text'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Nombre del Cliente'
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
          placeholder='Email del Cliente'
          name='email'
          defaultValue={client?.email}
        />
      </div>

      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='password'
        >Password:
        </label>
        <input
          id='password'
          type='password'
          className='mt-2 block w-full p-3 bg-gray-50'
          placeholder='Password'
          name='password'
          defaultValue={client?.password}
        />
      </div>
{/* 
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
      </div> */}
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='subscriptionstatus'
        >Subscription:
        </label>
        <select
    id='subscription'
    name='subscription'
    className='mt-2 block w-full p-3 bg-gray-50'
    defaultValue={client?.subscription}
  >
    <option value='0'>0</option>
    <option value='30'>30</option>
    <option value='60'>60</option>
  </select>
      </div>
      <div className='mb-4'>
        <label
          className='text-gray-800'
          htmlFor='subscriptionstatus'
        >Subscription Status:
        </label>
        <select
    id='subscriptionstatus'
    name='subscriptionstatus'
    className='mt-2 block w-full p-3 bg-gray-50'
    defaultValue={client?.subscriptionStatus }
  >
    <option value='inactive'>Inactive</option>
    <option value='active'>Active</option>
  </select>
      </div>

    </>
  )
}

export default Formulario
