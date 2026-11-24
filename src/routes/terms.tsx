import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Mohammed Hasen" },
      { name: "description", content: "Terms for using Mohammed Hasen's portfolio website." },
      { property: "og:title", content: "Terms of Service — Mohammed Hasen" },
      {
        property: "og:description",
        content: "Terms for using Mohammed Hasen's portfolio website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage title="Terms of Service">
      <p>By using this website you agree to the following terms.</p>
      <h2>Content</h2>
      <p>
        All designs, code samples, text and images shown here belong to Mohammed Hasen or their
        respective clients, and may not be reused without permission.
      </p>
      <h2>Projects</h2>
      <p>
        Project descriptions are provided for information only. Projects marked "In Progress" may
        change.
      </p>
      <h2>Liability</h2>
      <p>This site is provided "as is" without warranties of any kind.</p>
      <h2>Changes</h2>
      <p>
        These terms may be updated from time to time. Continued use means you accept the latest
        version.
      </p>
    </LegalPage>
  ),
});
