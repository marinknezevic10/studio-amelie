import Menu from "../Menu";

const Layout = ({ children }) => {
  return (
    <>
      <Menu /> <div>{children}</div>
    </>
  );
};

export default Layout;
