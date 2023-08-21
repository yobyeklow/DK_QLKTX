import "./RegisterSASS.scss";
import { useForm } from "react-hook-form";
import InputText from "../Input/InputText";
import ReactDOM from "react-dom";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScrooll";
const RegisterComponent = ({ handleClose = () => {}, open = false }) => {
  const { handleSubmit, control } = useForm();
  const postData = (values) => {
    console.log(values);
  };
  useDisableBodyScroll(open);
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`${
        open ? "active" : "opacity-0 invisible"
      } modal fixed inset-0  flex items-center justify-center p-5 z-20`}
    >
      <div
        onClick={() => {
          handleClose();
        }}
        className="overlay absolute inset bg-blackBgOpacity w-full h-full"
      ></div>
      <form
        onSubmit={handleSubmit(postData)}
        className="modal-form relative bg-white max-w-[500px] p-10 w-full modal-content rounded-lg"
      >
        <div className="modal-close-btn p-2 -right-4 -top-4 bg-white rounded-full absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              handleClose();
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className=" mb-4 modal-title text-center font-bold text-3xl mt-3">
          Tạo tài khoản
        </h2>
        <div
          className="mb-8 w-full text-center border border-b-gray500 border-x-0 border-t-0
          pb-3 tracking-wide
        "
        >
          <span className="text-sm font-light">
            Hãy điền đầy đủ thông tin bên dưới để đăng ký tài khoản thành viên
            DormifyRent
          </span>
        </div>
        <InputText
          name="username"
          id="username"
          placeholder="Mã số sinh viên hoặc Email"
          control={control}
        >
          Tên đăng nhập
        </InputText>
        <InputText
          name="email"
          id="email"
          placeholder="Mã số sinh viên hoặc Email"
          control={control}
        >
          Email
        </InputText>
        <InputText
          name="password"
          id="password"
          placeholder="*******"
          control={control}
        >
          Mật khẩu
        </InputText>
        <div className="w-full text-center">
          <button className="model-btn py-4 px-6 mt-4 font-bold bg-blue-500 text-white rounded-lg">
            Đăng ký
          </button>
        </div>
      </form>
    </div>,
    document.querySelector("body")
  );
};

export default RegisterComponent;
