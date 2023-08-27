import HeaderBar from "../../../components/HeaderBar/HeaderBar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./Dashboard.scss";
import defaultAvatar from "../../../../public/avatarDefault.png";
import { useForm } from "react-hook-form";
const DashBoardPage = () => {
  const { handleSubmit, control } = useForm();
  return (
    <div className="dashboard  bg-[#F8F8FF] font-lexend w-full min-h-screen flex">
      <Sidebar itemList={itemList}></Sidebar>
      <div className="w-full">
        <HeaderBar></HeaderBar>
        <div className="sinhvien-info py-8">
          <div className="container p-4 mx-auto">
            <div className="sinhvien-info-box bg-white rounded-lg h-fit p-10">
              <h2 className="title-box text-lg text-white bg-blue-900 rounded-t-md py-1 font-medium text-center uppercase">
                Thông tin sinh viên
              </h2>
              <table className="table w-full text-sm font-normal">
                <tr className="title bg-[#dae9f3] ">
                  <td
                    colSpan={4}
                    className="font-semibold border border-l-1 border-r-1 border-l-[#194f94] border-r-[#194f94]"
                  >
                    Ảnh thẻ (4x6)
                  </td>
                </tr>
                <tr className="text-center">
                  <td colSpan={3}>
                    <div className="w-full flex justify-center">
                      <img
                        src={defaultAvatar}
                        alt=""
                        className="object-fit h-[120px] w-[120px]"
                      />
                    </div>
                  </td>
                  <td>
                    <button className="py-4 px-5 border-gray-500 border rounded-lg text-gray-500 font-semibold update-img-btn">
                      Cập nhật ảnh
                      <input
                        type="file"
                        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="title bg-[#dae9f3] ">
                  <td
                    colSpan={4}
                    className="font-semibold border border-l-1 border-r-1 border-l-[#194f94] border-r-[#194f94]"
                  >
                    Thông tin cá nhân
                  </td>
                </tr>
                <tr className="text-center">
                  <InputField
                    label="Họ và tên"
                    name="name"
                    id="name"
                    value="Ngô Vĩ Khang"
                    isEdit={true}
                  ></InputField>
                  <InputField
                    label="MSSV"
                    name="mssv"
                    id="mssv"
                    value="B1906491"
                    isEdit={false}
                  ></InputField>
                </tr>
                <tr className="text-center">
                  <InputField
                    label="Ngày sinh"
                    name="dateBorn"
                    id="dateBorn"
                    inputType="date"
                    isEdit={true}
                  ></InputField>
                  <InputField
                    label="Giới tính"
                    name="gender"
                    id="gender"
                    value="B1906491"
                    isEdit={false}
                  ></InputField>
                </tr>
                <tr className="text-center">
                  <InputField
                    label="Số CCCD"
                    name="cccd"
                    id="cccd"
                    value="0123456798"
                    isEdit={true}
                  ></InputField>
                  <InputField
                    label="Email"
                    name="email"
                    id="email"
                    value="khangb1906491@student.ctu.edu.vn"
                    isEdit={false}
                  ></InputField>
                </tr>
                <tr className="text-center">
                  <td>
                    <span className="font-semibold">Trường</span>
                  </td>
                  <td>
                    <span>Công nghệ thông tin và Truyền thông</span>
                  </td>
                  <td>
                    <span className="font-semibold">Ngành</span>
                  </td>
                  <td>
                    <span>Kỹ thuật phần mềm</span>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>
                    <span className="font-semibold">Dân tộc</span>
                  </td>
                  <td>
                    <span>Kinh</span>
                  </td>
                  <td>
                    <span className="font-semibold">Tôn giáo</span>
                  </td>
                  <td>
                    <span>Không</span>
                  </td>
                </tr>
                <tr className="title bg-[#dae9f3] ">
                  <td
                    colSpan={4}
                    className="font-semibold border border-l-1 border-r-1 border-l-[#194f94] border-r-[#194f94]"
                  >
                    Thông tin liên lạc
                  </td>
                </tr>
                <tr className="text-center">
                  <td>
                    <span className="font-semibold">Điện thoại liên lạc</span>
                  </td>
                  <td>
                    <span>0123456798</span>
                  </td>
                  <td>
                    <span className="font-semibold">Địa chỉ thường trú</span>
                  </td>
                  <td>
                    <span>Ninh Kiều, Cần Thơ</span>
                  </td>
                </tr>
                <tr className="title bg-[#dae9f3] ">
                  <td
                    colSpan={4}
                    className="font-semibold border border-l-1 border-r-1 border-l-[#194f94] border-r-[#194f94]"
                  >
                    Thông tin về kí túc xá
                  </td>
                </tr>
                <tr>
                  <td colSpan="4" className="text-center font-bold text-lg">
                    Không có dữ liệu
                  </td>
                </tr>
              </table>
              <div className="flex justify-center items-center">
                <button className="update-btn px-20 py-3 text-base font-bold rounded-lg bg-blue-600 mt-10 text-white">
                  Cập nhật thông tin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const itemList = [
  {
    content: "Thông tin sinh viên",
    to: "/dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    content: "Ký túc xá",
    to: "ky-tuc-xa",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    content: "Báo hư CSVC",
    to: "bao-hu",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
    ),
  },
];
const InputField = ({
  name = "",
  label = "",
  inputType = "text",
  isEdit = true,
  value = "",
  ...props
}) => {
  return (
    <>
      <td>
        <label htmlFor={name}>{label}</label>
      </td>
      <td>
        <input
          type={inputType}
          name={name}
          // placeholder={content}
          defaultValue={value}
          {...props}
          className={`${
            isEdit ? "" : "bg-gray-300 text-[#6f6f6d]  pointer-events-none"
          } border w-full border-gray-300 py-3 max-w-[300px] rounded-md px-4 placeholder:text-black`}
        />
      </td>
    </>
  );
};

export default DashBoardPage;
