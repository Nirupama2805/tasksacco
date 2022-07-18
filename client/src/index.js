import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Display from "./display";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       post: {
//         projectName: "",
//         projectTarget: "",
//         countries: "India",
//         ageGroup: "Below 18",
//         gender: "Male",
//         ethinicity: "White",
//         maritalStatus: "Single",
//         education: "High School",  
//       },
//       jobs: []
//     };
//   }

//   handleChange = e => {
//     const { name, value } = e.target;
// console.log(e,name,value);
//     this.setState(prevState => ({
//       post: { ...prevState.post, [name]: value }
//     }));
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.setState(prevState => ({
//       jobs: [...prevState.jobs, prevState.post],
//       post: { projectName: "",
//         projectTarget: "",
//         countries: "India",
//         ageGroup: "Below 18",
//         gender: "Male",
//         ethinicity: "White",
//         maritalStatus: "Single",
//         education: "High School",  
//       }
//     }));
//   };

//   render() {
//     return (
//       <div className="App">
//         <Form
//           handleChange={this.handleChange}
//           post={this.state.post}
//           handleSubmit={this.handleSubmit}
//         />
//         <div className="post-container">
//           <ul>
//             {this.state.jobs.map((job, index) => (
//               <li key={index}>
//                 <ul className="post-tile">
//                   <li className="post-tile-projectName">{job.projectName}</li>
//                   <li className="post-tile-projectTarget">{job.projectTarget}</li>
//                   <li className="post-tile-countries">{job.countries}</li>
//                   <li className="post-tile-ageGroup">{job.ageGroup}</li>
//                   <li className="post-tile-gender">{job.gender}</li>
//                   <li className="post-tile-ethinicity">{job.ethinicity}</li>
//                   <li className="post-tile-maritialStatus">{job.maritalStatus}</li>
//                   <li className="post-tile-education">{job.education}</li>
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div> 
//     );
//   }
// }
import { Provider } from "react-redux";
import configureStore from "../src/redux/Store";
import { ThemeProvider } from './theme-context' 

let { store } = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
      <Provider store={store}>
        <ThemeProvider>
          <App />
          </ThemeProvider>
      </Provider>
  </React.StrictMode>
);