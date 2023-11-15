import Mein from "../Pages/Mein";
import {Routes,Route} from 'react-router-dom'
function App() {
 
  return (
    <>
      <Routes>
          <Route path="/" element={<Mein />}/>
       </Routes>
     </>
  )
}

export default App
