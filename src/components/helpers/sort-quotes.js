const sortQuotes = (quotes, isAscending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (isAscending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    }
    else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  })
}

export default sortQuotes;