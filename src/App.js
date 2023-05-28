import "./App.css";
import "./SplashScreen.css";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import { useEffect, useState } from "react";
import { SiTwitter } from "react-icons/si";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000); // Set the desired duration in milliseconds
  }, []);
  return (
    <div className="app">
      {!showContent && (
        <div className="splash-screen">
          <SiTwitter color="rgb(29, 155, 240)" size={60} />
        </div>
      )}
      {/* SideBar */}
      <SideBar />
      {/* FEED */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
