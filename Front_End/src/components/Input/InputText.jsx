import { useController } from "react-hook-form";
import PropType from "prop-types";
const InputText = ({ control, children, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label
        htmlFor={props.name || props.id}
        className=" cursor-pointer w-max text-base font-semibold"
      >
        {children}:
      </label>
      <div className="w-full">
        <input
          {...field}
          {...props}
          className=" p-4 relative border border-gray-300 rounded-lg w-full outline-none bg-white focus:border-blue-500"
        ></input>
      </div>
    </div>
  );
};
InputText.propTypes = {
  name: PropType.string.isRequired,
  control: PropType.node.isRequired,
  children: PropType.string.isRequired,
};
export default InputText;
