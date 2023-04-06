import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import {OuthContext} from "./contexts/OuthContext";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Upload from "./components/Upload/Upload";
import ImageOverview from "./components/ImageOverview/ImageOverview";

const App=()=> {

  let [user,changeUserState]=useLocalStorage('user');
  let navigate = useNavigate();

  return (
    <OuthContext.Provider value={[user,changeUserState,navigate]}>
     <Navigation/>
      <Routes>
      <Route path="/*" element={<Home user={user}/>} />
      <Route path="/home/*" element={<Home user={user}/>} />
      <Route path="/upload" element={<Upload/>}/>
      <Route path="/image/:id" element={<ImageOverview/>}/>
      </Routes>
    </OuthContext.Provider>
  );
}

export default App;
