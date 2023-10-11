import "./styles.css";
import { Modal } from "./component";
import { useState } from "react";

function App() {
  // const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e);
  // }

  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
  };

  return (
    <>
      <div className="container">
        <Modal
          header={"header"}
          title={"title"}
          body={"body"}
          visible={visible}
          setVisible={setVisible}
        />
        <button className="btn-open-modal" onClick={handleClick}>
          Open modal
        </button>
      </div>
    </>
  );
}

export default App;
