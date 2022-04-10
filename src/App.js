import { useEffect } from "react";

import Header from "./Components/Header";
import Navforsmalldevice from "./Components/NavForSmallDevice";
import { AnimatePresence } from 'framer-motion';

import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/user/userActions";
// when app is mounted , set user into initial state in the redux store
import { useSelector } from "react-redux";

//* SPA 
import { Routes , Route, useLocation } from 'react-router-dom';

//* COMPONENTS
import Maincontainer from "./Components/MainContainer";
import Createitem from "./Components/CreateItem";

function App() {

  const dispatch = useDispatch();
  const user = useSelector( state => state.user.user )

  useEffect(()=> {
      !user && dispatch(fetchUser())
  }, [user , dispatch])

  const location = useLocation();

  return (
    <div>
        <AnimatePresence>
          { location.pathname !== '/create' && <Navforsmalldevice /> }
          <Header />
          <Routes>
            <Route path="/" element={ <Maincontainer /> }/>
            <Route path="/create" element={ <Createitem /> }/>
          </Routes>
          
        </AnimatePresence>
    </div>
  );
}

export default App;
