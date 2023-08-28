import React, { useState } from "react";

function Details(props) {

  return (
    <div className="details">
      <div className="container">
        <div className="left-container">
          {!props.data.avatar_url ? (
            " "
          ) : (
            <img
              alt="profile-data"
              src={props.data.avatar_url}
              style={{ width: 200, height: 200 }}
            />
          )}
          <h3>{props.data.login}</h3>
        </div>
        <div className="right-container">
          <h2>{props.data.name}</h2>
          <p>{props.data.bio}</p>
          {!props.data.blog ? (
            " "
          ) : (
          <a
            href={props.data.blog}
            target="_blank"
            rel="noreferrer"
          >
            {"Website: " + props.data.blog}
          </a>
          )}
          {!props.data.email ? (
            " "
          ) : (
          <a
            href={"mailto:"+props.data.email}
            target="_blank"
            rel="noreferrer"
          >
            {"email: " + props.data.email}
          </a>
          )}
          {!props.data.followers_url ? (
            " "
          ) : (
          <a
            href={props.data.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {"Followers: " + props.data.followers}
          </a>
          )}
          {!props.data.following ? (
            " "
          ) : (
            <a
            href={props.data.html_url}
            target="_blank"
            rel="noreferrer"
          > 
            {"Following: " + props.data.following}
          </a>
          )}
          
        </div>
      </div>
      <div className="repos">
        <div className="repo-content">
          {props.repos.map((repo) => (
            <a
              href={repo.html_url}
              className="repo-header"
              target="_blank"
              rel="noreferrer"
            >
              {repo.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
