import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

const SmurfList = (props) => {
  const isLoading = false;
  const testSmurf = {
    id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    name: "Poppa Smurf",
    position: "Village Leader",
    nickname: "Pops",
    description:
      "Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {props.smurfs.map((smurf) => {
        return <Smurf smurf={smurf} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, {})(SmurfList);
