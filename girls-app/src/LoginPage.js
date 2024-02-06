

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './LoginPage.css'; // Import the CSS file for styling

function LoginPage({ closeLoginPopup }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSignupMode, setIsSignupMode] = useState(false); // State to track signup mode
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      email: userEmail,
      password: userPassword
    };

    fetch('https://shesafebackend.onrender.com/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigate('/');
        localStorage.setItem("username" , data.username );
        const gameUrl = `http://localhost:3001/?username=${data.username }`;
    window.open(gameUrl, '_blank');
        setUserEmail("");
        setUserPassword("");
        closeLoginPopup(); 
      })
      .catch(error => {
        console.error('Error during login:', error);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const userData = {
      username: username, // Corrected syntax: use comma instead of semicolon
      email: userEmail,
      password: userPassword
    };

    fetch('https://shesafebackend.onrender.com/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigate('/');
        localStorage.setItem("username" , data.username );
        const gameUrl = `http://localhost:3001/?username=${data.username }`;
    window.open(gameUrl, '_blank');
        setUserEmail("");
        setUserPassword("");
        closeLoginPopup(); // Close the popup after successful login
      })
      .catch(error => {
        console.error('Error during login:', error);
      });
  };

  const handleClickSignupLink = (e) => {
    e.preventDefault(); // Prevent default behavior of link
    setIsSignupMode(true); // Set signup mode to true when signup link is clicked
  }

  return (
    <div className="login-popup">
      <div className="login-form">
        <div className='closeDiv'>
          <button className="close-button" onClick={closeLoginPopup}>X</button> {/* Close button */}
        </div>
        <form>
            {isSignupMode && (
              <div className="mb-4 text-lg">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
          <div className="mb-4 text-lg">
            <input
              type="email"
              placeholder='example@gmail.com'
              value={userEmail}
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-4 text-lg">
            <input
              type="password"
              placeholder="*"
              value={userPassword}
              onChange={handlePasswordChange}
            />
          </div>


          <div className="mb-6">
            {isSignupMode ? (
              <span className="ml-2 text-sm">Already have an account? <button className="signup-link" onClick={() => setIsSignupMode(false)}>Login</button></span>
            ) : (
              <span className="ml-2 text-sm">You still not have an account? <button className="signup-link" onClick={handleClickSignupLink}>Signup</button></span>
            )}
          </div>
          <div className="mt-8">
            <button
              type="button"
              className='loginButton'
              onClick={isSignupMode ? handleSignup : handleLogin} // Use appropriate function based on mode
            >
              {isSignupMode ? "Signup" : "Login"} {/* Change button text based on mode */}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;