import auth0 from "auth0-js";
import history from "../history";

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        //navigate to home
        history.replace("/");
        console.log(err);
        alert(`Error : ${err.error}. Check the console for further details.`);
      }
    });
  }
  getAccessToken() {
    return this.accessToken;
  }
  getIdToken() {
    return this.idToken;
  }
  setSession(authResult) {
    localStorage.setItem("isLoggedIn", "true");
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    history.replace("/home");
  }
  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(
          `could not get a new token( ${err.error}: ${err.error_description}).`
        );
      }
    });
  }

  logout() {
    //remove token and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    //remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");
    history.replace("/");
  }
  isAuthenticated() {
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }

  auth0 = new auth0.WebAuth({
    domain: "handle.eu.auth0.com",
    clientID: "3j0V4vab7ojAFT644uTInEu3QJDCaSZ4",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });
  login() {
    this.auth0.authorize();
  }
}
