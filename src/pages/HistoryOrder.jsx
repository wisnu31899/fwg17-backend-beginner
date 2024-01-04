import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiCalendar, FiChevronDown, FiRepeat, FiRefreshCcw } from "react-icons/fi"
import ho1 from "../assets/images/ho1.png"

const HistoryOrder = () => {
    return (
        <>
            <Navbar />
            <header className="flex flex-col md:flex-row text-[#4F5665] gap-[20px] my-[50px]">
                <div className=" max-w-[700px] w-full flex justify-center md:justify-end items-center">
                    <div className="w-[90%] flex flex-col gap-[20px]">
                        <div className="flex items-center gap-[30px]">
                            <div className="text-[#0B0909] text-[48px] font-bold">History Order</div>
                            <div className="flex justify-center items-center bg-[#E8E8E8] h-[40px] w-[40px] font-bold">2</div>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between gap-[50px]">
                            <div
                                className="flex-1 h-[60px] flex justify-between items-center bg-[#E8E8E84D] gap-[20px] px-[10px] py-[10px]">
                                <div
                                    className="flex justify-center items-center w-[120px] bg-[#FFF] h-[40px] text-[#0B132A] font-bold">
                                    On Progress</div>
                                <div className="text-[#0B132A] font-bold">Sending Goods</div>
                                <div className="text-[#0B132A] font-bold">Finish Order</div>
                            </div>
                            <div
                                className="h-[60px] flex justify-between items-center bg-[#E8E8E84D] gap-[10px] px-[10px] py-[10px]">
                                <div><FiCalendar size={20}/></div>
                                <div className="text-[#0B132A] font-bold">January2023</div>
                                <div><FiChevronDown/></div>
                            </div>
                        </div>
                        <div className=" flex justify-between bg-[#E8E8E84D] gap-[10px] px-[10px] py-[10px]">
                            <div className=""><img width="100px" height="100px" src={ho1} alt="" /></div>
                            <div className="flex w-[140px] flex-col gap-[5px]">
                                <div className="flex items-center gap-[10px]">
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M12.6664 1.99996C12.4793 1.79072 12.2502 1.62323 11.9941 1.50837C11.7379 1.39351 11.4605 1.33386 11.1798 1.33329H4.81976C4.53753 1.33158 4.25814 1.38961 3.99994 1.50359C3.74175 1.61756 3.5106 1.7849 3.32169 1.99458C3.13279 2.20427 2.9904 2.45156 2.90389 2.72021C2.81738 2.98886 2.78871 3.27277 2.81976 3.55329L3.85976 12.8866C3.91414 13.3781 4.14863 13.8319 4.51797 14.1607C4.88731 14.4894 5.36533 14.6696 5.85976 14.6666H10.1398C10.6342 14.6696 11.1122 14.4894 11.4815 14.1607C11.8509 13.8319 12.0854 13.3781 12.1398 12.8866L13.1798 3.55329C13.2085 3.27282 13.1776 2.98944 13.0892 2.72173C13.0007 2.45403 12.8566 2.20806 12.6664 1.99996ZM10.7998 12.74C10.7816 12.9038 10.7035 13.0551 10.5804 13.1646C10.4572 13.2742 10.2979 13.3343 10.1331 13.3333H5.85976C5.69495 13.3343 5.53561 13.2742 5.4125 13.1646C5.28938 13.0551 5.21122 12.9038 5.19309 12.74L4.51976 6.66662H11.4798L10.7998 12.74ZM11.6264 5.33329H4.37309L4.15976 3.40662C4.14926 3.31309 4.15868 3.2184 4.18741 3.12878C4.21614 3.03915 4.26351 2.95662 4.32642 2.88662C4.38875 2.81756 4.46485 2.76231 4.54981 2.72442C4.63478 2.68653 4.72673 2.66684 4.81976 2.66662H11.1798C11.2728 2.66684 11.3647 2.68653 11.4497 2.72442C11.5347 2.76231 11.6108 2.81756 11.6731 2.88662C11.736 2.95662 11.7834 3.03915 11.8121 3.12878C11.8408 3.2184 11.8503 3.31309 11.8398 3.40662L11.6264 5.33329ZM9.33309 12C9.5099 12 9.67947 11.9297 9.8045 11.8047C9.92952 11.6797 9.99976 11.5101 9.99976 11.3333V8.66662C9.99976 8.48981 9.92952 8.32024 9.8045 8.19522C9.67947 8.07019 9.5099 7.99996 9.33309 7.99996C9.15628 7.99996 8.98671 8.07019 8.86169 8.19522C8.73666 8.32024 8.66643 8.48981 8.66643 8.66662V11.3333C8.66643 11.5101 8.73666 11.6797 8.86169 11.8047C8.98671 11.9297 9.15628 12 9.33309 12ZM6.66643 12C6.84324 12 7.01281 11.9297 7.13783 11.8047C7.26285 11.6797 7.33309 11.5101 7.33309 11.3333V8.66662C7.33309 8.48981 7.26285 8.32024 7.13783 8.19522C7.01281 8.07019 6.84324 7.99996 6.66643 7.99996C6.48961 7.99996 6.32004 8.07019 6.19502 8.19522C6.07 8.32024 5.99976 8.48981 5.99976 8.66662V11.3333C5.99976 11.5101 6.07 11.6797 6.19502 11.8047C6.32004 11.9297 6.48961 12 6.66643 12Z"
                                            fill="#4F5665" />
                                    </svg></div>
                                    <div>No. Order</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">#12354-09893</div>
                                <div><Link className="text-[#FF8906] className
                                Properties
                                underline" to="/detailorder">Views Order Detail</Link></div>
                            </div>
                            <div className="flex w-[130px] gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiCalendar/></div>
                                    <div>Date</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">23 January 2023</div>
                            </div>
                            <div className="flex flex-1 gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiRepeat/></div>
                                    <div>Total</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">Idr 40.000</div>
                            </div>
                            <div className="flex flex-1 gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiRefreshCcw/></div>
                                    <div>Status</div>
                                </div>
                                <div className="h-[25px] w-[110px] flex justify-center items-center text-[#FF8906] rounded-[24px] bg-orange-200">On Progress</div>
                            </div>
                        </div>
                        <div className=" flex justify-between bg-[#E8E8E84D] gap-[10px] px-[10px] py-[10px]">
                            <div className=""><img width="100px" height="100px" src={ho1} alt="" /></div>
                            <div className="flex w-[140px] flex-col gap-[5px]">
                                <div className="flex items-center gap-[10px]">
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M12.6664 1.99996C12.4793 1.79072 12.2502 1.62323 11.9941 1.50837C11.7379 1.39351 11.4605 1.33386 11.1798 1.33329H4.81976C4.53753 1.33158 4.25814 1.38961 3.99994 1.50359C3.74175 1.61756 3.5106 1.7849 3.32169 1.99458C3.13279 2.20427 2.9904 2.45156 2.90389 2.72021C2.81738 2.98886 2.78871 3.27277 2.81976 3.55329L3.85976 12.8866C3.91414 13.3781 4.14863 13.8319 4.51797 14.1607C4.88731 14.4894 5.36533 14.6696 5.85976 14.6666H10.1398C10.6342 14.6696 11.1122 14.4894 11.4815 14.1607C11.8509 13.8319 12.0854 13.3781 12.1398 12.8866L13.1798 3.55329C13.2085 3.27282 13.1776 2.98944 13.0892 2.72173C13.0007 2.45403 12.8566 2.20806 12.6664 1.99996ZM10.7998 12.74C10.7816 12.9038 10.7035 13.0551 10.5804 13.1646C10.4572 13.2742 10.2979 13.3343 10.1331 13.3333H5.85976C5.69495 13.3343 5.53561 13.2742 5.4125 13.1646C5.28938 13.0551 5.21122 12.9038 5.19309 12.74L4.51976 6.66662H11.4798L10.7998 12.74ZM11.6264 5.33329H4.37309L4.15976 3.40662C4.14926 3.31309 4.15868 3.2184 4.18741 3.12878C4.21614 3.03915 4.26351 2.95662 4.32642 2.88662C4.38875 2.81756 4.46485 2.76231 4.54981 2.72442C4.63478 2.68653 4.72673 2.66684 4.81976 2.66662H11.1798C11.2728 2.66684 11.3647 2.68653 11.4497 2.72442C11.5347 2.76231 11.6108 2.81756 11.6731 2.88662C11.736 2.95662 11.7834 3.03915 11.8121 3.12878C11.8408 3.2184 11.8503 3.31309 11.8398 3.40662L11.6264 5.33329ZM9.33309 12C9.5099 12 9.67947 11.9297 9.8045 11.8047C9.92952 11.6797 9.99976 11.5101 9.99976 11.3333V8.66662C9.99976 8.48981 9.92952 8.32024 9.8045 8.19522C9.67947 8.07019 9.5099 7.99996 9.33309 7.99996C9.15628 7.99996 8.98671 8.07019 8.86169 8.19522C8.73666 8.32024 8.66643 8.48981 8.66643 8.66662V11.3333C8.66643 11.5101 8.73666 11.6797 8.86169 11.8047C8.98671 11.9297 9.15628 12 9.33309 12ZM6.66643 12C6.84324 12 7.01281 11.9297 7.13783 11.8047C7.26285 11.6797 7.33309 11.5101 7.33309 11.3333V8.66662C7.33309 8.48981 7.26285 8.32024 7.13783 8.19522C7.01281 8.07019 6.84324 7.99996 6.66643 7.99996C6.48961 7.99996 6.32004 8.07019 6.19502 8.19522C6.07 8.32024 5.99976 8.48981 5.99976 8.66662V11.3333C5.99976 11.5101 6.07 11.6797 6.19502 11.8047C6.32004 11.9297 6.48961 12 6.66643 12Z"
                                            fill="#4F5665" />
                                    </svg></div>
                                    <div>No. Order</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">#12354-09893</div>
                                <div><Link className="text-[#FF8906] className
                                Properties
                                underline" to="#">Views Order Detail</Link></div>
                            </div>
                            <div className="flex w-[130px] gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiCalendar/></div>
                                    <div>Date</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">23 January 2023</div>
                            </div>
                            <div className="flex flex-1 gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiRepeat/></div>
                                    <div>Total</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">Idr 40.000</div>
                            </div>
                            <div className="flex flex-1 gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiRefreshCcw/></div>
                                    <div>Status</div>
                                </div>
                                <div className="h-[25px] w-[110px] flex justify-center items-center text-[#FF8906] rounded-[24px] bg-orange-200">On Progress</div>
                            </div>
                        </div>
                        <div className=" flex justify-between bg-[#E8E8E84D] gap-[10px] px-[10px] py-[10px]">
                            <div className=""><img width="100px" height="100px" src={ho1} alt="" /></div>
                            <div className="flex w-[140px] flex-col gap-[5px]">
                                <div className="flex items-center gap-[10px]">
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M12.6664 1.99996C12.4793 1.79072 12.2502 1.62323 11.9941 1.50837C11.7379 1.39351 11.4605 1.33386 11.1798 1.33329H4.81976C4.53753 1.33158 4.25814 1.38961 3.99994 1.50359C3.74175 1.61756 3.5106 1.7849 3.32169 1.99458C3.13279 2.20427 2.9904 2.45156 2.90389 2.72021C2.81738 2.98886 2.78871 3.27277 2.81976 3.55329L3.85976 12.8866C3.91414 13.3781 4.14863 13.8319 4.51797 14.1607C4.88731 14.4894 5.36533 14.6696 5.85976 14.6666H10.1398C10.6342 14.6696 11.1122 14.4894 11.4815 14.1607C11.8509 13.8319 12.0854 13.3781 12.1398 12.8866L13.1798 3.55329C13.2085 3.27282 13.1776 2.98944 13.0892 2.72173C13.0007 2.45403 12.8566 2.20806 12.6664 1.99996ZM10.7998 12.74C10.7816 12.9038 10.7035 13.0551 10.5804 13.1646C10.4572 13.2742 10.2979 13.3343 10.1331 13.3333H5.85976C5.69495 13.3343 5.53561 13.2742 5.4125 13.1646C5.28938 13.0551 5.21122 12.9038 5.19309 12.74L4.51976 6.66662H11.4798L10.7998 12.74ZM11.6264 5.33329H4.37309L4.15976 3.40662C4.14926 3.31309 4.15868 3.2184 4.18741 3.12878C4.21614 3.03915 4.26351 2.95662 4.32642 2.88662C4.38875 2.81756 4.46485 2.76231 4.54981 2.72442C4.63478 2.68653 4.72673 2.66684 4.81976 2.66662H11.1798C11.2728 2.66684 11.3647 2.68653 11.4497 2.72442C11.5347 2.76231 11.6108 2.81756 11.6731 2.88662C11.736 2.95662 11.7834 3.03915 11.8121 3.12878C11.8408 3.2184 11.8503 3.31309 11.8398 3.40662L11.6264 5.33329ZM9.33309 12C9.5099 12 9.67947 11.9297 9.8045 11.8047C9.92952 11.6797 9.99976 11.5101 9.99976 11.3333V8.66662C9.99976 8.48981 9.92952 8.32024 9.8045 8.19522C9.67947 8.07019 9.5099 7.99996 9.33309 7.99996C9.15628 7.99996 8.98671 8.07019 8.86169 8.19522C8.73666 8.32024 8.66643 8.48981 8.66643 8.66662V11.3333C8.66643 11.5101 8.73666 11.6797 8.86169 11.8047C8.98671 11.9297 9.15628 12 9.33309 12ZM6.66643 12C6.84324 12 7.01281 11.9297 7.13783 11.8047C7.26285 11.6797 7.33309 11.5101 7.33309 11.3333V8.66662C7.33309 8.48981 7.26285 8.32024 7.13783 8.19522C7.01281 8.07019 6.84324 7.99996 6.66643 7.99996C6.48961 7.99996 6.32004 8.07019 6.19502 8.19522C6.07 8.32024 5.99976 8.48981 5.99976 8.66662V11.3333C5.99976 11.5101 6.07 11.6797 6.19502 11.8047C6.32004 11.9297 6.48961 12 6.66643 12Z"
                                            fill="#4F5665" />
                                    </svg></div>
                                    <div>No. Order</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">#12354-09893</div>
                                <div><Link className="text-[#FF8906] className
                                Properties
                                underline" to="#">Views Order Detail</Link></div>
                            </div>
                            <div className="flex w-[130px] gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiCalendar/></div>
                                    <div>Date</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">23 January 2023</div>
                            </div>
                            <div className="flex flex-1 gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiRepeat/></div>
                                    <div>Total</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">Idr 40.000</div>
                            </div>
                            <div className="flex flex-1 gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiRefreshCcw/></div>
                                    <div>Status</div>
                                </div>
                                <div className="h-[25px] w-[110px] flex justify-center items-center text-[#FF8906] rounded-[24px] bg-orange-200">On Progress</div>
                            </div>
                        </div>
                        <div className=" flex justify-between bg-[#E8E8E84D] gap-[10px] px-[10px] py-[10px]">
                            <div className=""><img width="100px" height="100px" src={ho1} alt="" /></div>
                            <div className="flex w-[140px] flex-col gap-[5px]">
                                <div className="flex items-center gap-[10px]">
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M12.6664 1.99996C12.4793 1.79072 12.2502 1.62323 11.9941 1.50837C11.7379 1.39351 11.4605 1.33386 11.1798 1.33329H4.81976C4.53753 1.33158 4.25814 1.38961 3.99994 1.50359C3.74175 1.61756 3.5106 1.7849 3.32169 1.99458C3.13279 2.20427 2.9904 2.45156 2.90389 2.72021C2.81738 2.98886 2.78871 3.27277 2.81976 3.55329L3.85976 12.8866C3.91414 13.3781 4.14863 13.8319 4.51797 14.1607C4.88731 14.4894 5.36533 14.6696 5.85976 14.6666H10.1398C10.6342 14.6696 11.1122 14.4894 11.4815 14.1607C11.8509 13.8319 12.0854 13.3781 12.1398 12.8866L13.1798 3.55329C13.2085 3.27282 13.1776 2.98944 13.0892 2.72173C13.0007 2.45403 12.8566 2.20806 12.6664 1.99996ZM10.7998 12.74C10.7816 12.9038 10.7035 13.0551 10.5804 13.1646C10.4572 13.2742 10.2979 13.3343 10.1331 13.3333H5.85976C5.69495 13.3343 5.53561 13.2742 5.4125 13.1646C5.28938 13.0551 5.21122 12.9038 5.19309 12.74L4.51976 6.66662H11.4798L10.7998 12.74ZM11.6264 5.33329H4.37309L4.15976 3.40662C4.14926 3.31309 4.15868 3.2184 4.18741 3.12878C4.21614 3.03915 4.26351 2.95662 4.32642 2.88662C4.38875 2.81756 4.46485 2.76231 4.54981 2.72442C4.63478 2.68653 4.72673 2.66684 4.81976 2.66662H11.1798C11.2728 2.66684 11.3647 2.68653 11.4497 2.72442C11.5347 2.76231 11.6108 2.81756 11.6731 2.88662C11.736 2.95662 11.7834 3.03915 11.8121 3.12878C11.8408 3.2184 11.8503 3.31309 11.8398 3.40662L11.6264 5.33329ZM9.33309 12C9.5099 12 9.67947 11.9297 9.8045 11.8047C9.92952 11.6797 9.99976 11.5101 9.99976 11.3333V8.66662C9.99976 8.48981 9.92952 8.32024 9.8045 8.19522C9.67947 8.07019 9.5099 7.99996 9.33309 7.99996C9.15628 7.99996 8.98671 8.07019 8.86169 8.19522C8.73666 8.32024 8.66643 8.48981 8.66643 8.66662V11.3333C8.66643 11.5101 8.73666 11.6797 8.86169 11.8047C8.98671 11.9297 9.15628 12 9.33309 12ZM6.66643 12C6.84324 12 7.01281 11.9297 7.13783 11.8047C7.26285 11.6797 7.33309 11.5101 7.33309 11.3333V8.66662C7.33309 8.48981 7.26285 8.32024 7.13783 8.19522C7.01281 8.07019 6.84324 7.99996 6.66643 7.99996C6.48961 7.99996 6.32004 8.07019 6.19502 8.19522C6.07 8.32024 5.99976 8.48981 5.99976 8.66662V11.3333C5.99976 11.5101 6.07 11.6797 6.19502 11.8047C6.32004 11.9297 6.48961 12 6.66643 12Z"
                                            fill="#4F5665" />
                                    </svg></div>
                                    <div>No. Order</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">#12354-09893</div>
                                <div><Link className="text-[#FF8906] className
                                Properties
                                underline" to="#">Views Order Detail</Link></div>
                            </div>
                            <div className="flex w-[130px] gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiCalendar/></div>
                                    <div>Date</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">23 January 2023</div>
                            </div>
                            <div className="flex flex-1 gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiRepeat/></div>
                                    <div>Total</div>
                                </div>
                                <div className="text-[#0B132A] font-bold">Idr 40.000</div>
                            </div>
                            <div className="flex flex-1 gap-[5px] flex-col">
                                <div className="flex items-center gap-[10px]">
                                    <div><FiRefreshCcw/></div>
                                    <div>Status</div>
                                </div>
                                <div className="h-[25px] w-[110px] flex justify-center items-center text-[#FF8906] rounded-[24px] bg-orange-200">On Progress</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center md:justify-start pt-[0px] md:pt-[170px]">
                    <div className="w-[60%] flex flex-col text-[#4F5665]">
                        <div className="flex flex-col justify-center bg-[#E8E8E8] gap-[10px] px-[20px] py-[10px]">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <g clip-path="url(#clip0_39_663)">
                                    <path d="M2 24C2 8 8 2 24 2C40 2 46 8 46 24C46 40 40 46 24 46C8 46 2 40 2 24Z" fill="#0B0909" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5398 32.96H17.9998C17.0944 32.9495 16.2297 32.5824 15.5932 31.9384C14.9567 31.2944 14.5997 30.4255 14.5998 29.52V21.62L12.1598 17.44C12.0582 17.264 12.0046 17.0644 12.0044 16.8612C12.0042 16.6579 12.0574 16.4582 12.1587 16.282C12.2599 16.1058 12.4057 15.9593 12.5814 15.8571C12.7571 15.755 12.9566 15.7008 13.1598 15.7H32.5398C32.9949 15.6974 33.446 15.785 33.867 15.958C34.288 16.1309 34.6705 16.3857 34.9923 16.7075C35.3141 17.0293 35.5689 17.4118 35.7418 17.8328C35.9148 18.2538 36.0025 18.7049 35.9998 19.16V29.52C35.9998 29.9734 35.9102 30.4224 35.7361 30.8411C35.5619 31.2597 35.3067 31.6399 34.9852 31.9596C34.6636 32.2793 34.2821 32.5322 33.8624 32.7039C33.4427 32.8756 32.9932 32.9626 32.5398 32.96Z" fill="#A15808" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5401 32.2999H18.0001C17.0913 32.2894 16.2235 31.9196 15.5864 31.2713C14.9494 30.623 14.5948 29.7489 14.6001 28.8399V20.9399L12.1601 16.7599C12.057 16.5855 12.0022 16.3866 12.0015 16.1839C12.0007 15.9813 12.054 15.782 12.1559 15.6068C12.2578 15.4316 12.4046 15.2867 12.5811 15.187C12.7576 15.0874 12.9575 15.0366 13.1601 15.0399H32.5401C32.9936 15.0373 33.443 15.1243 33.8627 15.296C34.2824 15.4677 34.664 15.7207 34.9855 16.0404C35.3071 16.3601 35.5622 16.7402 35.7364 17.1589C35.9105 17.5776 36.0001 18.0265 36.0001 18.4799V28.8399C36.0028 29.2951 35.9151 29.7462 35.7422 30.1672C35.5692 30.5882 35.3145 30.9706 34.9926 31.2925C34.6708 31.6143 34.2883 31.869 33.8673 32.042C33.4464 32.2149 32.9952 32.3026 32.5401 32.2999Z" fill="white" />
                                    <path d="M32.1201 18.8201H18.5001C17.992 18.8201 17.5801 19.232 17.5801 19.7401C17.5801 20.2482 17.992 20.6601 18.5001 20.6601H32.1201C32.6282 20.6601 33.0401 20.2482 33.0401 19.7401C33.0401 19.232 32.6282 18.8201 32.1201 18.8201Z" fill="#FF8906" />
                                    <path d="M32.1201 22.48H18.5001C17.992 22.48 17.5801 22.8919 17.5801 23.4C17.5801 23.9081 17.992 24.32 18.5001 24.32H32.1201C32.6282 24.32 33.0401 23.9081 33.0401 23.4C33.0401 22.8919 32.6282 22.48 32.1201 22.48Z" fill="#FF8906" />
                                    <path d="M28.4201 26.22H18.5001C17.992 26.22 17.5801 26.6319 17.5801 27.14C17.5801 27.6481 17.992 28.06 18.5001 28.06H28.4201C28.9282 28.06 29.3401 27.6481 29.3401 27.14C29.3401 26.6319 28.9282 26.22 28.4201 26.22Z" fill="#FF8906" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_39_663">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                            <div className="text-[18px] font-bold">Send Us Message</div>
                            <div>if your unable to find answer or find your product quickly, please describe your problem and tell us. we will give you solution.</div>
                            <div><Link to="/message"><button className="h-[40px] rounded-[6px] bg-[#FF8906] text-[black] font-bold w-full" type="submit">Send Message</button></Link></div>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}

export default HistoryOrder