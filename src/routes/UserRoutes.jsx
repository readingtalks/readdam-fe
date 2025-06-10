import { Outlet } from 'react-router';
import UserLayout from '@layouts/UserLayout';

export default function UserRoutes() {
  return (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
}
