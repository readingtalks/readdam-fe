import './index.css';
import { Routes, Route } from 'react-router-dom';
import PlaceList from '@pages/admin/PlaceList';
import AdminRoutes from '@routes/AdminRoutes';
import PlaceAdd from '@pages/admin/PlaceAdd';
import UserRoutes from '@routes/UserRoutes';
import PlaceDetail from '@pages/user/PlaceDetail';
import PlaceReservationList from '@pages/admin/PlaceReservationList';
import Place from '@pages/user/Place';
import BookPage from '@pages/user/BookPage';

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
      <Routes>
        <Route element={<UserRoutes />}>
          <Route path="/place" element={<Place />} />
          <Route path="/placeDetail" element={<PlaceDetail />} />
          <Route path="/book" element={<BookPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
