"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const benefits = [
  "Works with a wide range of printers and compatible devices.",
  "Gives you better control over print settings and output quality.",
  "Simple and easy-to-use tools designed for everyday printing tasks.",
  "Supports multiple file types for greater flexibility.",
  "Helps reduce printing errors, saving both time and resources.",
  "Regular updates help improve performance, stability, and compatibility.",
];

export default function SelectPrinterSoftwarePage() {
  const router = useRouter();
  const [model, setModel] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedModel = model.trim();
    if (!trimmedModel) {
      setMessage("Enter your printer model to see setup options.");
      return;
    }

    router.push(`/setup-printer-software?query=${encodeURIComponent(trimmedModel)}`);
  };

  return (
    <main className="software-page">
      <div className="software-top-stripe" />

      <section className="software-hero" aria-labelledby="software-title">
        <div className="software-hero-inner">
          <div className="software-hero-copy">
            <h1 id="software-title">
              We&apos;re here to help you get your
              <br />
              printer up and running.
            </h1>
            <p className="software-intro">
              To begin, please select how you&apos;d like to connect your printer:
            </p>
            <ul className="connection-list">
              <li>Wi-Fi Network</li>
              <li>Wired Network (Ethernet)</li>
              <li>USB Cable Connection</li>
            </ul>
            <p className="software-prompt">
              First, enter or select your printer model so we can provide the
              correct setup instructions.
            </p>
            <form className="printer-search" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="printer-model">
                Printer model number
              </label>
              <input
                id="printer-model"
                value={model}
                onChange={(event) => setModel(event.target.value)}
                placeholder={'Enter your printer model number. Ex: "LaserJet Pro 400"'}
              />
              <button type="submit">Search</button>
            </form>
            {message ? <p className="search-message" role="status">{message}</p> : null}
          </div>

          <div className="software-hero-art" aria-label="Printer setup preview">
            <div className="printer-glow" />
            <img
              src="/printerspooler/set-1.png"
              alt="All-in-one printer"
              width={525}
              height={357}
            />
            <div className="printer-model-badge">Officejet 5255</div>
          </div>
        </div>
      </section>

      <section className="software-benefits" aria-labelledby="benefits-title">
        <div className="software-benefits-copy">
          <h2 id="benefits-title">Why Good Printing Software Matters</h2>
          <p>
            Reliable printing software can make everyday printing simpler and
            more efficient. Whether you&apos;re printing at home, in a small office,
            or for business use, the right software helps you manage print jobs
            smoothly and achieve consistent results.
          </p>
          <ul className="benefit-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <p>
            With the right printing software, you can enjoy a smoother printing
            experience and focus on getting your work done without unnecessary
            complications.
          </p>
        </div>
        <div className="software-benefits-image">
          <img
            src="/printerspooler/manual-device-guide.png"
            alt="Windows printer and scanner settings"
            width={1417}
            height={805}
          />
        </div>
      </section>

    </main>
  );
}
