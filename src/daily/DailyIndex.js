import React from 'react';
import DailyCreate from './DailyCreate.js'
import { Container, Row, Col } from 'reactstrap';
import DailyTable from './DailyTable.js';
import DailyEdit from './DailyEdit.js';

class DailyIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      daily: [], mine: [], user: [], updatePressed: false, dailyToUpdate: {}
    }
  }

  componentWillMount() {
    this.fetchDailyMine()
  }

  fetchDailyMine = () => {
    fetch("http://localhost:3000/daily/mine", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((feedData) => {
        this.setUpdatedDaily(feedData)
      })
  }

  dailyUpdate = (event, daily) => {
    fetch("http://localhost:3000/daily/update/:id", {
      method: 'PUT',
      body: JSON.stringify({ id: this.id }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => {
      this.setState({ updatePressed: false })
      this.fetchDaily()}
    )}
  

  setUpdatedDaily = (event, daily) => {
    this.setState({
        dailyToUpdate: daily, 
        updatePressed: true 
    })
}

 dailyDelete = (event) => {
    fetch('http://localhost:3000/daily/delete/:id', {
      method: 'DELETE',
      body: JSON.stringify({ daily: { id: event.target.id } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchDaily())
  }


  render() {
    this.daily = this.state.daily.length >= 1 ?    //1
    //2 
    <DailyTable daily={this.state.daily} //3
     delete={this.dailyDelete} update={this.setUpdatedDaily} /> : <h2>Track your daily information</h2>
     return (
        <Container>
          <Row>
            <Col md="3">
              <DailyCreate token={this.props.token} updateDailyArray={this.fetchDaily} />
            </Col>
            <Col md="9">
              <DailyTable />
            </Col>
          </Row>
          <Col md="12">  
            {
              this.state.updatePressed ? <DailyEdit t={this.state.updatePressed} update={this.dailyUpdate} daily={this.state.dailyToUpdate} /> //2
              : <div></div>
            }
          </Col>
        </Container>
      )
  }
}

export default DailyIndex;
