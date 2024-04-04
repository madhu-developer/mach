import React from 'react'
import './Body.css';
import { Charts } from './Charts';
import { JobReport } from './JobReport';

export const Body = () => {
  return (
    <div className='body-container'>
      <div className="body-components">
          <Charts/>
        <JobReport/>
      </div>
    </div>
  )
}
