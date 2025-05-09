import React from 'react';
import './EndpointSelector.css';

const endpoints = [
  '/api/v1/portfolio/analyze',
  '/api/v1/risk/assess',
  '/api/v1/accounts',
  '/api/v1/transactions'
];

const EndpointSelector = ({ value, onChange }) => {
  return (
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="endpoint-selector"
    >
      {endpoints.map((ep) => (
        <option key={ep} value={ep}>{ep}</option>
      ))}
    </select>
  );
};

export default EndpointSelector;
