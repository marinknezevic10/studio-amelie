import Menu from "../Menu";

const Layout = ({ children }) => {
  return (
    <main>
      <Menu />
      <div className="page">{children}</div>
    </main>
  );
};

export default Layout;
