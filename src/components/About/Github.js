import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Coding  <strong className="purple">Stats</strong>
      </h1>
      <GitHubCalendar
        username="AbdelmajidBen"
        blockSize={15}
        blockMargin={5}
        color="#83B4FF"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
