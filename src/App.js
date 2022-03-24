import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import FAQ from "./components/FAQ";
import Financing from "./components/Financing";
import Benefits from "./components/Benefits";
import Results from "./components/Results";
import Header from "./components/Header";

function App() {

    return (
        <div className="App">
            <Navbar />
            <Header />
            <Results />
            <Benefits />
            <Financing />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;