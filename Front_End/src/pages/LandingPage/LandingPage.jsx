import "./LandingPage.scss";
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
        <div className="container">
          <div className="title uppercase text-white font-bold">
            <h2 className="text-5xl  font-prata uppercase text-white text-center mb-[80px]">
              Chi tiết về kí túc xá
            </h2>
          </div>
          <div className="grid-cols-3 gap-x-6">
            <div className="dormRoom w-full h-[500px]">
              <div className="imgRoom">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
