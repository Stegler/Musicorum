import React from 'react';
import {Button} from 'react-bootstrap';

// import API from '../utils/API';
import './style.css';

class StartPage extends React.Component {


  btnClick() {
    window.open("https://www.youtube.com/watch?v=-nVgTbqp3gU")
  }


	render() {
    return (
     <div>
      <Button 
      variant='secondary' 
      style={{position: 'absolute', left: '50%', top: '50%'}} 
      onClick={this.btnClick.bind(this)}>
      musicorum
      </Button>    
    </div>
    )
	}
}

export default StartPage;
