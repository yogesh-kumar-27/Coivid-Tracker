import React, { useEffect, useState } from "react";

const StateWise = () => {

    const [data, setData] = useState([])

  const url = "https://api.covid19india.org/data.json";

  const getCovidData = async () => {
    const res = await fetch(url);
    const actualData = await res.json();
    //console.log(actualData.statewise);
    setData(actualData.statewise)
  };


  useEffect(() => {
    getCovidData();
  
  }, []);
  return (
    <>
       <h1 className="text-info text-center ">Covid-19 State Wise Tracker</h1>
      <div className="container text-center py-5 ">
     
        <div className="table-responsive scroll">
          <table className="table table-hover shadow table-bordered  text-white">
            <thead>
              <tr className="bg-danger text-white  sticky-top">
                <th scope="col">State</th>
                <th scope="col">confirmed</th>
                <th scope="col">recovered</th>
                <th scope="col">deaths</th>
                <th scope="col">active</th>
                <th scope="col">last updated time</th>
                

              </tr>
            </thead>
            <tbody >
                {
                    data.map((curEle,index) => {
                        return(
                            <tr className="hov" key={index}>
                            <th scope="col">{curEle.state}</th>
                            <th scope="col">{curEle.active}</th>
                            <th scope="col">{curEle.confirmed}</th>
                            <th scope="col">{curEle.recovered}</th>
                            <th scope="col">{curEle.deaths}</th>
                            <th scope="col">{curEle.lastupdatedtime}</th>
                            
                          </tr>
                        )
                    })
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWise;
