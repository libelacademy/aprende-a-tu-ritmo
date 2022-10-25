import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import FAQ from "./components/FAQ";
import Financing from "./components/Financing";
import Benefits from "./components/Benefits";
import Results from "./components/Results";
import Header from "./components/Header";
import Memberships from "./components/Memberships";
// import Hero from "./components/Hero";

function App() {

    return (
        <div className="App">
            <Navbar />
            <Header />
            <Results />
            <Memberships />
            <Benefits />
            <Financing />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
