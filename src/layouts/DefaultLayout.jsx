import React from "react";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";

export default function DefaultLayout(props) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main>{props.children}</main>
      <Footer nav={"/"} behave={"scrollToTop"} /> {/* Pass behave prop */}
    </div>
  );
}
