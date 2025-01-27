import styles from "./style.module.css";
class DaysCalculator extends HTMLElement {
  constructor() {
    super();
    const datePicker = this.querySelector(
      '[data-role="input"]'
    ) as HTMLInputElement;
    const daysLeftValue = this.querySelector('[data-role="left"]');
    const finalDayValue = this.querySelector('[data-role="last"]');
    if (datePicker && daysLeftValue && finalDayValue) {
      datePicker.addEventListener("change", () => {
        const localeOptions: Intl.DateTimeFormatOptions = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const parsedEnterDate = Date.parse(datePicker.value);
        const parsedFinalDay = parsedEnterDate + 3600000 * 24 * 29;
        const parsedToday = Date.now();
        const finalDay = new Date(parsedFinalDay).toLocaleDateString(
          "ru-RU",
          localeOptions
        );
        const parsedDaysLeft = parsedFinalDay - parsedToday;
        const daysLeft = Math.ceil(parsedDaysLeft / 3600000 / 24);
        daysLeftValue.textContent = daysLeft.toString();
        finalDayValue.textContent = finalDay;
        daysLeft < 10
          ? daysLeftValue.classList.add(styles.warning)
          : daysLeftValue.classList.remove(styles.warning);
        daysLeft <= 0
          ? daysLeftValue.classList.add(styles.alert)
          : daysLeftValue.classList.remove(styles.alert);
      });
    }
  }
}
customElements.define("days-calculator", DaysCalculator);
