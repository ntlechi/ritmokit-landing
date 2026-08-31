import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

export default async function CheckoutCancelPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div>
      <SiteHeader lang={lang} dict={dict.nav} />
      <main className="mx-auto max-w-xl px-4 pb-24 pt-32 text-center">
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {dict.checkout.cancelTitle}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">{dict.checkout.cancelBody}</p>
        <Link
          href={`/${lang}#offer`}
          className="glow-button mt-10 inline-flex rounded-full px-7 py-3.5 text-sm font-semibold text-white"
        >
          {dict.checkout.cancelCta}
        </Link>
      </main>
      <SiteFooter lang={lang} dict={dict.footer} />
    </div>
  );
}
