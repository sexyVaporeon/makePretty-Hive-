import React from 'react';
import StickyFooter from 'react-sticky-footer';

class Footer extends React.Component {
  render() {
    return (
    <div className="footer">
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

export default Footer;
