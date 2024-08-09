import { useState } from 'react'
import useGym from "../hooks/useGym"
import axios from 'axios'
import LoginUser from "./LoginUser"

export default function Login() {

  const [login, setLogin] = useState(true)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const { handleChangeModal, userLogged, setUserLogged, handleLogOut } = useGym()

  const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/users`
  })

  const handleChangeLogin = () => {
    setLogin(!login),
    setError(false)
  }

  return (
    <>
      {!userLogged ? 
        <LoginUser 
          handleChangeLogin={handleChangeLogin}
          handleChangeModal={handleChangeModal}
          setError={setError}
          setMessage={setMessage}
          error={error}
          message={message}
          api={api}
          setUserLogged={setUserLogged}
          userLogged={userLogged}
        />
       : (
        <div>
        <button
        onClick={handleChangeModal} className="absolute top-0 right-2">
        ✕
      </button>
        <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg "
        type="button"
        onClick={handleLogOut}>
        Cerrar Sesion
      </button>
      </div>
      )
    }
    </>
  )
}
