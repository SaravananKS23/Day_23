import "../../../styles.css";

export default function Ecard(props) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card border-left-${props.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}
              >
                {props.title}
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    {props.content}
                  </div>
                </div>
                <div className={props.progress}>
                  <div className="progress progress-sm mr-2">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas fa-${props.icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
