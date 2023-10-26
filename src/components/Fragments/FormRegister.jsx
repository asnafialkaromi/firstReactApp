import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <InputForm
          label="Fullname"
          name="text"
          type="text"
          placeholder="Enter your fullname"
        />
        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="***"
        />
        <InputForm
          label="Confirm Password"
          name="password"
          type="password"
          placeholder="Confirm your password"
        />
        <Button className="bg-blue-700 w-full">Login</Button>
      </form>
    </>
  );
};

export default FormRegister;
