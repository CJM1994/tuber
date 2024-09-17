import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "../views/LandingPage"

const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
