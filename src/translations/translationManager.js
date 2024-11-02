export function createTranslationManager(
  url,
  translations,
  defaultLang = "en"
) {
  const getTranslationsForLocale = (locale) => {
    return translations[locale] || translations[defaultLang];
  };
  const [, lang] = url.pathname.split("/");
  const supportedLanguages = Object.keys(translations);
  const locale = supportedLanguages.includes(lang) ? lang : defaultLang;
  const t = getTranslationsForLocale(locale);
  const localePrefix = locale === defaultLang ? "" : `${locale}/`;
  return { currentLang: locale, t, localePrefix };
}
