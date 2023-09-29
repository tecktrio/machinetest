import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Signin1 from './pages/signin/signin1/Signin1';
import Signin2 from './pages/signin/signin2/Signin2';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css'
import { useEffect, useState } from 'react';
function App() {
  const [stage,setstage] = useState(1)
  const [data,setdata] = useState({
    firm_name : '',
    email_address : '',
    Address_1: '',
    address_2:'',
    State : '',
    city: '',
    postalcode:'',
    phone:'',
    firstname:'',
    last_name:'',
    email:'',
    primary_phone:''
  })

  const updatedata = (newState) => {
    setdata(newState);
  };


  return (
    <div>
        <div className='stages'>
        {stage == 1?<div className='stage'>1</div>:null}
        {stage == 2?<div className='stages'><div className='stage'>1</div><div className='stage'>2</div></div>:null}
        </div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element ={ <Home/> }/>
      <Route path='/signin1' element ={ <Signin1  setstage={setstage} updatedata = {updatedata} data={data}/>}/>
      <Route path='/signin2' element ={ <Signin2  setstage={setstage} updatedata = {updatedata} data={data}/> } />
      <Route path='/dashboard' element ={ <Dashboard  data={data}/> }/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
