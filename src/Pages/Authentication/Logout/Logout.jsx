import useAuth from "../../../hooks/useAuth";

const Logout = () => {

    const {logOut} = useAuth()

    const handleLogOut = ()=>{
        logOut()
    }

    return (
        <div>
            <button onClick={handleLogOut} className="btn btn-soft">LogOut</button>
        </div>
    );
};

export default Logout;