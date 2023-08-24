import ContactUs from "../Views/ContactUs";
import Home from "../Views/Home/home";
import SupportUs from "../Views/Support Us";
import AboutUs from "../Views/About/index";
import GoogleAuth from "../Views/GoogleAuth";
import Disclaimer from "../Views/Disclaimer";
import TermsCondition from "../Views/TermsAndCondition";
import PrivacyPolicy from "../Views/PrivacyPolicy";
import Science from "../Views/Science";
import Stress from "../Views/Science/Stress";

export const MainRoutes = [
    {
    Component: Home,
    path: "/",
    exact: true,
    route: "/",
    name: "Home",
    },
  {
    Component: ContactUs,
    path: "/contact_us",
    exact: true,
    route: "/contact_us",
    name: "ContactUs",
  },
  {
    Component: SupportUs,
    path: "/support",
    exact: true,
    route: "/support",
    name: "SupportUs",
  },
  {
    Component: AboutUs,
    path: "/about",
    exact: true,
    route: "/about",
    name: "AboutUs",
  },
  {
    Component: GoogleAuth,
    path: "/google-auth",
    exact: true,
    route: "/google-auth",
    name: "GoogleAuth",
  },
  {
    Component: Disclaimer,
    path: "/user-deletion-disclaimer",
    exact: true,
    route: "/user-deletion-disclaimer",
    name: "Disclaimer",
  },
  {
    Component: TermsCondition,
    path: "/terms-condition",
    exact: true,
    route: "/Terms-Condition",
    name: "terms-condition",
  },
  {
    Component: PrivacyPolicy,
    path: "/privacy-policy",
    exact: true,
    route: "/privacy-policy",
    name: "PrivacyPolicy",
  },
  {
    Component: Science,
    path: "/science",
    exact: true,
    route: "/science",
    name: "Science",
  },
  {
    Component: Stress,
    path: "/science/stress",
    exact: true,
    route: "/science/stress",
    name: "Stress",
  },
];
