import { ButtonPrimary } from "../Button";

interface Props {
  setNav: (nav: string) => void;   // A function to set the navigation item
}

//Our frontpage component that accepts setNav as props
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
              color: '#293437',
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
