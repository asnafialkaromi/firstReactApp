import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, classname } = props;
  return (
    <input
      type={type}
      className={`text-sm border rounded w-full py-2 px-3 ${classname} opacity-50`}
      placeholder={placeholder}
      name={name}
      ref={ref}
    />
  );
});

export default Input;
