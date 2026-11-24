import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Mohammed Hasen" },
      {
        name: "description",
        content: "How Mohammed Hasen's portfolio handles personal information.",
      },
      { property: "og:title", content: "Privacy Policy — Mohammed Hasen" },
      {
        property: "og:description",
        content: "How Mohammed Hasen's portfolio handles personal information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>
        This portfolio respects your privacy. This policy explains what information is collected and
        how it is used.
      </p>
      <h2>Information you provide</h2>
      <p>
        When you use the contact form, your name, email and message are passed to your own email app
        to send directly to me. Nothing is stored on this website.
      </p>
      <h2>Usage data</h2>
      <p>
        Basic, anonymous visit statistics may be collected by the hosting provider to keep the site
        fast and secure.
      </p>
      <h2>Third parties</h2>
      <p>
        Links to external sites such as GitHub, LinkedIn or live project demos are governed by their
        own privacy policies.
      </p>
      <h2>Contact</h2>
      <p>Questions about this policy can be sent through the contact section of this site.</p>
    </LegalPage>
  ),
});
