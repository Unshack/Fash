import { Button, Rating } from "@mui/material";
import { useContext } from "react";
import { FaRegEye } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { MyContext } from "../../App";

const ProductItem = () => {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  return (
    <>
      <div className="item productItem">
        <div className="imgWrapper">
          <img
            src="https://threadheads.com/cdn/shop/files/Black-Front_d5e5bc9e-af32-49ef-9a87-3598554bf6d7.jpg?v=1717137162&width=300"
            className="w-100"
          />

          <span className="badge badge-primary">30%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <FaRegEye />
            </Button>
            <Button>
              <IoMdHeartEmpty />
            </Button>
          </div>
        </div>

        <div className="info">
          <h4>PowerPuff Girls Bootleg T-Shirt</h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />

          <div className="d-flex">
            <span className="oldPrice">$29.99</span>
            <span className="netPrice text-danger ml-2">$15.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
