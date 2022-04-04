import { useEffect } from "react";

import Header from "./Components/Header";
import Navforsmalldevice from "./Components/NavForSmallDevice";
import { AnimatePresence } from 'framer-motion';

import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/user/userActions";
import { useSelector } from "react-redux";

function App() {

  const dispatch = useDispatch();
  const user = useSelector( state => state.user.user )

  useEffect(()=> {
      !user && dispatch(fetchUser())
  }, [])

  return (
    <div>
        <AnimatePresence>
          <Navforsmalldevice />
          <Header />
        </AnimatePresence>
    </div>
  );
}

export default App;
