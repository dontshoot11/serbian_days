import { createTranslationManager } from "./translationManager";
import ru from "./ru.json";

const langs = {
  ru: ru,
};

export const getLangSettings = (url) => {
  return createTranslationManager(url, langs, "ru");
};
