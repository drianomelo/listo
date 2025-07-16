import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Create } from "./pages/Create";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "ADD_MEDIA":
      return ;
  }
};

function App() {
  const [medias, dispatch] = useReducer(reducer, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create/cinema"
          element={<Create handleMedias={dispatch} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
