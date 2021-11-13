import React from 'react';
import DailyCreate from './DailyCreate.js'
import { Container, Row, Col } from 'reactstrap';
import DailyTable from './DailyTable.js';
import DailyEdit from './DailyEdit.js';
import APIURL from '../helpers/environment';

class DailyIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      daily: [], mine: [], user: [], updatePressed: false, dailyToUpdate: {}, 
    }
  }

  componentWillMount() {
    this.fetchDaily()
  }


  fetchDaily = () => {
    let token = localStorage.getItem("token");
    localStorage.getItem("isAdmin") === "true"
 ? fetch(`${APIURL}daily/all`, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            'Authorization': token, 
          })
        })
    
      .then((res) => res.json())
      .then((feedData) => {
        this.setState({ daily: feedData })
        console.log(this.state.daily);
      })
  :

    fetch(`${APIURL}/daily/mine`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => res.json())
      .then((feedData) => {
        this.setState({ daily: feedData })
        console.log(this.state.daily);
      })
  };

  editMyDaily = (daily) => {
      this.setState({
          dailyToUpdate: daily
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
              <DailyCreate token={this.props.token} updateDailyArray={this.fetchDaily} />
            </Col>
            <Col md="9">
            <DailyTable daily={this.state.daily} fetchDaily={this.fetchDaily.bind(this)} editMyDaily={this.editMyDaily.bind(this)} updateOn={this.updateOn.bind(this)} token={this.props.token} />
            </Col>
          </Row>
          <Col md="12">  
            {
              this.state.updatePressed ? <DailyEdit fetchDaily={this.fetchDaily.bind(this)} updatePressed={this.state.updatePressed} dailyToUpdate={this.state.dailyToUpdate} updateOff={this.updateOff.bind(this)} token={this.props.token} /> //2
              : <div></div>
            }
          </Col>
        </Container>
      )
  }
}

export default DailyIndex;
