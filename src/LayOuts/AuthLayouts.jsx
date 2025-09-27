import { Link, Outlet } from 'react-router'
import authImg from "../../src/assets/brands/authImage.png"
import Logo from "../../public/Friendly Wordmark Logo for Easy Drop.png"


const AuthLayouts = () => {
    return (
        <div className=" bg-base-200 p-10">
            <Link to='/'>
            <img className="w-20  h-16 " src={Logo} alt="" /></Link>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img
                        src={authImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayouts;