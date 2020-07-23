import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Crystal Lebron - Capacity Planner <a href="https://www.TeamsCapacity.com" target="_blank" rel="noopener noreferrer">TeamsCapacity.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;