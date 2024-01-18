import { Select } from "antd";
import React from "react";

function Signin() {

  const Months = [
    { label: "Jan" },
    { label: "feb" },
    { label: "mar" },
    { label: "apr" },
    { label: "may" },
    { label: "Jan" },
    { label: "Jan" },
    { label: "Jan" },
    { label: "Jan" },
    { label: "Jan" },
  ];
  const day = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "may" },
    { label: "Jan" },
    { label: "Jan" },
    { label: "Jan" },
    { label: "Jan" },
    { label: "Jan" },
  ];
  const year = [
    { label: "2023" },
    { label: "2024" },
    { label: "2025" },
    { label: "2026" },
    { label: "may" },
    { label: "Jan" },
    { label: "Jan" },
    { label: "Jan" },
    { label: "Jan" },
    { label: "Jan" },
  ];

  return (
    <div className="main">
      <div className="name">
        <h1>facebook</h1>
      </div>

      <div className="submain">
        <div className="create">Create a new account</div>
        <div className="it">It's quick and easy.</div>

        <div className="user">
          <input type="name" placeholder="First name"></input>

          <input type="name" placeholder="Surname"></input>
        </div>

        <br></br>

        <div className="mail">
          <input
            type="email"
            placeholder="Email address or Phone number"
          ></input>
        </div>

        <div className="pass">
          <input type="password" placeholder=" New Password"></input>
        </div>

        <div className="h4">Date of birth </div>

        <div className="date">
  
          <Select
            defaultValue="2023"
            style={{ width: 118,marginLeft: -21 ,height: 44}}
            // loading
            options={year}
          />
          <Select
            defaultValue="nov"
            style={{ width: 120,height: 44 }}
            // loading
            options={Months}
          />
          <Select
            defaultValue="23"
            style={{ width: 120,height: 44 }}
            // loading
            options={day}
          />
        </div>

        <div className="Gen">
          <h4> Gender </h4>

          <div className="gen">
            <div className="genFemale">
              <span>Female</span>
              <input type="radio" name="mygender" className="gender"></input>
            </div>

            <div className="genmale">
              <span>Male</span>
              <input type="radio" name="mygender" className="gender"></input>
            </div>

            <div className="gencustom">
              <span>Custom</span>
              <input type="radio" name="mygender" className="gender"></input>
            </div>
          </div>

          <div className="for">
            People who use our service may have uploaded your contact
            information to
            <div>
              Facebook.
              <a href="#" id="hyperlink">
                Learn more
              </a>
            </div>
          </div>
          <br></br>
          <div className="term">
            By clicking Sign Up, you agree to our
            <a href="#" id="hyperlink">
              Terms, Privacy Policy
            </a>
            and
            <a href="#" id="hyperlink">
              Cookies Policy.
            </a>
            <div>
              You may receive SMS notifications from us and can opt out at any
              time.
            </div>
          </div>
          <button className="btn">Sign Up</button>
          <br></br>
          <br></br>
          <a href="#" id="hyperlink">
            Already have a account?
          </a>
          <div className="link">Already have a account?</div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
