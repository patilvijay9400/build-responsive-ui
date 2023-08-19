import React, { useState } from "react";

const Login = (props) => {
  const [activeTab, setActiveTab] = useState("signin"); // 'signin' or 'signup'

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!props.isLogin) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div>
            <button
              className={`btn ${activeTab === "signin" ? "active" : ""}`}
              onClick={() => handleTabChange("signin")}
            >
              Sign In
            </button>
            <button
              className={`btn ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => handleTabChange("signup")}
            >
              Sign Up
            </button>
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              props.setLoginOpen(false);
            }}
          ></button>
        </div>
        <div className="modal-body mt-2">
          {activeTab === "signin" ? (
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="submit"
                class="btn btn-outline-primary"
                onClick={() => {
                  props.setLoginOpen(false);
                }}
              >
                Login
              </button>
            </form>
          ) : (
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="submit"
                class="btn btn-outline-primary"
                onClick={() => {
                  props.setLoginOpen(false);
                }}
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
