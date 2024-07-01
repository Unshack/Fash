import { useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { Button } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RiArrowUpDownLine } from "react-icons/ri";
import Tooltip from "@mui/material/Tooltip";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);

  const isActive = (index) => {
    setActiveSize(index);
  };

  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>

            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd ">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brands: </span>
                    <span>Welch&apos;s</span>
                  </div>
                </li>

                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={3.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />

                    <span className="text-light cursor ml-2">105 Review</span>
                  </div>
                </li>
              </ul>

              <div className="d-flex info mb-3">
                <span className="oldPrice">$35.00</span>
                <span className="netPrice text-danger ml-2">$29.99</span>
              </div>

              <span className="badge badge-success">IN STOCK</span>

              <p className="mt-3">
                Remember: If you&apos;re good, go to school, get good grades,
                get a degree, then a job, work hard, pay your bills, try not to
                take sick days, save your money, pay your taxes... one day, your
                boss might go to space! Rating Ratings provide insight regarding
                others opinions and experiences, and can allow the user to
                submit a rating of their own.
              </p>

              <div className="productSize d-flex align-items-center">
                <span>Size :</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      XS
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      S
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      M
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      L
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      XL
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 5 ? "active" : ""}`}
                      onClick={() => isActive(5)}
                    >
                      XXL
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-2">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round">
                  <IoCartOutline /> &nbsp; Add to cart
                </Button>

                <Tooltip title="Add to wishlist" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                    <CiHeart />
                  </Button>
                </Tooltip>

                <Tooltip title="Add to compare" placement="top">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                    <RiArrowUpDownLine />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
