import React, { useState } from 'react';
import Header from '../components/Header';
import './Dashboard.css'; 
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Calendar from "moedim";
import UserImage from "../assets/img/about-author.jpg";
import DashboardSection from '../components/DashboardSection';
import ClientsSection from '../components/ClientsSection';
import CandidatesSection from '../components/CandidatesSection';
import Finance from "../components/Finance";
import Inbox from "../components/Inbox";
import Logs from "../components/Logs";
import ShiftManagement from "../components/ShiftManagement";
import Users from "../components/Users";

const Dashboard = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
    
    
  
    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
      };

      const renderSection = () => {
        switch(activeMenuItem) {
          case 'Dashboard':
            return <DashboardSection />;
          case 'Clients':
            return <ClientsSection />;
          case 'Candidates':
            return <CandidatesSection />;
          case 'Finance':
            return <Finance />;
          case 'Inbox':
            return <Inbox />;
          case 'Logs':
            return <Logs />;
          case 'Shift Management':
            return <ShiftManagement />;
          case 'Users':
            return <Users />;
          default:
            return null;
        }
      };
  
    

  return (
    <section className={`dashboard-wrapper ${isRightSidebarOpen ? 'right-sidebar-open' : ''}`}>
      <Header />
      <div className='button_div d-flex justify-content-between'>
      
        
      </div>
     
      <div className="dashboard-container">
        <div className="sidebar-left">
          <ul>
            <li className={activeMenuItem === 'Dashboard' ? 'active' : ''} onClick={() => handleMenuItemClick('Dashboard')}><SpaceDashboardIcon className='list_icon' /> Dashboard  <ArrowForwardIosIcon className='arrow_icon' /> </li>
            <li className={activeMenuItem === 'Clients' ? 'active' : ''} onClick={() => handleMenuItemClick('Clients')}><PersonAddAltIcon className='list_icon' /> Clients <ArrowForwardIosIcon className='arrow_icon' /></li>
            <li className={activeMenuItem === 'Candidates' ? 'active' : ''} onClick={() => handleMenuItemClick('Candidates')}><GroupIcon className='list_icon' /> Candidates <ArrowForwardIosIcon className='arrow_icon' /></li>
            <li className={activeMenuItem === 'Shift Management' ? 'active' : ''} onClick={() => handleMenuItemClick('Shift Management')}><CalendarTodayIcon className='list_icon' /> Shift Management <ArrowForwardIosIcon className='arrow_icon' /></li>
            <li className={activeMenuItem === 'Inbox' ? 'active' : ''} onClick={() => handleMenuItemClick('Inbox')}><MarkEmailUnreadIcon className='list_icon' /> Inbox <ArrowForwardIosIcon className='arrow_icon' /></li>
            <li className={activeMenuItem === 'Logs' ? 'active' : ''} onClick={() => handleMenuItemClick('Logs')}><FilePresentIcon className='list_icon' /> Logs <ArrowForwardIosIcon className='arrow_icon' /></li>
            <li className={activeMenuItem === 'Users' ? 'active' : ''} onClick={() => handleMenuItemClick('Users')}><GroupIcon className='list_icon' /> Users <ArrowForwardIosIcon className='arrow_icon' /></li>
            <li className={activeMenuItem === 'Finance' ? 'active' : ''} onClick={() => handleMenuItemClick('Finance')}><SignalCellularAltIcon className='list_icon' /> Finance <ArrowForwardIosIcon className='arrow_icon' /></li>
          </ul>
        </div>
        {renderSection()}
      </div>
     
    </section>
  );
};

export default Dashboard;
