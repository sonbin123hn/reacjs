import React from "react";

const Header = () => {
    const headerStyle ={
        background: '#333',
        color: '#fff',
        textalign: 'center',
        padding:'10px'
    }
    return (
        <header style={headerStyle}>
            <h1>Việc Cần làm</h1>
        </header>
    )  
}
export default Header;
