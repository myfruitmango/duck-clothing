import { Routes, Route } from "react-router";

import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>I am The Shop Page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
        {/* /home/shop */}
      </Route>
    </Routes>
  );
};

export default App;
