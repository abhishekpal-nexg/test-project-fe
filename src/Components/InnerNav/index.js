// import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
// import './style.css'
// // import axios from 'axios'

// import { Link } from 'react-router-dom'
// // import MegaMenu from '../MegaMenu'
// const InnerNav = ({ menu }) => {
//   const [nav, setNav] = useState(false)
//   const [bold, setBold] = useState(0)
//   const location = useLocation()
//   useEffect(() => {
//     if (location.pathname === '/media/video') {
//       setBold(1)
//     } else {
//       setBold(0)
//     }
//   }, [])
//   return (
//     <>
//       <div className="inner-nav-container">
//         <div className="mega-nav">
//           {/* <div className="hamburger" onClick={() => setNav(!nav)}>
//             {menu.color === 'black'
//               ? CommonHamburger1
//               : menu.color === 'white'
//                 ? CommonHamburger
//                 : Hamburger}
//           </div> */}
//           {/* <div className="main-logo">
//             <Link to="/">
//               {menu.color === 'orange'
//                 ? legacy1
//                 : menu.color === 'black'
//                   ? MainLogo1
//                   : MainLogo}
//             </Link>
//           </div> */}
//           <div className="career-navigation-sm">
//             <ul>
//               {menu.menuItems.map((items) => {
//                 return (
//                   <Link key={items.title} to={items.url}>
//                     <li
//                       className={
//                         menu.title === items.innerTitle ? 'nav-active' : ''
//                       }
//                     >
//                       {items.name}
//                     </li>
//                   </Link>
//                 )
//               })}
//             </ul>
//           </div>
//           {/* <div className="user-container">
//             {menu.title==='Shop'
//               ?    <Link to='/shop'>
//                 { Cart } </Link>
//               :null
//             }
//             <Link to="/sign-in">
//               {menu.color === 'orange'
//                 ? User
//                 : menu.color === 'white'
//                   ? CommonUser
//                   : CommonUser1}
//             </Link>
//           </div> */}
//         </div>
//         <div
//           className={'career-navigation-lg'}
//           id={menu.title === 'gallery' ? 'toggles' : ''}
//         >
//           {menu.title === 'gallery' && (
//             <ul id="gallery-toggle">
//               <Link to="/media">
//                 <li style={bold === 0 ? { fontWeight: 'bold' } : {}}>Images</li>
//               </Link>
//               <Link to="/media/video">
//                 <li
//                   style={
//                     bold === 1
//                       ? { borderRight: '0', fontWeight: 'bold' }
//                       : { borderRight: '0' }
//                   }
//                 >
//                   Videos
//                 </li>
//               </Link>
//             </ul>
//           )}
//           <ul>
//             {menu.menuItems.map((items) => {
//               return (
//                 <Link key={items.title} to={items.url}>
//                   <li
//                     className={
//                       menu.title === items.innerTitle ? 'nav-active' : ''
//                     }
//                     style={
//                       menu.menuColor === 'black'
//                         ? { color: 'black', borderRight: '1px solid black' }
//                         : { color: 'white', borderRight: '1px solid white' }
//                     }
//                   >
//                     {items.name}
//                   </li>
//                 </Link>
//               )
//             })}
//           </ul>
//         </div>
//       </div>
//       {nav && (
//         <div
//           style={{
//             position: 'absolute',
//             top: '0',
//             left: '0',
//             width: '100vw',
//             height: '100vh',
//             zIndex: '200',
//           }}
//         >
//           {/* <MegaMenu setNav={setNav} /> */}
//         </div>
//       )}
//     </>
//   )
// }
// export default InnerNav