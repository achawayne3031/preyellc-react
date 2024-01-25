import React, { useEffect, useState } from 'react'
import './pages.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGetUserDataMutation } from '../../../store/dashboard/api';
import PageLoader from "../../../components/loader/PageLoader";
import { saveToken, saveUserData, getToken, getUserData, logUserOut } from '../../../utils/LocalStorage';
import { useNavigate } from 'react-router-dom';








const Dashboard = () => {

  useEffect(() => {
    getAllSpeaker()
    let userLogindata = getUserData();
    setLoginUserName(userLogindata.full_name)

  }, []);


  const [getUsers, { isLoading }] = useGetUserDataMutation();
  const [userData, setUserData] = useState([]);
  const [loginUserName, setLoginUserName] = useState('');

  const navigate = useNavigate();

  
    
  const processLogout = () => {
    navigate('/auth/login')
    logUserOut()
}

  
  

  const getAllSpeaker = () => {
    let data = {}
    getUsers(data)
    .unwrap()
    .then((res: any) => {
      if(res.success){
        setUserData(res.data)
        

      }else{

      }
    })
    .catch((e) => {
      if(e.data !== null){
       /// NotifyAlert(e.data.message, 'error')
      }else{
      //  NotifyAlert('No server response, Server error', 'error')
      }
    });
  
  }



  return (
    <div className='container-fluid'>
        <Row className='gx-5 gy-4'>

          <div className='sm-screen-wrapper'>
            <h4>Assessment Dashboard</h4>
            <p>Welcome back, {loginUserName}</p>
            <button className='btn btn-primary' onClick={() => {processLogout()}}>Logout</button>
          </div>

          { isLoading ? <> <PageLoader /> </> : <>

            {userData && userData.map((item: any, index) => (

              <Col className='' key={index} xs={12} md={4}>
                <div className='content-card'>
                  <h5>Below are your details</h5>
                  <hr />

                  <div className='user-data-wrapper'>
                    <div>
                      <p>{item.full_name}</p>
                      <p>{item.email}</p>
                    </div>

                    <div>
                      <p>ID: 000{item.id}</p>
                    </div>
                  </div>
                </div>
              </Col>

            ))}




         </> }



        </Row>


     
    </div>
  )
}

export default Dashboard

