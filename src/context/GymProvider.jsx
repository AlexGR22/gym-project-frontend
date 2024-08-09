import { createContext, useState } from 'react'

const GymContext = createContext()

const GymProvider = ({ children }) => {
    const [modal, setModal] = useState(false)
    const [userLogged, setUserLogged] = useState("")
    const [token, setToken] = useState("")

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleLogOut = () => {
        const confirm = window.confirm("Are you sure you want to log out?")
        if (confirm) {
          setUserLogged("")
          setToken("")
          setModal(false)
          window.localStorage.removeItem("user")
          window.localStorage.removeItem("token")
        }
      }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '1rem',
        },
    };

    return (
        <GymContext.Provider
            value={{
                modal,
                setModal,
                customStyles,
                handleChangeModal,
                userLogged,
                setUserLogged,
                token,
                setToken,
                handleLogOut
            }}>
            {children}
        </GymContext.Provider>
    )
}

export { GymProvider, GymContext }
