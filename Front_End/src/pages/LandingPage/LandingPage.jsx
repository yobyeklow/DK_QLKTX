import "./LandingPage.scss";
import KTXA from "/KTXA.jpg";
import KTXB from "/KTXB.jpg";
import KTXC from "/KTXC.jpg";

import CustomIcon from "../../components/CustomIcon";
const LandingPage = () => {
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
            <button className="py-4 px-8 rounded-md cursor-pointer font-bold uppercase bg-orange-400">
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
        </div>
      </section>
      <section className="aboutSection relative my-[100px]">
        <div className="title">
          <h2 className="text-5xl  font-prata uppercase text-white text-center mt-20 mb-[80px]">
            Giới thiệu về chúng tôi
          </h2>
        </div>
        <div className="content-wrapper pb-20 w-4/5 flex  mx-auto">
          <div className="img-side max-h-[600px] relative mt-[100px] z-10 shadow-[0_0_25px_1px_rgba(0,0,0,0.5)]">
            <img
              src="/imgSide.png"
              alt="imageBuilding.png"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="content-section  max-h-[600px] w-full mb-[100px] ml-[-100px] bg-white inline-block py-[100px] pl-[200px] pr-[100px]">
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
              <button className="font-semibold bg-orange-400 text-white uppercase py-3 px-5">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
        {/* <div className="register-popup">
          <form className="register-content">
            <input type="text" />
          </form>
        </div> */}
      </section>
      <section className="dormsSection w-full p-20 bg-darkGray">
        <div className="container mx-auto">
          <div className="title uppercase text-white font-bold">
            <h2 className="text-5xl  font-prata uppercase text-white text-center mb-[80px]">
              Chi tiết về kí túc xá
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-x-6">
            <div className="dormRoom w-full h-[500px] relative">
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
                </div>
              </div>
            </div>
            <div className="dormRoom w-full h-[500px]">
              <div className="imgRoom w-full h-full">
                <img src={KTXB} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="dormRoom w-full h-[500px]">
              <div className="imgRoom w-full h-full">
                <img src={KTXC} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
