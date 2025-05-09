import React, { useState } from 'react';
import './RequestEditor.css';

const RequestEditor = ({ value, onChange }) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    
    try {
      JSON.parse(newValue);
      setIsValid(true);
    } catch (err) {
      setIsValid(false);
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-header">Request Body</div>
      <textarea
        value={value}
        onChange={handleChange}
        className={`request-editor ${!isValid ? 'invalid' : ''}`}
      />
      {!isValid && <div className="editor-error">Invalid JSON</div>}
    </div>
  );
};

export default RequestEditor;
