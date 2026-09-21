import { LegalDocument } from "@/types";

export const termsEn: LegalDocument = {
  slug: "terms",
  product: "TirzeFlow",
  title: "Terms of Use",
  summary:
    "These terms govern your use of TirzeFlow. The part that matters most fits in one line: the app is a personal treatment journal, not a medical device and not clinical advice. It records what your prescriber instructed and never suggests a course of action.",
  updatedAt: "2026-09-21",
  sections: [
    {
      id: "acceptance",
      heading: "1. Accepting these terms",
      blocks: [
        {
          type: "paragraph",
          text: "By creating a TirzeFlow account you confirm that you have read, understood, and accept these terms and the Privacy Policy. If you disagree with any part of them, do not create an account and do not use the app.",
        },
        {
          type: "paragraph",
          text: "TirzeFlow is provided by Guilherme Passarinho, an individual based in Brazil. Contact: guilhermepassarinho@gmail.com.",
        },
      ],
    },
    {
      id: "what-it-is",
      heading: "2. What TirzeFlow is, and what it is not",
      blocks: [
        {
          type: "paragraph",
          text: "TirzeFlow is a personal journal for following a tirzepatide treatment and the weight loss that goes with it. It lets you record injections, weigh-ins, body measurements, side effects, workouts, and nutrition, and presents those records organised over time.",
        },
        {
          type: "callout",
          title: "The app does not prescribe",
          text: "TirzeFlow is not a medical device, does not diagnose, and offers no medical, pharmaceutical, or nutritional advice. It does not suggest a dose, does not indicate when to increase or decrease one, does not recommend a course of action, and does not replace a consultation with a healthcare professional. Every dose you record is the one your prescriber instructed.",
        },
        {
          type: "paragraph",
          text: "The figures the app calculates — body mass index, calorie target, protein target, weekly average, maintenance band — come from widely used nutritional formulas and are informative estimates. They do not account for your clinical situation and must not be the sole basis for decisions about your health.",
        },
        {
          type: "paragraph",
          text: "See a healthcare professional immediately if you have any worrying symptom. In an emergency, call your local emergency service. Do not use the app to decide about an emergency.",
        },
      ],
    },
    {
      id: "eligibility",
      heading: "3. Who may use it",
      blocks: [
        {
          type: "paragraph",
          text: "You must be 18 or older and have full legal capacity to create an account. The app assumes you are under the care of a healthcare professional responsible for your treatment.",
        },
      ],
    },
    {
      id: "account",
      heading: "4. Your account",
      blocks: [
        {
          type: "list",
          items: [
            "Provide accurate information when signing up. The email address must be yours and must be accessible, because it is where the verification code and password reset arrive.",
            "Your password is personal and non-transferable. You are responsible for what happens in your account while others can reach it.",
            "Tell us at the contact email straight away if you suspect unauthorised access.",
            "An account belongs to a single person. Do not share it.",
          ],
        },
      ],
    },
    {
      id: "acceptable-use",
      heading: "5. Acceptable use",
      blocks: [
        {
          type: "paragraph",
          text: "In using TirzeFlow, you agree not to:",
        },
        {
          type: "list",
          items: [
            "Use the app for any unlawful purpose or to direct someone else's treatment.",
            "Attempt to access other people's data, bypass authentication, or exploit security flaws.",
            "Automate requests at a volume capable of degrading the service, or try to circumvent usage limits.",
            "Reverse engineer, decompile, or redistribute the app, except where the law allows it regardless of authorisation.",
          ],
        },
      ],
    },
    {
      id: "your-data",
      heading: "6. Your records belong to you",
      blocks: [
        {
          type: "paragraph",
          text: "Everything you record in the journal is yours. TirzeFlow claims no ownership over that content and uses it solely to provide the service to you, under the Privacy Policy.",
        },
        {
          type: "paragraph",
          text: "You can export your data in an open format at any time, and you can erase it by deleting your account inside the app.",
        },
        {
          type: "paragraph",
          text: "Keeping your own copy of records that matter to you is advisable. Account deletion is permanent and the data cannot be recovered afterwards.",
        },
      ],
    },
    {
      id: "service",
      heading: "7. Service availability",
      blocks: [
        {
          type: "paragraph",
          text: "TirzeFlow is maintained by one person and offered as is. There is no guarantee of uninterrupted availability: maintenance, instability, or temporary outages may occur.",
        },
        {
          type: "paragraph",
          text: "Features may change or be discontinued. If the service is shut down, notice will be given inside the app with reasonable advance warning, and there will be a window to export your data before it goes offline.",
        },
      ],
    },
    {
      id: "termination",
      heading: "8. Termination",
      blocks: [
        {
          type: "paragraph",
          text: "You may close your account whenever you want, from the Profile tab, without giving a reason. Deletion permanently erases the account and every associated record.",
        },
        {
          type: "paragraph",
          text: "An account may be suspended or closed for a material breach of these terms, in particular any attempt to access other people's data. Where possible, notice will be given in advance.",
        },
      ],
    },
    {
      id: "ip",
      heading: "9. Intellectual property",
      blocks: [
        {
          type: "paragraph",
          text: "The TirzeFlow name, visual identity, code, and screen designs belong to the developer. These terms transfer none of those rights. Third-party trademarks mentioned in the app belong to their respective owners.",
        },
      ],
    },
    {
      id: "liability",
      heading: "10. Limitation of liability",
      blocks: [
        {
          type: "paragraph",
          text: "The app is provided without warranties of any kind as to the accuracy of the figures displayed, fitness for a particular purpose, or freedom from interruption.",
        },
        {
          type: "paragraph",
          text: "To the fullest extent permitted by Brazilian law, the developer is not liable for clinical decisions made on the basis of the app's content, for data loss resulting from a deletion you performed, or for indirect damages or lost profits.",
        },
        {
          type: "paragraph",
          text: "Nothing in these terms removes rights that the law grants consumers and that cannot be limited by contract, including those in Brazil's Consumer Protection Code.",
        },
      ],
    },
    {
      id: "changes",
      heading: "11. Changes to these terms",
      blocks: [
        {
          type: "paragraph",
          text: "These terms may be updated. The date of the latest update is at the top of this page, and any material change is announced inside the app before it takes effect. Continuing to use the app after that means accepting the new version; if you do not accept it, you can delete your account.",
        },
      ],
    },
    {
      id: "law",
      heading: "12. Governing law and venue",
      blocks: [
        {
          type: "paragraph",
          text: "These terms are governed by Brazilian law. Any dispute will be settled in the courts of the user's domicile.",
        },
      ],
    },
    {
      id: "contact",
      heading: "13. Contact",
      blocks: [
        {
          type: "paragraph",
          text: "Questions about these terms or about the app: guilhermepassarinho@gmail.com.",
        },
      ],
    },
  ],
};
