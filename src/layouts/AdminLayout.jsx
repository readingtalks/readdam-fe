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
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded hover:bg-[#2C3E50] text-gray-300 hover:text-white"
              >
                <Users2Icon className="w-5 h-5" />
                회원관리
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded hover:bg-[#2C3E50] text-gray-300 hover:text-white"
              >
                <HomeIcon className="w-5 h-5" />
                장소관리
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded hover:bg-[#2C3E50] text-gray-300 hover:text-white"
              >
                <CalendarIcon className="w-5 h-5" />
                예약관리
              </a>
            </li>
            {/* Add other menu items */}
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div className="ml-64 p-8">{children}</div>
    </div>
  );
};
export default AdminLayout;
