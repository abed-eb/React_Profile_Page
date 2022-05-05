import React, { Component, Fragment } from "react";
import "./Form.css";
import "react-phone-input-2/lib/style.css";
import MyInput from "./MyInput";
import Avatar from "./Avatar";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "react-phone-number-input";
import {
  getItem,
  saveCredentials,
  validateEmail,
  valueIsNumber,
} from "../util";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAvatarModal: false,
      profileAvatar: this.props.profileAvatar,
      country: null,
      city: null,
      phone: null,
      address: null,
      accountNumber: null,
      firstName: null,
      lastName: null,
      birth: null,
      userName: null,
      fullName: null,
      email: null,
      passportFile: null,
      invalidEmail: false,
      invalidPhone: false,
      invalidName: false,
    };
  }

  componentDidMount() {
    this.setState({
      userName: sessionStorage.getItem("user-name"),
      email: sessionStorage.getItem("email"),
      firstName: sessionStorage.getItem("first-name"),
      lastName: sessionStorage.getItem("last-name"),
      country: sessionStorage.getItem("country"),
      city: sessionStorage.getItem("city"),
      phone: sessionStorage.getItem("phone"),
      address: sessionStorage.getItem("address"),
      fullName: sessionStorage.getItem("full-name"),
      birth: sessionStorage.getItem("birth"),
      accountNumber: sessionStorage.getItem("accountNumber"),
    });
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
    console.log(name + " : " + value);
  };

  handleSubmit = () => {
    let dataIsValid = true;
    if (!validateEmail(this.state.email)) {
      this.setState({ invalidEmail: true });
      dataIsValid = false;
    }
    if (!valueIsNumber(this.state.phone) || this.state.phone.length < 11) {
      this.setState({ invalidPhone: true });
      dataIsValid = false;
    }

    if (
      this.state.firstName + " " + this.state.lastName !==
      this.state.fullName
    ) {
      this.setState({ invalidName: true });
      dataIsValid = false;
    }

    if (dataIsValid) {
      this.props.setUserName(this.state.userName);
      this.props.setEmail(this.state.email);
      this.props.setFullName(this.state.fullName);

      saveCredentials(
        this.state.userName,
        this.state.email,
        this.state.firstName,
        this.state.lastName,
        this.state.country,
        this.state.city,
        this.state.phone,
        this.state.address,
        this.state.fullName,
        this.state.birth,
        this.state.accountNumber
      );
      toast.success("تغییرات با موفقیت انجام شد.");
    }
  };

  exitAvatarModal = (profileAvatar) => {
    this.setState({
      showAvatarModal: false,
      profileAvatar: profileAvatar,
    });
  };
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <form className="form">
          <div className="space"></div>
          <div className="profile">
            <div className="space"></div>
            <div className="profile-info">
              <div className="profile-avatar d-flex justify-content-center">
                <img
                  src={
                    !sessionStorage.getItem("profileAvatar")
                      ? this.state.profileAvatar
                      : sessionStorage.getItem("profileAvatar")
                  }
                  alt="profile avatar"
                  className="avatar-img"
                  onClick={() => this.setState({ showAvatarModal: true })}
                />
                <Avatar
                  saveAvatar={this.props.saveAvatar}
                  show={this.state.showAvatarModal}
                  exitModal={this.exitAvatarModal}
                  src={this.state.profileAvatar}
                />
              </div>
              <div className="profile-detail row pt-2">
                <div className="col-xl-3 col-lg-3">
                  <MyInput
                    value={this.state.userName}
                    onChange={this.handleChange}
                    id="userName"
                    name="userName"
                    type="text"
                    isInvalid={false}
                    label="نام‌کاربری"
                    invalidMessage="ارور"
                  />
                </div>
                <div className="col-xl-9 col-lg-9">
                  <MyInput
                    value={this.state.email}
                    onChange={this.handleChange}
                    id={"email"}
                    name={"email"}
                    type={"text"}
                    isInvalid={this.state.invalidEmail}
                    label={"ایمیل"}
                    invalidMessage={"ایمیل معتبر نیست"}
                  />
                </div>
              </div>
            </div>
            <div className="space"></div>
          </div>
          <div className="space"></div>
          <div className="profile">
            <div className="space"></div>
            <div className="user-details">
              <h5>اطلاعات تماس</h5>
              <div className="contact-detail">
                <div className="row pb-4">
                  <div className="col-xl-4 col-lg-5 col-md-6 col-sm-5 col-5">
                    <MyInput
                      value={this.state.country}
                      onChange={this.handleChange}
                      id="country"
                      name="country"
                      type="text"
                      isInvalid={false}
                      label="کشور"
                      invalidMessage="ارور"
                    />
                  </div>
                  <div className="col-xl-4 col-lg-7 col-md-6 col-sm-7 col-7">
                    <MyInput
                      value={this.state.city}
                      onChange={this.handleChange}
                      id="city"
                      name="city"
                      type="text"
                      isInvalid={false}
                      label="شهر"
                      invalidMessage="ارور"
                    />
                  </div>
                  <div className="col-xl-4">
                    <MyInput
                      value={this.state.phone}
                      onChange={this.handleChange}
                      id="phone"
                      name="phone"
                      type="tel"
                      isInvalid={this.state.invalidPhone}
                      label="شماره موبایل"
                      invalidMessage="شماره تلفن شما معتبر نیست"
                    />
                  </div>
                </div>
                <MyInput
                  value={this.state.address}
                  onChange={this.handleChange}
                  id="address"
                  name="address"
                  type="text"
                  isInvalid={false}
                  label="آدرس دقیق"
                  invalidMessage="ارور"
                />
              </div>

              <h5 className="pt-4">اطلاعات بانکی</h5>
              <div className="bank-detail">
                <div className="row pb-4">
                  <div className="col-xl-4">
                    <MyInput
                      value={this.state.country}
                      onChange={this.handleChange}
                      id="country"
                      name="country"
                      type="text"
                      isInvalid={false}
                      label="کشور"
                      invalidMessage="ارور"
                    />
                  </div>
                  <div className="col-xl-8">
                    <MyInput
                      value={this.state.fullName}
                      onChange={this.handleChange}
                      id="fullName"
                      name="fullName"
                      type="text"
                      isInvalid={this.state.invalidName}
                      label="نام کامل"
                      invalidMessage="نام و نام‌خانوادگی شما با نام کامل شما مطابق نیست"
                    />
                  </div>
                </div>
                <MyInput
                  value={this.state.accountNumber}
                  onChange={this.handleChange}
                  id="account-number"
                  name="accountNumber"
                  type="text"
                  isInvalid={false}
                  label="شماره حساب"
                  invalidMessage="ارور"
                />
              </div>
              <h5 className="pt-4">اطلاعات هویتی</h5>
              <div className="identity-detail">
                <div className="row pb-4">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5">
                    <MyInput
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      id="firstName"
                      name="firstName"
                      type="text"
                      isInvalid={false}
                      label="نام"
                      invalidMessage="ارور"
                    />
                  </div>
                  <div className="col-xl-4 col-lg-8 col-md-8 col-sm-7 col-7">
                    <MyInput
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      id="lastName"
                      name="lastName"
                      type="text"
                      isInvalid={false}
                      label="نام‌خانوادگی"
                      invalidMessage="ارور"
                    />
                  </div>
                  <div className="col-xl-4">
                    <MyInput
                      value={this.state.birth}
                      onChange={this.handleChange}
                      id="birth"
                      name="birth"
                      type="date"
                      isInvalid={false}
                      label="تاریخ تولد"
                      invalidMessage="ارور"
                    />
                  </div>
                </div>
                <MyInput
                  value={this.state.passportFile}
                  onChange={this.handleChange}
                  id="passportFile"
                  name="passportFile"
                  type="file"
                  isInvalid={false}
                  label="عکس صفحه اول پاسپورت"
                  invalidMessage="ارور"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center w-100">
                <button
                  onClick={this.handleSubmit}
                  className="btn btn-primary mt-4 w-25"
                >
                  تایید
                </button>
              </div>
            </div>
            <div className="space"></div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Profile;
