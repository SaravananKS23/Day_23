import "./styles.css";

export default function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.tire}
          </h5>
          <h6 className="card-price text-center">
            ${props.price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.user ? props.user : <b>{props.users}</b>}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.storage}GB Storage
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Community Access
            </li>
            <li className={props.muted ? props.muted : null}>
              <span className="fa-li">
                <i className={props.times ? props.times : props.check}></i>
              </span>
              Unlimited Private Projects
            </li>
            <li className={props.muted ? props.muted : null}>
              <span className="fa-li">
                <i className={props.times ? props.times : props.check}></i>
              </span>
              Dedicated Phone Support
            </li>
            <li className={props.muted ? props.muted : null}>
              <span className="fa-li">
                <i className={props.times ? props.times : props.check}></i>
              </span>
              {props.subdomains ? <b>{props.subdomains}</b> : "Free Subdomain"}{" "}
              {props.subdomain}
            </li>
            <li className={props.muted ? props.muted : props.muted1}>
              <span className="fa-li">
                <i
                  className={
                    props.times ? props.times : props.check1 || props.check
                  }
                ></i>
              </span>
              Monthly Status Reports
            </li>
          </ul>
          <div className="d-grid">
            <a href="/#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
