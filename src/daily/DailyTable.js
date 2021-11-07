import React from 'react';
import { Table, Button } from 'reactstrap';


const DailyTable = (props) => {

    return (
        <div>
            <h3>Daily History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                    <th>id</th>
                        <th>food</th>
                        <th>water</th>
                        <th>sleep</th>
                        <th>mood</th>
                        <th>stressLevel</th>
                        <th>exercise</th>
                        <th>painLevel</th>
                        <th>other</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.daily?.map((daily, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{daily.id}</th>
                                    <td>{daily.food}</td>
                                    <td>{daily.water}</td>
                                    <td>{daily.sleep}</td>
                                    <td>{daily.mood}</td>
                                        <td>{daily.stressLevel}</td>
                                        <td>{daily.exercise}</td>
                                        <td>{daily.painLevel}</td>
                                            <td>{daily.other}</td>
                                    <td>
                                        <Button id={daily.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={daily.id} onClick={e => props.update(e, daily)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default DailyTable;