import QRCode from "react-qr-code";

const QRGenerator = ({ URL, hoverText }) => {
  return (
    <div>
      <div style={{ height: "490px" }}>
        <div className="container">
          <QRCode value={URL} size={500} />
          <div className="object">{hoverText}</div>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;
