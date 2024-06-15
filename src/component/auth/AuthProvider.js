import Chiperline from "chiperline";
import Cookies from "universal-cookie";
const chiper = new Chiperline("SUPERSECRETSPORTLINEV3");
const kuki = new Cookies();

class AuthService {
  static async login(email, password) {
    console.log("Called!");
    const response = await fetch(
      `http://${process.env.REACT_APP_PAYMENT_IP}:5000/accounts/login/auth`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();
    if (data.status == "Success") {
      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);
      kuki.set("SESSION_DATA", chiper.encrypt(JSON.stringify(data.user)), {
        path: "/",
        expires: expireDate,
      });
      return data;
    } else {
      return data;
    }
  }

  static setLogin(data) {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);
    kuki.set("SESSION_DATA", chiper.encrypt(JSON.stringify(data)), {
      path: "/",
      expires: expireDate,
    });
  }

  static logout() {
    kuki.remove("SESSION_DATA");
  }

  static isAdmin() {
    if (kuki.get("SESSION_DATA")) {
      try {
        const user = chiper.decrypt(kuki.get("SESSION_DATA"));
        return JSON.parse(user).role == "Admin" ? true : false
      } catch (error) {
        return null;
      }
    } else {
      return null;
    }
  };

  static getCurrentUser() {
    // Retrieve user data from localStorage
    if (kuki.get("SESSION_DATA")) {
      try {
        const user = chiper.decrypt(kuki.get("SESSION_DATA"));
        return user ? JSON.parse(user) : null;
      } catch (error) {
        return null;
      }
    } else {
      return null;
    }
  }

  static isAuthenticated() {
    // Check if user is authenticated
    if (kuki.get("SESSION_DATA")) {
      try {
        const user = JSON.parse(chiper.decrypt(kuki.get("SESSION_DATA")));
        return user._id !== null ? true : false;
      } catch (error) {
        return false;
      }
    }
  }
}

export default AuthService;
