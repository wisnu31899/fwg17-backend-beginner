// import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiUser, FiMapPin, FiPhoneCall, FiCreditCard, FiTruck, FiRepeat } from "react-icons/fi"
import cp1 from "../assets/images/cphead1.png"

const DetailOrder = () => {
    return (
        <>
            <Navbar />
            <header className="flex flex-col md:flex-row text-[#4F5665] gap-[20px] my-[50px]">
                <div className=" max-w-[700px] w-full flex justify-center md:justify-end items-center">
                    <div className="w-[90%] flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-[#0B0909] text-[48px] font-bold">Order #12354-09893</div>
                            <div>21 March 2023 at 10:30 AM</div>
                        </div>
                        <div className="flex justify-between gap-[50px]">
                            <div className="text-[22px] text-[#0B132A] font-bold">Order Information</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between pb-[15px] border-b-2">
                                <div className="flex gap-[10px]"><FiUser className="mt-[3px]"/>Full Name</div>
                                <div className="text-[#0B132A] font-bold">Ghaluh Wizard Anggoro</div>
                            </div>
                            <div className="flex justify-between py-[20px] border-b-2">
                                <div className="flex gap-[10px]"><FiMapPin className="mt-[3px]"/>Address</div>
                                <div className="text-[#0B132A] font-bold">Griya bandung indah</div>
                            </div>
                            <div className="flex justify-between py-[20px] border-b-2">
                                <div className="flex gap-[10px]"><FiPhoneCall className="mt-[3px]"/>Phone</div>
                                <div className="text-[#0B132A] font-bold">082116304338</div>
                            </div>
                            <div className="flex justify-between py-[20px] border-b-2">
                                <div className="flex gap-[10px]"><FiCreditCard className="mt-[3px]"/>Payment Method</div>
                                <div className="text-[#0B132A] font-bold">Cash</div>
                            </div>
                            <div className="flex justify-between py-[20px] border-b-2">
                                <div className="flex gap-[10px]"><FiTruck className="mt-[3px]"/>Shipping</div>
                                <div className="text-[#0B132A] font-bold">Dine In</div>
                            </div>
                            <div className="flex justify-between items-center py-[10px] border-b-2">
                                <div className="flex gap-[10px]"><FiRepeat className="mt-[3px]"/>Status</div>
                                <div className="p-[10px] rounded-[20px] bg-green-100  text-[#00A700] font-bold">Done</div>
                            </div>
                            <div className="flex justify-between py-[20px]">
                                <div className="flex gap-[10px]">Total Transaksi</div>
                                <div className="text-[#FF8906] font-bold">Idr 40.000</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center md:justify-start pt-[120px]">
                    <div className="w-[90%] flex flex-col gap-[20px]">
                        <div className="text-[#0B132A] font-bold text-[22px]">Your Order</div>
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
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}

export default DetailOrder