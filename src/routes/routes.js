import { Route, Routes } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import ThreegridPage from "../screens/3x3gridPage";
import Sixgridpage from "../screens/6x6gridPage";
import ThanksPage from "../screens/ThanksPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/3x3grid" element={<ThreegridPage />} />
      <Route path="/6x6grid" element={<Sixgridpage />} />
      <Route path="/thanks" element={<ThanksPage />} />
    </Routes>
  );
}