import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Cookies from "./components/Cookies";
import CSAE from "./components/CSAE";
import Abuse from "./components/Abuse";

export default function LegalHome() {
  return (
    <div>
      <h1>Legal Information</h1>
      <p>
        This section provides all required legal documents that govern your use of TriggerFeed.
      </p>

      <Terms />
      <hr />

      <Privacy />
      <hr />

      <Cookies />
      <hr />

      <CSAE />
      <hr />

      <Abuse />

    </div>
  );
}
