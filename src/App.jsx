import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home, About, Protfolio, Contact, AppLayout} from "./utils/index"
function App() {
  return (
         <BrowserRouter>
            <Routes>
              <Route element={<AppLayout/>}>

              </Route>
            </Routes>
         </BrowserRouter>
  )
}

export default App