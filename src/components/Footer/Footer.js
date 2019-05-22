import React from 'react';
import StickyFooter from 'react-sticky-footer';
// const Footer = props => (
// 	<div>This is a component called Footer.</div>
// );

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
class Footer extends React.Component {
  render() {
    return (
    <div className="footer">
		{/* <footer id="footerControl">
            <p>Made with &hearts; love by team: makePretty(theHive)</p>
          </footer> */}
       <StickyFooter id="stickyFooter"
          bottomThreshold={50}
          normalStyles={{
          backgroundColor: "#999999",
          padding: "2rem"
          }}
          stickyStyles={{
          backgroundColor: "rgba(255,255,255,.8)",
          padding: "2rem"
          }}>
Made with &hearts; love by team: makePretty(theHive)
</StickyFooter>  
  </div>
  );
  }
}

// const FooterPropTypes = {
// 	// always use prop types!
// };

// Footer.propTypes = FooterPropTypes;

export default Footer;
