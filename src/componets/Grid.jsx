import { React, useContext } from 'react';
import "../emp-list.css";
import img from '../Employee Profile Images/6c9e00b4aa2672f1a29d09432b773028.jpeg';
import Navigation from './Navigation';
import UserData from "../UserContext";

function Grid(props) {
  const { value } = useContext(UserData);
  return (
    <>
      <Navigation />
      <div className='main-Card container'>
        {
          value.map((i) => {
            return (
              <>
                <div className='inner-Card col-md-3 col-12 col-sm-6'>
                  <img src={img} alt="" className='rounded-circle w-50' />
                  <h4 className='text-muted display-7'>{i.name}</h4>
                  <h4 className='text-dark fw-bolder'>{i.desiName}</h4>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Grid