import React from "react";
import { assets } from "../../../assets/assets";
import NavbarComp from "../../../Components/Navbar";
import "./style.css";

const Stress = () => {
  return (
    <>
      <NavbarComp />
      <div className="container mt-5 ">
          <div className='top-bottom'>
        <div className="row ">
          <div className="col-lg-6 mt-5">
            <p className="heading">Stress </p>
            <p className="sub-heading">The Science</p>
            <p className="detail-text">
              Stress is the brain and body’s response to change, challenge or
              demand. It is the body’s natural defense against danger brought on
              by an event or thought that makes you feel frustrated, angry or
              nervous.
            </p>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src={assets.girls} />
          </div>
        </div></div>
        <div className='top-bottom'>
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 mt-5">
            <div>
              <p className="detail-text">
                Experiencing periods of stress is a normal part of life, but
                when stress becomes chronic, it can lead to both mental and
                physical health problems.
              </p>
              <p className="detail-text">
                The body’s autonomic nervous system controls our heart rate,
                breathing, vision changes and more. It has a built in stress
                response.
              </p>
            </div>
          </div>
          <div className="col-lg-6  ">
            <img className="img-fluid" src={assets.girls} />
          </div>
        </div></div>
        <div className='top-bottom'>
        <div className="list d-j-a">
          <ul className="unorder-list ">
            <li>
              The stress response to acute stress is protective, providing it
              switches off when the stressor goes away.
            </li>
            <li>
              The stress response is a “flight or fight response”, which helps
              the body face stressful situations.
            </li>
            <li>
              The stress response when prolonged for a long period of time
              causes wear and tear on the body. Physical, emotional and
              behavioral symptoms develop.
            </li>
          </ul>
        </div></div>
        <div className='top-bottom'>
        <div className="question d-j-a">
          <div>
            <p className="sub-heading">What stress can do to your body? </p>
            <p className="detail-text">
              We often use the words I am stressed casually in our everyday
              conversations, with little acknowledgement of the adverse effects
              of stress in our life. But evidence suggests that we should be
              much more concerned about our stress levels than we are. Prolonged
              stress changes the brain. The part of our brain that helps process
              threatening situations, the amygdala, can appear larger in people
              who are chronically stressed. Researchers have also seen that the
              hippocampus and prefrontal cortex can appear smaller. Stress among
              adults is rising at an alarming rate. This means that most adults
              are walking around with high levels of the stress hormone
              cortisol, which is linked to most diseases, including cancer,
              diabetes and depression.
            </p>
          </div>
        </div></div>
        <div className='top-bottom'>
          <div className="row">
            <div className="col-md-4">
              <div className="border">
                <p className="header">
                  The physical symptoms of stress include
                </p>
                <hr />
                <ul className="table">
                  <li>Aches and pains</li>

                  <li>Chest pain or a feeling like your heart is racing</li>

                  <li>Exhaustion or trouble sleeping</li>

                  <li>Headaches and dizziness or shaking</li>

                  <li>High blood pressure</li>

                  <li>Muscle tension or jaw clenching</li>

                  <li>Stomach or digestive problems</li>

                  <li>Weak immune system</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border">
                <p className="header">
                  The emotional and mental symptoms of stress include:
                </p>
                <hr />
                <ul className="table">
                  <li>Anxiety or irritability</li>

                  <li>Depression</li>

                  <li>Panic attacks</li>

                  <li>Sadness</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border">
                <p className="header">
                  Often people with chronic stress try to manage it with
                  unhealthy behaviors including:
                </p>
                <hr />
                <ul className="table">
                  <li>Drinking alcohol too much or too often</li>

                  <li>Gambling</li>

                  <li>Overeating or developing an eating disorder</li>

                  <li>Smoking</li>

                  <li>Using drugs</li>

                  <li>Shopping or internet browsing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='top-bottom'>
        <div className="question d-j-a">
          <div>
            <p className="sub-heading">How is stress diagnosed?</p>
            <p className="detail-text">
              Stress is subjective - not measurable with tests. Only the person
              experiencing it can determine whether it is present and how severe
              it feels.
            </p>
          </div>
        </div>
        </div>
        <div className='top-bottom'>
        <div className="question d-j-a">
          <div>
            <p className="sub-heading">
              Discover our best tips and practises to equip you with tools to
              navigate stress
            </p>
            <p className="detail-text">
              They help interrupt the stress cycle to allow us to respond
              instead of react.
            </p>
          </div>
        </div>
        </div>
        <div className='top-bottom'>
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 mt-5">
            <div>
              <p className="sub-heading">Meditation/Mindfulness:</p>
              <h3>A simple, fast way to reduce stress </h3>
              <p className="detail-text">
                Even a few minutes spent in meditation can restore calm and
                inner peace. Anyone can practise meditation. It is simple and
                inexpensive, and it doesn’t require any special equipment. The
                Yoga Institute is here with the Nispand app to help beginners
                understand how to meditate. Following these simple tips will
                deliver deeper experiences that will ensure a profound lifelong
                meditation practice.
              </p>
            </div>
          </div>
          <div className="col-lg-6  ">
            <img className="img-fluid" src={assets.girls} />
          </div>
        </div>
        </div>
        <div className='top-bottom'>
          <p className="sub-heading d-j-a">
            Steps to meditate
          </p>
          <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
            <div className="col">
              <div className="p-3 text-center border">
                <p className="sub-heading">1</p>
                <p className="detail-text">Find a quiet spot</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 text-center border">
                <p className="sub-heading">2</p>
                <p className="detail-text">Sit comfortable</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 text-center border">
                <p className="sub-heading">3</p>
                <p className="detail-text">Focus on breath</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 text-center border">
                <p className="sub-heading">4</p>
                <p className="detail-text">Feel the breath going in and out</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 text-center border">
                <p className="sub-heading">5</p>
                <p className="detail-text">Notice thoughts that arise</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 text-center border">
                <p className="sub-heading">6</p>
                <p className="detail-text">Gently return to the breath</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 text-center border">
                <p className="sub-heading">7</p>
                <p className="detail-text">Aim for five minutes</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 text-center border">
                <p className="sub-heading">8</p>
                <p className="detail-text">Make progress patiently</p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 text-center border">
                <p className="sub-heading">9</p>
                <p className="detail-text">Practise everyday</p>
              </div>
            </div>
          </div>
        </div>
        <div className='top-bottom'>
          <p className="sub-heading d-j-a">
            How meditation/mindfulness reduces stress
          </p>
          <div className="row ">
            <div className="col-lg-6 mt-5">
              <p className="detail-text">
                You become more aware of your thoughts: You can step back from
                them and not take them so literally. That way your stress
                response is not initiated in the first place.
              </p>

              <p className="detail-text">
                You don’t immediately react to a situation. Instead you have a
                moment to pause, use your ‘wise mind’ to come up with the best
                solution.
              </p>

              <p className="detail-text">
                Mindfulness switches on your being mode of mind which is
                associated with relaxation. Your ‘doing’ mode of mind is
                associated with action and the stress response.
              </p>

              <p className="detail-text">
                You are more aware and sensitive to the needs of the body. You
                may notice pains earlier and can then take appropriate action.
              </p>

              <p className="detail-text">
                You are more aware of the emotions of others as your emotional
                intelligence rises, you are less likely to get into conflict.
              </p>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={assets.girls} />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mt-5">
              <div>
                <p className="detail-text">
                  Your level of care and compassion for yourself and others
                  rises. This compassionate mind soothes you and inhibits your
                  stress response.
                </p>

                <p className="detail-text">
                  Mindfulness practice reduces activity in the part of your
                  brain called amygdala. The amygdala is central to switching on
                  your stress response, so effectively, your background level of
                  stress is reduced.
                </p>

                <p className="detail-text">
                  You are better able to focus. So you complete your work more
                  efficiently, you have a greater sense of well being, and this
                  reduces your stress response.
                </p>

                <p className="detail-text">
                  You can switch your attitude to stress rather than just seeing
                  the negative consequences of feeling stressed, mindfulness
                  offers you the space to think differently about the stress
                  itself. Observing how the increased pressure helps energize
                  you has a positive effect on your body and mind.
                </p>
              </div>
            </div>
            <div className="col-lg-6  ">
              <img className="img-fluid" src={assets.girls} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stress;
