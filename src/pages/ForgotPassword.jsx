import { Link } from "react-router-dom"
import { FiCoffee,FiMail } from "react-icons/fi"

const Forgot_password = () => {
    return (
        <>
            <header className="h-screen flex">
                <div className="hidden md:block w-2/6 bg-[url(.././assets/images/bg-forgotpassword.png)] bg-cover bg-no-repeat bg-center"></div>
                <div className=" flex flex-1 justify-center items-center">
                    <form className="w-4/5 flex flex-col gap-3" action="">
                        <div className="flex items-center gap-5">
                        <div><FiCoffee size={30} color="#8E6447" /></div>
                            <div><h1 className="text-[#8E6447] font-bold text-2xl">Coffee Shop</h1></div>
                        </div>
                        <div className="text-[#8E6447] text-xl font-bold">Fill out the form correctly</div>
                        <div className="text-[#4F5665]">We will send new password to you email</div>
                        <label className="flex flex-col gap-[5px]" htmlFor="email">
                            <div className="text-[#0B132A] font-bold">Email</div>
                            <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                            <div><FiMail/></div>
                                <input className="w-full  text-[black]" id="email" name="email" type="email" placeholder="Enter Your Email" />
                       
                            </div>
                        </label>
                        <div><button className="py-4 bg-orange-500 w-full text-black font-bold">Submit</button></div>
                    </form>
                </div>
            </header>
        </>
    )
}

export default Forgot_password