window.addEventListener('DOMContentLoaded', () => {
    const datePicker = document.querySelector('#input');
    const daysLeftValue = document.querySelector('#left');
    const finalDayValue = document.querySelector('#last');
    datePicker.addEventListener('change', () => {
        const parsedEnterDate = Date.parse(datePicker.value);
        const parsedFinalDay = parsedEnterDate + 3600000 * 24 * 29;
        const parsedToday = Date.now();
        const finalDay = new Date(parsedFinalDay).toLocaleDateString('ru-RU');
        const parsedDaysLeft = parsedFinalDay - parsedToday;
        const daysLeft = Math.ceil(parsedDaysLeft / 3600000 / 24);
        daysLeftValue.textContent = daysLeft;
        finalDayValue.textContent = finalDay;
        daysLeft < 10
            ? daysLeftValue.classList.add('warning')
            : daysLeftValue.classList.remove('warning');
        daysLeft < 0
            ? daysLeftValue.classList.add('alert')
            : daysLeftValue.classList.remove('alert');
    });
});
