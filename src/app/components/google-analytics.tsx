"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

const notifyShowingPage = (url: string): void => {
  (
    window as unknown as { gtag(event: "config", id: string, options: { page_path: string }): void }
  ).gtag("config", GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};

type Event = {
  action: string;
  category: string;
  label: string;
  value?: string;
};

const event = ({ action, category, label, value }: Event): void => {
  (
    window as unknown as {
      gtag(
        event: "event",
        id: string,
        options: { event_category: string; event_label: string; value?: string },
      ): void;
    }
  ).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    notifyShowingPage(`${pathname}?${searchParams}`);
  }, [pathname, searchParams]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script strategy="afterInteractive" id="send-ga">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "${GOOGLE_ANALYTICS_ID}", {
    page_path: window.location.pathname,
  });
`}
      </Script>
    </>
  );
};
