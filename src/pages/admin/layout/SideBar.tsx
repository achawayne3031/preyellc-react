import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './navbar.scss'
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import GroupIcon from '@mui/icons-material/Group';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';


import preyellc from '../../../public/images/preyell-logo.svg'



const SideBar = () => {
    const navigate = useNavigate();

  return (
        <div className='sidebar-wrapper'>
            <div className='text-center logo-header'>
                <img src={preyellc} className='img-fluid logo-img' alt="" />
                Untitled UI
            </div>

            <List>

                <Link to={"/admin/dashboard"}>
                    <ListItem disablePadding>
                            <ListItemButton>
                                <div className="sidebar__menu">
                                    <ListItemIcon className='link-icon'>
                                        <div className="sidebar__icon_i">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText className='nav-item-link sidebar__menu__text' primary="Home" />
                                </div>
                            </ListItemButton>
                    </ListItem>
                </Link>




              

            </List>
        </div>
  )
}

export default SideBar

