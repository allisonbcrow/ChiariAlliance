// import React from 'react';
// import MedicalCreate from './MedicalCreate.js'
// import { Container, Row, Col } from 'reactstrap';
// import MedicalTable from './MedicalTable.js'
// import MedicalEdit from './MedicalEdit.js'

// class MedicalIndex extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       medical: [], mine: [], user: [], updatePressed: false, medicalToUpdate: {}
//     }
//   }

//   componentWillMount() {
//     this.fetchMedicalMine()
//   }

//   fetchMedicalMine = () => {
//     fetch("http://localhost:3000/medical/mine", {
//       method: 'GET',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': this.props.token
//       })
//     })
//     //   .then((res) => res.json())
//     //   .then((feedData) => {
//     //     this.setUpdatedMedical(feedData)
//     //   })
// //   }

// //   medicalUpdate = (event, daily) => {
// //     fetch("http://localhost:3000/medical/update/id", {
// //       method: 'PUT',
// //       body: JSON.stringify({ id: this.id }),
// //       headers: new Headers({
// //         'Content-Type': 'application/json',
// //         'Authorization': this.props.token
// //       })
// //     })
// //     .then((res) => {
// //       this.setState({ updatePressed: false })
// //       this.fetchMedical()}
// //     )}
  

// //   setUpdatedMedical = (event, medical) => {
// //     this.setState({
// //         medicalToUpdate: medical, 
// //         updatePressed: true 
// //     })
// // }

// //  medicalDelete = (event) => {
// //     fetch('http://localhost:3000/medical/delete/id', {
// //       method: 'DELETE',
// //       body: JSON.stringify({ log: { id: event.target.id } }),
// //       headers: new Headers({
// //         'Content-Type': 'application/json',
// //         'Authorization': this.props.token
// //       })
// //     })
// //     .then((res) => this.fetchDaily())
//   }


//   render() {
//     this.medical = this.state.medical.length >= 1 ?    //1
//     //2 
//     <MedicalTable daily={this.state.medical} //3
//      delete={this.medicalDelete} update={this.setUpdatedMedical} /> : <h2>Track your medical information</h2>
//      return (
//         <Container>
//           <Row>
//             <Col md="3">
//               <MedicalCreate token={this.props.token} updateMedicalArray={this.fetchMedical} />
//             </Col>
//             <Col md="9">
//               <MedicalTable />
//             </Col>
//           </Row>
//           <Col md="12">  
//             {
//               this.state.updatePressed ? <MedicalEdit t={this.state.updatePressed} update={this.medicalUpdate} medical={this.state.medicalToUpdate} /> //2
//               : <div></div>
//             }
//           </Col>
//         </Container>
//       )
//   }
// }

// export default MedicalIndex;
