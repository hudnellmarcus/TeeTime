import ViewButton from "./ViewButton";

const CardBody = (props) => {
  return (
    <>
      {props.teetime.map((teetime, index) => (
        <div className="col s1 m3 12">
          <div class="card blue-grey">
            <div key={index} className="card-content white-text">
              <h3>{teetime.date}</h3>
              <h4>{teetime.time}</h4>
              <h5>{teetime.location}</h5>
              <ViewButton teetime={props.teetime} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default CardBody;
