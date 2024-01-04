import { ENVIRONMENT_DATA } from "../data/testing_data";
import DetailsOfEnvironment from "./DetailsOfEnvironment";
import Section from "./Section";

export default function DetailsOfEnvironments() {
  return (
    <Section id='environment' title="Environment Section">
      <ul>
        {ENVIRONMENT_DATA.map((data) => {
          // if your component props are similler to the data keys we can us this way as well.
          return <DetailsOfEnvironment key={data.title} {...data} />;
        })}
      </ul>
    </Section>
  );
}
