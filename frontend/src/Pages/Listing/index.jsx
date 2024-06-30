import Sidebar from "../../Components/Sidebar";

const Listing = () => {
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />

            <div className="content_right">
              <img
                src="https://www.redmolotov.com/image/cache/catalog/banners/footballshirts-banner-desktop-1540x400.jpg"
                className="w-100"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
