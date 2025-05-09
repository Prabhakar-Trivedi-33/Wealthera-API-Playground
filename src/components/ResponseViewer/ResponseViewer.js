import React from 'react';
import ReactJson from 'react-json-view';
import './ResponseViewer.css';

const ResponseViewer = ({ response, error, isLoading }) => {
  if (isLoading) {
    return (
      <div className="response-container loading">
        <div className="response-header">Response</div>
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="response-container error">
        <div className="response-header">Error</div>
        <div className="error-message">{error}</div>
      </div>
    );
  }

  if (!response) {
    return (
      <div className="response-container empty">
        <div className="response-header">Response</div>
        <div className="empty-message">No response yet</div>
      </div>
    );
  }

  return (
    <div className="response-container">
      <div className="response-header">Response</div>
      <div className="response-content">
        <ReactJson
          src={response}
          theme="monokai"
          displayDataTypes={false}
          collapsed={1}
        />
      </div>
    </div>
  );
};

export default ResponseViewer;
