import ru from "./ru.json";
import en from "./en.json";

export function getLangSettings(url, langData, defaultLang = "en") {
	const [, lang] = url.pathname.split("/");
	const locale = lang || defaultLang;
	const t = langData || {};
	const localePrefix = locale === defaultLang ? "" : `/${locale}`;
	return { currentLang: locale, t, localePrefix };
}
