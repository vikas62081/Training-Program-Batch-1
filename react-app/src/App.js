import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Counter, { Grettings } from "./components/Counter";
import Table from "./components/Table";
const URL = "https://api.instantwebtools.net/v1/passenger?size=100";
const App = () => {
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
    <div className="App">
      {/* <Counter incrementBy={5} decrementBy={3} resetValue={0} />
      <Counter incrementBy={10} initialCount={100} />
      <Counter incrementBy={10} initialCount={100} />
      <Grettings />
      <Grettings name="Vikas" /> */}
      {/* <h1>User are : </h1>
      {users.map((user) => (
        <Fragment key={user.id}>
          <p>
            my name is <b>{user.name}</b>, my email id is <b>{user.email}</b>{" "}
            {user?.address?.city}.
          </p>
        </Fragment>
      ))} */}
      {/* <Table />*/}
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
    </div>
  );
};

export default App;
