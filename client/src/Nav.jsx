import { Outlet, Link, useNavigate } from 'react-router-dom'



export const Nav = ({user, setToken, setUser}) => {
  const navigate = useNavigate()

  const loginButton = (
    <Link to="login">
      <button style={{ float: "right", padding: "7px" }}>Login</button>
    </Link>
  )
  
  const userSignedIn = (
    <h3 style={{ float: "right", padding: "7px", fontSize: '12px' }}>Hello, {user.name}</h3>
  )

  const signupButton = (
    <Link to="/signup">
      <button style={{ float: "right", padding: "7px" }}>Sign Up</button>
    </Link>
  )

  const signoutButton = (
    <button onClick={handleSignout} style={{ float: "right", padding: "7px" }}>Sign Out</button>
  )

  function handleSignout() {
    localStorage.clear()
    setToken('')
    setUser({})
    navigate('/')
  }

  return (
    <>
    <nav
      style={{
        background: "black",
        width: "100%",
        color: "white",
        display: "flex",
      }}
    >
      <Link to="/">
        <h1 style={{ margin: 0, flexGrow: 9 }}>Navigation</h1>     
      </Link>
      <div style={{ flexGrow: 1 }}>
        
        {
          user.name ? signoutButton : signupButton
        }
        {
          user.name ? userSignedIn : loginButton
        }
      </div>
    </nav>
    <Outlet/>
    </>
  );
};
