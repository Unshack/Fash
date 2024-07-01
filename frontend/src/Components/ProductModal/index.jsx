import { Button, Dialog } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";
import QuantityBox from "../QuantityBox";

const ProductModal = (props) => {
  const context = useContext(MyContext);

  return (
    <>
      <Dialog
        open={context.isOpenProductModal}
        onClose={() => context.setIsOpenProductModal(false)}
        className="productModal"
      >
        <Button
          className="close_"
          onClick={() => context.setIsOpenProductModal(false)}
        >
          <MdClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          All Natural Italian-Style Chicken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch&apos;s</b>
            </span>
          </div>

          <Rating
            name="read-only"
            value={4}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <hr />

        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
            <ProductZoom />
          </div>

          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">$9.35</span>
              <span className="netPrice text-danger lg">$7.35</span>
            </div>

            <span className="badge bg-success mb-3">IN STOCK</span>
            <p>
              Remember: If you&apos;re good, go to school, get good grades, get
              a degree, then a job, work hard, pay your bills, try not to take
              sick days, save your money, pay your taxes... one day, your boss
              might go to space!
            </p>

            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                Add to Cart
              </Button>
            </div>

            <div className="d-flex align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined">
                <CiHeart /> &nbsp; ADD TO WISHLIST
              </Button>
              <Button className="btn-round btn-sml ml-3" variant="outlined">
                <HiOutlineArrowsUpDown /> &nbsp; COMPARE
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
