export default function ratingDecimal(number) {
    // Check if number is defined and not null
    if (number !== undefined && number !== null) {
        // Convert the number to a string
        const strNumber = number.toString();
        // Find the index of the decimal point
        const decimalIndex = strNumber.indexOf('.');
        if (decimalIndex !== -1) {
            // Extract the integer part
            const integerPart = strNumber.slice(0, decimalIndex);
            // Extract the decimal part and truncate it to one decimal place
            const decimalPart = strNumber.slice(decimalIndex + 1, decimalIndex + 2);
            // Return the concatenated integer and decimal parts
            return `${integerPart}.${decimalPart}`;
        }
        // If there is no decimal point, return the original number
        return number;
    }
    // If number is undefined or null, return an empty string or any other default value
    return ''; // You can customize this default value as needed
}