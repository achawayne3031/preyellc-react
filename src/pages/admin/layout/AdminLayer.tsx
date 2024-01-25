import { Outlet } from 'react-router-dom'
import './admin-layer.scss'
import React, { Suspense, lazy, useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import CssBaseline from '@mui/material/CssBaseline';
import { saveToken, saveUserData, getToken, getUserData, logUserOut } from '../../../utils/LocalStorage';
import preyellc from '../../../public/images/preyell-logo.svg'


const drawerWidth = 250;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }
  
  
const AdminLayer = (props: Props) => {

    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
   
    useEffect(() => {
        if(getToken() === null){
            navigate('/auth/login')
            setIsAuthenticated(false)
        }else{
            setIsAuthenticated(true)
        }


        

    let userLogindata = getUserData();
    setLoginUserName(userLogindata.full_name)

    });

    const [loginUserName, setLoginUserName] = useState('');

    const [toggle, setToggle] = useState(false);
    const [editMenu, setEditMenu] = useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const [anchorElSm, setAnchorElSm] = React.useState(null);

    const openSm = Boolean(anchorElSm);
    const handleClickSm = (event: any) => {
        setAnchorElSm(event.currentTarget);
    };
    const handleCloseSm = () => {
        setAnchorElSm(null);
    };

    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;


    const processLogout = () => {
        navigate('/auth/login')
        logUserOut()
    }



  return (
        <div className='dashboard-template-wrapper'>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },}}>
                <Toolbar>
                 

                    <div className='nav-header'>
                        <div className='tool-wrapper'>
                            <div className='search-wrapper'>
                                <h2>Assessment Dashboard</h2>
                                <p>Welcome back, {loginUserName}</p>
                            </div>
                            <div className='tool-btn-wrapper'>
                                <button className='btn btn-prinary' onClick={() => {processLogout()}}>Logout</button>
                            </div>
                        </div>

                        <div className='sm-toolbar-wrapper'> 
                            <div>
                            <img src={preyellc} className='img-fluid logo-img' alt="" />

                            </div>
                            <div>
                                <h5>Untitled UI</h5>
                            </div>
                        </div>

                    </div>

                    <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mt: 1, mr: 2, display: { sm: 'none' } }}
                    className='meun-btn-icon'>
                        <MenuIcon />
                    </IconButton>

                </Toolbar>

                </AppBar>

                <Box
                component="nav"
                aria-label="mailbox folders"
                >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                    keepMounted: true,
                    }}
                    sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <SideBar />

                </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        <SideBar />
                    </Drawer>
                </Box>
              
                <Box
                    component="main"
                    className='main-content-wrapper'
                    sx={{ p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                    <Outlet />
                </Box>  
            </Box>
        </div>
  )
}

export default AdminLayer

