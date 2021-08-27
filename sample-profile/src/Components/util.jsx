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
  sessionStorage.setItem("user-email", email);
  sessionStorage.setItem("user-name", userName);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("first-name", firstName);
  sessionStorage.setItem("last-name", lastName);
  sessionStorage.setItem("country", country);
  sessionStorage.setItem("city", city);
  sessionStorage.setItem("phone", phone);
  sessionStorage.setItem("address", address);
  sessionStorage.setItem("full-name", fullName);
  sessionStorage.setItem("birth", birth);
  sessionStorage.setItem("accountNumber", accountNumber);
}

// export function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }
