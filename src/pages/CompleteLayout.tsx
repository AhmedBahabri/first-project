// src/pages/CompleteLayout.tsx
import React from "react";
import headerLogo from "../assets/DawaiLogo.svg";
import homeLogo from "../assets/HomeIcon.svg";
import medicinLogo from "../assets/medicineIcon.svg";
import settingsLogo from "../assets/sittingIcon.svg";
import signoutlogo from "../assets/HomeIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import notificationsIcon from "../assets/notificationsIcon.svg";
import fevadolIcon from "../assets/fevadolIcon.svg";
import threeDotsIcon from "../assets/3dots.svg";

const CompleteLayout: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg rounded-l-lg z-50 p-4">
        <div className="p-4">
          <div className="mb-8">
            <img src={headerLogo} alt="Logo" className="mx-auto" />
          </div>

          <ul>
            <li className="my-14 flex items-center justify-center hover:text-[#5789f1]">
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
            <li className="mr-5 my-14 flex items-center justify-center hover:text-[#5789f1]">
              <span className="mr-2 font-cairo">تسجيل الخروج</span>
              <img src={signoutlogo} alt="Icon 4" className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <div className="fixed top-0 right-64 left-1 h-16 bg-white shadow-md z-40 flex items-center justify-between px-4">
        <div className="flex items-center">
          <div className="ml-4 text-right">
            <div className="text-black">اهلا د.احمد</div>
            <div className="text-sm text-blue-600">
              ! من الرائع رؤيتك مرة اخرى
            </div>
          </div>
          <img
            src={notificationsIcon}
            alt="Notifications Icon"
            className="w-6 h-6 ml-4"
          />
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="ابحث..."
            className="border rounded-xl p-2"
          />
          <img src={searchIcon} alt="Search Icon" className="w-6 h-6 ml-2" />
        </div>
        <div className="text-black text-2xl font-bold">لوحة القيادة</div>
      </div>

      {/* Content Below Navbar */}
      <div className=" p-4 flex flex-col h-full w-full mr-64 mt-20">
        <div className="flex justify-between items-center mb-10 w-full ml-80">
          <div className="flex space-x-4">
            <button className="text-gray-500 hover:text-black focus:outline-none border-b-2 border-transparent hover:border-black">
              قائمة الادوية
            </button>
            <button className="text-gray-500 hover:text-black focus:outline-none border-b-2 border-black">
              سجل الادوية
            </button>
          </div>
        </div>
        <div className="text-sm text-gray-600 mb-7 w-full ml-96">
          بيانات الادوية
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-[#718EBF] text-white">
                <th className="p-2">تفاصيل</th>
                <th className="p-2">التاريخ</th>
                <th className="p-2">الإجراء</th>
                <th className="p-2">تم بواسطة</th>
                <th className="p-2">اسم الدواء</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">
                  <img
                    src={threeDotsIcon}
                    alt="More Options"
                    className="w-6 h-6"
                  />
                </td>
                <td className="p-2">28 Jan, 12:30AM</td>
                <td className="p-2">اضافة</td>
                <td className="p-2">ahmed</td>
                <td className="p-2 flex items-center">
                  املور
                  <img
                    src={fevadolIcon}
                    alt="Fevadol Icon"
                    className="w-6 h-6 ml-2 "
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <img
                    src={threeDotsIcon}
                    alt="More Options"
                    className="w-6 h-6 "
                  />
                </td>
                <td className="p-2">28 Jan, 12:30AM</td>
                <td className="p-2">اضافة</td>
                <td className="p-2">ahmed</td>
                <td className="p-2 flex items-center">
                  املور
                  <img
                    src={fevadolIcon}
                    alt="Fevadol Icon"
                    className="w-6 h-6 ml-2"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <img
                    src={threeDotsIcon}
                    alt="More Options"
                    className="w-6 h-6"
                  />
                </td>
                <td className="p-2">28 Jan, 12:30AM</td>
                <td className="p-2">اضافة</td>
                <td className="p-2">ahmed</td>
                <td className="p-2 flex items-center">
                  املور
                  <img
                    src={fevadolIcon}
                    alt="Fevadol Icon"
                    className="w-6 h-6 ml-2"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <img
                    src={threeDotsIcon}
                    alt="More Options"
                    className="w-6 h-6"
                  />
                </td>
                <td className="p-2">28 Jan, 12:30AM</td>
                <td className="p-2">اضافة</td>
                <td className="p-2">ahmed</td>
                <td className="p-2 flex items-center">
                  املور
                  <img
                    src={fevadolIcon}
                    alt="Fevadol Icon"
                    className="w-6 h-6 ml-2"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <img
                    src={threeDotsIcon}
                    alt="More Options"
                    className="w-6 h-6"
                  />
                </td>
                <td className="p-2">28 Jan, 12:30AM</td>
                <td className="p-2">اضافة</td>
                <td className="p-2">ahmed</td>
                <td className="p-2 flex items-center">
                  املور
                  <img
                    src={fevadolIcon}
                    alt="Fevadol Icon"
                    className="w-6 h-6 ml-2"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <img
                    src={threeDotsIcon}
                    alt="More Options"
                    className="w-6 h-6"
                  />
                </td>
                <td className="p-2">28 Jan, 12:30AM</td>
                <td className="p-2">اضافة</td>
                <td className="p-2">ahmed</td>
                <td className="p-2 flex items-center">
                  املور
                  <img
                    src={fevadolIcon}
                    alt="Fevadol Icon"
                    className="w-6 h-6 ml-2"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <img
                    src={threeDotsIcon}
                    alt="More Options"
                    className="w-6 h-6"
                  />
                </td>
                <td className="p-2">28 Jan, 12:30AM</td>
                <td className="p-2">اضافة</td>
                <td className="p-2">ahmed</td>
                <td className="p-2 flex items-center">
                  املور
                  <img
                    src={fevadolIcon}
                    alt="Fevadol Icon"
                    className="w-6 h-6 ml-2"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <img
                    src={threeDotsIcon}
                    alt="More Options"
                    className="w-6 h-6"
                  />
                </td>
                <td className="p-2">28 Jan, 12:30AM</td>
                <td className="p-2">اضافة</td>
                <td className="p-2">ahmed</td>
                <td className="p-2 flex items-center">
                  املور
                  <img
                    src={fevadolIcon}
                    alt="Fevadol Icon"
                    className="w-6 h-6 ml-2"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <img
                    src={threeDotsIcon}
                    alt="More Options"
                    className="w-6 h-6"
                  />
                </td>
                <td className="p-2">28 Jan, 12:30AM</td>
                <td className="p-2">اضافة</td>
                <td className="p-2">ahmed</td>
                <td className="p-2 flex items-center">
                  املور
                  <img
                    src={fevadolIcon}
                    alt="Fevadol Icon"
                    className="w-6 h-6 ml-2"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompleteLayout;
