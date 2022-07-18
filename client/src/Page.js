import React from "react";
import {useSelector, useDispatch} from 'react-redux'

function Page (props)
{
  const jobs = useSelector(state=>state.option.Jobs)
  console.log("jobs",jobs)
    return(
      <div className="post-container">
          <ul>
            {jobs.map((job, index) => (
              <li key={index}>
                <ul className="post-tile">
                  <li className="post-tile-projectName">{job.post.firstName}</li>
                  <li className="post-tile-projectTarget">{job.post.lastName}</li>
                  <li className="post-tile-countries">{job.post.gender}</li>
                  { job.post.languages && job.post.languages.map((option,index) => 
                  (option.isChecked ? (<li className="post-tile-countries">{option.name}</li>) : null))}
                  <li className="post-tile-ageGroup">{job.post.state}</li>
                  <li className="post-tile-gender">{job.post.creditCardType}</li>
                  <li className="post-tile-ethinicity">{job.post.eMail}</li>
                  <li className="post-tile-maritialStatus">{job.post.address}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        );
}
export default Page;