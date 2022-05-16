import React from 'react';
import Footer from './Footer/Footer';
import NavBar from './Navbar/Navbar';

const Layout = ({children}) => {
  return (
    <div>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
