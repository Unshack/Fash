import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isOpenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Men </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Women </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Beauty </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Watches </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Kids </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Gift </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Clothing </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Footwear </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Men</Link>
                <div className="submenu shadow">
                  <Link to="/">Clothing</Link>
                  <Link to="/">Footwear</Link>
                  <Link to="/">Watches</Link>
                  <Link to="/">Accessories</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Women</Link>
                <div className="submenu shadow">
                  <Link to="/">Clothing</Link>
                  <Link to="/">Footwear</Link>
                  <Link to="/">Watches</Link>
                  <Link to="/">Accessories</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Beauty</Link>
                <div className="submenu shadow">
                  <Link to="/">Clothing</Link>
                  <Link to="/">Footwear</Link>
                  <Link to="/">Watches</Link>
                  <Link to="/">Accessories</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Watches</Link>
                <div className="submenu shadow">
                  <Link to="/">Clothing</Link>
                  <Link to="/">Footwear</Link>
                  <Link to="/">Watches</Link>
                  <Link to="/">Accessories</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Kids</Link>
                <div className="submenu shadow">
                  <Link to="/">Clothing</Link>
                  <Link to="/">Footwear</Link>
                  <Link to="/">Watches</Link>
                  <Link to="/">Accessories</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Gifts</Link>
                <div className="submenu shadow">
                  <Link to="/">Clothing</Link>
                  <Link to="/">Footwear</Link>
                  <Link to="/">Watches</Link>
                  <Link to="/">Accessories</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">Blog</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
