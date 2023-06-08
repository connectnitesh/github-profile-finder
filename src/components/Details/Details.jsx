import React from "react";

function Details(props){

    return (
        
        <div className="details">
            <div className="container">
                <div className="left-container">
                    {!props.data.avatar_url ? ( " ") : 
                    (<img alt="profile-data" src={props.data.avatar_url} 
                    sx={{ width: 200, height: 200 }} />
                    )}
                    <h3>{props.data.login}</h3>
                </div>
                <div className="right-container">
                    <h2>{props.data.name}</h2>
                    <p>{props.data.bio}</p>
                    <p>{props.data.blog}</p>
                    <p>{props.data.email}</p>
                    <a href={props.data.followers_url} target="_blank" rel="noreferrer" >
                      { props.data.followers}
                    </a>
                    <a href={props.data.following_url} target="_blank" rel="noreferrer" >
                      {props.data.following}
                    </a>
                    
                </div>
            </div>
            <div className="repos">
                {props.repos? " " : <h1>Nitesh</h1>}
                <div className="content">
                {props.repos.map(repo => (
                    <a href={repo.html_url} className="header" target="_blank" rel="noreferrer" >
                      {repo.name}
                    </a>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Details;