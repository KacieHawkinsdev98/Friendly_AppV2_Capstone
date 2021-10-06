import React from 'react';
import {Link} from 'react-router-dom'





const NavBar = ({ user }) => {
    return (
        
        <div>
            {user && <h4> Welcome! {user.username}</h4>}
            <ul>
                <li>
                <Link to='/'>Sign Up</Link>
                </li>
                <li>
                <Link to='/profile'>Profile</Link>
                </li>
                {!user && 
                <React.Fragment>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    </React.Fragment>
                }
            </ul>
        </div>

      );
  };
  
  export default NavBar;