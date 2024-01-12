import CampaingItem from "./CampaingItem/CampaingItem";
import "./Campaings.css";
function Campaings() {
  return (
    <>
      <section className="campaigns">
        <div className="container">
          <div className="campaigns-wrapper">
            <CampaingItem />
            <CampaingItem />
          </div>
          <div className="campaigns-wrapper">
            <CampaingItem />
            <CampaingItem />
          </div>
        </div>
      </section>
    </>
  );
}

export default Campaings;
