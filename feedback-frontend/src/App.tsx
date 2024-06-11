import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Feedback Form</h1>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default App;
