"use client";

import { useEffect, useState } from "react";

const heroSlides = [
  { src: "/pcpackard/set-1.png", alt: "All-in-one home printer" },
  { src: "/pcpackard/set-2.png", alt: "Compact wireless printer" },
  { src: "/pcpackard/set-3.png", alt: "Desktop printer" },
];

const supportIssues = [
  { icon: "/pcpackard/i1.svg", label: "Printer Set Up Issue" },
  { icon: "/pcpackard/i2.svg", label: "Printer Offline" },
  { icon: "/pcpackard/i3.svg", label: "Wireless printer issue" },
  { icon: "/pcpackard/i4.svg", label: "Paper jam issue" },
  { icon: "/pcpackard/i5.svg", label: "Printer Job Stuck In Queue" },
  { icon: "/pcpackard/i6.svg", label: "Scanner issues" },
];

const banners = [
  "/pcpackard/banner-1.jpg",
  "/pcpackard/banner-2.jpg",
  "/pcpackard/banner-3.jpg",
];

const lowerBanners = [
  "/pcpackard/lower-banner-1.jpg",
  "/pcpackard/lower-banner-2.jpg",
  "/pcpackard/lower-banner-3.jpg",
];

const setupSteps = [
  "Unpack the printer and place it on a stable surface near a power outlet. Connect the power cable and turn the printer on.",
  "Install the ink or toner cartridges in the appropriate slots as instructed by the printer.",
  "Load compatible paper into the input tray, matching the printer's required size and type.",
  "Complete the initial setup on the printer screen by choosing your language, region, date, and time.",
  "Connect the printer to your computer, laptop, or phone with the required software or a wireless connection.",
  "Print a test page to confirm that the printer is configured and ready to use.",
];

const offlineSteps = [
  "Check every cable connection and make sure USB cables are secure at both ends.",
  "For wireless printers, confirm that the printer is on the correct Wi-Fi network.",
  "Open the print queue and clear pending or stuck print jobs.",
  "Update or reinstall the printer driver if it is outdated or corrupted.",
  "Run the printer's built-in troubleshooting or diagnostic tool.",
  "Inspect the paper path and carefully remove any paper jams.",
];

const manualDeviceSteps = [
  'Open the Add Printer or Add Device settings and click “The device I want isn’t listed.”',
  'If you know the device’s IP address or network name, choose “Add a printer using an IP address or hostname” and enter the required information.',
  'If the device is connected to another computer on your network, select “Select a shared printer by name” and enter the shared device path.',
  'For older devices, choose “My printer is a little older. Help me find it.” Windows will search for compatible hardware that may not appear automatically.',
  'You can also select “Add a local printer or network printer with manual settings” if you want to install the device using a specific port or driver.',
  "Follow the on-screen instructions, select the correct driver when prompted, and complete the installation process.",
  "After setup is finished, print a test page or perform a quick test to confirm that the device has been added successfully.",
];

const outsourcingBenefits = [
  {
    icon: "/pcpackard/outsourcing-1.png",
    title: "Specialised Team",
    description:
      "Highly skilled PC Packard experts provide support. We resolve issues, answer enquiries, and keep your business productive and secure daily.",
  },
  {
    icon: "/pcpackard/outsourcing-2.png",
    title: "Innovation-Driven Technology",
    description:
      "In order to avoid downtime and speed up resolution times, we employ intelligent, data-driven technologies to identify any problems in their early stages.",
  },
  {
    icon: "/pcpackard/outsourcing-3.png",
    title: "Hyper Service Automation",
    description:
      "To ensure consistency in quality across all IT processes, increase response speed, and improve accuracy, PC Packard uses intelligent automation.",
  },
  {
    icon: "/pcpackard/outsourcing-4.png",
    title: "Fast, Reliable Help",
    description:
      "If your team ever needs assistance, our specialists are always there to help via email with prompt guidance and reliable support.",
  },
  {
    icon: "/pcpackard/outsourcing-5.png",
    title: "Clear and Simple Pricing",
    description:
      "Dependable IT assistance tailored to your company’s specific requirements, with transparent, predictable pricing and zero surprises.",
  },
  {
    icon: "/pcpackard/outsourcing-6.png",
    title: "Total Safety Assured",
    description:
      "Our comprehensive security approach includes encryption, testing, monitoring, and IT environment protection for every client.",
  },
];

const printAssurances = [
  { icon: "activation", label: "Immediate Activation" },
  { icon: "guarantee", label: "30-day money-back guarantee" },
  { icon: "cancellation", label: "Effortless subscription cancellation" },
  { icon: "encryption", label: "Protected payment encryption" },
];

