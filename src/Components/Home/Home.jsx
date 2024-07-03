import ContactMe from "./ContactMe";
import Education from "./Education";
import Introduction from "./Introduction";
import Myrecentproject from "./Myrecentproject";
import Skills from "./Skills";

export const Home = () => {
  return (
    <div>
        <Introduction></Introduction>
        <Myrecentproject></Myrecentproject>
        <Skills></Skills>
        <Education></Education>
        <ContactMe></ContactMe>
    </div>
  )
}
export default Home;
