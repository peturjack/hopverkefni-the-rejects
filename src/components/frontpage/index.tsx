import { ButtonPrimary } from "../Button";
import Lottie from "lottie-react";
import animationData from "./heartanimation.json";
import { Cloud, CloudContainer } from "./cloud";

interface Props {
  setNav: (nav: string) => void;
}

const Frontpage: React.FC<Props> = ({setNav}) => {
  return (
    <>
      <div style={{
          height: "80%",
          overflow: "hidden",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <div>
          <h1 style={{
              paddingTop: "15rem",
              paddingBottom: ".5rem", 
              fontWeight: "500",
              fontSize: "4.4rem ",
            }}>
            THE <br />WAITING <br /> ROOM
          </h1>
          <ButtonPrimary onClick={() => setNav('sign-in')} style={{ width: "17.5rem", height: "6.9rem", fontSize: "2.4rem" }}>
            Enter
          </ButtonPrimary>
        </div>
        <div style={{ width: "20rem" }}></div>
      </div>
    </>
  );
};

export default Frontpage;
