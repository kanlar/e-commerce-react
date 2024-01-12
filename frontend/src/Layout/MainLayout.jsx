import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Policy from "../components/Policy/Policy";
import Proptypes from "prop-types";
import Search from "../components/Modals/Search/Search";
import { useEffect, useState } from "react";
import Dialog from "../components/Modals/Dialog/Dialog";

function MainLayout({ children }) {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);
  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog")
      ? JSON.parse(localStorage.getItem("dialog"))
      : localStorage.setItem("dialog", JSON.stringify(true));

    setTimeout(() => {
      setIsDialogShow(dialogStatus);
    }, 2000);
  }, []);

  return (
    <>
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Policy />
      <Footer />
    </>
  );
}

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
