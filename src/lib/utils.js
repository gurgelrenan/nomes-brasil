const convertYearToInteger = interval => {
  return interval.replace(/\D/g, "").slice(-4);
}

export const formatData = (data) => {
  const result = []

  data.res.forEach(({periodo, frequencia}) => {
    let year = convertYearToInteger(periodo)

    result.push({year, frequencia})
  })

  return result;
}
