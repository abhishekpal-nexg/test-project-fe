import React from "react";
import "./styles.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example() {
  return (
    <Accordion className="accordion border-0">
      <AccordionItem className="accordion-item border-0">
        <AccordionItemHeading className=" py-0 backgroud_light">
          <AccordionItemButton>
            <h4 className="accordion-header">
              What is Nispand and The Yoga Institute?{" "}
            </h4>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Nispand is a meditation app designed to be easily accessible by the
            user, with specially designed intelligent technology that
            understands our mood and identifies stress to curate a personalized
            meditation list to be on the move.
          </p>
          <p>
            A vision of a 103 years old “The Yoga Institute '', to bring ancient
            yogic knowledge directly to our palms. Honouring the vision of the
            founder, the institute has been focused to introduce Yoga to a
            common man’s everyday life.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <hr className="m-0" />

      <AccordionItem className="accordion-item border-0">
        <AccordionItemHeading className=" py-0 backgroud_light">
          <AccordionItemButton>
            <h4 className="accordion-header">Is Nispand for me? </h4>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Nispand is for everyone. We cater to all age groups- children and
            adults, all genders and all communities. The app is curated to suit
            diverse needs and preferences for you to experience an enhanced
            daily lifestyle, the one you always wished for.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <hr className="m-0" />

      <AccordionItem className="accordion-item border-0">
        <AccordionItemHeading className=" py-0 backgroud_light">
          <AccordionItemButton>
            <h4 className="accordion-header">
              When is the best time to use Nispand?
            </h4>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Nispand is your all-time destresser companion. It is thus designed
            to be used at any time of the day, anywhere to your convenience, as
            many times as you want. In fact, it can be used on the go, in
            between meetings, or while doing your chores.
          </p>
          <p>
            The best time to use the app is the time you like. You may start
            your day with Nispand's positive vibe, and end your day listening to
            the soothing and healing sounds to get a peaceful sleep. Whenever
            you feel the need to calm or re-energize yourself or you need to
            rest your tired eyes for a few seconds, just tap into the Nispand
            app for a few seconds and feel the difference.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <hr className="m-0" />

      <AccordionItem className="accordion-item border-0">
        <AccordionItemHeading className=" py-0 backgroud_light">
          <AccordionItemButton>
            <h4 className="accordion-header">
              What are the eight categories of sounds on Nispand app:
            </h4>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <ul>
            <li className="list-style">Nature sounds:</li>
            <p>
              Bond with nature by exploring these carefully curated natural
              sounds.
            </p>

            <li className="list-style">Solfeggio frequencies:</li>
            <p>Seven mystical frequencies to heal and rejuvenate your body.</p>

            <li className="list-style">Binaural meditation:</li>
            <p>
              Meticulously engineered binaural beats to trigger the positive
              brain waves.
            </p>

            <li className="list-style">Guided meditation:</li>
            <p>
              Mindfully relax and connect with yourself by listening to guided
              instructions.{" "}
            </p>

            <li className="list-style">Mantras: </li>
            <p>
              Rhythmically chanted Sanskrit mantras to bring harmony to your
              body and mind.
            </p>

            <li className="list-style">Pranayam: </li>
            <p>
              Calming and rejuvenating ancient breathwork techniques to enhance
              your energy.
            </p>

            <li className="list-style">Stories: </li>
            <p>
              Lose yourself in the world of imagination with these stories and
              sound effects.
            </p>

            <li className="list-style">90 second meditation:</li>
            <p>
              Take a meditative break in the middle of your day to replenish
              your energy.
            </p>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>
      <hr className="m-0" />

      <AccordionItem className="accordion-item border-0">
        <AccordionItemHeading className=" py-0 backgroud_light">
          <AccordionItemButton>
            <h4 className="accordion-header">
              {" "}
              How much time do you need to spend with the app?
            </h4>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            It is recommended that a minimum of 10 minutes a day is all you need
            to gain the benefit of this mind empowering app.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <hr className="m-0" />

      <AccordionItem className="accordion-item border-0">
        <AccordionItemHeading className=" py-0 backgroud_light">
          <AccordionItemButton>
            <h4 className="accordion-header">
              What is the cost of the subscription?
            </h4>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            The Premium version costs Rs. 99 for a month and Rs. 899 for a year.
            The Premium version costs $9 for a month and $399 for a year.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <hr className="m-0" />

      <AccordionItem className="accordion-item border-0">
        <AccordionItemHeading className=" py-0 backgroud_light">
          <AccordionItemButton>
            <h4 className="accordion-header">Do we offer a free trial?</h4>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Currently, we offer you seven additional days of Nispand's monthly
            subscription of 30 days and 30 additional days with our annual
            subscription of 365 days.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <hr className="m-0" />

      <AccordionItem className="accordion-item border-0">
        <AccordionItemHeading className=" py-0 backgroud_light">
          <AccordionItemButton>
            <h4 className="accordion-header">
              Why is Nispand different from other apps?
            </h4>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Nispand stands out from the crowd because of its legacy from which
            comes great content. With experience of teaching mind stilling
            practices for over 100 years, Nispand has been built from the
            learnings of The Yoga Institute, its alma mater. The special
            features that make Nispand App unique are its stress recognizing
            features, personalized suggestions of meditations based on your
            mindset ranging from categories like binaural beats and solfeggio
            frequencies to ancient pranayamas and mantras. Nispand is a truly
            integrated premium app at an unbeatable price.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <hr className="m-0" />

      <AccordionItem className="accordion-item border-0">
        <AccordionItemHeading className=" py-0 backgroud_light">
          <AccordionItemButton>
            <h4 className="accordion-header">
              How do I choose which category is best for me?{" "}
            </h4>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            There are Eight different meditation categories, each having its
            unique advantage. You just need to tell the app how you are feeling
            and a few other questions and let the app choose for you. With the
            help of artificial intelligence and Yogic wisdom, the app shall
            recommend the best clips from all these categories that are best
            suited for your mood and need. This will be available in the
            'Recommendation' tab which is the first section visible to you on
            your homepage. We also have a 'Discover' section which compiles
            different end goals like Beginner's meditation, Work and
            Productivity etc that has a mix of clips from the mentioned eight
            categories.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <hr className="m-0" />
    </Accordion>
  );
}
