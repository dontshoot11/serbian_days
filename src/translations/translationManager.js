export function createTranslationManager(
  url,
  translations,
  defaultLang = "en"
) {
  const getTranslationsForLocale = (locale) => {
    return translations[locale] || translations[defaultLang];
  };

  const supportedLanguages = Object.keys(translations);
  const regex = new RegExp(`\/(${supportedLanguages.join("|")})\/`);

  const match = url.pathname.match(regex);
  const locale = match ? match[1] : null;

  const t = getTranslationsForLocale(locale);
  const localePrefix =
    locale === defaultLang || typeof locale !== "string" ? "" : `${locale}/`;

  return { currentLang: locale, t, localePrefix };
}
