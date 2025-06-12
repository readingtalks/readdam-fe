import './index.css';
import { Routes, Route } from 'react-router-dom';
import PlaceList from '@pages/admin/PlaceList';
import AdminRoutes from '@routes/AdminRoutes';
import PlaceAdd from '@pages/admin/PlaceAdd';
import UserRoutes from '@routes/UserRoutes';
import PlaceDetail from '@pages/user/PlaceDetail';
import Join from '@pages/user/Join';
import Home from '@pages/user/Home';
import SearchResult from '@pages/user/SearchResult';
import WriteList from '@pages/user/WriteList';
import WriteShortList from '@pages/user/WriteShortList';

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
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/writeList" element={<WriteList />} />
          <Route path="/writeShortList" element={<WriteShortList />} />
          
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
