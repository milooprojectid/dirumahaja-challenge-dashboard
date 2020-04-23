export const currency = (symbol, number) => {
  const parsedNumber = parseInt(number, 10);
  const negativeNumber = parsedNumber < 0;

  return `${negativeNumber ? '- ' : ''}${symbol ? `${symbol} ` : ''}${String(
    Math.abs(parsedNumber) || 0,
  ).replace(/(\d)(?=(\d{3})+(?!\d))/g, symbol === 'USD' ? '$1,' : '$1.')}`;
};

export default currency;
