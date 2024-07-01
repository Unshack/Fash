import { Button, Rating } from "@mui/material";
import { useContext } from "react";
import { FaRegEye } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { MyContext } from "../../App";

const ProductItem = (props) => {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  return (
    <>
      <div className={`item productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img
            src="https://www.redmolotov.com/image/cache/catalog/designs/your-boss-might-go-to-space-tshirt_design-400x400.jpg"
            className="w-100"
          />
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <FaRegEye />
            </Button>
            <Button>
              <IoMdHeartEmpty />
            </Button>
          </div>
          <span className="badge badge-primary">30%</span>
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
