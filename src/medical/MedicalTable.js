import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from './helpers/environment';

const MedicalTable = (props) => {

    const firstName = localStorage.getItem('firstName');

    const medicalDelete = (medical) => {
        console.log(medical.id)
        fetch(`${APIURL}/medical/delete/${medical.id }`, {
         method: "DELETE",
             headers: new Headers({
               "Content-Type": "application/json",
               Authorization: props.token,
             }),
              }).then(() => props.fetchMedicalMine());
           console.log(props.fetchMedicalMine());
         };

    function medicalMapper() {
        return props.medical?.map((medical, index) => {
            let d = new Date(medical.updatedAt);
            return (
                <tr key={index}>
                    <th scope="row">{medical.id}</th>
                    {/* <td>{medical.date}</td> */}
                    <td>{d.toLocaleDateString('en-US')}</td>
                    <td>{medical.medicalConditions}</td>
                    <td>{medical.previousSurgeries}</td>
                    <td>{medical.previousHospitalizations}</td>
                    <td>{medical.currentMedications}</td>
                        <td>{medical.allergies}</td>
                        <td>{medical.height}</td>
                        <td>{medical.weight}</td>
                            <td>{medical.other}</td>
                    <td>
                        <Button id={medical.id} onClick={() => medicalDelete(medical)} color="danger">Delete</Button>
                        <Button id={medical.id} onClick={() => {props.editMyMedical(medical); props.updateOn()}} color="warning">Update</Button>
                    </td>
                </tr>
            )
        })
    }

    
    return (
        <div>
            <h1> Welcome {firstName} !</h1>
            <h3>Medical History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>Entry Id</th>
                        <th>Date</th>
                        <th>Medical Conditions</th>
                        <th>Previous Surgeries</th>
                        <th>Previous Hospitalizations</th>
                        <th>Current Medications</th>
                        <th>Allergies</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Other Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {medicalMapper()}
                </tbody>
            </Table>
        </div>
    );
}

export default MedicalTable;