import { useEffect, useRef, useState } from "react";
import defaultAvatar from "../../../public/avatarDefault.png";
import "./HeaderBar.scss";
const HeaderBar = () => {
  const [show, setShow] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    function handler(e) {
      if (!menuRef.current?.contains(e.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handler);
    // return document.removeEventListener("mousedown", handler);
  }, [show]);
  return (
    <div className="header-bar h-[80px] border border-b-gray-200 border-transparent py-2">
      <div className="container w-full mx-auto flex items-center justify-end gap-x-5 px-4 py-1">
        <span className="bell-icon border p-1 rounded-full relative cursor-pointer">
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
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </span>

        <div className="relative">
          <img
            src={defaultAvatar}
            alt="avatar.png"
            className="avatar  h-[50px] object-fit rounded-full cursor-pointer"
            onClick={() => setShow(!show)}
          />
          <div
            ref={menuRef}
            className={`dropdown-menu ${show ? "active" : "inactive"}`}
          >
            <div className="top-content border border-transparent border-b-gray-200 pb-4 flex gap-x-3">
              <img
                src={defaultAvatar}
                alt="avatar.png"
                className="avatar relative h-[40px] object-fit rounded-full"
              />

              <div className="content">
                <p>
                  <span className="font-semibold">MSSV:</span>B1906491
                </p>
                <p>
                  <span className="font-semibold">Họ và tên:</span>
                  Ngô Vĩ Khang
                </p>
              </div>
            </div>
            <div className="bottom-content mt-4 cursor-pointer">
              <span></span>
              <span className="font-bold capitalize">Đăng xuất</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
