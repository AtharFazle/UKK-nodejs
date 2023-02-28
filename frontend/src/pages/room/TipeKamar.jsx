import { React, useState, useEffect } from "react";
import axios from "axios";

const TipeKamar = () => {
  // const [nama_tipe_kamar, setNamaTipeKamar] = useState("");
  // const [harga, setHarga] = useState("");
  // const [foto, setFoto] = useState("");
  // const [deskripsi, setDeskripsi] = useState("");
  let [TipeKamar, setTipekamar] = useState([]);

  const TipeKamarData = () => {
    axios
      .get("http://localhost:5000/hotel/tipe_kamar/")
      .then((response) => {
        setTipekamar((TipeKamar = response.data.data[0]));
        console.log("data", response.data.data[0]);
        
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  };

  useEffect(() => {
    return () => {
      TipeKamarData();
    };
  }, []);
  return (
    <div>
      <div>TipeKamar</div>
      <div>{TipeKamar.id}</div>
      <div>{TipeKamar.harga}</div>
      <div>{TipeKamar.nama_tipe_kamar}</div>
    </div>
  );
};
export default TipeKamar;
