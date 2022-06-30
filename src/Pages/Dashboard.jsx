import { Fragment } from "react";
import { useState, useEffect } from "react";
import CardBody from "../Components/CardBody";

const Dashboard = (props) => {
  const [teeTime, setTeeTime] = useState(null);

  const URL = "http://localhost:4000/dashboard";
  
  // API CALLS/////////////////////////////////////////////////////
  
  const getTeeTime = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setTeeTime(data);
    };
    useEffect(() => {
      getTeeTime();
    }, []);
    
  console.log(teeTime);

  const createTeeTime = async (createdTeeTime) => {
    await fetch(URL, {
      method: "POST",
      header: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(createdTeeTime),
    });

    getTeeTime();
  };

  const updateTeeTime = async (updatedTeeTime, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(updatedTeeTime),
    });
    getTeeTime();
  };

  const loaded = () => {

      return (
        <div className='main-content-dashboard'>
        <CardBody
          teetime={teeTime}
          />
         </div>
         );
        };
        


        return teeTime ? loaded() : <h2>Loading...</h2>
          
          



};

export default Dashboard;
