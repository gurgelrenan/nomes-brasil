const convertYearToInteger = interval => {
  return interval.replace(/\D/g, "").slice(-4);
}

export const formatData = (data) => {
  let periods = data.res;
  let result = []

  periods.map(({periodo, frequencia}) => {
    let year = convertYearToInteger(periodo)
    result.push({year, frequencia})
  })

  return result;
}
