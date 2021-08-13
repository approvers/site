export const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

export const notifyShowingPage = (url: string): void => {
  window.gtag("config", GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};

type Event = {
  action: string;
  category: string;
  label: string;
  value?: string;
};

export const event = ({ action, category, label, value }: Event): void => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
