import React from 'react';
import MedicalCreate from './MedicalCreate.js';
import { Container, Row, Col } from 'reactstrap';
import MedicalTable from './MedicalTable.js'; 
import MedicalEdit from './MedicalEdit.js';
import APIURL from './helpers/environment';

class MedicalIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      medical: [], mine: [], user: [], updatePressed: false, medicalToUpdate: {}, 
    }
  }

  componentWillMount() {
    this.fetchMedicalMine()
  }

  fetchMedicalMine = () => {
    let token = localStorage.getItem("token");
    fetch(`${APIURL}/medical/mine`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => res.json())
      .then((feedData) => {
        this.setState({ medical: feedData })
        console.log(this.state.medical);
      })
  }

  editMyMedical = (medical) => {
      this.setState({
          medicalToUpdate: medical
      })
  }

  updateOn = () => {
    this.setState({
       updatePressed: true
    })
  }

  updateOff = () => {
    this.setState({
        updatePressed: false
    })
  }
 


  render() {
    
     return (
        <Container>
          <Row>
            <Col md="3">
              <MedicalCreate token={this.props.token} updateMedicalArray={this.fetchMedicalMine} />
            </Col>
            <Col md="9">
            <MedicalTable medical={this.state.medical} fetchMedicalMine={this.fetchMedicalMine.bind(this)} editMyMedical={this.editMyMedical.bind(this)} updateOn={this.updateOn.bind(this)} token={this.props.token} />
            </Col>
          </Row>
          <Col md="12">  
            {
              this.state.updatePressed ? <MedicalEdit fetchMedicalMine={this.fetchMedicalMine.bind(this)} updatePressed={this.state.updatePressed} medicalToUpdate={this.state.medicalToUpdate} updateOff={this.updateOff.bind(this)} token={this.props.token} /> //2
              : <div></div>
            }
          </Col>
        </Container>
      )
  }
}

export default MedicalIndex;
