import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2>Blogs</h2>

            <h3>Question-01: Difference between authorization and authentication</h3>

<h2> Answer:</h2>
<p><strong> Difference between authorization and authentication</strong></p>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>Authorization</th>
      <th>Authentication</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Authorization is the process of verifying what specific applications, files, and data a user has access to.</td>
      <td>Authentication is the process of verifying who someone is.</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Authorization works through settings that are implemented and maintained by the organization.</td>
      <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
     
    </tr>
    <tr>
      <td>3</td>
      <td>Authorization always takes place after authentication.</td>
      <td>Authentication is the first step of a good identity and access management process.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Authorization isn’t visible to or changeable by the user.</td>
      <td>Authentication is visible to and partially changeable by the user.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.</td>
      <td>Usernames and passwords are the most common authentication factors. If a user enters the correct data, the system assumes the identity is valid and grants access.</td>
    </tr>
  </tbody>
</Table>

<h3>Question-02: Why are you using firebase? What other options do you have to implement authentication?</h3>

<h2> Answer:</h2>
<p>Firebase is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.
The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.
</p>



        </div>
    );
};

export default Blogs;