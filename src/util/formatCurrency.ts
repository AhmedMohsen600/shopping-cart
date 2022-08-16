const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
export const formatCurrency = (price: number) => {
  return CURRENCY_FORMATER.format(price);
};
