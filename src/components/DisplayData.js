import React from 'react'
import './display.css'
import { ListGroupItem } from 'react-bootstrap';
import { FaGithub, FaGlobeAfrica} from 'react-icons/fa';
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { GoIssueOpened } from "react-icons/go";

const DisplayData = ({data, reposi}) => {
    return (
       <div>
       <div className="background">
       {!data.avatar_url ? " " : (
        <img className="img" src={data.avatar_url} alt={data.avatar_url}></img>
       )}
       <p><strong>{data.name}</strong></p>  
       <div>{data.bio}</div>
       <div>{data.location}</div>
       </div>
       <div>
       {reposi.map(repo => (
        <div key={repo.name}>
        <ListGroupItem action href={repo.html_url}><FaGithub/><h5 className='color'>{repo.name}</h5><br/>
        <p>{repo.description}</p><br></br><strong><FaGlobeAfrica/> {repo.language}</strong>&ensp;
        <span><AiOutlineFork/>{repo.forks}</span>&ensp;
        <span><AiOutlineStar/>{repo.stargazers_count}</span>&ensp;
        <span><GoIssueOpened/>{repo.open_issues}</span>
        </ListGroupItem>
        </div>
       ))}
       </div>
       <div></div>
       </div>
       
    )
}

export default DisplayData
