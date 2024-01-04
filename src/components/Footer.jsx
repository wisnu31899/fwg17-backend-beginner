import { Link } from "react-router-dom"
import { FiCoffee, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"


const Navbar = () => {
    return (
        <>
    <footer className="gap-[20px] flex flex-col md:flex-row justify-between text-[#4F5665] py-[50px] bg-[#F8F8F8]">
        <div className="max-w-[500px] w-full flex justify-center">
            <div className="flex flex-col w-[78%] md:w-[70%] gap-[30px]">
                <div className="flex items-center text-[#8E6447] gap-[10px]">
                    <div><FiCoffee className="fill-[#8E6447]"/></div>
                    <div>
                        <h1 className="text-[20px] font-bold">Coffee Shop</h1>
                    </div>
                </div>
                <div>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality
                    beans</div>
                <div className="text-[#AFB5C0]">©2020CoffeeStore</div>
            </div>
        </div>
        <div className="flex-1 flex justify-center">
            <div className="flex flex-col w-[80%] gap-[10px]">
                <div className="mb-[10px] text-[black] font-bold">Product</div>
                <div><Link className="hover:text-[#FF8906]" to="#">Product</Link></div>
                <div><Link className="hover:text-[#FF8906]" to="#">Pricing</Link></div>
                <div><Link className="hover:text-[#FF8906]" to="#">Locations</Link></div>
                <div><Link className="hover:text-[#FF8906]" to="#">Countries</Link></div>
                <div><Link className="hover:text-[#FF8906]" to="#">Blog</Link></div>
            </div>
        </div>
        <div className="flex-1 flex justify-center">
            <div className="flex flex-col w-[80%] gap-[10px]">
                <div className="mb-[10px] text-[black] font-bold">Engage</div>
                <div><Link className="hover:text-[#FF8906]" to="#">Patner</Link></div>
                <div><Link className="hover:text-[#FF8906]" to="#">FAQ</Link></div>
                <div><Link className="hover:text-[#FF8906]" to="#">About Us</Link></div>
                <div><Link className="hover:text-[#FF8906]" to="#">Privacy Policy</Link></div>
                <div><Link className="hover:text-[#FF8906]" to="#">Terms of Service</Link></div>
            </div>
        </div>
        <div className=" flex-1 flex justify-center">
            <div className="flex flex-col w-[80%] gap-[20px]">
                <div className="text-[black] font-bold">Social Media</div>
                <div className="flex gap-[20px]">
                    <div><button
                            className="h-[35px] w-[35px] border-2 border-[#FF8906] hover:bg-[#FF8906] rounded-full flex justify-center items-center"
                            type="submit"><FiFacebook className="text-[black] fill-[black]"/></button>
                    </div>
                    <div><button
                            className="h-[35px] w-[35px] border-2 border-[#FF8906] hover:bg-[#FF8906] rounded-full flex justify-center items-center"
                            type="submit"><FiTwitter className="text-[black] fill-[black]"/></button>
                    </div>
                    <div><button
                            className="h-[35px] w-[35px] border-2 border-[#FF8906] hover:bg-[#FF8906] rounded-full flex justify-center items-center"
                            type="submit"><FiInstagram className="text-[black]"/></button></div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Navbar