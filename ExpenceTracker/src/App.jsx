import { useContext } from "react";
import HarcamaTakip from "./Components/HarcamaTakip";
import "./App.css";
import HarcananTutar from "./Components/HarcananTutar";
import Listeleme from "./Components/Listeleme";
import NewHarcama from "./Components/NewHarcama";
import { GeneralContext } from "./Context/GeneralContext";

function App() {
  const { data } = useContext(GeneralContext);

  let toplamTutar = 0;

  for (let i = 0; i < data.length; i++) {
    toplamTutar += data[i].price;
  }

  return (
    <div>
      <HarcamaTakip />
      <HarcananTutar toplamTutar={toplamTutar} />
      <ul>
        {data.map((item) => (
          <Listeleme key={item.id} item={item} />
        ))}
      </ul>
      <NewHarcama toplamTutar={toplamTutar} />
    </div>
  );
}

export default App;
