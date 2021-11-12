import React from "react";
import { Table, Button } from "reactstrap";

const DailyTable = (props) => {
  const firstName = localStorage.getItem("firstName");


  const dailyDelete = (daily) => {
    console.log(daily.id);
    fetch(`http://localhost:3000/daily/delete/${daily.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchDaily());
    console.log(props.fetchDaily());
  };


  let dailyMapper = () => {
    return props.daily?.map((daily, index) => {

      return (
        <tr key={index}>
          <th scope="row">{daily.id}</th>
          <td>{daily.date}</td>
          <td>{daily.food}</td>
          <td>{daily.water}</td>
          <td>{daily.sleep}</td>
          <td>{daily.mood}</td>
          <td>{daily.stressLevel}</td>
          <td>{daily.exercise}</td>
          <td>{daily.painLevel}</td>
          <td>{daily.other}</td>
          <td>
         
            <Button
              id={daily.id}
              onClick={() => dailyDelete(daily)}
              color="danger"
            >
              Delete
            </Button>
            <Button
              id={daily.id}
              onClick={() => {
                props.editMyDaily(daily);
                props.updateOn();
              }}
              color="warning"
            >
              Update
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1>Welcome {firstName} !</h1>
      <h3>Daily History</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>Entry Id</th>
            <th>Date</th>
            <th>Food</th>
            <th>Water</th>
            <th>Sleep</th>
            <th>Mood</th>
            <th>Stress Level</th>
            <th>Exercise</th>
            <th>Pain Level</th>
            <th>Other Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{dailyMapper()}</tbody>
      </Table>
    </div>
  );
};

export default DailyTable;
