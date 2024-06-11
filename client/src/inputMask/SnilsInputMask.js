export default class SnilsInputMask {
    /**
     * Очищает номер от всех символов, кроме цифр
     * @param number
     * @returns {*}
     */
    getInputNumbersValue(number) {
        return number.replace(/\D/g, '');
    }

    createMask(number) {
        const numbers = this.getInputNumbersValue(number);
        const parts = [];

        if (numbers.length > 0) {
            parts.push(numbers.substring(0, 3));
        }
        if (numbers.length > 3) {
            parts.push(numbers.substring(3, 6));
        }
        if (numbers.length > 6) {
            parts.push(numbers.substring(6, 9));
        }
        if (numbers.length > 9) {
            parts.push(numbers.substring(9, 11));
        }

        return parts.join('-').replace(/-(\d{2})$/, ' $1');
    }

    formatNumberToClient(number) {
        return this.createMask(this.getInputNumbersValue(number));
    }
}