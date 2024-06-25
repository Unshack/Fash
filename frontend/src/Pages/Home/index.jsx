import HomeBanner from "../../Components/HomeBanner";
import BannerImage from "../../assets/images/banner-box.png";
import banner2 from "../../assets/images/banner2.png";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../Components/ProductItem";
import HomeCategory from "../../Components/HomeCategory";
import banner3 from "../../assets/images/banner3.webp";
import banner4 from "../../assets/images/banner4.webp";
import newsLetterImg from "../../assets/images/coupon.png";
import { CiMail } from "react-icons/ci";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCategory />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={BannerImage} alt="" className="cursor w-100" />
                </div>
                <div className="banner mt-4">
                  <img src={banner2} alt="" className="cursor w-100" />
                </div>
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of July.
                  </p>
                </div>

                <Button className="viewAllBtn ml-auto">
                  View All
                  <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation={true}
                  slidesPerGroup={3}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>

                <Button className="viewAllBtn ml-auto">
                  View All
                  <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src={banner3} alt="" className="cursor w-100" />
                </div>
                <div className="banner">
                  <img src={banner4} alt="" className="cursor w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-secondary mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-gray">Join our newsletter and get...</h3>
              <p className="text-secondary">
                Join our email subscription now to get updates <br /> on
                promotions and coupons.
              </p>

              <form>
                <CiMail />
                <input type="text" placeholder="Your Email Address" />
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={newsLetterImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
