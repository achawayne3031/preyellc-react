import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/verified.scss'

import { useNavigate } from 'react-router-dom';





const Verified = () => {


    const navigate = useNavigate()


    const goToLogin = () => {
        navigate('/auth/login')
    }


    return <>
    
            <div className='container'>
                <Row className='gx-5 gy-5 mt-3'>
                    <Col xs={12} md={4}></Col>

                    <Col xs={12} md={4}>

                        <div className='text-center'>
                            <div>
                                <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"/>
                                    <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" strokeWidth="10"/>
                                    <path d="M44.6667 31.9267V33C44.6652 35.5158 43.8506 37.9638 42.3442 39.9788C40.8379 41.9938 38.7205 43.4679 36.3079 44.1812C33.8953 44.8945 31.3168 44.8089 28.9569 43.937C26.597 43.0652 24.5821 41.4538 23.2128 39.3433C21.8435 37.2327 21.1931 34.7361 21.3586 32.2257C21.5241 29.7153 22.4967 27.3257 24.1313 25.4133C25.7659 23.5008 27.9749 22.168 30.4289 21.6135C32.8829 21.0591 35.4503 21.3127 37.7483 22.3367M44.6667 23.6667L33 35.345L29.5 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>

                            <div className='verified-text-wrapper'>
                                <h4>Account verified</h4>
                                <p>Click below to log in.</p>
                            </div>

                            <div className='verified-btn-wrapper'>
                                <button onClick={() => {goToLogin()}} className='btn btn-primary'>Continue</button>
                            </div>

                        </div>
                    


                    </Col>
                </Row>
            </div>
        </>





}


export default Verified
