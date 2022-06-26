import ViewButton from "./ViewButton";

const CardBody = (props) => {
  return (
    <div className="card-body">
      {props.teetime.map((teetime, index) => (
        <div key={index} className="card">
          <h3>{teetime.date}</h3>
          <h4>{teetime.time}</h4>
          <h5>{teetime.location}</h5>
          <ViewButton teetime={props.teetime} />
        </div>
      ))}
    </div>
  );
};
export default CardBody;
