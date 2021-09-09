import React from 'react'
import {useHistory} from 'react-router-dom';
import BackButtonImage from '../../assets/back-button.png';

const BackButton = () => {
  const history = useHistory();

  const goToPreviousPage = () => {
    history.goBack();
  }

  return (
    <button className="btn btn-primary" onClick={goToPreviousPage} style={{
      padding: "0.5rem 1rem"
    }}>
      <img src={BackButtonImage} alt="go-back" style={{
        height: "2rem"
      }}/>
    </button>
  )
}

export default BackButton
