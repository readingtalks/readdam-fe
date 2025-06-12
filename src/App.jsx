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
import MyLikePlace from '@pages/my/MyLikePlace';
import MyLikeWrite from '@pages/my/MyLikeWrite';
import MyLikeBook from '@pages/my/MyLikeBook';
import MyAlert from '@pages/my/MyAlert';
import MyInquiry from '@pages/my/MyInquiry';
import MyPointList from '@pages/my/MyPointList';
import Join from '@pages/user/Join';
import MyClassContinue from '@pages/my/MyClassContinue';
import MyClassEnd from '@pages/my/MyClassEnd';
import MyClassIMade from '@pages/my/MyClassIMade';
import MyWrite from '@pages/my/MyWrite';
import MyWriteComment from '@pages/my/MyWriteComment';
import MyWriteShort from '@pages/my/MyWriteShort';
import MyReviewBook from '@pages/my/MyReviewBook';
import MyReviewClass from '@pages/my/MyReviewClass';
import MyReservation from '@pages/my/MyReservation';
import MyLibrary from '@pages/my/MyLibrary';
import Login from '@pages/user/Login';
import Token from '@pages/user/Token';
import Home from '@pages/user/Home';
import SearchResult from '@pages/user/SearchResult';
import WriteList from '@pages/user/WriteList';
import WriteShortList from '@pages/user/WriteShortList';
import Notice from '@pages/user/Notice';
import WriteDetail from '@pages/user/WriteDetail';
import WriteCreate from '@pages/user/WriteCreate';


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
          <Route path="/join" element={<Join />} />
          <Route path="/placeDetail" element={<PlaceDetail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/token" element={<Token />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/writeList" element={<WriteList />} />
          <Route path="/writeShortList" element={<WriteShortList />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/writeDetail" element={<WriteDetail />} />
          <Route path="/writeCreate" element={<WriteCreate />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<MyRoutes />}>
          <Route path="/myProfile" element={<MyProfile />}></Route>
          <Route path="/myLibrary" element={<MyLibrary />}></Route>
          <Route path="/myLikeClass" element={<MyLikeClass />}></Route>
          <Route path="/myLikePlace" element={<MyLikePlace />}></Route>
          <Route path="/myLikeWrite" element={<MyLikeWrite />}></Route>
          <Route path="/myLikeBook" element={<MyLikeBook />}></Route>
          <Route path="/myClassContinue" element={<MyClassContinue />}></Route>
          <Route path="/myClassEnd" element={<MyClassEnd />}></Route>
          <Route path="/myClassIMade" element={<MyClassIMade />}></Route>
          <Route path="/myWrite" element={<MyWrite />}></Route>
          <Route path="/myWriteComment" element={<MyWriteComment />}></Route>
          <Route path="/myWriteShort" element={<MyWriteShort />}></Route>
          <Route path="/myReviewBook" element={<MyReviewBook />}></Route>
          <Route path="/myReviewClass" element={<MyReviewClass />}></Route>
          <Route path="/myReservation" element={<MyReservation />}></Route>
          <Route path="/myPointCharge" element={<MyPointCharge />}></Route>
          <Route path="/myPointList" element={<MyPointList />}></Route>
          <Route path="/myAlert" element={<MyAlert />}></Route>
          <Route path="/myInquiry" element={<MyInquiry />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
