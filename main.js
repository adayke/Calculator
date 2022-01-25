function Calc(oper, a, b) {
  switch (undefined) {
    case oper:
    case a:
    case b:
      alert('Error');
    break;
  };

  if (typeof a !== 'number' || typeof b !== 'number') {
  return 'Error';
  };

  const operations = {
    sum: a + b,
    mul: a * b,
    dif: a - b,
    div: a / b
  };

  if(oper in operations) {
    return operations[oper];
  } else {
    return 'unknown operation';
  }
};

