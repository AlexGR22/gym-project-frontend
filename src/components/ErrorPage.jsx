import { useRouteError } from 'react-router-dom'

export default function ErrorPage () {
  const error = useRouteError()
  return (
    <div id='error-page' className='space-y-8'>
      <h1 className='text-4xl font-black text-blue-900'>  Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {error.status} - {error.statusText || error.message}
      </p>
    </div>
  )
}
