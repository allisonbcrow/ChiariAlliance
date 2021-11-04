// import React, { useState, useEffect } from "react";
// import {Container, Row, Col} from 'reactstrap';
// import Header from "../components/site/Header";

// export default class MedicalIndex extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {daily:'', users:'', mine:''}
//     }
// }

// fetchMine = () => {
//     fetch("http://localhost:3000/daily/mine", {
//       method: "GET",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token,
//       }),
//     })
//       .then((res) => res.json())
//       .then((feedData) => {
//         setMine(feedData);
//       });
//   };

//   useEffect(() => {
//     fetchMine();
//   }, []);

 
//   const fetchUsers = () => {
//     fetch("http://localhost:3000/user", {
//       method: "GET",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token,
//       }),
//     })
//       .then((res) => res.json())
//       .then((UserData) => {
//         setUsers(UserData);
//       });
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   console.log(daily);
//   console.log(users);
//   return (
//     <div>
//  <Header
//         token={props.token}
//         setDaily={setDaily}
//         posts={daily}
//         users={users}
//         fetchMine={fetchMine}
//         mine={mine}
//         clickLogout={props.clearToken}
//       />
//     </div>
//   );
// };

// export default DailyIndex;
