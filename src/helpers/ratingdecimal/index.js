export default function ratingDecimal(num) {
    // Check if num is defined and not null
    if (num !== undefined && num !== null) {
        // Convert the num to a string
        const strNum = num.toString();
        // Find the index of the decimal point
        const decimalIndex = strNum.indexOf('.');
        if (decimalIndex !== -1) {
            // Extract the integer part
            const integerPart = strNum.slice(0, decimalIndex);
            // Extract the decimal part and truncate it to one decimal place
            const decimalPart = strNum.slice(decimalIndex + 1, decimalIndex + 2);
            // Return the concatenated integer and decimal parts of the num
            return `${integerPart}.${decimalPart}`;
        }
        // If there is no decimal point, return the original num
        return num;
    }
    // If num is undefined or null, return an empty string or any other default value
    return ''; // You can customize this default value as needed
}