import React, {useState} from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import DisplayData from './DisplayData';
import { FaGithub } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';
import './display.css'


const Profiles = () => {

    const [data, setData] = useState({})
    const [username, setUsername] = useState("")
    const [reposi, setReposi] = useState([])
    const [loading, setLoading] = useState(false)

    const onChangeHandler = e => {
        setUsername(e.target.value); 
    };

    const submitHandler = async e => {
        e.preventDefault();
        setLoading(true);

        const data = await fetch(`http://api.github.com/users/${username}`);
        const profileJson = await data.json()
        
        console.log(profileJson)

        const reposi = await fetch(profileJson.repos_url);
        const repoJson = await reposi.json();
        console.log(repoJson);

        if (profileJson) {
            setData(profileJson);
            setReposi(repoJson);
            setLoading(false);
        }
    }
    return (
        <div>
         <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="#"> <FaGithub></FaGithub> </Navbar.Brand>
         <Form inline>
         <FormControl type="text" value={username} onChange={onChangeHandler} placeholder="Search or Jump to..." />
         <Button variant="outline-info" onClick={submitHandler}>Search</Button>
        </Form>
       </Navbar>
       <div className='loading'>{!loading ? <DisplayData data={data} reposi={reposi}/>  : 
        <div align="center">
        <Spinner animation="border" />
        </div>
       }</div>
       
       <br></br>
        </div>
        
    )
}

export default Profiles
