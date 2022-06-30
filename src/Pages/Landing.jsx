import {Link} from 'react-router-dom'


const Landing = (props) => {
    return(
      <div className="main-content-landing">

          <h1>WELCOME TO TEETIME</h1>
     

          <Link to='/login' className="landing-link btn light-green darken-2" >Login</Link>
          <h4>Not a member?</h4> <Link to='/register' className="landing-link"> Register Here </Link>
</div>
     
    )
}

export default Landing; 