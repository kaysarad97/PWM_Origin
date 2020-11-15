
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RentalAssets = () => 
  <div className="rental-assets">
    <h3 className="title">Additional information</h3>
    <div className="row">
      <div className="col-md-6">
        <span>
          <FontAwesomeIcon icon="asterisk" />Some info
        </span>
        <span>
          <FontAwesomeIcon icon="thermometer" /> Some info
        </span>
        <span>
          <FontAwesomeIcon icon="location-arrow" />Some info
        </span>
      </div>
      <div className="col-md-6">
        <span>
          <FontAwesomeIcon icon="desktop" /> Some info
        </span>
        <span>
          <FontAwesomeIcon icon="cube" /> Some info
        </span>
        <span>
          <FontAwesomeIcon icon="archive" /> Some info
        </span>
      </div>
    </div>
  </div>


export default RentalAssets;