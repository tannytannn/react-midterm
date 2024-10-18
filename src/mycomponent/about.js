import React from 'react';
import './about.css'; 
import { useNavigate } from 'react-router-dom';

function About() {
    const Navigate = useNavigate();
    const goBack = () => {
        Navigate(-1);
    }
  return (
    <div className="about">
      <h1>เกี่ยวกับเรา</h1>
      <p>
        CPE499 REACT.JS 
        <br></br>
        Sirawich Rungnisakorn 6006772
      </p>
      <button onClick={goBack}>กลับไปหน้าแรก</button>
    </div>
  );
}

export default About;