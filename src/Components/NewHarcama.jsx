import { useState } from "react";
import { GeneralContext, useContext } from "../Context/GeneralContext";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

// eslint-disable-next-line react/prop-types
function NewHarcama({ toplamTutar }) {
  const [alert, setAlert] = useState(false);
  const { limit, setData } = useContext(GeneralContext);
  const [harcamaAdi, setHarcamaAdi] = useState("");
  const [harcamaTutari, setHarcamaTutari] = useState("");

  const handleHarca = () => {
    const newHarca = {
      id: 3,
      name: harcamaAdi,
      price: +harcamaTutari,
    };
    if (toplamTutar + newHarca.price > limit) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);

      setHarcamaAdi("");
      setHarcamaTutari("");
      return;
    }
    setData((prev) => [...prev, newHarca]);
    setHarcamaAdi("");
    setHarcamaTutari("");
  };

  return (
    <div>
      <input
        type="text"
        name="harcamaAdi"
        value={harcamaAdi}
        onChange={(e) => setHarcamaAdi(e.target.value)}
        placeholder="Harcama Adı"
      />
      <br />
      <input
        type="number"
        name="harcamaTutari"
        value={harcamaTutari}
        onChange={(e) => setHarcamaTutari(e.target.value)}
        placeholder="Harcama Tutarı"
      />
      <br />
      <Button onClick={handleHarca} variant="contained">
        Harca
      </Button>
      {alert && (
        <Alert variant="filled" severity="error">
          Olmadı
        </Alert>
      )}
    </div>
  );
}

export default NewHarcama;
