import "../Styles/MenuBar.css"

const logo = require('../assets/logo.png')

export default function MenuBar (){
    return(
    <div className="header-container">
        <img src={logo} alt="logo" />
    </div>
    )
}