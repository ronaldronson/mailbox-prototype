const dateTimeFormatObj = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  weekday: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
});

export default (date) => dateTimeFormatObj.format(date).replace(',', '');
