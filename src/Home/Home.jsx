import React, { useEffect } from "react";
import { Card, CardContent, Switch, Typography } from "@material-ui/core";

import firebase from "../firebase.js";

import "./Home.css";

function Home(props) {
  const [switchOn, setSwitchOn] = React.useState(false);

  useEffect(() => {
    const itemsRef = firebase.database().ref("LED_Status");
    itemsRef.on("value", (snapshot) => {
      let item = snapshot.val();
      setSwitchOn(Boolean(item));
    });
  }, []);

  const handleChange = (event) => {
    const { checked } = event.target;
    const itemsRef = firebase.database().ref("LED_Status");
    itemsRef.set(Number(!checked));
    setSwitchOn(!checked);
  };
  return (
    <div>
      <div id="header">Light Status</div>
      <div id="content">
        <Card>
          <CardContent className="card-cont">
            <Switch
              checked={!switchOn}
              onChange={handleChange}
              color="primary"
            />
            <Typography>Light: {(!switchOn && "ON") || "OFF"}</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
