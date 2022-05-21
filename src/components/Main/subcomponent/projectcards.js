import "../../../styles.css";

export default function Pcard(props) {
  return (
    <div>
      <h4 className="small font-weight-bold">
        {props.title} <span className="float-right">{props.content}</span>
      </h4>
      <div className="progress mb-4">
        <div
          className={`progress-bar bg-${props.bg}`}
          role="progressbar"
          style={{ width: props.value + "%" }}
          aria-valuenow={props.value}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
}
