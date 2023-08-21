import "./Dashboard.scss";
import logo from "../../../../public/dormifyrentLogo.png";
import avatarDefault from "../../../../public/avatarDefault.png";
import { useEffect, useRef, useState } from "react";
const DashBoardPage = () => {
  const [show, setShow] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShow(false);
        console.log(e.target);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [show]);
  return (
    <div className="bg-white w-full min-h-screen">
      <header className="dashboard-header">
        <div className="container mx-auto">
          <div className="header-wrapper flex items-center justify-between">
            <div className="dashboard-header-logo w-[150px] h-[80px] overflow-hidden">
              <img
                src={logo}
                alt="logo.png"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <div className="header-left-wrapper flex items-center gap-x-5">
              <ul className="dashboard-header-links flex items-center gap-x-4 text-white font-semibold">
                <li className="link-item">Thông tin sinh viên</li>
                <li className="link-item">Xem tình trạng phòng KTX</li>
                <li className="link-item">Đăng ký ở KTX</li>
                <li className="link-item">Đăng ký sửa chữa CSVC</li>
              </ul>
              <div
                onClick={() => setShow(true)}
                className="dropdown relative cursor-pointer"
              >
                <img
                  src={avatarDefault}
                  alt="avatar.png"
                  className="header-avatar cursor-pointer w-[50px] h-[50px] object-cover rounded-full"
                />
              </div>
              <div
                ref={menuRef}
                className={`${
                  show ? "active" : "inactive"
                } dropdownMenu absolute rounded-md top-full right-10 bg-white max-w-[300px] py-3 px-2`}
              >
                <div className="top-content flex gap-x-3 border-b-gray-200 border border-transparent pb-4">
                  <div className="left-content border border-r-gray-300 border-transparent pr-2">
                    <img
                      src={avatarDefault}
                      alt="avatar.png"
                      className="object-cover w-[50px] h-[50px] rounded-full"
                    />
                  </div>
                  <div className="right-content inline text-base">
                    <p>
                      <span>Họ và Tên:</span>Ngô Vĩ Khang
                    </p>
                    <p>
                      <span>MSSV:</span>B1906491
                    </p>
                  </div>
                </div>
                <button className="btn-logout flex items-center gap-x-2 pt-3 pl-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold">Đăng Xuất</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashBoardPage;
