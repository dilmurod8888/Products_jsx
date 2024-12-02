import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { getProducts } from "../../service/api";
import { useSelector } from "react-redux";
import SkletonNav from "../Nav/SkletonNav.jsx";
import Sort from "../Products/Sort.jsx";
import Search from "../Nav/Search.jsx";

const Nav = () => {
  const page = useSelector((state) => state.products.page);
  const { data, isLoading, isError, error } = getProducts(page * 9);

  let skleton = [...new Array()].map((_, i) => {
    return (
      <div className="nav_skleton" key={i}>
        <SkletonNav />
      </div>
    );
  });

  const links = [
    { 
      url: "/basket",
      name: <LiaShoppingCartSolid className="icon_basket  " />,
      icon: "Basket",
      class:"nav__span-basket"
    },
    {
      url: "/likes",
      name: <FaRegHeart className="icon_heart  " />,
      icon: "Likes",
      class:"nav__span-heart"
    },
    { url: "/user", 
      name: <FaRegUser className="icon_user" />,
      icon: "User",
      class:"nav__span-user" 
    },
  ];
  return (
    <>
      <div className="container">
        <div className="nav">
          {!isLoading ? (
            <div className="nav_box">
              <Link to="/" className="nav_logo">
                <img src="shop.jpg" alt="" />
              </Link>
              <div className="Sort">
                <Sort/>
              </div>
              <div className={`nav_search`}>
                <Search/>
              </div>
              
              <ul className="nav_list">
                {links.map((link) => (
                  <li className="nav_list_icon" key={link.url}>
                    

                    <NavLink to={link.url}>
                      <span className={link.class}>{link.name}</span>
                    </NavLink>
                    
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="nav_skleton">
              <SkletonNav />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
