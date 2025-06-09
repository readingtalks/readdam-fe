import './index.css';
import { Routes, Route } from 'react-router-dom';
import PlaceList from './pages/admin/PlaceList';
import AdminRoutes from './Routes/AdminRoutes';
import PlaceAdd from './pages/admin/PlaceAdd';
import PlaceReservationList from './pages/admin/PlaceReservationList';

function App() {
  return (
    <>
      <Routes>
        <Route element={<AdminRoutes />}>
          <Route path="/placeList" element={<PlaceList />} />
          <Route path="/placeAdd" element={<PlaceAdd />} />
          <Route
            path="/placeReservationList"
            element={<PlaceReservationList />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
