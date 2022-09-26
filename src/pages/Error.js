import React from "react";
import Lottie from "lottie-react";
import error from "../lottie/error-page.json";
import {useNavigate} from 'react-router-dom';

function Error() {
  // Redirect to home page
  let navigate = useNavigate();
  const homeRedirect = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div
      style={{
        padding: "10% 20%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={error}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100vh",
          transform: "translate(-50%, -50%)",
        }}
      ></Lottie>
      <button
        onClick={homeRedirect}
        style={{
          backgroundColor: "#262626",
          padding: "19px",
          border: "none",
          color: "white",
          textTransform: "uppercase",
          fontSize: "12px",
          fontWeight: "600",
          letterSpacing: "1px",
          margin: "auto",
          position: "fixed",
          bottom: "0",
          width: "100%",
          cursor: "pointer"
        }}
      >
        Go to home
      </button>
    </div>
  );
}

export default Error;
