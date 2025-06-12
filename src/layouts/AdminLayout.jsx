import {
  Users2Icon,
  HomeIcon,
  BookIcon,
  CalendarIcon,
  BellIcon,
  SettingsIcon,
} from 'lucide-react';
const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-[#1B2A3B] text-white">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">읽담 관리자(예시임 바뀔예정)</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="ml-64 p-8">{children}</div>
    </div>
  );
};
export default AdminLayout;
