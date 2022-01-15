import React from 'react';
import Pdf from '../Documents/Alex_Leakos_Resume_2022.pdf';

const Download = () => {
  return (
    <div className="App">
      <a href={Pdf} target="_blank">
        Download Pdf
      </a>
    </div>
  );
};

export default Download;
