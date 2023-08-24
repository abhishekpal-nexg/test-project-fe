import { assets } from "../../assets/assets";
const GoogleAuth = () => {

    return(
        <div>
            <div className="main-container">
      <header className="header">
        <div className="logo text-center my-4">
          <img src={assets.brandLogo} alt="logo" style={{height:"100px"}}/>
        </div>
      </header>
      <h2>Google OAuth2 Homepage</h2>
      <p>
        <b>Accurately represents your app’s identity: </b>Curated by ‘The Yoga
        Institute’, with a 103-year-old legacy of yoga, Nispand aims to help you
        meditate, relax, and live mindfully. Nispand offers a unique approach to
        practice meditation through diverse ways such as guided meditation,
        nature sounds, mantras, solfeggio frequencies, and binaural meditation
        to tune your mind into a perfect rhythm.
      </p>

      <p>
        <b>What will this app do with user data?</b> The only user data received
        is name, email, and profile picture. These will be saved and
        re-displayed to the user. The email will be used to identify the user.
        The name and profile picture will be used as the name and profile
        picture of your account on the Nispand App.
      </p>

      <p>
        <b>How does this app enhance user functionality?</b> This app contains
        meditation clips. With just a few minutes of daily practice, one’s day
        can turn from one filled with stress to one brimming with joy, peace,
        and happiness
      </p>

      <p>
        <b>Link to Privacy Policy:</b> <a
          href="https://nispand.com/privacy-policy"
          >https://nispand.com/privacy-policy</a
        >
      </p>

      <p>
        <b>Describe the content, context, or connection to the app:</b
        > The Nispand App is a mobile application on Android and iOS, which is a
        meditation app. The intention is to approach practice meditation through
        diverse ways such as guided meditation, nature sounds, mantras,
        solfeggio frequencies, and binaural meditation to tune your mind into a
        perfect rhythm.
      </p>

      <h2 className="mt-3">Google OAuth2 Limited Use Disclosure</h2>

      <p>
        This app doesn’t request restricted scopes, but if it did, the Nispand
        App’s use of information received from Google APIs will adhere to
        the Google API Services User Data Policy, including the Limited Use
        requirements.
      </p>

      <h2>Google OAuth2 Scopes</h2>

      <h3 className="mt-2">For Google Fit Restricted Scopes:</h3>

      <p>
        Nispand app will use
        <a href=" https://www.googleapis.com/auth/fitness.heart_rate.read">
          https://www.googleapis.com/auth/fitness.heart_rate.read</a
        > 
        to show users the notifications based on their heart rate data which is
        classNameified into three categories "Under Stressed" "Stressed" "Over
        Stressed" and providing the user with appropriate audio recommendations.
        Nispand app will use
        <a href=" https://www.googleapis.com/auth/fitness.activity.read">
          https://www.googleapis.com/auth/fitness.activity.read</a
        >  to handle the case where we require the user's like walking,
        brisking, running, or some random exercising and if in this case user is
        measuring their bpm and it is elevated beyond normal levels then we do
        not alert the user because then the heart rate will not be categorized
        to come under any of the stress categories.
      </p>
      <p>
        For more information please check:
        <a href="https://youtu.be/VLmoOvT_W0c">https://youtu.be/VLmoOvT_W0c</a>
      </p>

      <h2>Copyright</h2>
      <p>
        If you have a copyright complaint, please contact help@nispand.com, and
        include the Nispand App page that contains the alleged content,
        identification of the work claimed to have been infringed including the
        name and reply email address of the copyright holder/representative, an
        assertion that the use of the material is not authorized and an
        assertion that you are the copyright holder/representative.
      </p>
    </div>
        </div>
    );
};

export default GoogleAuth