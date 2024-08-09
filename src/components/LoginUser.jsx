/* eslint-disable react/prop-types */
import {useState , useEffect} from 'react'
import useGym from '../hooks/useGym'
import { useNavigate } from "react-router-dom"
const Login = ({
                  handleChangeLogin,
                  error,
                  message,
                  setError,
                  setMessage,
                  api,
                }) => {

  const navigate = useNavigate()

  const { handleChangeModal,setUserLogged,userLogged,token,setToken } = useGym()
  // const { handleChangeModal,token,setToken } = useGym()

  const [formData, setFormData] = useState({ email: '', password: '' });
  useEffect(() => {
    const user = window.localStorage.getItem("user")
    const token = window.localStorage.getItem("token")
    setUserLogged(user)
    setToken(token)
  }, [formData])
  


    const handleForm = async (data) => {
        data.preventDefault()

        const formData = {
          email: data.target[0].value,
          password: data.target[1].value,
        }
        console.log(formData);
        try{
          const { data } = await api.post('/validation', formData)
          console.log(data.userLogin.role, data.token);
            window.localStorage.setItem('user', JSON.stringify(data.userLogin.role))
            window.localStorage.setItem('token', JSON.stringify(data.token))
            handleChangeModal()
            setError(false)
            const dataUser = JSON.parse(localStorage.getItem('user'))
            const dataToken = JSON.parse(localStorage.getItem('token'))
            setUserLogged(dataUser)
            setToken(dataToken)
            console.log(userLogged, dataUser, token, dataToken);
            data.userLogin.role === 'admin' ? navigate('/admin') : navigate('/client')
        
        } catch(error){
          console.log('hola',error)
          const message = error.response.data
          setError(true)
          console.log(message)
          setMessage(message)
        }
      }


  return (
    <div>
    <button
      onClick={handleChangeModal} className="absolute top-0 right-2">
      ✕
    </button>
    {error && <p className="text-red-500">{message}</p>}
    <form
      action="/recetas"
      onSubmit={handleForm}
      className="flex flex-col">
      
      <label htmlFor="Email" className='text-slate-500 font-semibold text-sm'>
        Email
      </label>
      <input type="email" name="Email" id="Email" className="border rounded-lg mb-3 mt-3" />
      <label htmlFor="Password" className='text-slate-500 font-semibold text-sm'>
        Password
      </label>
      <input type="password" name="Password" className="border rounded-lg mb-3 mt-3" />

      <button type="submit" className='bg-yellow-400/90 py-2 px-4 m-5 border rounded-xl text-white hover:bg-yellow-500 hover:underline'>Login</button>
    </form>
  </div>
  )
}

export default Login