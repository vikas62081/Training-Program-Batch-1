import React, { useEffect, useState } from "react";
const URL = "https://api.instantwebtools.net/v1/passenger?size=100";
const PassengerList = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.data);
        setIsLoading(false);
      });
  }, []);
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data &&
        data.map((passenger) => {
          return (
            <div key={passenger._id} className="passenger">
              <h1>
                {passenger.name}
                <span>
                  (<i>{passenger.airline[0].country}</i>)
                </span>
              </h1>
              <p>{passenger._id}</p>
              <p>{passenger.trips}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default PassengerList;
