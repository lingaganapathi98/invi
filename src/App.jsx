import { QRCodeSVG } from "qrcode.react";

const invitationData = {
  couple: {
    groomName: "Groom Name",
    brideName: "Bride Name",
    groomPhoto: "/groom.jpg",
    bridePhoto: "/bride.jpg",
    groomParents: "Son of Mr. Groom Father & Mrs. Groom Mother",
    brideParents: "Daughter of Mr. Bride Father & Mrs. Bride Mother",
  },
  event: {
    title: "Wedding Invitation",
    subtitle: "Together with their families, invite you to celebrate their special day",
    date: "Sunday, 25 August 2026",
    time: "10:30 AM onwards",
    venueName: "Sri Lakshmi Convention Hall",
    address: "123 Celebration Street, Chennai, Tamil Nadu 600001",
    mapsUrl: "https://maps.google.com/?q=Sri+Lakshmi+Convention+Hall+Chennai",
  },
};

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

function PersonCard({ image, name, familyText, role }) {
  return (
    <div className="person-card">
      <div className="image-ring">
        <img src={image} alt={name} className="person-image" />
      </div>
      <p className="role-text">{role}</p>
      <h3>{name}</h3>
      <p className="family-text">{familyText}</p>
    </div>
  );
}

export default function App() {
  const { couple, event } = invitationData;

  return (
    <div className="page">
      <div className="background-blur blur-one" />
      <div className="background-blur blur-two" />

      <main className="container">
        <section className="hero card">
          <p className="eyebrow">You are warmly invited</p>
          <h1>{event.title}</h1>
          <p className="hero-subtitle">{event.subtitle}</p>

          <div className="names-wrap">
            <span>{couple.groomName}</span>
            <span className="ampersand">&</span>
            <span>{couple.brideName}</span>
          </div>
        </section>

        <section className="couple-section">
          <PersonCard
            image={couple.groomPhoto}
            name={couple.groomName}
            familyText={couple.groomParents}
            role="The Groom"
          />
          <PersonCard
            image={couple.bridePhoto}
            name={couple.brideName}
            familyText={couple.brideParents}
            role="The Bride"
          />
        </section>

        <section className="details-grid">
          <div className="card detail-card">
            <SectionTitle>Date & Time</SectionTitle>
            <p className="detail-line">{event.date}</p>
            <p className="detail-line">{event.time}</p>
          </div>

          <div className="card detail-card">
            <SectionTitle>Venue</SectionTitle>
            <p className="venue-name">{event.venueName}</p>
            <p className="address-text">{event.address}</p>
            <a className="map-link" href={event.mapsUrl} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </section>

        <section className="card qr-card">
          <SectionTitle>Location QR Code</SectionTitle>
          <p className="qr-text">Scan to open the venue in Google Maps.</p>
          <div className="qr-box">
            <QRCodeSVG
              value={event.mapsUrl}
              size={180}
              bgColor="#ffffff"
              fgColor="#7a3f34"
              includeMargin={true}
            />
          </div>
          <p className="qr-url">{event.mapsUrl}</p>
        </section>

        <footer className="footer-text">
          With love and joy, we look forward to celebrating with you.
        </footer>
      </main>
    </div>
  );
}
