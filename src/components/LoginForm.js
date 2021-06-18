import React from "react";
import {Link} from "react-router-dom";
class LoginForm extends React.Component {
    state ={
        name: "",
        email:" ",
        password:"",
    };
    login =(e)=>{
        
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "" || this.state.password === "")
        {
            alert("all fields are mandatory");
            return;
        }
        this.props.loginFormHandler(this.state);
        this.setState({name:"", email: "", password:""});
        console.log(this.state);
    }
   
    render() {
        return (
            <div className="ui main">
                <h3>LOGIN FORM</h3>
                <form className="ui form" onSubmit={this.login} >
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
            onChange ={(e) => this.setState({name:e.target.value})}
                        />
                    </div>

                <div className="field">
                        <label>Email</label>
                        <input type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
            onChange ={(e) => this.setState({email:e.target.value})}

                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password"
                            name="password"
                            value={this.state.password}
            onChange ={(e) => this.setState({password:e.target.value})}
                             />
                    </div>
                    <div className="ui center aligned basic segment">
                      <Link to ="/home">
                        <button className="ui button blue">LOGIN</button>
                        </Link>
                    
                    
                    </div>
                    <div className="ui horizontal divider">
    Or
  </div>
  <div className="ui center aligned basic segment">
   
  <button className="ui button blue">SIGN UP</button>
 

  </div>
                </form>
            </div>
        );
    }
}
export default LoginForm;