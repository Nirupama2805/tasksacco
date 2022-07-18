import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router,Routes } from 'react-router-dom'  
import Page from './Page';
import Form from './Form';
import Display from './display';
import { createBrowserHistory } from 'history';


//  <div className="post-container">
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



const history = createBrowserHistory();
console.log("history",history);
// function About()
// {
//   return(
//   <div>this is about</div>);

// }
// function Contact()
// {
//   return(
//   <div>this is contact</div>);

// }
function App() {
  return (
    <div className="App">
      <Router>  
    <div>  
      {/* <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/about">About</Link>  
        </li>  
        <li>  
          <Link to="/contact">Contact</Link>  
        </li>  
      </ul>   */}
      <Routes>
      <Route exact path="/" element={<Display />} />  
      <Route exact path="/Page" element={<Page />} />  
      {/* <Route path="/contact" component={<Contact />}/>  */}
      </Routes>
       
    </div>  
  </Router>
     
    </div>
  );
}

export default App;
