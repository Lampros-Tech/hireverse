import "../Admin/Admin.css"
import Logo from "./Images/LT_logo.jpg"
function Landingpage()
{
    return(
        <div className="Navbar">
            <div className="Logo">
                <img src={Logo} alt="Logo" height={70}/>
            </div>
        </div>
    )
}
export default Landingpage