const classLeadingElements = [
  {
    icon: "printer",
    title: "Printer and Device Agnostic",
    description:
      "We support all varieties of leading printer devices and manufacturers, and are definitive for BYOD setting environments.",
  },
  {
    icon: "mobile",
    title: "Robust Mobile Apps",
    description:
      "Our Desktop application is safe, permitting users to print to public or private printers, which is based on geolocation and authentication.",
  },
  {
    icon: "remote",
    title: "Advanced Remote Printing",
    description:
      "Securely attach and print from devices on one single network to printers on a disconnected network, actually to home printers.",
  },
  {
    icon: "integration",
    title: "Smart Print Integration",
    description:
      "Secure print submission and rendering for Windows-based devices, which includes Surface tablets, desktops, and laptops.",
  },
  {
    icon: "release",
    title: "Secure Print Release",
    description:
      "Flexible pull printing authorizes users to select an output device at the time of print release, reducing waste and improving security.",
  },
  {
    icon: "mdm",
    title: "Robust MDM Support",
    description:
      "Smooth integration with directing MDM solutions such as AirWatch, MobileIron, and Good for app behavior management and controlled deployment.",
  },
];

const compatibilityDetails = [
  {
    title: "Requirements",
    description: "Intel or AMD Processor, 4 GB RAM, 100 MB Free Disk Space",
  },
  {
    title: "Operating System",
    description: "Windows 8, Windows 10, Windows 11, Windows 12",
  },
  {
    title: "Supported Browsers",
    description: "Google Chrome, Mozilla Firefox, Microsoft Edge",
  },
];

const confidenceItems = [
  {
    icon: "satisfaction",
    title: "Assured Satisfaction",
    description: "Enjoy our money-back help and 30-day risk-free trial.",
  },
  {
    icon: "satisfaction",
    title: "Premium Help",
    description: "Get client support to assist with any problems or queries.",
  },
  {
    icon: "security",
    title: "Trusted Security",
    description: "Our software is 100% safe, secure, and free from adware.",
  },
  {
    icon: "transactions",
    title: "Secure Transactions",
    description: "Quick and fast downloads with encrypted connections.",
  },
];

function AssuranceIcon({ type }: { type: string }) {
  if (type === "activation") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="27" />
        <rect x="21" y="17" width="22" height="34" rx="4" />
        <path d="M32 14v13M25 21a11 11 0 1 0 14 0" />
      </svg>
    );
  }

  if (type === "guarantee") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="30" cy="30" r="18" />
        <circle cx="30" cy="30" r="11" />
        <path d="M30 23v14M34 25h-6a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-6M48 20a25 25 0 0 1-1 29M47 49l-7-1" />
      </svg>
    );
  }

  if (type === "cancellation") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="9" y="24" width="46" height="29" rx="4" />
        <path d="M9 34h46M18 45h10" />
        <circle cx="40" cy="18" r="12" />
        <path d="m35 13 10 10m0-10L35 23" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="25" width="43" height="24" rx="5" />
      <path d="M8 34h27" />
      <circle cx="45" cy="23" r="13" />
      <rect x="40" y="21" width="10" height="9" rx="2" />
      <path d="M42 21v-3a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

function FeatureIcon({ type }: { type: string }) {
  if (type === "printer") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 24V9h24v15M20 47H12V24h40v23h-8M20 39h24v17H20zM42 30h3" />
      </svg>
    );
  }

  if (type === "mobile") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="18" y="8" width="28" height="48" rx="5" />
        <circle cx="32" cy="40" r="9" />
        <path d="m26 40 4 4 8-9M29 14h6" />
      </svg>
    );
  }

  if (type === "remote") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="9" y="12" width="46" height="28" rx="4" />
        <path d="M25 49h14M32 40v9M23 21h18v10H23zM28 31v8" />
        <circle cx="28" cy="35" r="2" />
      </svg>
    );
  }

  if (type === "integration") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 12h27v38H10zM37 22h17v28H37M16 19h15M23 50v5M16 55h14" />
        <path d="M42 31c5-5 10 0 10 0M44 35c3-3 6 0 6 0" />
      </svg>
    );
  }

  if (type === "release") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13 8h31v44H13zM20 17h17v14H20zM22 24l7 4 7-4-7-4z" />
        <rect x="36" y="36" width="16" height="14" rx="2" />
        <path d="M40 36v-4a4 4 0 0 1 8 0v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="9" y="14" width="46" height="35" rx="4" />
      <path d="M9 22h46M27 30h20M27 37h16" />
      <circle cx="19" cy="35" r="6" />
      <path d="m16 35 2 2 4-5" />
    </svg>
  );
}

