import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h1>C'est quoi le titre</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
