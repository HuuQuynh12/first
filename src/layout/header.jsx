import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
 const Header = () => {
    const [listRouter, setListRouter] = useState([
        {
            path: '/room',
            src:"https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
            content:"Phòng"
        },
        {
            path: '/view',
            src:"https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
            content:"Khung cảnh tuyệt vời"
        },
        {
            path: '/city',
            src:"https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
            content:"Thành phố nổi tiếng"
        },
        {
            path: '/pool',
            src:"https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
            content:"Hồ bơi tuyệt vời"
        },
        {
            path: '/farm',
            src:"https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
            content:"Nông trại vui vẻ"
        },
        {
            path: '/farm',
            src:"https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
            content:"Nông trại vui vẻ"
        },
        {
            path: '/farm',
            src:"https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
            content:"Nông trại vui vẻ"
        },
        {
            path: '/farm',
            src:"https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
            content:"Nông trại vui vẻ"
        },
    ]);
    const location = useLocation();
    const navigation = useNavigate();

    useEffect(() => {
        console.log("router:", location);
    }, [location]);
    const handleLogout = () => {
        localStorage.setItem("token", "false");
        navigation("/login");
    };
    return (
    <>
    <div className="fixed bg-white w-screen h-20 top-0 z-1"> 
        <img src=
        "https://imperial.edu.vn/khoahoc/wp-content/uploads/2020/11/5-sao.png"
        
        className="absolute left-20 w-16 h-16"
        ></img>

    </div>

    {/*Khung chọn phòng, thành phố, ........
        */}
    <nav className="border fixed bg-white top-20 pl-20 z-1">
        {listRouter.map(item => 
    <button className= {
        location.pathname === (item.path) ? "border-b-2  border-black m-2 unnone" : "m-2"
    }>
        <Link to={item.path}>
        <div>
           <div className="border-none">
            <div className="flex justify-center"> 
            <img src={item.src}
            width='24'
            height='24'
            />
            </div>
            <div className="text-black">{item.content}</div>
           </div>
        </div>

        </Link>
    </button>
 )}
    </nav>
    <button className="z-2 right-10 top-5 fixed bg-fuchsia-500 rounded-full p-2" onClick={handleLogout}>Logout</button>
    </>
    );
 };
 export default Header;