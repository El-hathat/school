
import About from "./about/About";
import Accueil from "./accueil/Accueil";
import Events from "./events/Events";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import News from "./news/News";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";
import Watch from "./watch/Watch";

export default function Home() {
  return (
  <div className="overflow-x-hidden">

<Accueil/>  
<About/> 
<Watch /> 
<Services />
<Events /> 
<Testimonial /> 
<News />


  </div>
  );
}
