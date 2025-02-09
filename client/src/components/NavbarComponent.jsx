import React from "react";
import styles from "../styles/NavbarComponent.module.css";
import { CartIcon, ProfileIcon, WishlistIcon } from "../assets";

export default function NavbarComponent() {
  return (
    <div className={styles.nav_main}>
      <div className={styles.nav_logo}>
        <img src="/Logo.svg" style={{ width: "24px" }} alt="logo" />
        <h4 style={{ fontFamily: "Oswald, sans-serif" }}>FashionBazaar</h4>
      </div>
      <div className={styles.nav_category}>
        {["Men", "Woman", "Shoes", "Watches"].map((item, index) => (
          <div className={styles.nav_category__items} key={index}>
            <h6>{item}</h6>
          </div>
        ))}
      </div>
      <input placeholder="search" />
      <div className={styles.nav_user}>
        {Object.entries({
          Profile: ProfileIcon,
          Wishlist: WishlistIcon,
          Cart: CartIcon,
        }).map(([text, image], index) => (
          <div className={styles.nav_user__div} key={index}>
            <img src={image} className={styles.nav_user__image} />
            <p className={styles.nav_user__text}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
