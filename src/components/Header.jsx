import { ImBook } from "react-icons/im";

const Header = () => {
  return (
    <div
      className="p-4 text-center d-flex justify-content-center align-items-center gap-3 shadow-lg"
      style={{
        background: "linear-gradient(90deg, #6a11cb, #2575fc)", // Purple to Blue Gradient
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <p className="m-0">App Book</p>
      <ImBook size={32} color="white" />
    </div>
  );
};

export default Header;

