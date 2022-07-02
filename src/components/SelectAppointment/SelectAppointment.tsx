import DateCarousel from "../DateCarousel";
import "./SelectAppointment.css";

const SelectAppointment = () => {
  return (
    <section>
      <h3 className="sectionTitle">Schedule Appointment</h3>
      <div className="scheduleBox">
        <div className="fees">
          <h4>Fees</h4>
          <p>85$</p>
        </div>

        <div className="Schedule">
          <h4>Schedule</h4>
          <DateCarousel />
        </div>
      </div>
    </section>
  );
};

export default SelectAppointment;
