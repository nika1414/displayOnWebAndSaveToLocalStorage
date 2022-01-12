var password = document.getElementById("password"),
  confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

const signUp = (e) => {
  //stops from restarting the browser
  e.preventDefault();
  displayData();
};

function displayData() {
  var output = document.getElementById("output");
  output.innerHTML = `
  <table class="tableClass">
      <br/>     
                <tr>
                    <td><b>Last Name: </b></td>
                    <td> ${document.getElementById("fname").value}</td>
                </tr>
                <tr>
                    <td><b>Email: </b></td>
                    <td> ${document.getElementById("email").value}</td>    
                </tr>
                <tr>
                    <td><b>Password: </b></td>
                    <td class="hide"> ${
                      document.getElementById("password").value
                    }
                      </td>
                </tr>
                <tr>
                    <td><b>Registration Date: </b></td>
                    <td> ${new Date()}</td>
                </tr>          
    </table>
  `;
}

function saveData() {
  let name, email, password, confirmPassword;
  name = document.getElementById("fname").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  confirmPassword = document.getElementById("confirm_password").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("duplicate data");
  } else {
    user_records.push({
      Name: name,
      Email: email,
      Password: password,
      Confirm_Password: confirmPassword,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  }
}

function ShowRepeatedPass() {
  var x = document.getElementById("confirm_password");
  var y = document.getElementById("password");
  if (x.type === "password" && y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}
