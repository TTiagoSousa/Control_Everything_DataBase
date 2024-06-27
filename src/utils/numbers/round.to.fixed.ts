export function roundToFixed(number: number, precision: number) {
    const factor = Math.pow(10, precision);
    return (Math.round(number * factor) / factor).toFixed(precision);
  }