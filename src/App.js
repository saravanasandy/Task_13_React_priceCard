
import './App.css';
import Card from './Card';



function App() {

  let data =[
    {
      plan:"Free",
      price:0,
      users:"Single User",
      userEnabler :true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:false,
      privateProjects:"Unlimeted Private Projects",
      privateProjectsEnabler:false,
      phoneSuport:"Dedicated Phone Support",
      phoneSuportEnabler:false,
      subDomain:"Free Subdomains",
      subDomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:false,
    },
    {
      plan:"plus",
      price:"$9",
      users:"5 User",
      userEnabler :true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimeted Private Projects",
      privateProjectsEnabler:true,
      phoneSuport:"Dedicated Phone Support",
      phoneSuportEnabler:true,
      subDomain:"Free Subdomains",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false,
    },
    {
      plan:"pro",
      price:"$49",
      users:"Unlimeted User",
      userEnabler :true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProject:"Unlimited Public Projects",
      publicProjectEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimeted Private Projects",
      privateProjectsEnabler:true,
      phoneSuport:"Dedicated Phone Support",
      phoneSuportEnabler:true,
      subDomain:" Free Subdomains",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:true,
    }
  ]
  return (
    <div >
          <section className="pricing py-5">
  <div className="container">
    <div className="row">
   {
    data.map((value,index)=>{
      return <Card data ={value}  key={index}/>
    })
   }
    </div>
  </div>
</section>
       
    </div>
  );
}

export default App;
