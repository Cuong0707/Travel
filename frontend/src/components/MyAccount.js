import React from "react";
import { Link } from "react-router-dom";

class MyAccount extends React.Component {
  render() {
    return (
      <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <Link
                  className="list-group-item list-group-item-action active"
                  data-toggle="list"
                  to="#account-general"
                >
                  General
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  to="account-change-password"
                >
                  Change password
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  to="#account-info"
                >
                  Info
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  to="#account-social-links"
                >
                  Social links
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  to="#account-connections"
                >
                  Connections
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  to="#account-notifications"
                >
                  Notifications
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  to="#my-order"
                >
                  My Order
                </Link>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="account-general">
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" value="" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">E-mail</label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        value=""
                      />
                      <div className="alert alert-warning mt-3">
                        Your email is not confirmed. Please check your inbox.
                        <br />
                        <Link to="javascript:void(0)">Resend confirmation</Link>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input type="text" className="form-control" value="" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-change-password">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Current password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">New password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Repeat new password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-info">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Bio</label>
                      <textarea className="form-control" rows="5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris nunc arcu, dignissim sit amet sollicitudin
                        iaculis, vehicula id urna. Sed luctus urna nunc. Donec
                        fermentum, magna sit amet rutrum pretium, turpis dolor
                        molestie diam, ut lacinia diam risus eleifend sapien.
                        Curabitur ac nibh nulla. Maecenas nec augue placerat,
                        viverra tellus non, pulvinar risus.
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Birthday</label>
                      <input
                        type="text"
                        className="form-control"
                        value="May 3, 1995"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <select className="custom-select">
                        <option>USA</option>
                        <option selected>Canada</option>
                        <option>UK</option>
                        <option>Germany</option>
                        <option>France</option>
                      </select>
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body pb-2">
                    <h6 className="mb-4">Contacts</h6>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        value="+0 (123) 456 7891"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Website</label>
                      <input type="text" className="form-control" value />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-social-links">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Twitter</label>
                      <input
                        type="text"
                        className="form-control"
                        value="https://twitter.com/user"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Facebook</label>
                      <input
                        type="text"
                        className="form-control"
                        value="https://www.facebook.com/user"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Google+</label>
                      <input type="text" className="form-control" value />
                    </div>
                    <div className="form-group">
                      <label className="form-label">LinkedIn</label>
                      <input type="text" className="form-control" value />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Instagram</label>
                      <input
                        type="text"
                        className="form-control"
                        value="https://www.instagram.com/user"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-connections">
                  <div className="card-body">
                    <button type="button" className="btn btn-twitter">
                      Connect to <strong>Twitter</strong>
                    </button>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <h5 className="mb-2">
                      <Link
                        to="javascript:void(0)"
                        className="float-right text-muted text-tiny"
                      >
                        <i className="ion ion-md-close"></i> Remove
                      </Link>
                      <i className="ion ion-logo-google text-google"></i>
                      You are connected to Google:
                    </h5>
                    <Link
                      to="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="fc92919d848b999090bc919d9590d29f9391"
                    >
                      [email&#160;protected]
                    </Link>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <button type="button" className="btn btn-facebook">
                      Connect to <strong>Facebook</strong>
                    </button>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <button type="button" className="btn btn-instagram">
                      Connect to
                      <strong>Instagram</strong>
                    </button>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-notifications">
                  <div className="card-body pb-2">
                    <h6 className="mb-4">Activity</h6>
                    <div className="form-group">
                      <label className="switcher">
                        <input
                          type="checkbox"
                          className="switcher-input"
                          checked
                        />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          Email me when someone comments on my article
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input
                          type="checkbox"
                          className="switcher-input"
                          checked
                        />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          Email me when someone answers on my forum thread
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          Email me when someone follows me
                        </span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body pb-2">
                    <h6 className="mb-4">Application</h6>
                    <div className="form-group">
                      <label className="switcher">
                        <input
                          type="checkbox"
                          className="switcher-input"
                          checked
                        />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          News and announcements
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          Weekly product updates
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input
                          type="checkbox"
                          className="switcher-input"
                          checked
                        />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          Weekly blog digest
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="my-order">
                  <div className="card" id="my-order">
                    <div className="title">Purchase Reciept</div>
                    <div className="info">
                      <div className="row">
                        <div className="col-7">
                          <span id="heading">Date</span>
                          <br />
                          <span id="details">10 October 2018</span>
                        </div>
                        <div className="col-5 pull-right">
                          <span id="heading">Order No.</span>
                          <br />
                          <span id="details">012j1gvs356c</span>
                        </div>
                      </div>
                    </div>
                    <div className="pricing">
                      <div className="row">
                        <div className="col-9">
                          <span id="name">
                            BEATS Solo 3 Wireless Headphones
                          </span>
                        </div>
                        <div className="col-3">
                          <span id="price">&pound;299.99</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-9">
                          <span id="name">Shipping</span>
                        </div>
                        <div className="col-3">
                          <span id="price">&pound;33.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="total">
                      <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3">
                          <big>&pound;262.99</big>
                        </div>
                      </div>
                    </div>
                    <div className="tracking">
                      <div className="title">Tracking Order</div>
                    </div>
                    <div className="progress-track">
                      <ul id="progressbar">
                        <li className="step0 active " id="step1">
                          Ordered
                        </li>
                        <li className="step0 active text-center" id="step2">
                          Shipped
                        </li>
                        <li className="step0 active text-right" id="step3">
                          On the way
                        </li>
                        <li className="step0 text-right" id="step4">
                          Delivered
                        </li>
                      </ul>
                    </div>

                    <div className="footer">
                      <div className="row">
                        <div className="col-2">
                          <img
                            className="img-fluid"
                            src="https://i.imgur.com/YBWc55P.png"
                          />
                        </div>
                        <div className="col-10">
                          Want any help? Please &nbsp;<Link> contact us</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
            &nbsp;
            <button type="button" className="btn btn-default">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default MyAccount;
