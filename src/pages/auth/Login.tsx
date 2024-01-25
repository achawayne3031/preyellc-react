import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import '../../css/login.scss'
import Input from '../../components/form/Input';
import { useFormik } from 'formik';
import { LoginValidation } from "./../../validations/AuthValidation";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from '../../store/user/api';
import { NotifyAlert } from '../../utils/NotifyAlert';
import Navbar from 'react-bootstrap/Navbar';
import { saveToken, saveUserData, getToken, saveEventRef } from '../../utils/LocalStorage';
import preyellc from '../../public/images/preyell-logo.svg'
import mockup from '../../public/images/mockup-2.svg'



const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
  

},[]);




  const [loginUser, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });



const { values, errors, handleSubmit, setFieldValue, touched } = useFormik({
  initialValues: { email: '', password: '' },
  validationSchema: LoginValidation,
  onSubmit: () => initRequest()
})

const initRequest = () => {
  loginUser(values)
  .unwrap()
  .then((res) => {
    if(res.success){
      NotifyAlert(res.message, 'success')
      saveToken(res.token);
      saveUserData(res.data)
      navigate('/dashboard')
    }else{
      NotifyAlert(res.message, 'error')
    
    }
  
  })
  .catch((e) => {
    if(e.data && e.data !== null){
      NotifyAlert(e.data.message, 'error')
    }else{
      NotifyAlert('No server response, Server error', 'error')
    }
  });
}


const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const name = event.target.name;
  const value = event.target.value;
  setFieldValue(name, value)
}



const goToSignUp = () => {
  navigate('/auth/signup')
}




return (
  <>
      {/* Nav Bar */}
      <div>
          <Navbar fixed='top' className="bg-body-tertiary">
              <Container fluid>
                  <Navbar.Brand>
                      <NavLink className="navbar-item" to="/">
                          <img src={preyellc} className='img-fluid logo-img' alt="" />
                          <span className='logo-text'>Untitled</span>
                          
                      </NavLink>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                      {/* <NavLink
                      className="navbar-item"
                          to="/auth/login"
                      >
                          Sign In
                      </NavLink> */}
                  </Navbar.Text>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </div>


    <div className='mt-5'>
      <div className='overview-wrapper'>
          <div className='form-section'>
              <div>
                  <h3 className='basic-info'>Log In</h3>
                  <p>Welcome back! Please enter your details.</p>
              </div>
          
              <div className='form-wrapper'>
                 
                  <div className='row mt-1'>
                      <div className='col-md-12 col-12'>
                      <Input
                          type="text"
                          label="Email"
                          value={values.email}
                          name="email"
                          error={Boolean(errors.email)}
                          errorText={errors.email}
                          onChange={handleChange}
                          placeholder="Please enter your email"
                      />
                      </div>
                  </div>
                  <div className='row mt-1'>
                      <div className='col-md-12 col-12'>
                      <Input
                          type="password"
                          label="Password*"
                          value={values.password}
                          name="password"
                          error={Boolean(errors.password)}
                          errorText={errors.password}
                          onChange={handleChange}
                          placeholder="Please enter your password"
                          showPasswordIcon={true}
                      />
                      </div>

                  
                  </div>

                  <div className='forgot-pass'>
                    <div> 
                      <span> <input type="checkbox" className='remember-text' /> Remember for 30 days</span>
                    </div>
                    <div>
                      <span>Forgot Password</span>
                    </div>

                  </div>


              </div>

              <div className='text-center mt-3'>
                  <button disabled={isLoading} onClick={() => {handleSubmit()}} className='btn-block signup-btn'>
                    { !isLoading ? <><span>Sign In</span></>  : <><span><div className="spinner-border text-light spinner-border-sm"></div></span></> }
                  </button>
                  <p className='already-text'>
                      Don't have an account ?
                      <span className='' onClick={() => {goToSignUp()}}>Sign Up</span>
                  </p>
              </div>


              <div className='footer-wrapper'>
                  <div>
                      <p>© Untitled UI 2077</p>
                  </div>
              </div>
          </div>



          <div className='mockup-section'>
              <div className='text-center'>
                  <img src={mockup} className='mockup-logo' alt="" />
              </div>
          </div>
      </div>

    </div>
  </>
)

 



}

export default Login

