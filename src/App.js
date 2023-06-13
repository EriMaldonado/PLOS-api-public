import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiList from "./views/api_public/Api-List.js";
import SeeClient from "./views/api_information/seeClient.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApiList />} />
        <Route path="/seeClient" element={<SeeClient />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
