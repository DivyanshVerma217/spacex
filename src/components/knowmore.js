import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function KnowMore() {
    const { name } = useParams();

    const [launchpad, setLaunchpad] = useState([]);

  const getLaunchpad = async () => {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/launchpads");
      setLaunchpad(await response.json());
    } catch (error) {
      console.log("my error is " + error);
    }
  };
  useEffect(() => {
    getLaunchpad();
  }, []);
  return (
    <div>
         <div className="bg-hero-lg bg-contain">
      <h1 className="text-3xl text-white font-bold p-8 text-center">
        🚀--Launcpads--🚀
      </h1>
      <div>
        {launchpad.filter((items) => items.name === name).map((items) => {
          return (
            <>
              <div className=" shadow-white shadow-lg flex flex-col justify-center max-w-3xl m-auto p-8 border-4 cursor-pointer mt-10 rounded-xl mb-10 bg-white bg-transparent text-white  ">
                <div>
                  <img src={items.images.large} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-2xl font-bold text-center">
                    <h1 className="underline">{items.name}</h1>
                    <h1>• {items.status}</h1>
                  </div>
                  <div>{items.details}</div>
                </div>
                <div className=' border-2 p-2 text-black max-w-fit mt-10 bg-white rounded-lg'>REGION : {items.region}</div>
               
              </div>
            </>
          );
        })}
      </div>
    </div>

    </div>
  )
}

export default KnowMore