import { useState } from "react";
import {
  DisclosureButton,
  DisclosureContainer,
  DisclosurePanel,
  Experiment,
} from "./components";
function App() {
  const [show, setShow] = useState(false);
  const datas = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit.",
      content: "Lorem ipsum dolor sit. Lorem ipsum dolor sit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit.",
      content: "Lorem ipsum dolor sit. Lorem ipsum dolor sit.",
    },
  ];
  return (
    <div className="App">
      {/* {datas.map((item, idx) => {
        return (
          <DisclosureContainer key={idx} show>
            <DisclosureButton>
              <span>{` -> `}</span>
              <span>Dissclosure Button {item.id}</span>
            </DisclosureButton>
            <DisclosurePanel>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam.
              </p>
            </DisclosurePanel>
          </DisclosureContainer>
        );
      })} */}
      {datas.map((item, idx) => {
        return (
          <Experiment
            key={idx}
            title={item.title}
            content={item.content}
            show={show}
            onClick={() => setShow(!show)}
          />
        );
      })}
    </div>
  );
}

export default App;
