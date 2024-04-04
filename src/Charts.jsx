import React from 'react';
import './Charts.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const data = [{
    text:"Jobs",
    labels: ['Not Started','In Progress','Completed','Feedback','Delivered','Cancelled','On Hold'],
    datasets: [
        {
            label: 'Jobs',
            data: [5,30,40,50,60,10,20],
            borderColor: ['rgba(255,206,86,0.2)'],
            backgroundColor: ['rgba(232,211,6,1)','rgba(7,96,62)',
            'rgba(123,1,130)','rgba(200, 245, 66)','rgba(102, 245, 66)','rgba(102, 245, 66)','rgba(255,159,64,1)'],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
        }
        
    ]
},
{
  text:"Tasks",
  labels: ['Not Started','In Progress','Completed','Not Assigned'],
  datasets: [
      {
          label: 'Tasks',
          data: [25,24,25,26],
          borderColor: ['rgba(255,206,86,0.2)'],
          backgroundColor: ['rgba(7,96,62)',
          'rgba(232,211,6,1)',
          'rgba(123,1,130)',
          'rgba(255,159,64,1)'],
          pointBackgroundColor: 'rgba(255,206,86,0.2)'
      }
      
  ]
},
{ 
  text:"Idle Employees",
  labels: ['Employees'],
  datasets: [
      {
          label: 'Idle Employees',
          data: [25],
          borderColor: ['rgba(255,206,86,0.2)'],
          backgroundColor: ['rgba(255,159,64,1)'],
          pointBackgroundColor: 'rgba(255,206,86,0.2)',
      }
      
  ]
}
]

const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position:'bottom',
        },
        title: {
          display: true,
        }
      }
    },
  };

export const Charts = () => {
  return (
    <div className="dashboard-container">
            <div className="dashboard-heading-section">
                <p className="dashboard-heading">Dashboard</p>
            </div>
    <div className='charts'>
    <ul className="chart">
      {data.map((eachChart)=>{
        return(
          <li className="each-chart">
          <p>{eachChart.text}</p>
          <hr className="horizontal-line"/>
          <Doughnut data={eachChart}  options={config.options}/>
          </li>
        )
  })}
    </ul>
    </div>
    </div>
  )
}
