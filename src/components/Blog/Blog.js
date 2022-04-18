import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="my-5">
      <h2 className="text-center fs-1 mt-5">Questions:</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1. Difference between authorization and authentication
          </Accordion.Header>
          <Accordion.Body>
            <table className="table">
              <thead>
                <tr>
                  <th>Authentication</th>
                  <th>Authorization</th>
                </tr>
                <tr>
                  <td>
                    1. In authentication process, the identity of users are
                    checked for providing the access to the system.
                  </td>
                  <td>
                    1. In authentication process, the identity of users are
                    checked for providing the access to the system.
                  </td>
                </tr>
                <tr>
                  <td>2. It is done before the authorization process.</td>
                  <td>
                    2. While this process is done after the authentication
                    process.
                  </td>
                </tr>
                <tr>
                  <td>3. It needs usually user's login details.</td>
                  <td>
                    3. While it needs user's privilege or security levels.
                  </td>
                </tr>
                <tr>
                  <td>
                    4. Authentication determines whether the person is user or
                    not.
                  </td>
                  <td>4. While it determines What permission do user have?</td>
                </tr>
                <tr>
                  <td>
                    5. Example: By verifying their identity, employees can gain
                    access to an HR application that includes their personal pay
                    information, vacation time, and 401K data.
                  </td>
                  <td>
                    5. Example: Once their level of access is authorized,
                    employees and HR managers can access different levels of
                    data based on the permissions set by the organization.
                  </td>
                </tr>
              </thead>
            </table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. What other services does firebase provide other than
            authentication?
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Firestore Database</li>
              <li>Realtime Database</li>
              <li>Storage</li>
              <li>Hosting</li>
              <li>Functions</li>
              <li>Machine Learning</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
