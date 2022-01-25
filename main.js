function Calc(operation, a, b) {
  switch (undefined) {
    case operation:
    case a:
    case b:
      alert('Error');
    break;
  };

  if (typeof a !== 'number' || typeof b !== 'number') {
  return 'Error';
  };

  switch (operation) {
    case 'sum':
      return a + b;
    case 'mul':
      return a * b;
    case 'dif':
      return a - b;
    case 'div':
      return a / b;
    default:
      return 'unknown operation';
  };

};

