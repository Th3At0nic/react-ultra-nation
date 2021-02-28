import React from "react";

const Country = (props) => {
  console.log(props);
  const country = props.name;
  console.log(country);
  return (
    <div>
      <Country>
        {/* {" "} */}
        {/* <h2> This is {country} </h2> */}
      </Country>
    </div>
  );
};

export default Country;
