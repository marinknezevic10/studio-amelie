import styles from "./Menu.module.scss";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function Menu() {
  const [active, setActive] = useState(false);
  const pages = [
    { name: "Home", Link: "/MainPage" },
    { name: "About Us", Link: "/AboutUs" },
    { name: "Services", Link: "/Services" },
    {
      name: "Nagemodelling",
      Link: "/Nagemodelling",
    },
    { name: "Aquarell Lips", Link: "/AquarellLips" },
    { name: "Powder Brows", Link: "/PowderBrows" },
    { name: "Price", Link: "/Price" },
    { name: "Gallery", Link: "/Gallery" },
    { name: "Contacts", Link: "/Contacts" },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.menuWrapper}>
            <div className={styles.menu}>
              <div
                onClick={() => setActive(!active)}
                className={active ? styles.activeHamburger : styles.hamburger}
              />
              <div
                onClick={() => setActive(!active)}
                className={styles.menuAlign}
              >
                <h4>Menu</h4>
              </div>
            </div>
          </div>
          <div>
            <h1>Studio Amelie</h1>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>EINSCHREIBEN</button>
          </div>
        </div>
      </div>
      <div className={active ? styles.activeNavbar : styles.navbar}>
        <ul className={styles.ul}>
          {pages.map((item, i) => (
            <li key={i}>
              <Link href={item.Link}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
