import { Outlet } from "react-router-dom";
import "./assets/sass/main.scss";
import Nav from './Components/Nav/Nav'

const App = () => {
  return (
    <div>
     <Nav/>
      <Outlet />
    </div>
  );
};

export default App;
