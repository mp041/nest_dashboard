import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Menubar from './Menubar'

const Homepage = () => {
  const token = sessionStorage.getItem("accessToken");

  const history = useHistory();
  Axios.get("http://localhost:5000/protected", {
    headers: {
      Authorization: `Bearer ${token}`,
      accessToken: sessionStorage.getItem("accessToken"),
    },
  }).then((response) => {
    try {
      console.log(response, "response erorrr");

      if (!response) {
        console.log("Not get the response");
      }

      if (response.status === 200) {
        console.log("getting token");
      } else if (response.statusCode === 401) {
        console.log("unauthorized");
      } else {
        alert("You Are not logged In!!!");

        history.push("/login");
      }
    } catch (e) {
      console.log("erorrrrrrrrrrrrrrr");
    }
  });

  // Code here

  return (
    <div className="container text-center mt-5">
      {sessionStorage.getItem("accessToken") ? (
          <div>
          <Menubar />
          <h1>Welcome to the Page :)</h1>
          </div>
    ) : (
        <h1> Unauthorized : 404 </h1>
      )}
    </div>
  );
};

export default Homepage;
