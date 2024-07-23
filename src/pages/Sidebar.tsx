// src/page/Sidebar.tsx
import React from 'react';
import headerLogo from "../assets/DawaiLogo.svg";
import homeLogo from "../assets/HomeIcon.svg";
import medicinLogo from "../assets/medicineIcon.svg";
import settingsLogo from "../assets/sittingIcon.svg";
import signoutlogo from "../assets/HomeIcon.svg";


const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg rounded-l-lg z-50 p-4">
      <div className="p-4">
        <div className="mb-8">
          <img src={headerLogo} alt="Logo" className="mx-auto" />
        </div>
      
        <ul>
  <li className="my-14 flex items-center justify-center hover:text-[#5789f1] ">
    <span className="mr-2 font-cairo">لوحة القيادة</span>
    <img src={homeLogo} alt="Icon 1" className="w-6 h-6" />
  </li>
  <li className="ml-8 my-14 flex items-center justify-center hover:text-[#5789f1]">
    <span className="mr-2 font-cairo">الأدوية</span>
    <img src={medicinLogo} alt="Icon 2" className="w-6 h-6" />
  </li>
  <li className="ml-3 my-14 flex items-center justify-center hover:text-[#5789f1]">
    <span className="mr-2 font-cairo">الإعدادات</span>
    <img src={settingsLogo} alt="Icon 3" className="w-6 h-6" />
  </li>
  <li className="mr-5 my-14 flex items-center justify-center hover:text-[#5789f1] ">
    <span className="mr-2 font-cairo">تسجيل الخروج</span>
    <img src={signoutlogo} alt="Icon 4" className="w-6 h-6" />
  </li>
</ul>


      </div>
    </div>
  );
};

export default Sidebar;
