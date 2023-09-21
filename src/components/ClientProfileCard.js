import React from 'react';
import "./Clients.css";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import CallIcons from "../assets/img/GroupCall.svg";
import MessageIcon from "../assets/img/GroupMeasage.svg";

const ClientProfileCard = ({ name, email, mobile, imageSrc, status }) => {
    let cardBackgroundColor = '';
  let statusTextColor = '';

  
  if (status === 'Active') {
    cardBackgroundColor = 'green';
    statusTextColor = 'white';
  } else if (status === 'Inactive') {
    cardBackgroundColor = 'red';
    statusTextColor = 'white';
  }

  return (
    <div className='custom_divs'>
      <div className='client_profile_card'>
        <div>
        <div className='image_and_name text-center'>
        <img src={imageSrc} alt="Client" className="client_image" />
        <h5>{name}</h5>
     
        <p style={{ color: statusTextColor, background: cardBackgroundColor }}>{status}</p>
        </div>
        <div className='flex_div'>
          <div className='contact_icon_name'><img src={ MessageIcon } alt='' className='contact_icon' /> <span>{email}</span></div>
          <div className='contact_icon_name'><img src={ CallIcons } alt='' className='contact_icon' /> <span>{mobile}</span></div>
          </div>
        </div>
          <div className='bottom_icons d-flex justify-content-between pt-4'>
            <EditIcon className='edit_icon' />
            <VisibilityIcon className='viewIcon' />
            <DeleteIcon className='delete_icon' />
          </div>
      </div>
    </div>
  )
}

export default ClientProfileCard