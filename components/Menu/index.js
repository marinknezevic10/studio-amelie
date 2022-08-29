import styles from "./style.module.scss";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function Menu() {
  const title = [{ titleName: "Studio Amelie" }];
  const [active, setActive] = useState(false);
  const pages = [
    { name: "Home", Link: "/main-page" },
    { name: "About Us", Link: "/about-us" },
    { name: "Services", Link: "/services" },
    {
      name: "Nagemodelling",
      Link: "/nagemodelling",
    },
    { name: "Aquarell Lips", Link: "/aquarell-lips" },
    { name: "Powder Brows", Link: "/powder-brows" },
    { name: "Price", Link: "/price" },
    { name: "Gallery", Link: "/gallery" },
    { name: "Contact", Link: "/contact" },
  ];
  return (
    <>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <div
              onClick={() => setActive(!active)}
              className={active ? styles.activeHamburger : styles.hamburger}
            />
            <div
              onClick={() => setActive(!active)}
              className={styles.menuAlign}
            ></div>
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
    </>
  );
}
