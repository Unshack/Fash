import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="container mt-2">
      <div className="homeBannerSection">
        <Slider {...settings}>
          <div className="item">
            <img
              src="https://threadheads.com/cdn/shop/files/Hero_35_1cac682f-9098-44db-ab37-513b2501307a.jpg?v=1701143951&width=1400"
              className="w-100"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.penshoppe.com/cdn/shop/files/PEN_NYLON_COLLECTION_DOTCOM_2d73d332-c1dd-4551-8189-790d85e0d025.jpg?v=1717730106&width=1920"
              className="w-100"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://im.uniqlo.com/global-cms/spa/res77f5c9316d33703c317e8b4b62fdff3dfr.jpg"
              className="w-100 "
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://threadheads.com/cdn/shop/files/Hero_Banner_-_Desktop_4162_x_2197px_3c4fa7ab-1944-4f43-816c-3752225180b0.jpg?v=1718065201&width=1400"
              className="w-100"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeBanner;
