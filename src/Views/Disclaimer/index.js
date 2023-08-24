import "./style.css";

const Disclaimer = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", letterSpacing: "1px" }}>
        Data Retention and Destruction Policy
      </h1>
      <div className="list-container">
        <div class="list-item">
          1. Data will be retained for 90 days after a subscriber is no longer
          subscribing to the App.
        </div>
        <div className="list-item">
          2. If the subscriber wishes to have his data deleted permanently
          he/she may send an email to support@nispand.com with a request to
          delete the data. Nispand Pvt Ltd shall delete the data & send an email
          to the subscriber confirming the same.
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
