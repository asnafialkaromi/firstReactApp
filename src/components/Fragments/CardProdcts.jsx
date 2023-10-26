import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const CardProdcts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between my-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        className="p-8 rounded-t-lg h-60 w-full object-fill"
        src={image}
        alt="products"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <Link to="/">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)} ...
        </h5>
        <p className="font-normal text-white text-sm">
          {children.substring(0, 100)} ...
        </p>
      </Link>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-s font-bold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </span>
      <Button
        className="bg-blue-700"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to cart
      </Button>
    </div>
  );
};

CardProdcts.Header = Header;
CardProdcts.Body = Body;
CardProdcts.Footer = Footer;

export default CardProdcts;
