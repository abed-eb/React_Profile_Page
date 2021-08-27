export function validateEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

export function validatePass(pass) {
  return (
    /[a-z]/.test(pass) &&
    /[A-Z]/.test(pass) &&
    /[0-9]/.test(pass) &&
    pass.length > 7
  );
}

export function valueIsNumber(value) {
  return /^[0-9\b]*$/.test(value);
}

export function saveCredentials(
  userName,
  email,
  firstName,
  lastName,
  country,
  city,
  phone,
  address,
  fullName,
  birth,
  accountNumber
) {
  localStorage.setItem("user-email", email);
  localStorage.setItem("user-name", userName);
  localStorage.setItem("email", email);
  localStorage.setItem("first-name", firstName);
  localStorage.setItem("last-name", lastName);
  localStorage.setItem("country", country);
  localStorage.setItem("city", city);
  localStorage.setItem("phone", phone);
  localStorage.setItem("address", address);
  localStorage.setItem("full-name", fullName);
  localStorage.setItem("birth", birth);
  localStorage.setItem("accountNumber", accountNumber);
}

export function clearCredentials() {
  sessionStorage.removeItem("user-token");
  sessionStorage.removeItem("user-id");
  sessionStorage.removeItem("user-email");
  sessionStorage.removeItem("profileAvatar");
  sessionStorage.removeItem("user-remember-me");
  localStorage.removeItem("user-email");
  localStorage.removeItem("user-token");
  localStorage.removeItem("user-id");
  localStorage.removeItem("profileAvatar");
  localStorage.removeItem("user-remember-me");
}

export function getItem(item) {
  return localStorage.getItem(item) || sessionStorage.getItem(item);
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
