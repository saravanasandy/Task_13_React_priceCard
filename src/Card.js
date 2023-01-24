import React from 'react'

const Card = (props) => {
  console.log(props.data);
  return  ( 



  <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
      <h6 className="card-price text-center">{props.data.price}<span className="period">/month</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li className={props.data.userEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.plan==="Free"?props.data.users:<b>{props.data.users}</b>}</li>
        <li className={props.data.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data. storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
        <li className={props.data.publicProjectEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.publicProjectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicProject}</li>
        <li className={props.data.communityAccessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data. communityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.communityAccess}</li>
        <li className={props.data.privateProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.  privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data. privateProjects}
          </li>
        <li className={props.data.phoneSuportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data. phoneSuportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.phoneSuport}
        </li>
        <li className={props.data.subDomainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.subDomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.plan==="pro"?<><b>Unlimited</b>{props.data.subDomain}</>:props.data.subDomain}
        </li>
        <li className={props.data.reportsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.reportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.reports}
          </li>
      </ul>
      <div className="d-grid">
        <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>

)}

export default Card