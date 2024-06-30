import { Button, Dialog } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useContext, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import QuantityBox from "../QuantityBox";
import { CiHeart } from "react-icons/ci";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MyContext } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ProductModal = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const context = useContext(MyContext);

  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

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
            <div className="productZoom position-relative">
              <div className="badge badge-primary">23%</div>
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={false}
                slidesPerGroup={1}
                modules={[Navigation]}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={`https://www.redmolotov.com/image/cache/catalog/designs/russian-warship-go-f-yourself-tshirt_design-1000x1000.jpg`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_bottlegreentshirt.jpg`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_redtshirt.jpg`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_whitetshirt.jpg`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_navybluetshirt.jpg`}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <Swiper
              slidesPerView={4}
              spaceBetween={0}
              navigation={true}
              slidesPerGroup={1}
              modules={[Navigation]}
              className="zoomSlider"
              ref={zoomSlider}
            >
              <SwiperSlide>
                <div className={`item ${slideIndex === 0 && "item_active"}`}>
                  <img
                    className="w-100"
                    src={`https://www.redmolotov.com/image/cache/catalog/designs/russian-warship-go-f-yourself-tshirt_design-1000x1000.jpg`}
                    onClick={() => goto(0)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`item ${slideIndex === 1 && "item_active"}`}>
                  <img
                    className="w-100"
                    src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_bottlegreentshirt.jpg`}
                    onClick={() => goto(1)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`item ${slideIndex === 2 && "item_active"}`}>
                  <img
                    className="w-100"
                    src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_redtshirt.jpg`}
                    onClick={() => goto(2)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`item ${slideIndex === 3 && "item_active"}`}>
                  <img
                    className="w-100"
                    src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_whitetshirt.jpg`}
                    onClick={() => goto(3)}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`item ${slideIndex === 4 && "item_active"}`}>
                  <img
                    className="w-100"
                    src={`https://www.redmolotov.com/image/catalog/designslarge/r/russian-warship-go-f-yourself-tshirt_navybluetshirt.jpg`}
                    onClick={() => goto(4)}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
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
