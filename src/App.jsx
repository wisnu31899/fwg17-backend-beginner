// ini tempat customisasi/edit codingan

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"
import Product from "./pages/Product"
import HistoryOrder from "./pages/HistoryOrder"
import DetailOrder from './pages/DetailOrder'
import CheckoutProduct from "./pages/CheckoutProduct"
import Profile from "./pages/Profile"
import Message from "./pages/Message"
import PrivateRoute from './components/PrivateRoute'
import DetailProduct from './pages/DetailProduct'



const router = createBrowserRouter([
{
  path: '/',
  element: <Home />
},
// tambahkan page lain seperlunya dibawah ini dan jangan lupa import
{
  path: '/login',
  element: <Login />
},
{
  path: '/register',
  element: <Register />
},
{
  path: '/forgotpassword',
  element: <ForgotPassword />
},
{
  path: '/product',
  element: <Product />
},
{
  path: '/historyorder',
  element: (<PrivateRoute><HistoryOrder /></PrivateRoute>)
},
{
path: '/product/:id',
element: <DetailProduct/>
},
{
  path: '/detailorder',
  element: <DetailOrder />
},
{
  path: '/checkoutproduct',
  element: (<PrivateRoute><CheckoutProduct /></PrivateRoute>)
},
{
  path: '/profile',
  element: (<PrivateRoute><Profile /></PrivateRoute>)
},
{
  path: '/message',
  element: <Message />
}
])

const App = ()=>{
  return(
    <RouterProvider router={router} />
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }// //ini App bawaan 

// const App = () => {
  
//     // // memanggil data dari backend
//   // React.useEffect(() => {
//   //   console.log('hanya sebagai componen did mount')
//   //   // perlu sebuah data untuk disimpan sebelum halaan ditampilkan
//   //   // proses pengambilan data dari backend
//   // }, [])

//   // // deklarasi state dengan hooks useState(hasil berupa array)
//   // // example kurang tepat karena setTimeout tidak berfungsi
//   // let hello = "testing"
//   // setTimeout(()=>{
//   //   hello = "hai"
//   // },1000)
//   // // tepat karena setTimeout berfungsi
//   // // [hello, setHello] ini berupa destruct yang menggantikan 
//   // // const state = [state[0],state[1]]
//   // const [hello, setHello] = React.useState('Testing')
//   // setTimeout(() => {
//   //   setHello('hai')
//   // }, 1000)

//     // // bikin button decreas increas
//     // const [count, setCount] = React.useState(0)//ingat berupa array, jadi destruc array saja
//     // const addCount = ()=>{
//     //   setCount(count+1)// menjalankan lifecycle(reactjs) setState
//     // }
//     // const decCount = ()=>{
//     //   setCount(count-1)// menjalankan lifecycle(reactjs) setState
//     // }



//   // sebelum penggunaan RouterProvider
//   // return(
//   //   {/* sambungkan router RouterProvider */}
//   // )
// }

export default App
