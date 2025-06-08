import './index.css';
import { Routes, Route } from 'react-router-dom';
import PlaceList from './pages/admin/PlaceList';
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route element={<AdminRoutes />}>
          <Route
            path="/placeList"
            element={
              <main className="flex-grow">
                <PlaceList />
              </main>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
