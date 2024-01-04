import { Link } from "react-router-dom"
import React from "react"
import { FiCoffee, FiMail, FiLock, FiEyeOff, FiEye, FiFacebook, FiGlobe } from "react-icons/fi"
import axios from "axios"
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const inputEmail = React.useRef() //dapetin elementnya
    const inputPassword = React.useRef()
    const [successMessage, setSuccessMessage] = React.useState(null)
    const [errorMessage, setErrorMessage] = React.useState(null)
    const navigate = useNavigate()

    const [token, setToken] = React.useState(window.localStorage.getItem('token'))
    React.useEffect(() => {
        if(token){
            navigate('/')
        }
    }, [token, navigate])

    const processLogin = async (even) => {
        try {
        even.preventDefault()
        const { value: email } = even.target.email
        const { value: password } = even.target.password
        // if(email === 'wisnu@gmail.com' && password === '1234'){
        //     alert('login sucess')
        // }else{
        //     alert('wrong email or password')
        // }

        const form = new URLSearchParams()
        form.append('email', email)
        form.append('password', password)
            const { data } = await axios.post('http://localhost:5050/auth/login', form.toString())
            setSuccessMessage(data.message)
            const { token: resultToken } = data.results
            setErrorMessage(null)
            // console.log(data.results)
            setTimeout(() => {
                setToken(resultToken)
                window.localStorage.setItem("token", resultToken)
                navigate('/')
                // window.location = '/'
            }, 3000);

        } catch (error) {
            setErrorMessage(error.response.data.message)
        }
    }

    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <>
            <header className="h-screen flex">
                <div className="hidden md:block w-2/6 bg-[url(.././assets/images/bg-login.png)] bg-cover bg-no-repeat bg-center"></div>
                <div className=" flex flex-1 justify-center items-center">
                    <form onSubmit={processLogin} className="w-4/5 flex flex-col gap-3" action="">
                        {errorMessage && (
                            <div className="border-2 flex justify-center items-center border-red-500 bg-red-300 py-2">
                                {errorMessage}
                            </div>
                        )}
                        {successMessage && <div className="border-2 flex justify-center items-center border-green-500 py-2 bg-green-300">{successMessage}</div>}
                        <div className="flex items-center gap-5">
                            <div><FiCoffee size={30} color="#8E6447" /></div>
                            <div><h1 className="text-[#8E6447] font-bold text-2xl">Coffee Shop</h1></div>
                        </div>
                        <div className="text-[#8E6447] text-xl font-bold">Login</div>
                        <div className="text-[#4F5665]">Fill out the form correctly</div>
                        <label className="flex flex-col gap-[5px]" htmlFor="email">
                            <div className="text-[#0B132A] font-bold">Email</div>
                            <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                                <div><FiMail /></div>
                                <input ref={inputEmail} className="w-full  text-[black]" id="email" name="email" type="email" placeholder="Enter Your Email" />
                            </div>
                        </label>
                        <label className="flex flex-col gap-[5px]" htmlFor="password">
                            <div className="text-[#0B132A] font-bold">Password</div>
                            <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                                <div><FiLock /></div>
                                <input ref={inputPassword} className="w-full text-[black]" id="password" name="password" type={passwordVisible ? "text" : "password"} placeholder="Enter Your Password" />
                                <div onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>
                        </label>
                        <div className="mt-3 flex justify-end"><Link className="text-orange-500" to="/forgotpassword">Lupa Password?</Link></div>
                        <div><button className="py-4 bg-orange-500 w-full text-black font-bold">Login</button></div>
                        <div className="flex justify-center">
                            <div className="text-[#4F5665]">Note Have An Account? <Link className="text-orange-500" to="/register">Register</Link></div>
                        </div>
                        <div className="flex items-center -mt-3">
                            <div className="flex-1 w-full h-px bg-[#DEDEDE]"></div>
                            <p className="flex-1 text-center text-[#4F5665]">Or</p>
                            <div className="flex-1 w-full h-px bg-[#DEDEDE]"></div>
                        </div>
                        <div className="flex  gap-5 justify-between">
                            <div className="flex-1">
                                <button className="bg-slate-200 shadow w-full h-[40px] rounded-2xl flex gap-3 items-center justify-center  text-[#4F5665]"><FiFacebook />Facebook</button>
                            </div>
                            <div className="flex-1">
                                <button className="bg-slate-200 shadow w-full h-[40px] rounded-2xl items-center justify-center gap-3 flex  text-[#4F5665]"><FiGlobe />Google</button>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </>
    )
}

export default Login