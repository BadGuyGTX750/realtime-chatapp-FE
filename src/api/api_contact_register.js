import axios from "axios";
import appsettings from "../appsettings.json"

export default async function api_contact_register(fn, ln, un, e, p, cp) {
  var serverUrl = appsettings.serverUrl
  var payload = {
    first_name: fn,
    last_name: ln,
    username: un,
    email: e,
    password: p,
    confirm_password: cp
  }
  console.log(payload)
  return await axios.post(
    serverUrl + "/api/contact/register",
    payload,
    {withCredentials: true}
  );
}