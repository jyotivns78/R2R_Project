import React, { useState, useEffect, useRef } from 'react';
import "./Dashboard.css";
import Expenditure from "../assets/img/Group 162826.svg";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SecondSvg from "../assets/img/Group 162830.svg";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Chart } from 'chart.js/auto';
import CandidateImage from "../assets/img/about-author.jpg";
import { Link } from 'react-router-dom';
import Calendar from "moedim";
import UserImage from "../assets/img/about-author.jpg";
import "../pages/Dashboard.css";

const DashboardSection = () => {

  const leftSidebarWidth = 266; 
  const rightSidebarWidth = 300; 

 
  const remainingWidth = `calc(100% - ${leftSidebarWidth}px - ${rightSidebarWidth}px)`;

    const [selectedMonth, setSelectedMonth] = useState('By Month');
    const [value, setValue] = useState(new Date());
  const chartRef = useRef(null);

 


  const months = [ 'By Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

  useEffect(() => {
    const chartData = {
      labels: months,
      datasets: [
        {
          label: 'Total Revenue',
          data: Array(months.length).fill(null),
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointRadius: 5,
          fill: false,
        },
      ],
    };

    const chartOptions = {
      scales: {
        x: {
          title: {
            display: true,
            text: '',
          },
        },
        y: {
          display: false,
        },
      },
      elements: {
        point: {
          radius: 5,
          hoverRadius: 5,
          hitRadius: 10,
        },
        line: {
          cubicInterpolationMode: 'monotone', 
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
      },
    };

    const canvas = document.getElementById('revenueChart');
    const ctx = canvas.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: chartOptions,
    });

    updateChartData(selectedMonth);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [months, selectedMonth]);

  const updateChartData = (month) => {
    const index = months.indexOf(month);
    const data = Array(months.length).fill(null);
    data[index] = 2500; 

    chartRef.current.data.datasets[0].data = data;
    chartRef.current.update();
  };
  
    


  return (
    <section className='dashboard_section' style={{ width: remainingWidth }}>

<div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>
      </div>

      <div className="sidebar-right">
        <div className='top w-100 d-flex justify-content-between'>
            <h3>Schedule</h3>
            <Link>See All</Link>
        </div>
        <Calendar value={value} onChange={(d) => setValue(d)} />
        <div className='event_details'>
            <div className='event d-flex'>
                <div className='time pr-2'>9:00</div>
                <div className='event_right'>
                <div className='line'>
                <div className='event_name d-flex'>
                    <img src={ UserImage } alt='' />
                    <div className='event_name_time'>
                        <p>Shift For Evans <br />
                        8:30 - 9:30</p>
                    </div>
                </div>
                </div>
                
                </div>
            </div>
            <div className='event d-flex'>
                <div className='time pr-2'>10:00</div>
                <div className='event_right'>
                <div className='line'>
                </div>
                </div>
            </div>
            <div className='event d-flex'>
                <div className='time pr-2'>11:00</div>
                <div className='event_right'>
                <div className='line'>
                <div className='event_name event_name2 d-flex'>
                    <img src={ UserImage } alt='' />
                    <div className='event_name_time'>
                        <p>Shift For Evans <br />
                        8:30 - 9:30</p>
                    </div>
                </div>
                </div>
                
                </div>
            </div>

            <div className='event d-flex'>
                <div className='time pr-2'>12:00</div>
                <div className='event_right'>
                <div className='line'>
                </div>
                </div>
            </div>
            <div className='event d-flex'>
                <div className='time pr-2'>13:00</div>
                <div className='event_right'>
                <div className='line'>
                <div className='event_name event_name3 d-flex'>
                    <img src={ UserImage } alt='' />
                    <div className='event_name_time'>
                        <p>Shift For Evans <br />
                        8:30 - 9:30</p>
                    </div>
                </div>
                </div>
                
                </div>
            </div>

            <div className='event d-flex'>
                <div className='time pr-2'>14:00</div>
                <div className='event_right'>
                <div className='line'>
                </div>
                </div>
            </div>
            <div className='event d-flex'>
                <div className='time pr-2'>15:00</div>
                <div className='event_right'>
                <div className='line'>
                <div className='event_name event_name4 d-flex'>
                    <img src={ UserImage } alt='' />
                    <div className='event_name_time'>
                        <p>Shift For Evans <br />
                        8:30 - 9:30</p>
                    </div>
                </div>
                </div>
                
                </div>
            </div>
        </div>
        </div>



        <div className="card-container">
        <div className="card card1">
            <div className='top_head'>
                <h5>Total Visits</h5>
            </div>
            <div className='details'>
                <h3>1200</h3>
                <p>(No. Of visits made by all the candidates for our clients this month)</p>
            </div>
        </div>
        <div className="card card2">
        <div className='top_head'>
                <h5>Total Hours Spent</h5>
            </div>
            <div className='details'>
                <h3>5000</h3>
                <p>(Total No. of hours spent under our care for this month)</p>
            </div>
        </div>
        <div className="card card3">
        <div className='top_head'>
                <h5>Active Shifts</h5>
            </div>
            <div className='details'>
                <h3>105</h3>
                <p>(Total No. of shifts ongoing )</p>
            </div>
        </div>
        <div className="card card4">
        <div className='top_head'>
                <h5>Incidents</h5>
            </div>
            <div className='details'>
                <h3>50</h3>
                <p>(No. Of incidents reported this month)</p>
            </div>
        </div>
      </div>

      <div className='card-container-small'>
        <div className='card-small'>
            <div className='top_div d-flex justify-content-between'>
                <h4>Earnings</h4>
                <img src={ Expenditure } alt='' />
            </div>
            <div className='bottom_div'>
                <h3>£60,000</h3>
                <p><span className='north_span'><NorthEastIcon className='north' />2.1</span> +5.5 this month</p>
            </div>
        </div>
        <div className='card-small'>
        <div className='top_div d-flex justify-content-between'>
                <h4>Earnings</h4>
                <img src={ SecondSvg } alt='' />
            </div>
            <div className='bottom_div'>
                <h3>£20,000</h3>
                <p><span><SouthEastIcon className='earning_icon' />2.1</span> +5.5 this month</p>
            </div>
        </div>
        <div className='card-small'>
        <div className='top_div d-flex justify-content-between'>
                <h4>Earnings</h4>
                <img src={ Expenditure } alt='' />
            </div>
            <div className='bottom_div'>
                <h3>£40,000</h3>
                <p><span className='north_span'><NorthEastIcon className='north' />2.1</span> +5.5 this month</p>
            </div>
        </div>
      </div>

      <div className="chart-container">
        <div className='top_container_chart d-flex justify-content-between'>
            <h3>Total Revenue</h3>
        <div className="month-dropdown">
          <select
            id="monthSelect"
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value);
              updateChartData(e.target.value);
            }}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        </div>
        <canvas id="revenueChart"></canvas>
      </div>
      
      <div className='candidate-approval'>
        <h2>Candidate Approval</h2>
        <div className='candidate-profile'>
          <div className='candidate-profile-card'>
            <div className='image_name d-flex'>
                <img src={ CandidateImage } alt='' />
                <div className='names'>
                    <h4>John Stones <br />
                    
                    <span>Candidate</span></h4>
                    
                </div>
            </div>
            <div className='status'>
                <p>Pending</p>
            </div>
          </div>
          <div className='candidate-profile-card'>
          <div className='image_name d-flex'>
                <img src={ CandidateImage } alt='' />
                <div className='names'>
                    <h4>John Stones <br />
                    
                    <span>Candidate</span></h4>
                    
                </div>
            </div>
            <div className='status approved_status'>
                <p>Approved</p>
            </div>
          </div>
          <div className='candidate-profile-card'>
          <div className='image_name d-flex'>
                <img src={ CandidateImage } alt='' />
                <div className='names'>
                    <h4>John Stones <br />
                    
                    <span>Candidate</span></h4>
                    
                </div>
            </div>
            <div className='status'>
                <p>Pending</p>
            </div>
          </div>
          <div className='candidate-profile-card'>
          <div className='image_name d-flex'>
                <img src={ CandidateImage } alt='' />
                <div className='names'>
                    <h4>John Stones <br />
                    
                    <span>Candidate</span></h4>
                    
                </div>
            </div>
            <div className='status'>
                <p>Pending</p>
            </div>
          </div>
        </div>
      </div>

      
       <div className='logs-inbox'>
        <div className='logs'>
          <div className='logs-header'>
            <h2>Logs</h2>
            <a href='#'>See All</a>
          </div>
          <div className='logs-content'>

          </div>
        </div>

        <div className='inbox'>
          <div className='inbox-header'>
            <h2>Inbox</h2>
            <a href='#'>See All</a>
          </div>
          <div className='inbox-content'>
            <div className='message_profile d-flex justify-content-between'>
                <div className='image_message d-flex '>
                    <img src={ CandidateImage } alt='' />
                    <div className='messages'>
                        <h5>Bernardo Silva <br />
                        <p>Lorem ipsum dolor sit amet.....</p>
                        </h5>
                        
                    </div>
                </div>
                <span>Today</span>
            </div>
            <div className='message_profile d-flex justify-content-between'>
                <div className='image_message d-flex '>
                    <img src={ CandidateImage } alt='' />
                    <div className='messages'>
                        <h5>Bernardo Silva <br />
                        <p>Lorem ipsum dolor sit amet.....</p>
                        </h5>
                        
                    </div>
                </div>
                <span>Today</span>
            </div>
            <div className='message_profile d-flex justify-content-between'>
                <div className='image_message d-flex '>
                    <img src={ CandidateImage } alt='' />
                    <div className='messages'>
                        <h5>Bernardo Silva <br />
                        <p>Lorem ipsum dolor sit amet.....</p>
                        </h5>
                        
                    </div>
                </div>
                <span>Today</span>
            </div>
            <div className='message_profile d-flex justify-content-between'>
                <div className='image_message d-flex '>
                    <img src={ CandidateImage } alt='' />
                    <div className='messages'>
                        <h5>Bernardo Silva <br />
                        <p>Lorem ipsum dolor sit amet.....</p>
                        </h5>
                        
                    </div>
                </div>
                <span>Today</span>
            </div>
            <div className='message_profile d-flex justify-content-between'>
                <div className='image_message d-flex '>
                    <img src={ CandidateImage } alt='' />
                    <div className='messages'>
                        <h5>Bernardo Silva <br />
                        <p>Lorem ipsum dolor sit amet.....</p>
                        </h5>
                        
                    </div>
                </div>
                <span>Today</span>
            </div>
           
          </div>
        </div>
      </div>


    </section>
  )
}

export default DashboardSection