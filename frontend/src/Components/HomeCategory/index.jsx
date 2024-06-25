// import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Slider from "react-slick";

const HomeCategory = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#e2e0d2",
    "#7cec72",
    "#e2dcc1",
    "#fffceb",
    "#e2e0d2",
    "#72bbec",
    "#e2dcc1",
    "#fffceb",
    "#e2e0d2",
    "#e4e2d9",
    "#e2dcc1",
  ]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    spaceBetween: 18,
    arrows: true,
  };

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-4 hd">FEATURED CATEGORIES</h3>
        <Slider {...settings}>
          {itemBg?.map((item, index) => {
            return (
              <div
                className="item text-center"
                style={{ background: item }}
                key={index}
              >
                <img src="https://www.bustedtees.com/cdn/shop/products/sunfrog-busted-mr-candy-vintage-catzilla-japanese-sunset-style-27940814913633_1080x.jpg?v=1614351691" />
                <h6>Threads Clothing</h6>
              </div>
            );
          })}

          {/* <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/sunfrog-busted-bomdesignz-pew-pew-28000023674977_1080x.jpg?v=1615337431" />
            <h6>Catzilla Clothing</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/renderMockup_777073a0-0248-4770-a96a-6bd2756a9dd5_1080x.png?v=1614612330" />
            <h6>Men&#39;s Clothing</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/sunfrog-busted-funky-hippo-hello-28000188039265_1080x.jpg?v=1615336323" />
            <h6>Hello Clothing</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/sunfrog-busted-funky-hippo-national-sarcasm-society-28000154452065_1080x.jpg?v=1615336076" />
            <h6>National Clothing</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/renderMockup_9aafbb4c-81d0-499f-8795-ed7e2ad1d454_1080x.png?v=1610003057" />
            <h6>Animal&#39;s Clothing</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/sunfrog-busted-anjaka-stan-lee-man-of-many-faces-shirt-28004573347937_1080x.jpg?v=1615428932" />
            <h6>Dodo Clothing</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/sunfrog-busted-volkanvina-touchdown-baseball-28004235870305_1080x.jpg?v=1615397008" />
            <h6>Baseball Clothing</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/sunfrog-busted-funky-hippo-cereal-killer-28006127927393_1080x.jpg?v=1615414530" />
            <h6>Food Clothing</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/renderMockup_3aaaa2a6-c310-4d17-840e-f9f51865ae0d_1080x.png?v=1610059994" />
            <h6>Jesus Clothing</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/sunfrog-busted-funky-hippo-morning-people-16805667635297_1080x.png?v=1614822806" />
            <h6>Morning People</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/sunfrog-busted-bomdesignz-this-is-the-way-28005086036065_1080x.jpg?v=1615424282" />
            <h6>This is the Way</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/sunfrog-busted-mrt90-cactus-sarcastic-not-a-hugger-16805558157409_1080x.png?v=1614804690" />
            <h6>Cactus People</h6>
          </div>

          <div className="item text-center">
            <img src="https://www.bustedtees.com/cdn/shop/products/renderMockup_75a5bc1a-ef63-422c-875c-c1a511786d43_1080x.png?v=1610882823" />
            <h6>Adult People</h6>
          </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default HomeCategory;
