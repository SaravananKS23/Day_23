import "../../../styles.css";

export default function Ccard(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className={`card bg-${props.color} primary text-${props.bw} shadow`}>
        <div className="card-body">
          {props.title}
          <div className={`text-${props.bw}-50 small`}>{props.value}</div>
        </div>
      </div>
    </div>
  );
}
