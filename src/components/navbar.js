import '../styles/css/pages.css'

const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="navContainer">
                <div className="logodiv">
                    <span>Travel<span className="logo">Guru</span></span>
                </div>
                <div className="navBtns">
                    <button className="navbtn">Login</button>
                    <button className="navbtn">Register</button>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;