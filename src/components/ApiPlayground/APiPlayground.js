import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import RequestEditor from '../RequestEditor/RequestEditor';
import ResponseViewer from '../ResponseViewer/ResponseViewer';
import EndpointSelector from '../EndpointSelector/EndpointSelector';
import './ApiPlayground.css';

const ApiPlayground = () => {
  const { authToken } = useContext(AuthContext);
  const [endpoint, setEndpoint] = useState('/api/v1/example');
  const [requestBody, setRequestBody] = useState(JSON.stringify({
    context: {
      user_id: "test_user",
      environment: "playground"
    },
    parameters: {}
  }, null, 2));
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!authToken) {
      setError('Authentication required');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Mock implementation
      const mockResponse = {
        metadata: {
          request_id: 'req_' + Math.random().toString(36).substr(2, 9),
          timestamp: new Date().toISOString(),
          status: 'success'
        },
        data: {
          message: "Mock response from " + endpoint,
          received: JSON.parse(requestBody)
        }
      };

      await new Promise(resolve => setTimeout(resolve, 500));
      setResponse(mockResponse);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="api-playground">
      <div className="playground-controls">
        <EndpointSelector value={endpoint} onChange={setEndpoint} />
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Request'}
        </button>
      </div>
      
      <div className="playground-panels">
        <RequestEditor value={requestBody} onChange={setRequestBody} />
        <ResponseViewer response={response} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ApiPlayground;
