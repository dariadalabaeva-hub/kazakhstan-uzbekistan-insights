import { useLanguage } from "./LanguageContext";
import { t, UiKey } from "./translations";

export function useT() {
  const { locale } = useLanguage();
  return (key: UiKey) => t(locale, key);
}
