import "../../app/css/nav.css";
import ShinyButton from "@/components/magicui/shiny-button";


export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div>
          <li>Logo</li>
        </div>
        <div className="list">
          <li>
            <ShinyButton className="text-white ">Projects</ShinyButton>
          </li>
          <li>
            <ShinyButton className="text-white ">About me</ShinyButton>
          </li>
        </div>
      </nav>
    </div>
  );
}
