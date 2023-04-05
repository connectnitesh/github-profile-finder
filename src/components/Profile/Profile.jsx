import React, { useState } from "react";
import Details from "../Details/Details";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';


function Profile(){
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repos, setRepos] = useState([]);
    
    function handleChange(e){
        setUsername(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        const userData = await fetch(`https://api.github.com/users/${username}`);
        const userDataJson = await userData.json();

        const reposData = await fetch(userDataJson.repos_url);
        const reposJson = await reposData.json();

        if(userDataJson){
            setData(userDataJson);
            setRepos(reposJson);
        }

        setUsername('');
    }

    return (
        <div className="profile">
            <div className="content">
                <Input
                onChange={handleChange} value={username}
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
                /> 
                <Button onClick={handleSubmit} variant="contained">Search</Button>
            </div>
            <Details data={data} repos={repos}/>
        </div>
    )
}

export default Profile;