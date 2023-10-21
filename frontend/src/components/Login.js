import React from "react";
class Login extends React.Component {
    render() {
        return (
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action>
                        <h1 style={{ paddingTop: '15px' }}> Create Account</h1>
                        <input type="text" name="fname" placeholder="First Name" />
                        <input type="text" name="lname" placeholder="Last Name" />
                        <input type="text" name="address" placeholder="Address" />
                        <input type="password" name="password" placeholder="Password" />
                        <input type="text" name="phone" placeholder="Phone Number" />
                        <button style={{ marginTop: '10px' }}> Create Account</button>
                        <h5>Already have an account! <a className="ghost" id="signIn" style={{ color: 'blue' }}><u>Sign In</u></a></h5>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 style={{ paddingBottom: '15px' }}> Login Now</h1>
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <a href="#" style={{ paddingLeft: '150px', fontWeight: 'bold' }}> Forgot Your Password?</a>
                        <button style={{ marginTop: '10px' }}> Let Me In...</button>
                        <h5>New to here! <a className="ghost" id="signUp" style={{ color: 'blue' }}><u>Sign Up</u></a></h5>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <img src="https://assets.themighty.com/image/upload/f_auto,fl_lossy,q_auto,c_fill,w_928,h_1115/v1656073865/prod/uploads/62b5ae88dfb47b0025f843ca.jpg" alt="movie-1" height={480} width={500} />
                        </div>
                        <div className="overlay-panel overlay-right">
                            <img src="https://media.licdn.com/dms/image/C5622AQHj1bwSmWAoow/feedshare-shrink_2048_1536/0/1661227393550?e=1698883200&v=beta&t=dL4wfWApIyce4ulCeCGLLifJ346LbdbmWFlbckyQfps" alt="movie-2" height={480} width={500} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;