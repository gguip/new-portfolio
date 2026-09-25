import { LegalDocument } from "@/types";

export const supportEn: LegalDocument = {
  slug: "support",
  product: "TirzeFlow",
  title: "Support",
  summary:
    "How to solve what comes up most, and how to reach me when nothing here does. TirzeFlow is maintained by one person, so the reply is not instant — but it is from a human.",
  sections: [
    {
      id: "contact",
      heading: "Getting in touch",
      blocks: [
        {
          type: "paragraph",
          text: "Write and tell me what happened, on which screen, and what you expected instead. If you can, include your device model and system version — that usually cuts half the back and forth.",
        },
        {
          type: "contact",
          label: "suporte@gguip.dev",
          email: "suporte@gguip.dev",
        },
        {
          type: "paragraph",
          text: "Replies within two business days. Do not send screenshots with weight, dose, or symptoms unless they are needed: your registered email address is enough to identify the account.",
        },
      ],
    },
    {
      id: "account",
      heading: "Account and access",
      blocks: [
        {
          type: "faq",
          items: [
            {
              question: "How do I delete my account?",
              answer:
                "Open the Profile tab, scroll to the bottom of the screen, and tap Delete account. The app shows what will be erased and asks for confirmation. Deletion is permanent and cascades to every record — profile, injections, weigh-ins, measurements, side effects, workouts, meals, water, and reminders. There is no grace period and no way to recover afterwards.",
            },
            {
              question: "How do I export my data?",
              answer:
                "The app exports everything in an open, machine-readable format. Worth doing before you delete the account, because deletion cannot be undone.",
            },
            {
              question: "I did not receive the verification code.",
              answer:
                "Check your spam folder and give it a few minutes: delivery depends on your email provider. The code is valid for 15 minutes; after that, request another one on the same screen. If the address was mistyped, go back and sign up again — the account is only created after verification, so nothing is left stuck.",
            },
            {
              question: "I forgot my password.",
              answer:
                "Tap \"Forgot my password\" on the sign-in screen. A six-digit code arrives by email and you reset it without leaving the app. The code is valid for 15 minutes and allows five attempts.",
            },
            {
              question: "I created my account with Apple and cannot sign in on Android.",
              answer:
                "Sign in with Apple exists only on iOS, and an account created that way has no password. For now there is no way to reach that same account from Android. If this affects you, write to me — that is the information that decides whether building the way around is worth it.",
            },
          ],
        },
      ],
    },
    {
      id: "records",
      heading: "Journal records",
      blocks: [
        {
          type: "faq",
          items: [
            {
              question: "I logged an injection in the wrong week. Now what?",
              answer:
                "The app accepts one injection per week. When you try to log a second one in the same week, it offers to correct the existing entry instead of creating another. You can also edit or delete any record from the history on the Dose screen.",
            },
            {
              question: "Why can't I log two injections in the same week?",
              answer:
                "Because two injections in one week are almost always a typo — and a duplicate ruins the series the app uses for averages and trends. If your protocol changed, edit the existing record.",
            },
            {
              question: "My weight changed units on its own.",
              answer:
                "The app stores everything in kilograms and converts on display, following the unit system in your profile. If it shows pounds without you asking, check that setting under Profile.",
            },
          ],
        },
      ],
    },
    {
      id: "limits",
      heading: "What the app does, and what it does not",
      blocks: [
        {
          type: "callout",
          title: "The app does not prescribe",
          text: "TirzeFlow is a journal. It records what your prescriber instructed. It does not suggest a dose, does not indicate when to increase or decrease one, does not replace a consultation, and does not constitute medical advice. Any decision about your treatment belongs to the healthcare professional treating you.",
        },
        {
          type: "paragraph",
          text: "The figures the app calculates — body mass index, calorie target, protein target, weekly average, maintenance band — come from widely used nutritional formulas and are informative estimates. They know nothing about your clinical situation.",
        },
      ],
    },
    {
      id: "requirements",
      heading: "Requirements and languages",
      blocks: [
        {
          type: "list",
          items: [
            "An iPhone on iOS 13 or later to sign in with Apple; earlier versions still have email and password.",
            "Android with Google Play Services to sign in with Google.",
            "Interface in Portuguese, English, and Spanish, following the device language — and switchable under Profile.",
            "A connection is needed to sync: the app talks to the server on every record.",
          ],
        },
      ],
    },
    {
      id: "privacy",
      heading: "Privacy",
      blocks: [
        {
          type: "paragraph",
          text: "Your records are health data, and the app treats them as such: no advertising, no tracking, no analytics, and nothing shared with health plans, employers, or data brokers. The full detail is in the privacy policy.",
        },
      ],
    },
  ],
};
