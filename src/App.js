import { useEffect } from "react";
import { Container } from "@mui/material";
import axios from "axios";


function App() {
  const getData = async () => {
    const res = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`);
    const dataRes = await res.data;
    console.log(dataRes);
  }

  useEffect(() => getData());

  return (
    <Container>Something</Container>
  );
}

export default App;
