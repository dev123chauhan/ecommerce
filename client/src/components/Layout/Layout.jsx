// import PropTypes from 'prop-types';
// import Header from '../Home/Header';
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
// import Footer from '../Home/Footer';
// const Layout = ({ children }) => {

//   const location = useLocation();

//   // Scroll to top on route change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);
//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// };

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Layout;


import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

const AnnouncementBanner = React.lazy(() => import('./AnnouncmentBanner'));

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      {/* Fixed position wrapper for announcement + header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <React.Suspense fallback={<div className="h-8 bg-black" />}>
          <AnnouncementBanner />
        </React.Suspense>
        <Header />
      </div>
      
      {/* Main content with appropriate padding to prevent overlap */}
      <div className="pt-[55px]"> {/* Adjust this value based on your header + banner height */}
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;