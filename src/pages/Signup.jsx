import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(form.email) && form.password.trim() !== "";

  const handleSubmit = () => {
    if (isValid)
      navigate("/profile", {
        state: { name: form.fullName, email: form.email },
      });
  };

  return (
    <div className="phone-container">
      <div className="auth-page">
        <h1 className="auth-title">
          Create your
          <br />
          PopX account
        </h1>

        <div className="signup-form">
          <div>
            <div className="input-group">
              <label>
                Full Name<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Marry Doe"
                value={form.fullName}
                onChange={handleChange("fullName")}
              />
            </div>

            <div className="input-group">
              <label>
                Phone number<span>*</span>
              </label>
              <input
                type="tel"
                placeholder="Marry Doe"
                value={form.phone}
                onChange={handleChange("phone")}
              />
            </div>

            <div className="input-group">
              <label>
                Email address<span>*</span>
              </label>
              <input
                type="email"
                placeholder="Marry Doe"
                value={form.email}
                onChange={handleChange("email")}
              />
            </div>

            <div className="input-group">
              <label>
                Password<span>*</span>
              </label>
              <input
                type="password"
                placeholder="Marry Doe"
                value={form.password}
                onChange={handleChange("password")}
              />
            </div>

            <div className="input-group">
              <label>Company name</label>
              <input
                type="text"
                placeholder="Marry Doe"
                value={form.company}
                onChange={handleChange("company")}
              />
            </div>

            <p className="radio-label-text">
              Are you an Agency?<span style={{ color: "red" }}>*</span>
            </p>
            <div className="radio-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.isAgency === "yes"}
                  onChange={handleChange("isAgency")}
                />
                Yes
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.isAgency === "no"}
                  onChange={handleChange("isAgency")}
                />
                No
              </label>
            </div>
          </div>

          {isValid ? (
            <button className="btn-primary" onClick={handleSubmit}>
              Create Account
            </button>
          ) : (
            <button className="btn-disabled" disabled>
              Create Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
