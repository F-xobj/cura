import { useEffect, useState } from "react";
import { getClinicData } from "../../api";
import { Clinic } from "../../types";
import DateCarousel from "../DateCarousel";
import "./SelectAppointment.css";

const SelectAppointment = () => {
  const [clinicData, setClinicData] = useState<Clinic>();

  const fetchClinicData = () => {
    getClinicData().then((response) => setClinicData(response));
  };

  useEffect(() => {
    fetchClinicData();
  }, []);

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
          <DateCarousel clinic={clinicData?.schedule || []} />
        </div>
      </div>
      <div className="button">Book Appointment </div>
    </section>
  );
};

export default SelectAppointment;
