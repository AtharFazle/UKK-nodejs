import { React, Component, useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import { FaEdit, FaLock, FaTrash } from 'react-icons/fa';
import axios from "axios";
import { API_URL } from "../utils/constants";

const ListTipeKamar = () => {
  let [TipeKamars, setTipeKamars] = useState({});
  const [loading, setLoading] = useState(true);

  
  

  useEffect(() => {

    const getData = async () => {
      await axios
        .get(API_URL+'tipe_kamar')
        .then((res) => {
          setTipeKamars(res.data.data);
        })
        .catch((err) => {
          
          console.log(err);
        });
    };

    Promise.all([getData()]);

    return () => {
      setTipeKamars([]);
    };
  }, []);

  return (
    <div>
      tipe_kamar
    </div>

  )
  }
export default ListTipeKamar;
