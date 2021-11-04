// import React from 'react';
// import DailyCreate from './DailyCreate.js'
// import { Container, Row, Col } from 'reactstrap';
// import DailyTable from './DailyTable.js';
// import DailyEdit from './DailyEdit.js';

// class DailyIndex extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       daily: [], mine: [], updatePressed: false, dailyToUpdate: {}
//     }
//   }

//   componentWillMount() {
//     this.fetchMine()
//   }

//   fetchMine = () => {
//     fetch("http://localhost:3000/daily/mine", {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': this.props.token
//       })
//     })
//       .then((res) => res.json())
//       .then((feedData) => {
//         return this.setState({ daily: feedData })
//       })
//   }

//   dailyUpdate = (event, daily) => {
//     fetch(`http://localhost:3000/daily/${daily.id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ log: daily }),
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': this.props.token
//       })
//     })
//     .then((res) => {
//       this.setState({ updatePressed: false })
//       this.fetchDaily()}
//     )}
  

//   setUpdatedDaily = (event, daily) => {
//     this.setState({
//         dailyToUpdate: daily, 
//         updatePressed: true 
//     })
// }

//  dailyDelete = (event) => {
//     fetch(`http://localhost:3000/daily/${event.target.id}`, {
//       method: 'DELETE',
//       body: JSON.stringify({ log: { id: event.target.id } }),
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': this.props.token
//       })
//     })
//     .then((res) => this.fetchDaily())
//   }


//   render() {
//     const daily = this.state.daily.length >= 1 ?    //1
//     //2 
//     <DailyTable daily={this.state.daily} //3
//      delete={this.dailyDelete} update={this.setUpdatedDaily} /> : <h2>Track your daily information</h2>
//      return (
//         <Container>
//           <Row>
//             <Col md="3">
//               <DailyCreate token={this.props.token} updateDailyArray={this.fetchDaily} />
//             </Col>
//             <Col md="9">
//               {daily}
//             </Col>
//           </Row>
//           {/* adding edit */}
//           <Col md="12">  
//             {
//                 //1
//               this.state.updatePressed ? <DailyEdit t={this.state.updatePressed} update={this.dailyUpdate} daily={this.state.dailyToUpdate} /> //2
//               : <div></div>
//             }
//           </Col>
//         </Container>
//       )
//   }
// }

// export default DailyIndex;
