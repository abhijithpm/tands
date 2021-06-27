import React,{useEffect,useState} from "react";
import "./App.css";
import Preloader from './components/loader/preloader'

import Main from "./components/Main/Main";
import GymProgram from "./components/GymProgram/GymProgram";
import Member from "./components/Member/Member";
import Classes from "./components/OurClasses/Classes";
import Schedule from "./components/Schedule/Schedule";
import Trainers from "./components/Trainers/Trainers";
import Contact from './components/Contact/Contact';



const App = () =>{
  const [loading,setLoading]=useState(false);
useEffect(()=>{
setLoading(true)
setTimeout(()=>{
setLoading(false)
},16000)
},[])

  return(
  <div className="App">
    {
      loading ?
     

      <Preloader/>

      :
   <div>
    <Main />
    {/* <GymProgram />
    
    <Member />  */}
    <Classes />
    {/* <Schedule /> */}
    <Trainers />
    <Contact />
    </div>
  }
  </div>
)};

export default App;
