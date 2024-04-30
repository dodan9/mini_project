import { Route, Routes } from "react-router-dom";

export const appRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<></>} />
    </Routes>
  );
};
