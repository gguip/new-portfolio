import { LegalDocument } from "@/types";

export const deletionEn: LegalDocument = {
  slug: "deletion",
  product: "TirzeFlow",
  title: "Delete account",
  summary:
    "How to delete your TirzeFlow account and everything in it — in the app, or by email if you no longer have the app installed.",
  updatedAt: "2026-09-25",
  sections: [
    {
      id: "in-the-app",
      heading: "In the app",
      blocks: [
        {
          type: "paragraph",
          text: "Open the Profile tab, scroll to the bottom and tap Delete my account. The app shows what will be deleted and asks you to confirm. The account is deleted right away.",
        },
      ],
    },
    {
      id: "by-email",
      heading: "Without the app installed",
      blocks: [
        {
          type: "paragraph",
          text: "Write to the address below asking for deletion. Send it from the email address registered on the account: that is how the request is confirmed as yours. Requests from any other address are not processed, so nobody can delete someone else's account.",
        },
        {
          type: "contact",
          label: "suporte@gguip.dev",
          email: "suporte@gguip.dev",
        },
        {
          type: "paragraph",
          text: "Requests are handled within 15 days, and you get a confirmation by email.",
        },
      ],
    },
    {
      id: "what-is-deleted",
      heading: "What is deleted",
      blocks: [
        {
          type: "list",
          items: [
            "The account: name, email and password.",
            "The profile and every record: injections, weigh-ins, measurements, side effects, workouts, meals, water and reminders.",
            "The link to Apple, when the account was created with it: the app's access to your Apple ID is revoked.",
          ],
        },
        {
          type: "paragraph",
          text: "Your data is erased from the database right away, and deletion cannot be undone: there is no grace period and no way to recover it. Encrypted daily backups that still contain it expire within thirty days.",
        },
      ],
    },
  ],
};
