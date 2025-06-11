import './index.css';
import { Routes, Route } from 'react-router-dom';
import PlaceList from '@pages/admin/PlaceList';
import AdminRoutes from '@routes/AdminRoutes';
import PlaceAdd from '@pages/admin/PlaceAdd';
import UserRoutes from '@routes/UserRoutes';
import PlaceDetail from '@pages/user/PlaceDetail';
import MyPointCharge from '@pages/my/MyPointCharge';
import MyRoutes from '@routes/MyRoutes';
import MyProfile from '@pages/my/MyProfile';
import MyLikeClass from '@pages/my/MyLikeClass';
import MyAlert from '@pages/my/MyAlert';
import MyInquiry from '@pages/my/MyInquiry';
import MyPointList from '@pages/my/MyPointList';

function App() {
  return (
    <>
      <Routes>
        <Route element={<AdminRoutes />}>
          <Route path="/placeList" element={<PlaceList />} />
          <Route path="/placeAdd" element={<PlaceAdd />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<UserRoutes />}>
          <Route path="/placeDetail" element={<PlaceDetail />}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route element={<MyRoutes />}>
          <Route path="/myProfile" element={<MyProfile />}></Route>
          <Route path="/myPointCharge" element={<MyPointCharge />}></Route>
          <Route path="/myPointList" element={<MyPointList />}></Route>
          <Route path="/myLikeClass" element={<MyLikeClass />}></Route>
          <Route path="/myAlert" element={<MyAlert />}></Route>
          <Route path="/myInquiry" element={<MyInquiry />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
