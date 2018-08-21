import moment from 'moment';

const match = (text, pattern) => {
  const tokenSeparator = / +/g;
  const regexExp = /[-[\]/{}()*+?.\\^$|]/g;

  if (text === pattern) {
    return { isMatch: true };
  }

  const regex = new RegExp(
    pattern.replace(regexExp, '\\$&').replace(tokenSeparator, '|')
  );

  return { isMatch: !!text.match(regex) };
};

const parseDate = date => {
  return moment(date, ['DD-MM-YYYYTHH:mm', 'DD-MM-YYYYTH:mm'], true).toDate();
};

export const searchResults = (value, item, index, pattern, results = []) => {
  if (value === undefined || value === null) {
    return;
  }

  let searchResult = match(value.toString(), pattern.toString());

  if (searchResult.isMatch && !results[index]) {
    results.push(item);
  }

  return results;
};

export const shortDate = list => {
  return list.sort(function(date1, date2) {
    return parseDate(date1.date) - parseDate(date2.date);
  });
};
