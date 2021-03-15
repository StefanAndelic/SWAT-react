import React, { Fragment } from "react";
import LogoImage from "../components/logoImage";
import emotions from "../assets/emotions.png";
import anger from "../assets/anger.png";
import sadness from "../assets/sadness.png";
import disgust from "../assets/disgust.png";
import enjoyment from "../assets/enjoyment.png";
import fear from "../assets/fear.png";
function ResourcesPage(props) {
  return (
    <Fragment>
      <div className="container">
        <h1>Emotions</h1>
        <div className="row">
          <div className="col text-center">
            <LogoImage
              imageName={emotions}
              width="500"
              height="500"
              alt="SWAT logo"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="mt-5">
              Emotions take control quickly when important events for our
              welfare arise. They could be seen as complex psychological states
              that are triggered by either real world or events constructed in
              our minds. Thus, only by becoming aware of our emotional state we
              could get greater control over what triggers our emotion and how
              we respond.
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-3">Fear</h3>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <LogoImage
              imageName={fear}
              width="500"
              height="500"
              alt="SWAT logo"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="mt-5">
              As a consequence of either real or imagined or anticipated danger
              fear mobilize us to respond (e.g. avoid danger, freeze etc.)
              through set of physiological changes that cause unpleasant
              feelings with varying intensities
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-3">Disgust</h3>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <LogoImage
              imageName={disgust}
              width="500"
              height="500"
              alt="SWAT logo"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="mt-5">
              Perception of harmful indications that could affect us either
              physically (e.g. food poisoning) or socially (e.g. offensive
              behavior) through direct physical (sight, sound, touch, smell,
              taste) or indirect (e.g. deduced ideas) observations cause
              disgust. Disgust is a set of physiological changes and responses
              (avoid, vomit etc.) with varying intensities.
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-3">Anger</h3>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <LogoImage
              imageName={anger}
              width="500"
              height="500"
              alt="SWAT logo"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="mt-5">
              Perception of harmful indications that could affect us either
              physically (e.g. food poisoning) or socially (e.g. offensive
              behavior) through direct physical (sight, sound, touch, smell,
              taste) or indirect (e.g. deduced ideas) observations cause
              disgust. Disgust is a set of physiological changes and responses
              (avoid, vomit etc.) with varying intensities.
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-3">Enjoyment</h3>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <LogoImage
              imageName={enjoyment}
              width="500"
              height="500"
              alt="SWAT logo"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="mt-5">
              Enjoyment motivate us to engage in social (e.g. signal
              friendliness) and personal activities that are good for us. It is
              caused by a set of physiological changes that cause pleasant
              feelings with varying intensities (could bring us to a mental
              state of flow when we get completely absorbed in performing an
              enjoyable activity at extremely high level and loose awareness of
              time)
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-3">Sadness</h3>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <LogoImage
              imageName={sadness}
              width="500"
              height="500"
              alt="SWAT logo"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="mt-5">
              Painful realities such as existential (e.g. diseases, ultimate
              death etc.) and interpersonal (e.g. rejections, loss) issues cause
              sadness. Sadness is formed through a set of physiological changes
              and signals (e.g. feel ashamed, mourn) our needs either to others
              (e.g. for being comforted) or to ourselves (e.g. to take some time
              to accept painful realities).
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ResourcesPage;
