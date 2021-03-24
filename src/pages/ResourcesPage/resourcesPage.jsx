import React, { Fragment } from "react";
import LogoImage from "../../components/LogoImage/logoImage";
import emotions from "../../assets/emotions.png";
import anger from "../../assets/anger.png";
import sadness from "../../assets/sadness.png";
import disgust from "../../assets/disgust.png";
import enjoyment from "../../assets/enjoyment.png";
import fear from "../../assets/fear.png";
import ResourcesBlockItem from "../../components/ResourceBlockItem/resourceItem";
import ResourcesBlockTextItem from "../../components/ResourceBlockText/resourcesTextItem";
function ResourcesPage(props) {
  return (
    <Fragment>
      <div className="container">
        <ResourcesBlockItem
          header="Emotions"
          img={emotions}
          width={500}
          height={500}
          alt="emotions"
          tag="h1"
        />
      </div>
      <div className="container">
        <ResourcesBlockTextItem>
          Emotions take control quickly when important events for our welfare
          arise. They could be seen as complex psychological states that are
          triggered by either real world or events constructed in our minds.
          Thus, only by becoming aware of our emotional state we could get
          greater control over what triggers our emotion and how we respond.
        </ResourcesBlockTextItem>
      </div>
      <ResourcesBlockItem
        header="Fear"
        img={fear}
        width={500}
        height={500}
        alt="Fear"
        tag="h3"
      />
      <ResourcesBlockTextItem>
        As a consequence of either real or imagined or anticipated danger fear
        mobilize us to respond (e.g. avoid danger, freeze etc.) through set of
        physiological changes that cause unpleasant feelings with varying
        intensities
      </ResourcesBlockTextItem>
      <ResourcesBlockItem
        header="Disgust"
        img={disgust}
        width={500}
        height={500}
        alt="Disgust"
        tag="h3"
      />
      <ResourcesBlockTextItem>
        Perception of harmful indications that could affect us either physically
        (e.g. food poisoning) or socially (e.g. offensive behavior) through
        direct physical (sight, sound, touch, smell, taste) or indirect (e.g.
        deduced ideas) observations cause disgust. Disgust is a set of
        physiological changes and responses (avoid, vomit etc.) with varying
        intensities.
      </ResourcesBlockTextItem>
      <ResourcesBlockItem
        header="Anger"
        img={anger}
        width={500}
        height={500}
        alt="Anger"
        tag="h3"
      />
      <ResourcesBlockTextItem>
        Perception of harmful indications that could affect us either physically
        (e.g. food poisoning) or socially (e.g. offensive behavior) through
        direct physical (sight, sound, touch, smell, taste) or indirect (e.g.
        deduced ideas) observations cause disgust. Disgust is a set of
        physiological changes and responses (avoid, vomit etc.) with varying
        intensities.
      </ResourcesBlockTextItem>
      <ResourcesBlockItem
        header="Enjoyment"
        img={enjoyment}
        width={500}
        height={500}
        alt="Enjoyment"
        tag="h3"
      />
      <ResourcesBlockTextItem>
        Enjoyment motivate us to engage in social (e.g. signal friendliness) and
        personal activities that are good for us. It is caused by a set of
        physiological changes that cause pleasant feelings with varying
        intensities (could bring us to a mental state of flow when we get
        completely absorbed in performing an enjoyable activity at extremely
        high level and loose awareness of time)
      </ResourcesBlockTextItem>
      <ResourcesBlockItem
        header="Sadness"
        img={sadness}
        width={500}
        height={500}
        alt="Sadness"
        tag="h3"
      />
      <ResourcesBlockTextItem>
        Painful realities such as existential (e.g. diseases, ultimate death
        etc.) and interpersonal (e.g. rejections, loss) issues cause sadness.
        Sadness is formed through a set of physiological changes and signals
        (e.g. feel ashamed, mourn) our needs either to others (e.g. for being
        comforted) or to ourselves (e.g. to take some time to accept painful
        realities).
      </ResourcesBlockTextItem>
    </Fragment>
  );
}

export default ResourcesPage;
