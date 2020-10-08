import React from "react";
import "./Profile.css";

const Profile = ({ imgSrc, fullName, profession, bio }) => {
  return (
    <>
      <div className="container">
        <div className="row" style={{ display: "flex", marginLeft: "200px" }}>
          <div className="col-lg-3 col-sm-6">
            <div className="card hovercard">
              <div className="cardheader"></div>
              <div className="avatar">
                <img src={imgSrc} alt="Profile" />
              </div>
              <div className="info">
                <div className="title">
                  <h2>{fullName}</h2>
                </div>
                <div
                  className="desc"
                  style={{ fontSize: "17px", color: "rgb(106, 23, 9)" }}
                >
                  {profession}
                </div>
                <div className="desc" style={{ margin: "5px" }}>
                  {bio}
                </div>
              </div>
              <div className="bottom">
                <a
                  className="btn btn-primary btn-twitter btn-sm"
                  href="https://twitter.com/"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="btn btn-danger btn-sm"
                  rel="publisher"
                  href="https://google.com"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  className="btn btn-primary btn-sm"
                  rel="publisher"
                  href="https://facebook.com"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
