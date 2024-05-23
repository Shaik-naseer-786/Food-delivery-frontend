import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Discover a variety of delicious dishes from our extensive menu.
          Whether you're craving a hearty meal, a light snack, or a sweet treat,
          we have something to satisfy every taste. Place your order now and
          enjoy the convenience of having your favorite food delivered right to
          your doorstep!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
