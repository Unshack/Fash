import { Button, Dialog } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useContext, useRef } from "react";
import { MdClose } from "react-icons/md";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import QuantityBox from "../QuantityBox";
import { CiHeart } from "react-icons/ci";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MyContext } from "../../App";

const ProductModal = () => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const context = useContext(MyContext);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  return (
    <>
      <Dialog
        open={true}
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
            <div className="productZoom position-relative">
              <div className="badge badge-primary">23%</div>
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.redmolotov.com/image/cache/catalog/designs/russian-warship-go-f-yourself-tshirt_design-1000x1000.jpg`}
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_bottlegreentshirt.jpg`}
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_redtshirt.jpg`}
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_whitetshirt.jpg`}
                  />
                </div>

                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_navybluetshirt.jpg`}
                  />
                </div>
              </Slider>
            </div>

            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              <div className="item">
                <img
                  className="w-100"
                  src={`https://www.redmolotov.com/image/cache/catalog/designs/russian-warship-go-f-yourself-tshirt_design-1000x1000.jpg`}
                  onClick={() => goto(0)}
                />
              </div>
              <div className="item">
                <img
                  className="w-100"
                  src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_bottlegreentshirt.jpg`}
                  onClick={() => goto(1)}
                />
              </div>
              <div className="item">
                <img
                  className="w-100"
                  src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_redtshirt.jpg`}
                  onClick={() => goto(2)}
                />
              </div>
              <div className="item">
                <img
                  className="w-100"
                  src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_whitetshirt.jpg`}
                  onClick={() => goto(3)}
                />
              </div>
              <div className="item">
                <img
                  className="w-100"
                  src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_navybluetshirt.jpg`}
                  onClick={() => goto(4)}
                />
              </div>
            </Slider>
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
