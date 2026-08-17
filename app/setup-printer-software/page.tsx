import type { Metadata } from "next";

type SetupPageProps = {
  searchParams: Promise<{ query?: string }>;
};

const troubleshootingSteps = [
  {
    title: "Reconnect the USB Cable Properly",
    summary: "Ensure a secure physical connection between your printer and computer.",
    instructions: [
      "Unplug the USB cable from both the printer and the computer.",
      "Wait a few seconds before reconnecting.",
      "Firmly plug the cable into both ends.",
      "Restart the printer installation process.",
    ],
    image: "/printerspooler/setup-guide.jpg",
    alt: "Printer and computer ready for a USB connection",
  },
  {
    title: "Test the USB Port Functionality",
    summary: "Make sure the USB port you are using is working correctly.",
    instructions: [
      "Try connecting the printer to a different USB port.",
      "Alternatively, test the current port by connecting another USB device.",
    ],
    image: "/printerspooler/offline-guide.jpg",
    alt: "Printer troubleshooting setup",
  },
  {
    title: "Use a Different USB Cable",
    summary: "A faulty cable might be the problem.",
    instructions: [
      "Swap the existing cable with a known working or new USB cable.",
      "Reconnect the printer and computer, then restart the setup.",
    ],
    image: "/printerspooler/print-anywhere.png",
    alt: "Printer connected for testing",
  },
  {
    title: "Disconnect Unnecessary USB Devices",
    summary: "Too many connected devices can cause conflicts.",
    instructions: [
      "Unplug all non-essential USB devices, such as external drives and cameras.",
      "Keep only the mouse, keyboard, and printer connected.",
      "Retry the installation.",
    ],
    image: "/printerspooler/manual-device-guide.png",
    alt: "Computer device setup options",
  },
  {
    title: "Perform a Printer Power Reset",
    summary: "A quick reset can restore USB communication.",
    instructions: [
      "Turn off the printer and unplug it from the wall.",
      "Wait at least 60 seconds.",
      "Plug it back into a direct wall outlet and power it on.",
      "If setup resumes automatically, proceed with installation. Otherwise, run the installer manually.",
    ],
    image: "/printerspooler/set-1.png",
    alt: "All-in-one printer ready for power reset",
  },
  {
    title: "Update Drivers via Device Manager",
    summary: "Ensure the correct drivers are in place.",
    instructions: [
      "Open Device Manager from the Start menu.",
      "Expand Printers or USB Controllers.",
      "Locate your printer, right-click it, and choose Update driver, then Search automatically for drivers.",
    ],
    image: "/printerspooler/streamline-printing-guide.png",
    alt: "Printer software shown across multiple displays",
  },
  {
    title: "Uninstall Previous Printer Software",
    summary: "Old or conflicting installations may block setup.",
    instructions: [
      "Go to Control Panel, then Programs, then Uninstall a Program.",
      "Find and uninstall your printer software.",
      "Reboot your computer before reinstalling.",
    ],
    image: "/printerspooler/lower-banner-1.jpg",
    alt: "Printer software installation guidance",
  },
  {
    title: "Clear Temporary Files",
    summary: "Clean out junk files that might interfere with installation.",
    instructions: [
      "Search for and open Disk Cleanup.",
      "Choose your system drive, usually C:.",
      "Select appropriate file categories and click OK to remove them.",
    ],
    image: "/printerspooler/lower-banner-2.jpg",
    alt: "Printer setup support highlight",
  },
  {
    title: "Perform a Clean Boot to Disable Interference",
    summary: "Eliminate background software conflicts.",
    instructions: [
      "Open System Configuration by searching for msconfig.",
      "Under the General tab, select Selective Startup and uncheck Load startup items.",
      "Go to the Services tab, check Hide all Microsoft services, and then disable the remaining services.",
      "Restart your computer and run the printer setup again.",
    ],
    image: "/printerspooler/set-2.png",
    alt: "Compact wireless printer ready for setup",
  },
];

export async function generateMetadata({ searchParams }: SetupPageProps): Promise<Metadata> {
  const { query } = await searchParams;
  const suffix = query?.trim() ? ` for ${query.trim()}` : "";

  return {
    title: `Printer Setup Help${suffix} | Printerspooler`,
    description: "Step-by-step printer setup and USB troubleshooting guidance.",
  };
}

export default async function SetupPrinterSoftwarePage({ searchParams }: SetupPageProps) {
  const { query } = await searchParams;
  const printerModel = query?.trim() || "your printer";

  return (
    <main className="setup-results-page" id="top">
      <div className="setup-results-stripe" />

      <section className="setup-results-hero" aria-labelledby="setup-results-title">
        <div className="setup-results-hero-inner">
          <div className="setup-results-hero-copy">
            <h1 id="setup-results-title">Print and Scan Doctor for PC: Made Easy</h1>
            <p>
              Follow our step-by-step printer guides to connect {printerModel} to
              Wi-Fi, USB, or Ethernet and start printing quickly. Whether you&apos;re
              installing a new printer or resolving a setup issue, we&apos;ve got you
              covered.
            </p>
            <ul className="setup-results-benefits">
              <li>Easy Step-by-Step Instructions</li>
              <li>Compatible with Windows &amp; macOS</li>
              <li>Printer Setup and Connectivity Guides</li>
            </ul>
            <span className="setup-results-cta" aria-disabled="true">
              Click for Chat Assistance
            </span>
          </div>
          <div className="setup-results-hero-image">
            <img
              src="/printerspooler/banner-3.jpg"
              alt="Person using a laptop beside a printer and scanner"
              width={782}
              height={606}
            />
          </div>
        </div>
      </section>

      <section className="troubleshooting-section" aria-labelledby="troubleshooting-title">
        <h2 className="sr-only" id="troubleshooting-title">
          Printer troubleshooting steps
        </h2>
        <div className="troubleshooting-list">
          {troubleshootingSteps.map((step, index) => (
            <article className="troubleshooting-card" key={step.title}>
              <div className="troubleshooting-copy">
                <h2>
                  Step {index + 1}: {step.title}
                </h2>
                <p>{step.summary}</p>
                <ol>
                  {step.instructions.map((instruction) => (
                    <li key={instruction}>{instruction}</li>
                  ))}
                </ol>
              </div>
              <div className="troubleshooting-image">
                <img src={step.image} alt={step.alt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="setup-results-outro" aria-labelledby="setup-results-outro-title">
        <h2 id="setup-results-outro-title">Looking for Perfect Printer Solution?</h2>
        <p>Our experts are here to help you find the right printer solution for your needs and budget.</p>
      </section>

      <a className="back-to-top" href="#top" aria-label="Back to top">
        <span aria-hidden="true">↑</span>
      </a>
    </main>
  );
}
