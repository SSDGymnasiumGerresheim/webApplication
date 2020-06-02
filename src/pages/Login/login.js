import React from 'react';

class Login extends React.Component{
    render(){    
        return (
        <form>
        <label>
          Name:
          <input type="text" name="name" /><br/>
          Passwort:
          <input type="password" name="password"/><br/> 
        </label>
        <input type="submit" value="Submit" />
      </form>);
    }
}
export default Login;