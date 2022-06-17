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
      title: "Rencana biaya pengobatan.",
      content:
        "Biaya bantuan yang diberikan untuk pasien secara bertahap selama 10 bulan dan/atau selama proses menjalani proses pengobatan (selama dana donasi mencukupi).",
    },
    {
      id: 2,
      title: "Rencana biaya operasional",
      content:
        "Biaya bantuan yang diberikan untuk pasien secara bertahap selama 10 bulan dan/atau selama proses menjalani proses pengobatan (selama dana donasi mencukupi).",
    },
    {
      id: 2,
      title: "Rencana biaya operasional",
      content:
        "Biaya bantuan yang diberikan untuk pasien secara bertahap selama 10 bulan dan/atau selama proses menjalani proses pengobatan (selama dana donasi mencukupi).",
    },
    {
      id: 2,
      title: "Rencana biaya operasional",
      content:
        "Biaya bantuan yang diberikan untuk pasien secara bertahap selama 10 bulan dan/atau selama proses menjalani proses pengobatan (selama dana donasi mencukupi).",
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
          <Experiment key={idx} title={item.title} content={item.content} />
        );
      })}
    </div>
  );
}

export default App;
