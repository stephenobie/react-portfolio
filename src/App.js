
import React, { Component } from "react";
import Header from "./components/pages/Header";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import ContactUs from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import resumeData from "./resumeData";
class App extends Component {
render() {
return (
<div className="App">
<Header resumeData={resumeData}/>
<About resumeData={resumeData}/>
<Resume resumeData={resumeData}/>
<Portfolio resumeData={resumeData}/>
<ContactUs resumeData={resumeData}/>
<Footer resumeData={resumeData}/>
</div>
);
}
}
export default App;