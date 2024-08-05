// src/components/EducationDetailPage.js
import React from 'react';
import './EducationDetailPage.css';

const EducationDetailPage = ({ institution, onBack }) => {
  const renderDetails = () => {
    switch (institution.name) {
      case 'SRIT COLLEGE':
        return (
          <>
            <h2>Engineering Courses Available</h2>
            <ul>
              <li>Bachelor of Engineering (BE)</li>
              <li>Master of Engineering (ME)</li>
              <li>PhD in Engineering</li>
              <li>Computer Science</li>
              <li>Electronics & Communication</li>
              <li>Mechanical Engineering</li>
              <li>Civil Engineering</li>
              <li>Electrical Engineering</li>
              {/* Add more courses as needed */}
            </ul>
            <h2>Location:</h2>
            <a href="https://maps.app.goo.gl/WpjLSSNp9exzuPT58" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      case 'GAUTAM HIGH SCHOOL':
        return (
          <>
            <h2>Classes 1 to 10 Available</h2>
            <p>Gautam High School offers a complete education from Class 1 through Class 10. The school provides a strong foundation in various subjects including Mathematics, Science, English, and Social Studies.</p>
            <h2>Location:</h2>
            <a href="https://maps.app.goo.gl/7TKzXy5ETu6UpfRp9" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      case 'CBIT COLLEGE':
        return (
          <>
            <h2>Engineering Courses Available</h2>
            <ul>
              <li>Bachelor of Engineering (BE)</li>
              <li>Master of Engineering (ME)</li>
              <li>PhD in Engineering</li>
              <li>Computer Science</li>
              <li>Electronics & Communication</li>
              <li>Mechanical Engineering</li>
              <li>Civil Engineering</li>
              <li>Electrical Engineering</li>
              {/* Add more courses as needed */}
            </ul>
            <h2>Location:</h2>
            <a href="https://maps.app.goo.gl/TbGcjUfo6293DSY4A" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      case 'DELHI PUBLIC SCHOOL':
        return (
          <>
            <h2>Classes 1 to 10 Available</h2>
            <p>Delhi Public School provides education from Class 1 to Class 10 with a well-rounded curriculum including core subjects and extracurricular activities.</p>
            <h2>Location:</h2>
            <a href="https://maps.app.goo.gl/tzczwPWwSewuDvRc9" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      case 'DEEPTHI JUNIOR COLLEGE':
        return (
          <>
            <h2>Intermediate Courses</h2>
            <ul>
              <li>1st Year Intermediate</li>
              <li>2nd Year Intermediate</li>
            </ul>
            <h2>courses</h2>
            <ul>
              <li>EMCET</li>
              <li>JEE Mains</li>
              <li>Non EMCET</li>
              <li>BPIC</li>
              <li>CES</li>
            </ul>
            <h2>Location:</h2>
            <a href="https://maps.app.goo.gl/r84CvTEuZgvjJQyz6" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      case 'ABYAS JUNIOR COLLEGE':
        return (
          <>
            <h2>Intermediate Courses</h2>
            <ul>
              <li>1st Year Intermediate</li>
              <li>2nd Year Intermediate</li>
            </ul>
            <h2>courses</h2>
            <ul>
              <li>EMCET</li>
              <li>JEE Mains</li>
              <li>Non EMCET</li>
              <li>BPIC</li>
              <li>CES</li>
            </ul>
            <h2>Location:</h2>
            <a href="https://maps.app.goo.gl/4v5MDq9ZdRvDKPBo7" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      case 'Lepakshi Degree College':
        return (
          <>
            <h2>Degree Courses Available</h2>
            <ul>
              <li>Bachelor of Arts (BA)</li>
              <li>Bachelor of Science (BSc)</li>
              <li>Bachelor of Commerce (BCom)</li>
              <li>Master of Arts (MA)</li>
              <li>Master of Science (MSc)</li>
              <li>Master of Commerce (MCom)</li>
              {/* Add more degree courses as needed */}
            </ul>
            <h2>Location:</h2>
            <a href="https://maps.app.goo.gl/gwvw4zrJ8VEwZYcZ6" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      case 'SEE VIDYA SCHOOL':
        return (
          <>
            <h2>Degree Courses Available</h2>
            <ul>
              <li>Bachelor of Arts (BA)</li>
              <li>Bachelor of Science (BSc)</li>
              <li>Bachelor of Commerce (BCom)</li>
              <li>Master of Arts (MA)</li>
              <li>Master of Science (MSc)</li>
              <li>Master of Commerce (MCom)</li>
              {/* Add more degree courses as needed */}
            </ul>
            <h2>Location:</h2>
            <a href="https://g.co/kgs/aaEG7ZJ" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      case 'Shirdi Sai Junior College':
        return (
          <>
            <h2>Intermediate Courses</h2>
            <ul>
              <li>1st Year Intermediate</li>
              <li>2nd Year Intermediate</li>
            </ul>
            <h2>Entrance Exams</h2>
            <ul>
              <li>EMCET</li>
              <li>JEE Mains</li>
            </ul>
            <h2>Location:</h2>
            <a href="https://maps.app.goo.gl/tU5rxqhHk2QwwwSj7" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      case 'SKSC SCHOOL':
        return (
          <>
            <h2>Degree Courses Available</h2>
            <ul>
              <li>Bachelor of Arts (BA)</li>
              <li>Bachelor of Science (BSc)</li>
              <li>Bachelor of Commerce (BCom)</li>
              <li>Master of Arts (MA)</li>
              <li>Master of Science (MSc)</li>
              <li>Master of Commerce (MCom)</li>
              {/* Add more degree courses as needed */}
            </ul>
            <h2>Location:</h2>
            <a href="https://maps.app.goo.gl/w3h8DSZApJenc6Ph8" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      case 'GOW COLLEGE':
        return (
          <>
            <h2>Engineering Courses Available</h2>
            <ul>
              <li>Bachelor of Engineering (BE)</li>
              <li>Master of Engineering (ME)</li>
              <li>PhD in Engineering</li>
              <li>Computer Science</li>
              <li>Electronics & Communication</li>
              <li>Mechanical Engineering</li>
              <li>Civil Engineering</li>
              <li>Electrical Engineering</li>
              {/* Add more courses as needed */}
            </ul>
            <h2>Location:</h2>
            <a href="https://g.co/kgs/PxEsqXV" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </>
        );
      default:
        return <p>No details available for this institution.</p>;
    }
  };

  return (
    <div className="education-detail-page">
      <button className="back-button" onClick={onBack}>Back</button>
      <h1>{institution.name}</h1>
      <img src={institution.image} alt={institution.name} className="institution-image" />
      <div className="institution-details">
        {renderDetails()}
      </div>
    </div>
  );
};

export default EducationDetailPage;
