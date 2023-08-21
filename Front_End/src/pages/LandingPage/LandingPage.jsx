import "./LandingPage.scss";
import KTXA from "/KTXA.jpg";
import KTXB from "/KTXB.jpg";
import KTXC from "/KTXC.jpg";

import CustomIcon from "../../components/CustomIcon";
import LoginComponent from "../../components/Login/LoginComponent";
import { useState } from "react";
import RegisterComponent from "../../components/Register/RegisterComponent";
const LandingPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  return (
    <div className="landing-page relative min-h-screen">
      <header className="header-content ">
        <div className="container mx-auto  flex items-center justify-between">
          <div className="header-logo w-[80px] h-auto inline-block">
            <img
              src="/logo2.png"
              alt="logo.png"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
          <nav className="header-nav">
            <ul className="font-bold cursor-pointer uppercase text-lg header-nav-list flex align-center gap-x-5">
              <li className="nav-item">
                <a href="#home">Trang chủ</a>
              </li>
              <li className="nav-item">
                <a href="#about">Giới thiệu</a>
              </li>
              <li className="nav-item">
                <a href="#ktx">KTX</a>
              </li>
              <li className="nav-item">
                <a href="contact">Liên hệ</a>
              </li>
            </ul>
          </nav>
          <div className="header-btn">
            <button
              onClick={() => {
                setShowLoginModal(true);
              }}
              className="py-4 px-8 rounded-md cursor-pointer font-bold uppercase bg-orange-400"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </header>
      <section className="heroSection mb-10 h-screen flex items-center justify-center">
        <div className="hero-content container text-center">
          <div className="hero-title">
            <h1 className="text-[75px] capitalize mx-3 font-bold text-white">
              HỆ THỐNG KÝ TÚC XÁ
            </h1>
          </div>
          <div className="hero-subtitle mt-5">
            <span className="font-semibold text-lg text-white">
              Chào mừng bạn đến với DormifyRent, nơi cuộc sống hiện đại gặp gỡ
              cộng đồng sinh viên sôi nổi. Ký túc xá tuyệt đẹp của chúng tôi
              được thiết kế để trở thành nơi tạm trú hoàn hảo của bạn trong
              những năm học đại học. Mọi người sinh hoạt trong kí túc xá sẽ nhận
              được hàng loạt các tiện nghi để nâng cao chất lượng sống.
            </span>
          </div>
          <button
            onClick={setShowRegisterModal}
            className="underline tracking-wide text-xl text-white bg-orange-500 py-4 px-10 mt-10 rounded-lg font-bold"
          >
            Đăng ký
          </button>
        </div>
      </section>
      <section className="aboutSection relative py-36">
        <div className="title mb-24">
          <h2 className="text-5xl font-bold  font-prata uppercase text-white text-center">
            Giới thiệu về chúng tôi
          </h2>
        </div>
        <div className="content-wrapper pb-20 w-4/5 flex  mx-auto">
          <div className="img-side max-h-[814px] relative mt-[100px] z-4 shadow-[0_0_25px_1px_rgba(0,0,0,0.5)]">
            <img
              src="/imgSide.png"
              alt="imageBuilding.png"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="content-section  max-h-[814px] w-full mb-[100px] ml-[-100px] bg-white inline-block py-[100px] pl-[200px] pr-[100px]">
            <h2 className="content-title font-bold mb-5 text-orange-400 text-[45px]">
              Tầm nhìn của chúng tôi
            </h2>

            <div className="content-side ">
              <span className="text-xl font-normal leading-normal">
                Tại DormifyRent, chúng tôi xây dựng nên một môi trường lành mạnh
                và đầy đủ tiện nghi, giúp sinh viên có môi trường sống thoải
                mái. Ký túc xá của chúng tôi trở thành hiện thân sống động của
                ước mơ, chứa đựng khát vọng chung của mỗi sinh viên, để lại dấu
                ấn không thể phai mờ trong cuộc sống trong khuôn viên trường và
                hơn thế nữa. Cùng nhau, chúng ta đồng hành suốt chặng đường của
                những năm đại học, chúng ta sẽ sẽ có những kĩ niệm đẹp, ấp ủ
                những ước mơ để có thể gặt hái được thành công trên con đường
                phát triển trong tương lai
              </span>
            </div>
            <div className="btn-content mt-6">
              <button
                onClick={() => {
                  setShowRegisterModal(true);
                }}
                className="font-semibold bg-orange-400 text-white uppercase py-4 px-6 rounded-lg"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="dormsSection w-full px-32 py-36 bg-darkGray">
        <div className="container mx-auto">
          <div className="title uppercase text-white font-bold">
            <h2 className="text-5xl  font-prata uppercase text-white text-center mb-[120px]">
              Chi tiết về kí túc xá
            </h2>
          </div>
          <div className="box-list gap-x-6 mb-20">
            <div className="dormRoom w-full h-[600px] relative">
              <div className="overlay"></div>
              <div className="imgRoom w-full h-full ">
                <img src={KTXA} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="content w-full pl-4 pr-4 absolute bottom-0 flex flex-col">
                <div className="top-content text-white block w-full">
                  <h3 className="font-medium text tracking-wide text-2xl">
                    KTX A
                  </h3>
                </div>
                <div className="bottom-content">
                  <CustomIcon
                    content="4-8 người"
                    className="deskIcon text-orange-400"
                  >
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
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Wireless"
                    className="deskIcon text-orange-400"
                  >
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
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Có bàn học"
                    className="deskIcon text-orange-400"
                  >
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
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      />
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Có điều hoà"
                    className="airCondition text-orange-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M16.7639 6.5C17.3132 5.88625 18.1115 5.5 19 5.5C20.6569 5.5 22 6.84315 22 8.5C22 10.1569 20.6569 11.5 19 11.5H13M6.7639 4C7.31322 3.38625 8.1115 3 9 3C10.6569 3 12 4.34315 12 6C12 7.65685 10.6569 9 9 9H2M10.7639 20C11.3132 20.6137 12.1115 21 13 21C14.6569 21 16 19.6569 16 18C16 16.3431 14.6569 15 13 15H2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Có nhà vệ sinh trong phòng"
                    className="airCondition text-orange-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7 11H7.01M12 11H12.01M9.5 11H9.51M15 10C15 13.3137 16.3431 16 18 16C19.6569 16 21 13.3137 21 10C21 6.68629 19.6569 4 18 4M15 10C15 6.68629 16.3431 4 18 4M15 10V14C15 15.8441 14.4749 18.7262 14 20H3C3.47493 18.7262 4 15.8441 4 14V10C4 6.68629 5.34315 4 7 4H18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    className="text-orange-400 !items-start"
                    content="600.000 - 700.000đ /SV/1 tháng (Chưa bao gồm tiền điện,nước)"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M5.82333 6.00037C6.2383 6.36683 6.5 6.90285 6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.90285 9.5 3.36683 9.2383 3.00037 8.82333M5.82333 6.00037C5.94144 6 6.06676 6 6.2 6H17.8C17.9332 6 18.0586 6 18.1767 6.00037M5.82333 6.00037C4.94852 6.00308 4.46895 6.02593 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3.02593 7.46895 3.00308 7.94852 3.00037 8.82333M3.00037 8.82333C3 8.94144 3 9.06676 3 9.2V14.8C3 14.9332 3 15.0586 3.00037 15.1767M3.00037 15.1767C3.36683 14.7617 3.90285 14.5 4.5 14.5C5.60457 14.5 6.5 15.3954 6.5 16.5C6.5 17.0971 6.2383 17.6332 5.82333 17.9996M3.00037 15.1767C3.00308 16.0515 3.02593 16.531 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.46895 17.9741 4.94852 17.9969 5.82333 17.9996M5.82333 17.9996C5.94144 18 6.06676 18 6.2 18H17.8C17.9332 18 18.0586 18 18.1767 17.9996M21 15.1771C20.6335 14.7619 20.0973 14.5 19.5 14.5C18.3954 14.5 17.5 15.3954 17.5 16.5C17.5 17.0971 17.7617 17.6332 18.1767 17.9996M21 15.1771C21.0004 15.0589 21 14.9334 21 14.8V9.2C21 9.06676 21 8.94144 20.9996 8.82333M21 15.1771C20.9973 16.0516 20.974 16.5311 20.782 16.908C20.5903 17.2843 20.2843 17.5903 19.908 17.782C19.5311 17.9741 19.0515 17.9969 18.1767 17.9996M20.9996 8.82333C20.6332 9.2383 20.0971 9.5 19.5 9.5C18.3954 9.5 17.5 8.60457 17.5 7.5C17.5 6.90285 17.7617 6.36683 18.1767 6.00037M20.9996 8.82333C20.9969 7.94852 20.9741 7.46895 20.782 7.09202C20.5903 6.71569 20.2843 6.40973 19.908 6.21799C19.5311 6.02593 19.0515 6.00308 18.1767 6.00037M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </CustomIcon>
                  <button className="register-btn rounded-md text-white font-semibold mb-2 px-4 py-2 bg-orange-400">
                    Chọn Phòng
                  </button>
                </div>
              </div>
            </div>
            <div className="dormRoom w-full h-[600px] relative">
              <div className="overlay"></div>
              <div className="imgRoom w-full h-full">
                <img src={KTXB} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="content w-full pl-4 pr-4 absolute bottom-0 flex flex-col">
                <div className="top-content text-white block w-full">
                  <h3 className="font-medium text tracking-wide text-2xl">
                    KTX B
                  </h3>
                </div>
                <div className="bottom-content">
                  <CustomIcon
                    content="4-6 người"
                    className="deskIcon text-orange-400"
                  >
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
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Wireless"
                    className="deskIcon text-orange-400"
                  >
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
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Có bàn học và ghế"
                    className="deskIcon text-orange-400"
                  >
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
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      />
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Có điều hoà"
                    className="airCondition text-orange-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M16.7639 6.5C17.3132 5.88625 18.1115 5.5 19 5.5C20.6569 5.5 22 6.84315 22 8.5C22 10.1569 20.6569 11.5 19 11.5H13M6.7639 4C7.31322 3.38625 8.1115 3 9 3C10.6569 3 12 4.34315 12 6C12 7.65685 10.6569 9 9 9H2M10.7639 20C11.3132 20.6137 12.1115 21 13 21C14.6569 21 16 19.6569 16 18C16 16.3431 14.6569 15 13 15H2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Có nhà vệ sinh trong phòng"
                    className="airCondition text-orange-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7 11H7.01M12 11H12.01M9.5 11H9.51M15 10C15 13.3137 16.3431 16 18 16C19.6569 16 21 13.3137 21 10C21 6.68629 19.6569 4 18 4M15 10C15 6.68629 16.3431 4 18 4M15 10V14C15 15.8441 14.4749 18.7262 14 20H3C3.47493 18.7262 4 15.8441 4 14V10C4 6.68629 5.34315 4 7 4H18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Được phép nấu ăn"
                    className="text-orange-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6 text-orange-400"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                          <path
                            fillRule="nonzero"
                            d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    className="text-orange-400 !items-start"
                    content="600.000 - 700.000đ /SV/1 tháng (Chưa bao gồm tiền điện,nước)"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M5.82333 6.00037C6.2383 6.36683 6.5 6.90285 6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.90285 9.5 3.36683 9.2383 3.00037 8.82333M5.82333 6.00037C5.94144 6 6.06676 6 6.2 6H17.8C17.9332 6 18.0586 6 18.1767 6.00037M5.82333 6.00037C4.94852 6.00308 4.46895 6.02593 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3.02593 7.46895 3.00308 7.94852 3.00037 8.82333M3.00037 8.82333C3 8.94144 3 9.06676 3 9.2V14.8C3 14.9332 3 15.0586 3.00037 15.1767M3.00037 15.1767C3.36683 14.7617 3.90285 14.5 4.5 14.5C5.60457 14.5 6.5 15.3954 6.5 16.5C6.5 17.0971 6.2383 17.6332 5.82333 17.9996M3.00037 15.1767C3.00308 16.0515 3.02593 16.531 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.46895 17.9741 4.94852 17.9969 5.82333 17.9996M5.82333 17.9996C5.94144 18 6.06676 18 6.2 18H17.8C17.9332 18 18.0586 18 18.1767 17.9996M21 15.1771C20.6335 14.7619 20.0973 14.5 19.5 14.5C18.3954 14.5 17.5 15.3954 17.5 16.5C17.5 17.0971 17.7617 17.6332 18.1767 17.9996M21 15.1771C21.0004 15.0589 21 14.9334 21 14.8V9.2C21 9.06676 21 8.94144 20.9996 8.82333M21 15.1771C20.9973 16.0516 20.974 16.5311 20.782 16.908C20.5903 17.2843 20.2843 17.5903 19.908 17.782C19.5311 17.9741 19.0515 17.9969 18.1767 17.9996M20.9996 8.82333C20.6332 9.2383 20.0971 9.5 19.5 9.5C18.3954 9.5 17.5 8.60457 17.5 7.5C17.5 6.90285 17.7617 6.36683 18.1767 6.00037M20.9996 8.82333C20.9969 7.94852 20.9741 7.46895 20.782 7.09202C20.5903 6.71569 20.2843 6.40973 19.908 6.21799C19.5311 6.02593 19.0515 6.00308 18.1767 6.00037M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </CustomIcon>
                  <button className="register-btn rounded-md text-white font-semibold mb-2 px-4 py-2 bg-orange-400">
                    Chọn Phòng
                  </button>
                </div>
              </div>
            </div>
            <div className="dormRoom w-full h-[600px] relative">
              <div className="overlay"></div>
              <div className="imgRoom w-full h-full">
                <img src={KTXC} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="content w-full pl-4 pr-4 absolute bottom-0 flex flex-col">
                <div className="top-content text-white block w-full">
                  <h3 className="font-medium text tracking-wide text-2xl">
                    KTX C
                  </h3>
                </div>
                <div className="bottom-content">
                  <CustomIcon
                    content="4-8 người"
                    className="deskIcon text-orange-400"
                  >
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
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Wireless"
                    className="deskIcon text-orange-400"
                  >
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
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Có bàn học"
                    className="deskIcon text-orange-400"
                  >
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
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      />
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Có điều hoà"
                    className="airCondition text-orange-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M16.7639 6.5C17.3132 5.88625 18.1115 5.5 19 5.5C20.6569 5.5 22 6.84315 22 8.5C22 10.1569 20.6569 11.5 19 11.5H13M6.7639 4C7.31322 3.38625 8.1115 3 9 3C10.6569 3 12 4.34315 12 6C12 7.65685 10.6569 9 9 9H2M10.7639 20C11.3132 20.6137 12.1115 21 13 21C14.6569 21 16 19.6569 16 18C16 16.3431 14.6569 15 13 15H2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    content="Có nhà vệ sinh trong phòng"
                    className="airCondition text-orange-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7 11H7.01M12 11H12.01M9.5 11H9.51M15 10C15 13.3137 16.3431 16 18 16C19.6569 16 21 13.3137 21 10C21 6.68629 19.6569 4 18 4M15 10C15 6.68629 16.3431 4 18 4M15 10V14C15 15.8441 14.4749 18.7262 14 20H3C3.47493 18.7262 4 15.8441 4 14V10C4 6.68629 5.34315 4 7 4H18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </CustomIcon>
                  <CustomIcon
                    className="text-orange-400 !items-start"
                    content="600.000 - 700.000đ /SV/1 tháng (Chưa bao gồm tiền điện,nước)"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M5.82333 6.00037C6.2383 6.36683 6.5 6.90285 6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.90285 9.5 3.36683 9.2383 3.00037 8.82333M5.82333 6.00037C5.94144 6 6.06676 6 6.2 6H17.8C17.9332 6 18.0586 6 18.1767 6.00037M5.82333 6.00037C4.94852 6.00308 4.46895 6.02593 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3.02593 7.46895 3.00308 7.94852 3.00037 8.82333M3.00037 8.82333C3 8.94144 3 9.06676 3 9.2V14.8C3 14.9332 3 15.0586 3.00037 15.1767M3.00037 15.1767C3.36683 14.7617 3.90285 14.5 4.5 14.5C5.60457 14.5 6.5 15.3954 6.5 16.5C6.5 17.0971 6.2383 17.6332 5.82333 17.9996M3.00037 15.1767C3.00308 16.0515 3.02593 16.531 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.46895 17.9741 4.94852 17.9969 5.82333 17.9996M5.82333 17.9996C5.94144 18 6.06676 18 6.2 18H17.8C17.9332 18 18.0586 18 18.1767 17.9996M21 15.1771C20.6335 14.7619 20.0973 14.5 19.5 14.5C18.3954 14.5 17.5 15.3954 17.5 16.5C17.5 17.0971 17.7617 17.6332 18.1767 17.9996M21 15.1771C21.0004 15.0589 21 14.9334 21 14.8V9.2C21 9.06676 21 8.94144 20.9996 8.82333M21 15.1771C20.9973 16.0516 20.974 16.5311 20.782 16.908C20.5903 17.2843 20.2843 17.5903 19.908 17.782C19.5311 17.9741 19.0515 17.9969 18.1767 17.9996M20.9996 8.82333C20.6332 9.2383 20.0971 9.5 19.5 9.5C18.3954 9.5 17.5 8.60457 17.5 7.5C17.5 6.90285 17.7617 6.36683 18.1767 6.00037M20.9996 8.82333C20.9969 7.94852 20.9741 7.46895 20.782 7.09202C20.5903 6.71569 20.2843 6.40973 19.908 6.21799C19.5311 6.02593 19.0515 6.00308 18.1767 6.00037M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </CustomIcon>
                  <button className="register-btn rounded-md text-white font-semibold mb-2 px-4 py-2 bg-orange-400">
                    Chọn Phòng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="facilitiesSection w-full px-32 py-36">
        <div className="container mx-auto">
          <div className="title uppercase text-white font-bold">
            <h2 className="text-5xl  font-prata uppercase text-white text-center mb-[120px]">
              Thông tin thêm về kí túc xá
            </h2>
          </div>

          <div className="box-list mb-20">
            <div className="box-item bg-white px-4 py-8  border-gray-400 border-2">
              <span className="box-icon ">
                <img
                  src="/building.svg"
                  alt=""
                  className="object-cover w-[50px] h-[50px] inline-block"
                />
              </span>
              <div className="box-content pl-2">
                <h2 className="title text-black text-3xl font-gilda py-4">
                  Nhà ăn
                </h2>
                <span className="text-gray-500 font-normal leading-7">
                  Khu nhà ăn sạch sẽ, giá cả phù hợp với sinh viên. Món ăn đa
                  dạng cho phép sinh viên có nhiều lựa chọn, cung cấp đầy đủ
                  chất dinh dưỡng và hợp vệ sinh an toàn thực phẩm
                </span>
              </div>
            </div>
            <div className="box-item bg-white px-4 py-8  border-gray-400 border-2">
              <span className="box-icon ">
                <img
                  src="/carParking.svg"
                  alt=""
                  className="object-cover w-[50px] h-[50px] inline-block"
                />
              </span>
              <div className="box-content pl-2">
                <h2 className="title text-black text-3xl font-gilda py-4">
                  Khu vực đậu xe
                </h2>
                <span className="text-gray-500 font-normal leading-7">
                  Khu vực đổ xe rộng rãi, thuận tiện dẫn xe ra vào, sinh viên
                  sinh hoạt trong kí túc xá có thể gửi xe tại đây Với xe đạp sẽ
                  được đổ miễn phí, với xe moto thì phải nộp thêm phí phụ thu.
                </span>
              </div>
            </div>

            <div className="box-item bg-white px-4 py-8  border-gray-400 border-2">
              <span className="box-icon ">
                <img
                  src="/wifi.svg"
                  alt=""
                  className="object-cover w-[50px] h-[50px] inline-block"
                />
              </span>
              <div className="box-content pl-2">
                <h2 className="title text-black text-3xl font-gilda py-4">
                  Mạng Internet nhanh
                </h2>
                <span className="text-gray-500 font-normal leading-7">
                  Chúng tôi có internet siêu nhanh và cáp phòng để kết nối có
                  dây.
                </span>
              </div>
            </div>
            <div className="box-item bg-white px-4 py-8  border-gray-400 border-2">
              <span className="box-icon ">
                <img
                  src="/supermarket.svg"
                  alt=""
                  className="object-cover w-[50px] h-[50px] inline-block"
                />
              </span>
              <div className="box-content pl-2">
                <h2 className="title text-black text-3xl font-gilda py-4">
                  Siêu thị Mini
                </h2>
                <span className="text-gray-500 font-normal leading-7">
                  Trong khuôn viên kí túc xá, có những toà siêu thi mini để cho
                  sinh viên mua các thiết bị cần thiết như quạt, dụng cụ giặt
                  giũ,... Rất tiện lợi !
                </span>
              </div>
            </div>
            <div className="box-item bg-white px-4 py-8  border-gray-400 border-2">
              <span className="box-icon ">
                <img
                  src="/activity.svg"
                  alt=""
                  className="object-cover w-[50px] h-[50px] inline-block"
                />
              </span>
              <div className="box-content pl-2">
                <h2 className="title text-black text-3xl font-gilda py-4">
                  Hoạt động ngoại khoá
                </h2>
                <span className="text-gray-500 font-normal leading-7">
                  Ban Quản lý ký túc xá thường xuyên tổ chức các hoạt động hỗ
                  trợ sinh viên nhằm hướng tới mục tiêu học tập, phát triển văn
                  hoá, tri thức của sinh viên. Đồng thời, đây còn là một cộng
                  đồng giao lưu văn hoá giữa sinh viên Việt Nam và sinh viên
                  quốc tế.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-blue w-full">
        <div className="footer-content w-full bg-darkGray">
          <div className="container mx-auto px-10 py-20">
            <div className="content text-white font-semibold text-2xl">
              <div className="name mb-2 ">
                <span>Ngô Vĩ Khang - B1906491</span>
              </div>
              <div className="major mb-2">
                <span>
                  Ngành Kỹ thuật Phần Mềm - Trường Đại học Công Nghệ Thông Tin &
                  Truyền Thông
                </span>
              </div>
              <div className="college mb-2">
                <span>Đại học Cần Thơ</span>
              </div>
              <div className="phone mb-2">
                <span>Số điện thoại:0852896171</span>
              </div>
              <div className="email mb-2">
                <span>Email: khangb1906491@student.ctu.edu.vn</span>
                <span>nvkhangcode@gmail.com</span>
              </div>
              <div className="social-link mt-[20px] flex items-center gap-x-5">
                <div className="github">
                  <a href="https://github.com/yobyeklow">
                    <img
                      src="/github.svg"
                      alt="github"
                      className="object-cover h-[60px] w-[60px] inline-block"
                    />
                  </a>
                </div>
                <div className="facebook">
                  <a href="https://www.facebook.com/tenbap123/">
                    <img
                      src="/facebook.svg"
                      alt="facebook"
                      className="object-cover h-[60px] w-[60px] inline-block opacity-80"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <LoginComponent
        open={showLoginModal}
        handleClose={() => setShowLoginModal(false)}
      ></LoginComponent>
      <RegisterComponent
        open={showRegisterModal}
        handleClose={() => setShowRegisterModal(false)}
      ></RegisterComponent>
    </div>
  );
};

export default LandingPage;