function ConfidenceIcon({ type }: { type: string }) {
  if (type === "security") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 9 48 16v13c0 12-7 20-16 26-9-6-16-14-16-26V16z" />
        <path d="m25 31 5 5 10-12" />
        <circle cx="32" cy="32" r="25" />
      </svg>
    );
  }

  if (type === "transactions") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="13" width="44" height="34" rx="4" />
        <path d="M10 22h44M18 32h13M21 28v8" />
        <circle cx="46" cy="43" r="10" />
        <path d="M42 43h8M46 39v8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M17 34a15 15 0 1 0 30 0M23 34V24h7l2-8c1-3 5-2 5 1v7h7c3 0 4 2 3 5l-3 12H29z" />
      <path d="m20 14 2 4 5 1-4 3 1 5-4-3-5 3 1-5-4-3 5-1zM35 8l2 4 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1zM50 14l2 4 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1z" />
    </svg>
  );
}

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [bannerIndex, setBannerIndex] = useState(2);
  const [lowerBannerIndex, setLowerBannerIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(
      () => setHeroIndex((current) => (current + 1) % heroSlides.length),
      4500,
    );
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(
      () => setBannerIndex((current) => (current + 1) % banners.length),
      5000,
    );
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(
      () =>
        setLowerBannerIndex(
          (current) => (current + 1) % lowerBanners.length,
        ),
      5000,
    );
    return () => window.clearInterval(interval);
  }, []);

  const moveHero = (direction: number) => {
    setHeroIndex(
      (current) =>
        (current + direction + heroSlides.length) % heroSlides.length,
    );
  };

  const moveBanner = (direction: number) => {
    setBannerIndex(
      (current) => (current + direction + banners.length) % banners.length,
    );
  };

  const moveLowerBanner = (direction: number) => {
    setLowerBannerIndex(
      (current) =>
        (current + direction + lowerBanners.length) % lowerBanners.length,
    );
  };

  return (
    <main>
      <div className="top-stripe" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 id="hero-title">Print, Copy, Scan &amp; Fax</h1>
            <h2>Connect one-on-one with an Expert</h2>
            <p>
              Follow an easy, step-by-step method to connect your device, adjust
              settings, and learn the basics for daily printing at home or work.
            </p>
            <a className="primary-button" href="#setup-guide">
              Click Here For Printer Setup
            </a>
          </div>

          <div className="hero-slider" aria-roledescription="carousel">
            <div className="hero-slides">
              {heroSlides.map((slide, index) => (
                <img
                  key={slide.src}
                  className={index === heroIndex ? "hero-image active" : "hero-image"}
                  src={slide.src}
                  alt={slide.alt}
                  width={525}
                  height={357}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              ))}
            </div>
            <button
              className="slider-arrow previous"
              type="button"
              onClick={() => moveHero(-1)}
              aria-label="Previous printer"
            >
              &#10094;
            </button>
            <button
              className="slider-arrow next"
              type="button"
              onClick={() => moveHero(1)}
              aria-label="Next printer"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>

      <section className="support-section" aria-label="Common printer support issues">
        <div className="support-grid">
          {supportIssues.map((issue) => (
            <a className="support-card" href="#setup-guide" key={issue.label}>
              <img src={issue.icon} alt="" width={70} height={70} />
              <span>{issue.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="banner-section" aria-label="Printer support highlights">
        <div className="banner-carousel">
          <img
            src={banners[bannerIndex]}
            alt="PC Packard printer support services"
            width={970}
            height={191}
          />
          <button
            type="button"
            className="banner-arrow banner-previous"
            onClick={() => moveBanner(-1)}
            aria-label="Previous support highlight"
          >
            &#10094;
          </button>
          <button
            type="button"
            className="banner-arrow banner-next"
            onClick={() => moveBanner(1)}
            aria-label="Next support highlight"
          >
            &#10095;
          </button>
        </div>
        <div className="dots" aria-label="Choose a support highlight">
          {banners.map((banner, index) => (
            <button
              key={banner}
              type="button"
              className={index === bannerIndex ? "dot active" : "dot"}
              onClick={() => setBannerIndex(index)}
              aria-label={`Show highlight ${index + 1}`}
              aria-current={index === bannerIndex ? "true" : undefined}
            />
          ))}
        </div>
      </section>

      <section className="guide-section" id="setup-guide">
        <div className="guide-row">
          <div className="guide-image-wrap">
            <img
              src="/pcpackard/setup-guide.jpg"
              alt="Printer and laptop ready for setup"
              width={543}
              height={509}
            />
          </div>
          <div className="guide-copy">
            <p className="eyebrow">Simple step-by-step help</p>
            <h2>How Do You Continue Setting Up Your Printer?</h2>
            <p>
              Setting up a printer for the first time can feel overwhelming, but
              the process is straightforward when followed one step at a time.
            </p>
            <ol>
              {setupSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="guide-section alternate">
        <div className="guide-row reverse">
          <div className="guide-image-wrap">
            <img
              src="/pcpackard/offline-guide.jpg"
              alt="Wireless printer troubleshooting"
              width={782}
              height={606}
            />
          </div>
          <div className="guide-copy">
            <p className="eyebrow">Troubleshooting made clearer</p>
            <h2>How Can You Fix a Printer That Shows Offline?</h2>
            <p>
              If your printer suddenly stops printing, a few simple checks can
              often bring it back online.
            </p>
            <ol>
              {offlineSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="guide-section manual-device-section">
        <div className="guide-row">
          <div className="manual-device-preview">
            <img
              src="/pcpackard/manual-device-guide.png"
              alt="Windows Add Printer options for manually finding a printer"
              width={1417}
              height={805}
              loading="lazy"
            />
          </div>
          <div className="guide-copy">
            <p className="eyebrow">Manual device setup</p>
            <h2>How Do You Add a Device Manually?</h2>
            <p>
              Sometimes, Windows may not automatically detect your printer or
              other device during setup. When that happens, you can add the
              device manually by following a few simple steps.
            </p>
            <ol>
              {manualDeviceSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        className="banner-section lower-banner-section"
        aria-label="Additional printer support highlights"
      >
        <div className="banner-carousel">
          <img
            src={lowerBanners[lowerBannerIndex]}
            alt="PC Packard printer setup guidance"
            width={970}
            height={191}
            loading="lazy"
          />
          <button
            type="button"
            className="banner-arrow banner-previous"
            onClick={() => moveLowerBanner(-1)}
            aria-label="Previous printer setup highlight"
          >
            &#10094;
          </button>
          <button
            type="button"
            className="banner-arrow banner-next"
            onClick={() => moveLowerBanner(1)}
            aria-label="Next printer setup highlight"
          >
            &#10095;
          </button>
        </div>
        <div className="dots" aria-label="Choose a printer setup highlight">
          {lowerBanners.map((banner, index) => (
            <button
              key={banner}
              type="button"
              className={index === lowerBannerIndex ? "dot active" : "dot"}
              onClick={() => setLowerBannerIndex(index)}
              aria-label={`Show printer setup highlight ${index + 1}`}
              aria-current={index === lowerBannerIndex ? "true" : undefined}
            />
          ))}
        </div>
      </section>

      <section className="streamline-section">
        <div className="streamline-content">
          <h2>
            Streamline <span>Daily Printing Tasks</span>
          </h2>
          <p>
            <strong>PC Packard</strong> Smart Printer Setup helps you handle
            frequent work-site printing issues. Whether you’re dealing with
            numerous network configurations, arranging home printing access,
            or connecting devices across locations, the platform offers
            organised help to make the process easier and more streamlined.
          </p>
          <div className="streamline-preview">
            <img
              src="/pcpackard/streamline-printing-guide.png"
              alt="Smart Printer Setup software shown across three displays"
              width={1851}
              height={959}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="outsourcing-section">
        <div className="outsourcing-content">
          <h2>Importance of PC Packard Support Outsourcing</h2>
          <div className="outsourcing-grid">
            {outsourcingBenefits.map((benefit) => (
              <article className="outsourcing-card" key={benefit.title}>
                <img
                  src={benefit.icon}
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="print-anywhere-section">
        <div className="print-anywhere-content">
          <div className="print-anywhere-main">
            <div className="print-anywhere-image">
              <img
                src="/pcpackard/print-anywhere.png"
                alt="Phone sending a document wirelessly to a printer"
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="print-anywhere-copy">
              <h2>Print Anywhere and Anytime</h2>
              <h3>Maximize Your Printer with Updated Drivers</h3>
              <p>
                Smart Printer Setup is your all-in-one solution for fast, smooth
                printing from any desktop, laptop, or mobile device to any
                printer, no significance the network in between. It is created
                to cater to homes and organizations of all sizes. Our software
                delivers centralized management and is ideal for both simple
                and complex workflows. Via Smart Printer Setup, you acquire the
                flexibility to operate your printing services on-premise or in
                the cloud, guaranteeing your printing demands are met now and
                in the future.
              </p>
              <a className="contact-button" href="#setup-guide">
                Contact Us
              </a>
            </div>
          </div>
          <div className="print-assurances">
            {printAssurances.map((item) => (
              <div className="assurance-item" key={item.label}>
                <AssuranceIcon type={item.icon} />
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="elements-section">
        <div className="elements-content">
          <h2>
            Class-Leading <span>Elements</span>
          </h2>
          <div className="elements-grid">
            {classLeadingElements.map((element) => (
              <article className="element-card" key={element.title}>
                <FeatureIcon type={element.icon} />
                <h3>{element.title}</h3>
                <p>{element.description}</p>
              </article>
            ))}
          </div>

          <div className="compatibility-block">
            <h2>
              Compatibility <span>Details</span>
            </h2>
            <div className="compatibility-grid">
              {compatibilityDetails.map((detail) => (
                <article className="compatibility-card" key={detail.title}>
                  <h3>{detail.title}</h3>
                  <p>{detail.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="confidence-section">
        <div className="confidence-content">
          <h2>
            Order <span>with Confidence</span>
          </h2>
          <div className="confidence-grid">
            {confidenceItems.map((item) => (
              <article className="confidence-card" key={item.title}>
                <div className="confidence-icon">
                  <ConfidenceIcon type={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <img
                src="/pcpackard/footer-logo.png"
                alt="PC Packard"
                width={150}
                height={150}
                loading="lazy"
              />
              <p>
                Any Questions? We’re here to help! Available between 9 AM – 8
                PM CT, 7 days a week.
              </p>
            </div>

            <div className="footer-column">
              <h2>Our Services</h2>
              <nav aria-label="Our services">
                <a href="#setup-guide">Computer</a>
                <a href="#setup-guide">Printer &amp; Scanner</a>
                <a href="#setup-guide">WiFi &amp; Network</a>
                <a href="#setup-guide">Smart Home</a>
                <a href="#setup-guide">Contact Us</a>
              </nav>
            </div>

            <div className="footer-column">
              <h2>Useful Links</h2>
              <nav aria-label="Useful links">
                <a href="#setup-guide">About Us</a>
                <a href="#setup-guide">Partner With Us</a>
                <a href="#setup-guide">Membership</a>
                <a href="#setup-guide">FAQ’s</a>
                <a href="#setup-guide">Cookie Policy</a>
                <a href="#setup-guide">Sitemap</a>
              </nav>
            </div>

            <div className="footer-column">
              <h2>Policies</h2>
              <nav aria-label="Policies">
                <a href="#setup-guide">Disclaimer</a>
                <a href="#setup-guide">Privacy &amp; Policy</a>
                <a href="#setup-guide">Cancellation Policy</a>
                <a href="#setup-guide">Terms &amp; Conditions</a>
                <a href="#setup-guide">Return Policy</a>
                <a href="#setup-guide">Shipping Policy</a>
              </nav>
            </div>

            <div className="footer-column footer-contact">
              <h2>Contact Info</h2>
              <div className="contact-line">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 6h18v13H3zM3 7l9 7 9-7" />
                </svg>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@pcpackard.com">info@pcpackard.com</a>
                </div>
              </div>
              <div className="contact-line">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong>Address</strong>
                  <span>
                    201 CENTURY VILLAGE BLVD STE 200 MONROE, LA 71203.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-trust-row">
            <img
              src="/pcpackard/footer-trust-1.png"
              alt="Secured by Sectigo"
              width={132}
              height={51}
              loading="lazy"
            />
            <img
              src="/pcpackard/footer-trust-2.png"
              alt="Google Safe Browsing"
              width={132}
              height={51}
              loading="lazy"
            />
            <img
              className="payment-icons"
              src="/pcpackard/footer-payment.png"
              alt="Visa, Mastercard, American Express, and Discover accepted"
              width={180}
              height={71}
              loading="lazy"
            />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 PC Packard - All Rights Reserved.</p>
          <nav aria-label="Legal links">
            <a href="#setup-guide">Terms &amp; Conditions</a>
            <a href="#setup-guide">Privacy Policy</a>
            <a href="#setup-guide">EULA</a>
            <a href="#setup-guide">Uninstall Instruction</a>
            <a href="#setup-guide">Opt-In and Opt-Out Policy</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
