import React from 'react'
import ReactDOM from 'react-dom/client'
import CommentSection from './CommentSection/CommentSection.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import FormSection from './FormSection/FormSection.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommentSection />
    {/* <FormSection /> */}

  </React.StrictMode>,
)
