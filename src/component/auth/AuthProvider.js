const Chiperline = require("chiperline");
const chiper = new Chiperline("SUPERSECRETSPORTLINEV3");

class AuthService {
  static async login(email, password) {
    console.log("Called!");
    const response = await fetch(`http://${process.env.REACT_APP_PAYMENT_IP}:5000/accounts/login/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.status == "Success") {
      localStorage.setItem("SESSION_DATA", chiper.encrypt(JSON.stringify(data.user)));
      return data
    } else {
      return data
    }
  }

  static setLogin(data) {
    localStorage.setItem("SESSION_DATA", chiper.encrypt(JSON.stringify(data)))
  }

  static logout() {
    // Clear user data from localStorage upon logout
    localStorage.removeItem("SESSION_DATA");
  }

  static getCurrentUser() {
    // Retrieve user data from localStorage
    const user = chiper.decrypt(localStorage.getItem("SESSION_DATA"));
    return user ? JSON.parse(user) : null;
  }

  static isAuthenticated() {
    // Check if user is authenticated
    return localStorage.getItem("SESSION_DATA") !== null ? true : false;
  }
}

export default AuthService;
