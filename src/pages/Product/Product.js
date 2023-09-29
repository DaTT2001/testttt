import React, { useState } from "react";
import style from "./Product.module.css";
import { Container } from "react-bootstrap";
import { postObjectToApi } from "../../utils/API";
const Product = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    selectedServices: [],
    facebookLink: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    phoneNumber: "",
    selectedServices: "",
    facebookLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        selectedServices: [...formData.selectedServices, value],
      });
    } else {
      setFormData({
        ...formData,
        selectedServices: formData.selectedServices.filter(
          (service) => service !== value
        ),
      });
    }
    validateField("selectedServices", formData.selectedServices);
  };

  const validateField = (fieldName, value) => {
    let errors = { ...formErrors };

    switch (fieldName) {
      case "name":
        errors.name = value.trim() === "" ? "Tên không được để trống" : "";
        break;
      case "phoneNumber":
        errors.phoneNumber =
          value.trim() === "" ? "Số điện thoại không được để trống" : "";
        break;
      case "selectedServices":
        errors.selectedServices =
          value.length === 0 ? "Chọn ít nhất một gói dịch vụ" : "";
        break;
      case "facebookLink":
        errors.facebookLink = !isValidFacebookLink(value)
          ? "Liên kết Facebook không hợp lệ"
          : "";
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const isValidFacebookLink = (value) => {
    return value.startsWith("https://www.facebook.com/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formErrors) {
      if (formErrors[key] !== "") {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
      }
    }
    postObjectToApi(formData);
    alert(
      "Dữ liệu đã được gửi, chúng tôi sẽ liên lạc với bạn trong vòng 1 giờ tới"
    );
  };
  const inputStyle = {
    marginBottom: "10px",
    padding: "5px",
    width: "100%",
  };

  const errorStyle = {
    color: "red",
  };

  const labelStyle = {
    fontWeight: "bold",
  };

  const checkboxStyle = {
    marginRight: "5px",
  };
  return (
    <>
      <Container>
        <h3 className={style.user}>THÔNG TIN KHÁCH HÀNG</h3>
        <form onSubmit={handleSubmit} className={style.formContainer}>
          <div>
            <label htmlFor="name" style={labelStyle}>
              Họ và Tên:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <span className="error" style={errorStyle}>
              {formErrors.name}
            </span>
          </div>
          <div>
            <label htmlFor="age" style={labelStyle}>
              Tuổi:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" style={labelStyle}>
              Số điện thoại:
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <span className="error" style={errorStyle}>
              {formErrors.phoneNumber}
            </span>
          </div>
          <div>
            <label style={labelStyle}>Gói dịch vụ:</label>
            <br/>
            <label style={checkboxStyle}>
              <input
                type="checkbox"
                name="service"
                value="gói 1"
                checked={formData.selectedServices.includes("gói 1")}
                onChange={handleServiceChange}
              />
              Gói 1
            </label>
            <br/>

            <label style={checkboxStyle}>
              <input
                type="checkbox"
                name="service"
                value="gói 2"
                checked={formData.selectedServices.includes("gói 2")}
                onChange={handleServiceChange}
              />
              Gói 2
            </label>
            <br/>

            <label style={checkboxStyle}>
              <input
                type="checkbox"
                name="service"
                value="gói 3"
                checked={formData.selectedServices.includes("gói 3")}
                onChange={handleServiceChange}
              />
              Gói 3
            </label>
            <br/>

            <label style={checkboxStyle}>
              <input
                type="checkbox"
                name="service"
                value="gói 4"
                checked={formData.selectedServices.includes("gói 4")}
                onChange={handleServiceChange}
              />
              Gói 4
            </label>
            <span className="error" style={errorStyle}>
              {formErrors.selectedServices}
            </span>
          </div>
          <div>
            <label style={labelStyle} htmlFor="facebookLink">
              Liên kết Facebook:
            </label>
            <input
              type="text"
              id="facebookLink"
              name="facebookLink"
              value={formData.facebookLink}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <span className="error" style={errorStyle}>
              {formErrors.facebookLink}
            </span>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
            }}
          >
            Gửi thông tin
          </button>
        </form>
      </Container>
    </>
  );
};

export default Product;
