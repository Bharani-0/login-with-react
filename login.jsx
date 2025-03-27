import{ useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(event) {
       
        if (!a.value || !b.value) {
            setError('Please enter valid username and password.');
        } else {
            alert('Login successful!');
        }
    }

    return (
        <div>
            <h1>Login Form</h1>
                <label>Username :</label>
                <input type="text" name="username" id="a" placeholder="Username" /><br></br><br></br>
                <label>Password :</label>
                <input type="password" name="password" id="b" placeholder="Password" /><br></br><br></br>
    
                {error && <div style={{color:"red"}}>{error}</div>}
                <button type="submit"
                onClick={handleSubmit}>Login</button>
    
        </div>
    )
}

export default App
