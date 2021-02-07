const formatValue = value => {
    const valueFormatted = `${value.substring(
      0,
      value.length - 2,
    )}.${value.substring(value.length - 2)}`;
  
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valueFormatted);
  };
  
  export default formatValue;