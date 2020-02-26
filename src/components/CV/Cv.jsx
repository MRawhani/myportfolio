import React, { Component } from "react";
import PageTop from "../shared/PageTop";

export default class Cv extends Component {
  render() {
    return (
      <div>
        <PageTop
          title="Get My Cv"
          color="green"
          image="undraw_files_6b3d.svg"
        />
        <div className="container">
          <div className="cv" style={{ width: "90%" }}>
            <div>
              <a
               
                className="cta-btn cta-btn--green"
                href={`https://drive.google.com/file/d/0B7SRPNoPb-qecVN4LURMdF84Y2RpaWljSnk1eGo4YjJWall3/view`}
              >
                Download
              </a>
            </div>
            <object data={`https://drive.google.com/file/d/0B7SRPNoPb-qecVN4LURMdF84Y2RpaWljSnk1eGo4YjJWall3/view`} type="application/pdf">
              <iframe
                style={{
                  width: "100%",
                  height: "800px",
                  background: "red"
                }}
                src={`https://drive.google.com/file/d/0B7SRPNoPb-qecVN4LURMdF84Y2RpaWljSnk1eGo4YjJWall3/view`}
              ></iframe>
            </object>
          </div>
        </div>
      </div>
    );
  }
}
