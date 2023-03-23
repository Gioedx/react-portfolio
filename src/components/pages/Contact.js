import React from 'react';
import Link from 'react-router-dom';

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
      If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.
      </p>
      <Link to="contact" role="button" className="btn btn-link">
        Contact
      </Link>
    </div>
  );
}

export default Contact;