import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

function Header(){
    return (
        <header>
            <div className="g-icon"><GitHubIcon /></div>
            <h1> Github Profile Finder</h1>
        </header>
    );
}

export default Header;