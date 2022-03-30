
import Header from "./Components/Header";
import Navforsmalldevice from "./Components/NavForSmallDevice";
import { AnimatePresence } from 'framer-motion';

function App() {
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
