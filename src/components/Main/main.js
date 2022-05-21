import "../../styles.css";
import Ecard from "./subcomponent/earningcards";
import Pcard from "./subcomponent/projectcards";
import Ccard from "./subcomponent/colorcards";
//import canvas from "./supporting_files/index_data/Chart";
import img7 from "../../supporting_files/index_data/undraw_posting_photo.svg";

export default function Main() {
  return (
    //Begin Page Content
    <div className="container-fluid">
      {/* <!-- Page Heading -->*/}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="/#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>

      {/* <!-- Content Row -->*/}
      <div className="row">
        {/* <!-- Earnings (Monthly) Card Example -->*/}
        <Ecard
          color="primary"
          title="Earnings (Monthly)"
          content="$40,000"
          icon="calendar"
        />

        <Ecard
          color="success"
          title="Earnings (Annual)"
          content="$215,000"
          icon="dollar-sign"
        />

        <Ecard
          color="info"
          title="Tasks"
          content="50%"
          progress="col"
          icon="clipboard-list"
        />
        <Ecard
          color="warning"
          title="Pending Requests"
          content="18"
          icon="comments"
        />
      </div>

      {/* <!-- Content Row -->*/}
      <div className="row">
        {/* <!-- Content Column -->*/}
        <div className="col-lg-6 mb-4">
          {/* <!-- Project Card Example -->*/}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
              <Pcard
                title="Server Migration"
                content="20%"
                value="20"
                bg="danger"
              />
              <Pcard
                title="Sales Tracking"
                content="40%"
                value="40"
                bg="warning"
              />
              <Pcard title="Customer Database" content="60%" value="60" />
              <Pcard
                title="Payout DetailsServer Migration"
                content="80%"
                value="80"
                bg="info"
              />
              <Pcard
                title="Account Setup"
                content="Complete!"
                value="100"
                bg="success"
              />
            </div>
          </div>

          {/* <!-- Color System -->*/}
          <div className="row">
            <Ccard bw="white" color="primary" title="Primary" value="#4e73df" />
            <Ccard bw="white" color="success" title="Success" value="#1cc88a" />
            <Ccard bw="white" color="info" title="Info" value="#36b9cc" />
            <Ccard bw="white" color="warning" title="Warning" value="#f6c23e" />
            <Ccard bw="white" color="danger" title="Danger" value="#e74a3b" />
            <Ccard
              bw="white"
              color="secondary"
              title="Secondary"
              value="#858796"
            />
            <Ccard bw="black" color="light" title="Light" value="#f8f9fc" />
            <Ccard bw="white" color="dark" title="Dark" value="#5a5c69" />
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          {/* <!-- Illustrations -->*/}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Illustrations
              </h6>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "25rem" }}
                  src={img7}
                  alt="..."
                />
              </div>
              <p>
                Add some quality, svg illustrations to your project courtesy of{" "}
                <a target="_blank" rel="noreferrer" href="https://undraw.co/">
                  unDraw
                </a>
                , a constantly updated collection of beautiful svg images that
                you can use completely free and without attribution!
              </p>
              <a target="_blank" rel="noreferrer" href="https://undraw.co/">
                Browse Illustrations on unDraw →
              </a>
            </div>
          </div>

          {/* <!-- Approach -->*/}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Development Approach
              </h6>
            </div>
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance. Custom CSS
                classes are used to create custom components and custom utility
                classes.
              </p>
              <p className="mb-0">
                Before working with this theme, you should become familiar with
                the Bootstrap framework, especially the utility classes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    //container-fluid
    //End of Main Content
  );
}
