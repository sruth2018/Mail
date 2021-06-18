import React from 'react'
import WelcomePage from "./WelcomePage";

 const Home =(props)=>
 {
     console.log(props);//profiles


     const renderHomeProfile = props.profiles.map((profile)=>{
        return(<WelcomePage profile={profile}/>
    
         );
         })
    return (
        
   <div class="ui center aligned basic segment">
  <div class="ui left icon action input">
  </div>
  <div class="ui horizontal divider"></div>               
   <h2>WELCOME</h2>
                {renderHomeProfile[0]}
            </div>
       
    );
};
export default Home;


 {/* <WelcomePage profile={profile}/> */}
