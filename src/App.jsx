import { useState } from "react";
import NewsletterForm from "./components/NewsletterForm";
import SignupForm from "./components/SignupForm";
import "./App.css";

function App() {
  return (
    <div>
      <SignupForm />
      <NewsletterForm />
    </div>
  );
}

export default App;
