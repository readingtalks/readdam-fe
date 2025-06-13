import './index.css';
import { Routes, Route } from 'react-router-dom';
import PlaceList from '@pages/admin/PlaceList';
import AdminRoutes from '@routes/AdminRoutes';
import PlaceAdd from '@pages/admin/PlaceAdd';
import UserRoutes from '@routes/UserRoutes';
import PlaceDetail from '@pages/user/PlaceDetail';
import Join from '@pages/user/Join';
import AdminInquiryList from '@pages/admin/AdminInquiryList';

function App() {
  return (
    <>
      <Routes>
        <Route element={<AdminRoutes />}>
          <Route path="/placeList" element={<PlaceList />} />
          <Route path="/placeAdd" element={<PlaceAdd />} />
          <Route path='/adminInquiryList' element={<AdminInquiryList />}/>
        </Route>
      </Routes>
      <Routes>
        <Route element={<UserRoutes />}>
          <Route path="/join" element={<Join />} />
          <Route path="/placeDetail" element={<PlaceDetail />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
