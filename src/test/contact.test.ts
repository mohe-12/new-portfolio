import { describe, expect, it } from "vitest";
import { CONTACT } from "@/components/site/data";

describe("Portfolio contact", () => {
  it("directs email inquiries to the supplied contact address", () => {
    expect(CONTACT.email).toBe("mohehasen690@gmail.com");
  });
});
