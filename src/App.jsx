import { QRCodeSVG } from "qrcode.react";

const invitationData = {
  couple: {
    groomName: "Lingaganapathi R",
    brideName: "Priyadarshini V",
    groomPhoto: "/groom.jpg",
    bridePhoto: "/bride.jpg",
    groomParents: "Son of Mr. Rajendiran G (Rtd BSNL) & Mrs. Manjula R",
    brideParents: "Daughter of Mr. Ventakesan R (Rtd CISF) & Mrs. Navaneetham V",
  },
  event: {
    title: "Wedding Invitation",
    subtitle: "Together with their families, invite you to celebrate their special day",
    rdate: "Tuesday, 23rd June 2026",
    rtime: "06:00 PM onwards",
    mdate: "Wednesday, 24th June 2026",
    mtime: "06:00 AM - 07:30 AM",
    venueName: "GS Mahal A/C, Arni",
    address: "GS Mahal A/C, Nadukuppam, Arni, Tamil Nadu - 632301",
    mapsUrl: "https://maps.app.goo.gl/oxRV2HpfRN9kqWVq7",
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
            <SectionTitle>Reception</SectionTitle>
            <SectionTitle>Date & Time</SectionTitle>
            <p className="detail-line">{event.rdate}</p>
            <p className="detail-line">{event.rtime}</p>
          </div>

          <div className="card detail-card">
            <SectionTitle>Muhurtham</SectionTitle>
            <SectionTitle>Date & Time</SectionTitle>
            <p className="detail-line">{event.mdate}</p>
            <p className="detail-line">{event.mtime}</p>
          </div>
        </section>

        <section className="card qr-card">
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
