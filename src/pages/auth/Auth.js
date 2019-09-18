import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "mateuszjrk.eu.auth0.com",
    clientID: "yr2tr8J7j7HE0YpmqMC7nE4cL28tvVAm",
    redirectUrl: "http://localhost:3000/callback",
    // audience: "http://mateuszjrk.eu.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  login = () => {
    this.auth0.authorize();
  };
}
