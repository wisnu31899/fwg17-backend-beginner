import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiCoffee, FiLogOut, FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi"
import axios from "axios"


export const TransparantNavbar = () =>{
    const [menuOpen, setMenuOpen] = React.useState(false)
    const [search, setSearch] = React.useState(false)
    return(
        <>
        <nav
                className={`${!menuOpen ? 'h-[80px]' : ''}shadow bg-[rgba(11, 9, 9, 0.13)] fixed fill-[#FFFFFF] text-[#FFFFFF] px-20 py-4 md:py-[30px] flex flex-col gap-10 md:gap-0 md:flex-row items-center md:h-20 w-full`}>
                <div className="flex flex-col md:flex-row flex-1 w-full gap-2 md:gap-0">
                    <div className="text-xl font-bold flex justify-between mt-3 md:mt-0">
                        <div className="flex gap-[10px] md:gap-[20px]">
                            <FiCoffee className="fill-[#FFFFFF]" />
                            <h1>Coffee Shop</h1>
                        </div>
                        <ul className="flex gap-10 md:hidden">
                            <li><FiShoppingCart /></li>
                            <li><button onClick={() => setMenuOpen(!menuOpen)}><FiMenu /></button></li>
                        </ul>
                    </div>
                    <ul className={`${!menuOpen ? 'hidden' : ''} md:flex flex-col md:flex-row gap-5 flex-1 justify-center items-center md:items-start w-full`}>
                        <li className="w-full md:w-auto"><Link className="hover:border-b-2 pb-2 -mt-2 hover:border-orange-500" to="/">Home</Link></li>
                        <li className="w-full md:w-auto"><Link className="hover:border-b-2 pb-2 -mt-2 hover:border-orange-500" to="/product">Product</Link></li>
                    </ul>
                </div>
                <div className={`${!menuOpen ? 'hidden' : ''} flex-1 md:flex w-full`}>
                    <ul className="flex flex-col md:flex-row md:justify-end gap-[20px] items-center w-full">
                        <li className=" w-full md:w-auto hidden md:block">
                            <button className="flex items-center relative" onClick={() => setSearch(!search)}><input className={`${!search ? 'hidden' : ''} text-black px-1 py-2`} type="text" placeholder="Search" /><FiSearch size={30} className="text-black -ml-[30px]" /></button>
                        </li>
                        <li className="w-full md:w-auto"><Link to="/login"><button className="px-5 py-2 bg-transparent border border-black text-black font-bold  rounded w-full">Sign In</button></Link></li>
                        <li className="w-full md:w-auto"><Link to="/register"><button className="px-5 py-2 bg-orange-500 border text-black font-bold border-orange-500 rounded w-full">Sign Up</button></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


const Navbar = () => {

    const [user, setUser] = React.useState({})
        //get profile
        const getProfile = async ()=>{
            const {data} = await axios.get('http://localhost:5050/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(data.results[0].picture)
                setUser(data.results[0].picture)
        }
        React.useEffect(()=>{
            getProfile()
        },[])

    const navigate = useNavigate()
    const [token, setToken] = React.useState(window.localStorage.getItem('token'))
    const logOut = () =>{
        setToken(null)
        window.localStorage.removeItem('token')
        navigate('/login')
    }

    const [menuOpen, setMenuOpen] = React.useState(false)

    const [search, setSearch] = React.useState(false)


    return (
        <>
                {/* overvlowhidden untuk menyembunyikan menu di humberger menu */}
              <nav className={`${!menuOpen ? 'h-[80px]' : '' }  bg-black bg-[rgba(0,0,0,0,5)] text-white px-20 py-4 md:py-[30px] flex flex-col gap-10 md:gap-0 md:flex-row items-center md:h-20 w-full`}>
                <div className="flex flex-col md:flex-row flex-1 w-full gap-2 md:gap-0">
                    <div className="text-xl font-bold flex justify-between mt-3 md:mt-0">
                        <div className="flex gap-[10px] md:gap-[20px]">
                            <FiCoffee className="fill-[#FFFFFF]"/>
                            <h1>Coffee Shop</h1>
                        </div>
                        <ul className="flex gap-10 md:hidden">
                            <li><FiShoppingCart size={25}/></li>
                            <li><button onClick={()=>setMenuOpen(!menuOpen)}><FiMenu size={25}/></button></li>
                        </ul>
                    </div>
                    <ul className={`${!menuOpen ? 'hidden' : '' } md:flex flex-col md:flex-row gap-5 flex-1 justify-center items-center md:items-start w-full`}>
                        <li className="w-full md:w-auto"><Link className="hover:border-b-2 pb-1 hover:border-orange-500" to="/">Home</Link></li>
                        <li className="w-full md:w-auto"><Link className="hover:border-b-2 pb-1 hover:border-orange-500" to="/product">Product</Link></li>
                    </ul>
                </div>
                <div className={`${!menuOpen ? 'hidden' : '' } flex-1 md:flex w-full`}>
                    <ul className="flex flex-col md:flex-row md:justify-end gap-[20px] items-center w-full">
                        <li className=" w-full md:w-auto hidden md:block">
                        <button className="flex items-center relative" onClick={()=>setSearch(!search)}><input className={`${!search? 'hidden' : '' } text-black px-1 py-1`} type="text" placeholder="Search" /><FiSearch size={30} className="text-orange-500 -ml-[30px]"/></button>
                        </li>
                        <li className="w-full md:w-auto hidden md:block"><Link className="hover:text-[#FF8906]" to="/detailproduct"><FiShoppingCart size={25} className="text-white"/></Link></li>
                        <li className="w-full md:w-auto">
                            <div className="w-full flex flex-col md:flex-row gap-[10px] md:w-auto">
                                {token && <>
                                    <Link to="/profile">
                                        {/* <div className="md:block hidden bg-white px-1 py-2 md:w-[40px] h-[40px] rounded-full md:w-full"><img src={`http://localhost:5050/profile/${user}`} alt=""/></div> */}
                                        <div className="md:block hidden bg-orange-500 px-1 py-2 md:w-[40px] h-[40px] rounded-full md:w-full"><FiUser size={25} className="text-white"/></div>
                                        </Link>
                                        <button onClick={logOut} type="button" className="md:flex justify-center md:w-[40px] h-[40px] rounded-full hidden px-1 py-2 bg-orange-500 border border-orange-500 rounded w-full"><FiLogOut size={25} className="text-white"/></button> 
                                        </>}
                                {token && <>
                                    <Link to="/profile">
                                        <button type="button" className="md:hidden block px-1 py-2 bg-transparent border border-white text-white font-bold  rounded  md:w-[100px] w-full">Profile</button>
                                        </Link>
                                <button onClick={logOut} type="button" className="md:hidden block px-1 py-2 bg-orange-500 border border-orange-500 rounded md:w-[100px] w-full">Log Out</button>
                                </>}
                                {!token && <>
                                    <Link to="/login"><button type="button" className="px-1 py-2 bg-transparent border border-white text-white font-bold  rounded md:w-[100px] w-full">Sign In</button></Link>
                                    <Link to="/register"><button type="button" className="px-1 py-2 bg-orange-500 border border-orange-500 rounded md:w-[100px] w-full">Sign Up</button></Link>
                                </>}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}



export default Navbar