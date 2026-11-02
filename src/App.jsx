
import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Business");

  const content = {
    Business: {
      heading: "PayPal Open",
      subtitle: "One platform for your business needs",
      description:
        "PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead."
    },
    Personal: {
      heading: "PayPal Personal",
      subtitle: "A simpler way to pay and get paid",
      description:
        "PayPal makes it easier to send money, shop online, and manage your payments."
    }
  };

  const currentContent = content[activeTab];

  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">

        <div className="logo">
          <img src="/paypal.png" alt="PayPal Logo" />
        </div>

        <div className="nav-links">
          <a href="#personal">Personal</a>
          <a href="#business">Business</a>
          <a href="#partners">Partners</a>
          <a href="#info">Useful Info</a>
        </div>

        <div className="nav-buttons">
          <button className="login">Log In</button>
          <button className="signup">Sign Up</button>
        </div>

      </nav>

      {/* Hero Section */}
      <main className="hero">

        {/* Personal / Business Toggle */}
        <div className="toggle">

          <button
            className={activeTab === "Personal" ? "selected" : ""}
            onClick={() => setActiveTab("Personal")}
          >
            Personal
          </button>

          <button
            className={activeTab === "Business" ? "selected" : ""}
            onClick={() => setActiveTab("Business")}
          >
            Business
          </button>

        </div>

        {/* Main Heading */}
        <section className="hero-content">

          <h1>{currentContent.heading}</h1>

          <h2>{currentContent.subtitle}</h2>

          <p className="description">
            {currentContent.description}
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <button className="signup">Sign Up</button>
            <button className="contact">Contact Sales</button>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 PayPal Open - Student React Project</p>
      </footer>

    </div>
  );
}

export default App;
