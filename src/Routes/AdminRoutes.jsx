import { Outlet } from 'react-router';
import AdminLayout from '@layouts/AdminLayout';

export default function AdminRoutes() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
