import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };
  return (
    <div className="productZoom">
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
  );
};

export default ProductZoom;
