import React, {useState} from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import DisplayData from './DisplayData';
import { FaGithub } from 'react-icons/fa';
const Profiles = () => {

    const [data, setData] = useState({})
    const [username, setUsername] = useState("")
    const [reposi, setReposi] = useState([])

    const onChangeHandler = e => {
        setUsername(e.target.value);
    };

    const submitHandler = async e => {
        e.preventDefault();

        const profile = await fetch(`http://api.github.com/users/${username}`);
        const profileJson = await profile.json()
        console.log(profileJson)

        const reposi = await fetch(profileJson.repos_url);
        const repoJson = await reposi.json();
        console.log(repoJson);

        if (profileJson) {
            setData(profileJson);
            setReposi(repoJson);
        }
    }
    return (
        <div>
         <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="#home"> <FaGithub></FaGithub> </Navbar.Brand>
         <Form inline>
         <FormControl type="text" value={username} onChange={onChangeHandler} placeholder="Search or Jump to..." />
         <Button variant="outline-info" onClick={submitHandler}>Search</Button>
        </Form>
       </Navbar>
       <DisplayData data={data} reposi={reposi}/>
       <br></br>
        </div>
        
    )
}

export default Profiles
