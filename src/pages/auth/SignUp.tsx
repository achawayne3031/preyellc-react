import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Input from '../../components/form/Input';
import { useFormik } from 'formik';
import { SignUpValidation } from "./../../validations/AuthValidation";
import { NavLink } from "react-router-dom";
import { useSignUpMutation, useLoginMutation } from '../../store/user/api';
import { NotifyAlert } from '../../utils/NotifyAlert';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { saveToken, saveUserData, getToken, saveEventRef } from '../../utils/LocalStorage';
import preyellc from '../../public/images/preyell-logo.svg'
import mockup from '../../public/images/mockup-2.svg'
import '../../css/sign-up.scss'












const SignUp = () => {
    useEffect(() => {
      

      },[]);
    
      const navigate = useNavigate()
      const [registerUser, { isLoading }] = useSignUpMutation();
      const [loginUser] = useLoginMutation();
    
        const [formData, setFormData] = useState({
          full_name: "",
          email: "",
          password: "",
          username: "",
        });
    
    
        const { values, errors, handleSubmit, setFieldValue, touched } = useFormik({
          initialValues: {  
            full_name: "",
            email: "",
            password: "",
            username: "",
        },
          validationSchema: SignUpValidation,
          onSubmit: () => initRequest()
        })
    
    
        const initRequest = () => {   
           
          registerUser(values)
          .unwrap()
          .then((res) => {

            navigate('/auth/otp-verify')
            NotifyAlert(res.message, 'success')
            saveUserData(values)

          })
          .catch((e) => {
            if(e.data && e.data !== null){
              NotifyAlert(e.data.message, 'error')
            }else{
              NotifyAlert('No server response, Server error', 'error')
            }
          });
    
        }
    
    
    
        const loginUserInit = () => {
    
          let data = {
            email: values.email,
            password: values.password
          }
    
          loginUser(data)
          .unwrap()
          .then((res) => {
            NotifyAlert('Login successful', 'success')
           // saveToken(res.token);
           // saveUserData(res.user)
            navigate('/auth/verified')
          })
          .catch((e) => {
            if(e.data !== null){
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



    const goToLogin = () => {
        navigate('/auth/login')
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
                    <h3 className='basic-info'>Sign Up</h3>
                    <p>Start your 30-day free trial.</p>
                </div>
            
                <div className='form-wrapper'>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12'>  
                            <Input
                            type="text"
                            label="Name*"
                            value={values.full_name}
                            name="full_name"
                            error={Boolean(errors.full_name)}
                            errorText={errors.full_name}
                            onChange={handleChange}
                            placeholder="Please enter your name"
                            />
                        </div>
                    </div>

                    <div className='row mt-1'>
                    <div className='col-md-12 col-sm-12'>  
                        <Input
                            type="text"
                            label="Username*"
                            value={values.username}
                            name="username"
                            error={Boolean(errors.username)}
                            errorText={errors.username}
                            onChange={handleChange}
                            placeholder="Please enter your username"
                        />
                    </div>
                    </div>

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
                </div>

                <div className='text-center mt-3'>
                    <button disabled={isLoading} onClick={() => {handleSubmit()}} className='btn-block signup-btn'>
                      { !isLoading ? <><span>Create account</span></>  : <><span><div className="spinner-border text-light spinner-border-sm"></div></span></> }
                    </button>
                    <p className='already-text'>
                        Already have an account?
                        <span className='' onClick={() => {goToLogin()}}>Log In</span>
                    </p>
                </div>





                <div className='footer-wrapper'>
                    <div>
                        <p>© Untitled UI 2077</p>
                    </div>
                    
                    <div>
                        <p>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6668 3.99996C14.6668 3.26663 14.0668 2.66663 13.3335 2.66663H2.66683C1.9335 2.66663 1.3335 3.26663 1.3335 3.99996M14.6668 3.99996V12C14.6668 12.7333 14.0668 13.3333 13.3335 13.3333H2.66683C1.9335 13.3333 1.3335 12.7333 1.3335 12V3.99996M14.6668 3.99996L8.00016 8.66663L1.3335 3.99996" stroke="#667085" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            help@untitledui.com
                        </p>
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

export default SignUp
