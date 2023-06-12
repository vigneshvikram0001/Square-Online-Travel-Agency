import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./Css/HomeCards.css";
import img1 from "../images/image-1.jpg";
import img4 from "../images/image-4.jpg";
import img5 from "../images/image-5.jpg";
import img6 from "../images/image-18.jpg";

export default function HomeCards() {
  return (
    <div className="HomeCards">
      <MDBRow className="row-cols-1 row-cols-md-2 g-4">
        <MDBCol data-aos="fade-up" data-aos-duration="1000">
          <MDBCard className="cards hover-zoom">
            <MDBCardImage src={img1} alt="..." position="top" />
            <MDBCardBody>
              <MDBCardTitle>Bora Bora, French Polynesia</MDBCardTitle>
              <MDBCardText>
                A part of French Polynesia, this magical island has some of the
                most beautiful sights to behold- a tropical island surrounded by
                the amazing blue lagoon
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol data-aos="fade-up" data-aos-duration="1000">
          <MDBCard className="cards hover-zoom">
            <MDBCardImage src={img5} alt="..." position="top" />
            <MDBCardBody>
              <MDBCardTitle>Bali, Indonesia - An idyllic retreat</MDBCardTitle>
              <MDBCardText>
                Indonesia's most famous island, Bali is the best place for any
                tourist who needs a week of absolute relaxation, fragrant
                cuisine, scenic beauty and a galore of culture
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol data-aos="fade-up" data-aos-duration="1000">
          <MDBCard className="cards hover-zoom">
            <MDBCardImage src={img6} alt="..." position="top" />
            <MDBCardBody>
              <MDBCardTitle>The most populous city of France.</MDBCardTitle>
              <MDBCardText>
                As a wonderful insight into French culture and cuisine, with
                some incredible photo opportunities, Paris deserves its place on
                every traveler's bucket list of destinations.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol data-aos="fade-up" data-aos-duration="1000">
          <MDBCard className="cards hover-zoom">
            <MDBCardImage src={img4} alt="..." position="top" />
            <MDBCardBody>
              <MDBCardTitle>Mandrem Beach- North Goa</MDBCardTitle>
              <MDBCardText>
                A perfect beachside vacation is all we need when our mind and
                body seek calmness. The best thing about beaches is the
                sweltering sun rays that fall straight on the sea bed,
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
