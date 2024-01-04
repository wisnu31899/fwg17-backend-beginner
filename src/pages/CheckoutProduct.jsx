import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiCalendar, FiChevronDown, FiRepeat, FiRefreshCcw,FiUser, FiPlus, FiPlusCircle, FiMail, FiMapPin } from "react-icons/fi"
import cp1 from "../assets/images/cphead1.png"
import BRI from "../assets/images/BRI.svg"
import BCA from "../assets/images/BCA.svg"
import OVO from "../assets/images/OVO.svg"
import PAYPAL from "../assets/images/PAYPAL.svg"
import GOPAY from "../assets/images/GOPAY.svg"
import DANA from "../assets/images/DANA.png"

const CheckoutProduct = () => {
    return (
        <>
            <Navbar />
            <header className="flex flex-col md:flex-row text-[#4F5665] gap-[20px] my-[50px]">
                <div className=" max-w-[700px] w-full flex justify-center md:justify-end items-center">
                    <div className="w-[90%] flex flex-col gap-[20px]">
                        <div className=" h-[60px] flex items-center text-[#0B0909] text-[48px] mb-[40px]">Payment Details</div>
                        <div className="flex justify-between">
                            <div className="text-[#0B132A] font-bold text-[22px]">Your Order</div>
                            <div><button
                                className="flex justify-center items-center gap-[10px] rounded-[6px] bg-[#FF8906] w-[125px] h-[40px] font-bold text-[#0B132A]"
                                type="submit"><FiPlus/>Add Menu</button></div>
                        </div>
                        <div className="flex justify-between items-center bg-[#E8E8E84D] gap-[20px] px-[10px] py-[10px]">
                            <div className=""><img width="170px" height="170px" src={cp1} alt="" /></div>
                            <div className="flex flex-col flex-1 gap-[10px] py-[10px]">
                                <div
                                    className=" flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[120px] h-[35px]">
                                    FLASH SALE!</div>
                                <div className="text-[#0B0909] text-[18px] font-bold">Hazelnut Latte</div>
                                <div className="flex gap-[10px] items-center">
                                    <div>2pcs</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Regular</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Ice</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Dine In</div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="line-through font-bold text-[12px] text-[#D00000]">IDR 40.000</div>
                                    <div className="text-[22px] font-bold text-[#FF8906]">IDR 20.000</div>
                                </div>
                            </div>
                            <div className="mr-[20px] text-[red]"><FiPlusCircle/></div>
                        </div>
                        <div className="flex justify-between items-center bg-[#E8E8E84D] gap-[20px] px-[10px] py-[10px]">
                            <div className=""><img width="170px" height="170px" src={cp1} alt="" /></div>
                            <div className="flex flex-col flex-1 gap-[10px] py-[10px]">
                                <div
                                    className=" flex justify-center items-center text-[#FFFFFF] rounded-3xl bg-[#D00000] w-[120px] h-[35px]">
                                    FLASH SALE!</div>
                                <div className="text-[#0B0909] text-[18px] font-bold">Hazelnut Latte</div>
                                <div className="flex gap-[10px] items-center">
                                    <div>2pcs</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Regular</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Ice</div>
                                    <div className="w-[3px] h-[20px] bg-[#4F5665]"></div>
                                    <div>Dine In</div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="line-through font-bold text-[12px] text-[#D00000]">IDR 40.000</div>
                                    <div className="text-[22px] font-bold text-[#FF8906]">IDR 20.000</div>
                                </div>
                            </div>
                            <div className="mr-[20px] text-[red]"><FiPlusCircle/></div>
                        </div>
                        <div className=" flex flex-col gap-[20px]">
                            <div>Payment Info & Delivery</div>
                            <form className="w-full flex flex-col gap-5" action="">
                            <label className="flex flex-col gap-[5px]" htmlFor="email">
                            <div className="text-[#0B132A] font-bold">Email</div>
                            <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                            <div ><FiMail/></div>
                                <input className="w-full  text-[black]" id="email" name="email" type="email" placeholder="Enter Your Email" />
                            </div>
                        </label>
                                <label className="flex flex-col gap-[5px]" htmlFor="name">
                            <div className="text-[#0B132A] font-bold">Full Name</div>
                            <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                            <div className=""><FiUser/></div>
                                <input className="w-full  text-[black]" id="name" name="name" type="text" placeholder="Enter Your Full Name" />
                            </div>
                        </label>
                        <label className="flex flex-col gap-[5px]" htmlFor="address">
                            <div className="text-[#0B132A] font-bold">Address</div>
                            <div className="border h-[40px] rounded flex items-center px-4 gap-2">
                            <div ><FiMapPin/></div>
                                <input className="w-full  text-[black]" id="address" name="address" type="text" placeholder="Enter Your Address" />
                            </div>
                        </label>
                            </form>
                            <div className="text-[#0B132A] font-bold">Delivery</div>
                            <div className="flex justify-between gap-[30px]">
                                <div className="flex-1"><button className=" w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                    type="submit">Dine In</button></div>
                                <div className="flex-1"><button className="w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                    type="submit">Door Delivery</button></div>
                                <div className="flex-1"><button className="w-full h-[40px] border-2 font-bold hover:border-[#FF8906]"
                                    type="submit">Pick Up</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center md:justify-start pt-[150px]">
                    <div className="w-[90%] flex flex-col">
                        <div className="text-[#0B132A] text-[22px] font-bold">Total</div>
                        <div className="flex flex-col justify-center bg-[#E8E8E84D] gap-[20px] px-[20px] py-[10px]">
                            <div className="flex justify-between">
                                <div className="font-bold">Order</div>
                                <div className="font-bold text-[#0B132A]">Idr. 40.000</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="font-bold">Delivery</div>
                                <div className="font-bold text-[#0B132A]">Idr. 0</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="font-bold">Tax</div>
                                <div className="font-bold text-[#0B132A]">Idr. 4.000</div>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <div className="font-bold">Sub Total</div>
                                <div className="font-bold text-[#0B132A]">Idr. 44.000</div>
                            </div>
                            <div><Link to="/historyorder"><button className=" flex justify-center items-center rounded-[6px] bg-[#FF8906] w-full h-[40px] font-bold text-[#0B132A]" type="submit">Checkout</button></Link></div>
                            <div>We Accept</div>
                            <div className="flex justify-between">
                                <div><Link to="/#"><img src={BRI} alt="" /></Link></div>
                                <div><Link to="/#"><img src={DANA} alt="" /></Link></div>
                                <div><Link to="/#"><img src={BCA} alt="" /></Link></div>
                                <div><Link to="/#"><img src={GOPAY} alt="" /></Link></div>
                                <div><Link to="/#"><img src={OVO} alt="" /></Link></div>
                                <div><Link to="/#"><img src={PAYPAL} alt="" /></Link></div>
                            </div>
                            <div>*Get Discount if you pay with Bank Central Asia</div>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}

export default CheckoutProduct