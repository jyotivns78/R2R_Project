import React, { useState } from 'react';
import "./Clients.css";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ClientProfileCard from './ClientProfileCard';
import UserImage from "../assets/img/about-author.jpg";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';

const ClientsSection = () => {

 
   
   const clientProfiles = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      mobile: "123-456-7890",
      imageSrc: UserImage,
      status: "Inactive"
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      mobile: "987-654-3210",
      imageSrc: UserImage,
      status: "Active"
    },
    {
      id: 3,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Inactive"
    },
    {
      id: 4,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Inactive"
    },
    {
      id: 5,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Active"
    },
    {
      id: 6,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Inactive"
    },
    {
      id: 7,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Active"
    },
    {
      id: 8,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Inactive"
    },
    {
      id: 9,
      name: "John Doe",
      email: "john@example.com",
      mobile: "123-456-7890",
      imageSrc: UserImage,
      status: "Active"
    },
    {
      id: 10,
      name: "Alice Smith",
      email: "alice@example.com",
      mobile: "987-654-3210",
      imageSrc: UserImage,
      status: "Inactive"
    },
    {
      id: 11,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Active"
    },
    {
      id: 12,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Inactive"
    },
    {
      id: 13,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Active"
    },
    {
      id: 14,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Inactive"
    },
    {
      id: 15,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Active"
    },
    {
      id: 16,
      name: "Alice ",
      email: "alice@example.com",
      mobile: "987-3210",
      imageSrc: UserImage,
      status: "Inactive"
    },
  ];


  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = clientProfiles.filter((profile) =>
  profile.name.toLowerCase().includes(searchTerm.toLowerCase())
);



const maxProfilesPerPage = 8;
const [currentPage, setCurrentPage] = useState(1);
const totalPages = Math.ceil(filteredProfiles.length / maxProfilesPerPage);

const startIndex = (currentPage - 1) * maxProfilesPerPage;
const endIndex = Math.min(startIndex + maxProfilesPerPage, filteredProfiles.length);
const displayedProfiles = filteredProfiles.slice(startIndex, endIndex);



const handlePageClick = (page) => {
  setCurrentPage(page);
};

const handleNextPage = () => {
  setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};

const handlePrevPage = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

  return (

    <section className='clients_section w-80'>
      <div className='breadcrumb_button d-flex justify-content-between w-100'>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Clients</li>
          </ol>
        </nav>
      </div>
      <button>Add New Clients +</button>
      </div>

      <div className='three_divs_container'>
        <div className='custom_div'>
          <h5>Total Clients</h5>
          <div className='count_icon d-flex justify-content-between'>
            <h3>875</h3>
            <Diversity2Icon className='div_icon' />
          </div>
          <p>Total number of clients under our care.</p>
        </div>
        <div className='custom_div'>
        <h5>Active Shifts</h5>
          <div className='count_icon d-flex justify-content-between'>
            <h3>545</h3>
            <WorkHistoryIcon className='div_icon' />
          </div>
          <p>Shifts that are currently active.</p>
        </div>
        <div className='custom_div'>
        <h5>Total Revenue</h5>
          <div className='count_icon d-flex justify-content-between'>
            <h3>545</h3>
            <HandshakeIcon className='div_icon' />
          </div>
          <p>Shifts that are currently active.</p>
        </div>
      </div>

      <div className='filter_clients'>
      <div className='filter_section d-flex justify-content-between'>
  <div className="search-bar-container d-flex">
    <input 
    type="text" 
    placeholder="Search" 
    className="search_bar" 
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className="search-icon">
      <SearchIcon className='search_icon'/> 
    </div>
  </div>
  {/* <div className="filter_sort_options">
    <button>Filter</button>
    <select>
      <option value="name">Sort by Name</option>
      <option value="email">Sort by Email</option>
    </select>
  </div> */}
</div>


      

        
<div className='clients_profile d-flex flex-wrap'>
        {displayedProfiles.map((profile) => (
          <ClientProfileCard
            key={profile.id}
            name={profile.name}
            email={profile.email}
            mobile={profile.mobile}
            imageSrc={profile.imageSrc}
            status={profile.status}
          />
        ))}
      </div>

      
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <ChevronLeftIcon />
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <span
            key={pageNumber + 1}
            className={currentPage === pageNumber + 1 ? 'active' : ''}
            onClick={() => handlePageClick(pageNumber + 1)}
          >
            {pageNumber + 1}
          </span>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <ChevronRightIcon />
        </button>
      </div>
      </div>
    </section>
  )
}

export default ClientsSection