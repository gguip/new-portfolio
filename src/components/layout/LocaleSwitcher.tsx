"use client";

import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeConfig = {
  pt: { flag: "🇧🇷", label: "PT" },
  en: { flag: "🇺🇸", label: "EN" },
  es: { flag: "🇪🇸", label: "ES" },
} as const;

export function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(locale: string) {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <div className="fixed top-6 right-6 z-40 flex items-center gap-1 rounded-full border border-brand-ice/10 bg-brand-dark/80 px-2 py-1.5 backdrop-blur">
      {routing.locales.map((locale) => {
        const { flag, label } = localeConfig[locale];
        const isActive = locale === currentLocale;

        return (
          <button
            key={locale}
            onClick={() => switchLocale(locale)}
            disabled={isPending || isActive}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest transition-colors ${
              isActive
                ? "bg-brand-mint text-brand-dark"
                : "text-brand-ice/60 hover:text-brand-mint"
            }`}
            aria-label={`Switch to ${label}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span aria-hidden="true">{flag}</span>
            {label}
          </button>
        );
      })}
    </div>
  );
}
