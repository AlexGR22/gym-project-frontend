import { Link } from "react-router-dom"
import imagen from "/images/dumbbells.jpg"
import Modal from 'react-modal';
import useGym from "../hooks/useGym"
import Login from "../components/Login"
Modal.setAppElement('#root');
export default function Index() {

    const { modal, handleChangeModal, customStyles} = useGym()


    return (
        <>
            <div className="mt-5 mb-20 ml-10">
            <Link href="/">
                {/* <Image
                    src={logo}
                    alt="logo"
                    width={200}
                    height={100}
                    className="cursor-pointer"
                /> */}
                <h1 className="text-3xl font-extrabold">GYM</h1>
            </Link>
            </div>
            <div className="grid md:grid-cols-2">
                <div className="m-auto p-5">
                    <p className="text-3xl font-bold m-auto">
                    Train with passion,  <br/> achieve your goals
                    </p>
                    <h1 className="font-thin">
                    Discover a new level of fitness
                    </h1>
                    <button
                        onClick={handleChangeModal}
                        className="bg-yellow-400 py-2 px-4 m-5 rounded-md border-2  hover:bg-yellow-300/90 hover:border-black hover:border-2"
                    >
                        Login
                    </button>
                    <Link to="/About">
                        <button className="text-slate-400 border-slate-400 p-2 border-2 rounded-md hover:text-black hover:border-black hover:bg-bg-yellow-400/90">
                            More ➜
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <div className=" drop-shadow-[25px_-25px_rgba(253,224,71,1)] p-10">
                        <img src={imagen} alt="carousel" height={"1080"} width={"1920"} style={{ borderRadius: "10px", maxHeight: "600px", }} />
                    </div>
                </div>
            </div>
            <div className="text-center bg-yellow-400 p-5 mt-10 ">
                <h1 className="font-bold text-lg">Feel the change, see the result</h1>
                <p className="font-bold text-base" >GYM Team.</p>
            </div>

            {modal && (
                <Modal
                    isOpen={modal}
                    style={customStyles}
                >
                    <Login />
                </Modal>
            )}
        </>
    )
}
