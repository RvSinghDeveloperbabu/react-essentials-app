import { ENVIRONMENT_DATA} from "../data/testing_data";
import DetailsOfEnvironment from "./DetailsOfEnvironment";

export default function DetailsOfEnvironments(){
  return        <ul>
  {ENVIRONMENT_DATA.map((data) => {
    // if your component props are similler to the data keys we can us this way as well.
    return <DetailsOfEnvironment key={data.title} {...data} />;
  })}
</ul>
}