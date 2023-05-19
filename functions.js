function calculatePrice1(options) {
  let basePrice = 2.0;

  if (options.drink_type === 'blended') {
    basePrice += 1.0;
  }

  if (options.size === 'M') {
    basePrice += 0.5;
  } else if (options.size === 'L') {
    basePrice += 1.0;

    if (!options.availability_L_size) {
      throw new Error('L size not available for this drink type');
    }
  }

  if (options.whipped_cream === 'with') {
    basePrice += 0.5;
  }

  return basePrice;
}

module.exports.calculatePrice1 = calculatePrice1;

// Function 2: Calculate Price 2
const calculatePrice2 = (options) => {
  const { drink_type, size, sugar, milk, whipped_cream } = options;

  // Calculate the base price based on the drink type and size
  let basePrice = 0;

  if (drink_type === 'coffee') {
    if (size === 'S') {
      basePrice = 2.5;
    } else if (size === 'M') {
      basePrice = 3.0;
    } else if (size === 'L') {
      basePrice = 3.5;
    }
  } else if (drink_type === 'tea') {
    if (size === 'S') {
      basePrice = 2.0;
    } else if (size === 'M') {
      basePrice = 2.5;
    } else if (size === 'L') {
      basePrice = 3.0;
    }
  }

  // Calculate additional costs based on sugar, milk, and whipped cream options
  let additionalCost = 0;

  if (sugar === 'extra') {
    additionalCost += 0.5;
  }

  if (milk === 'extra') {
    additionalCost += 0.5;
  }

  if (whipped_cream === 'with') {
    additionalCost += 1.0;
  }

  // Calculate the total price
  const totalPrice = basePrice + additionalCost;

  // Return the total price
  return totalPrice;
};

// Export the calculatePrice2 function
module.exports = calculatePrice2;

// Function 3: Calculate Price 3
const calculatePrice3 = (options) => {
  const { drink_type, size, milk, sugar, whipped_cream } = options;

  let basePrice = 0;

  if (drink_type === 'coffee') {
    if (size === 'S') {
      basePrice = 2.5;
    } else if (size === 'M') {
      basePrice = 3.0;
    } else if (size === 'L') {
      basePrice = 3.5;
    }
  } else if (drink_type === 'tea') {
    if (size === 'S') {
      basePrice = 2.0;
    } else if (size === 'M') {
      basePrice = 2.5;
    } else if (size === 'L') {
      basePrice = 3.0;
    }
  }

  let additionalCost = 0;

  if (milk === 'extra') {
    additionalCost += 0.5;
  }

  if (sugar === 'extra') {
    additionalCost += 0.5;
  }

  if (whipped_cream === 'with') {
    additionalCost += 1.0;
  }

  const totalPrice = basePrice + additionalCost;

  return totalPrice;
};

// Export the calculatePrice3 function
module.exports.calculatePrice3 = calculatePrice3;

// Function 4: Calculate Price 4
const calculatePrice4 = (options) => {
  const { drink_type, size, sugar, milk, whipped_cream } = options;

  let basePrice = 0;

  if (drink_type === 'coffee') {
    if (size === 'S') {
      basePrice = 2.5;
    } else if (size === 'M') {
      basePrice = 3.0;
    } else if (size === 'L') {
      basePrice = 3.5;
    }
  } else if (drink_type === 'tea') {
    if (size === 'S') {
      basePrice = 2.0;
    } else if (size === 'M') {
      basePrice = 2.5;
    } else if (size === 'L') {
      basePrice = 3.0;
    }
  }

  let additionalCost = 0;

  if (sugar === 'extra') {
    additionalCost += 0.5;
  }

  if (milk === 'extra') {
    additionalCost += 0.5;
  }

  if (whipped_cream === 'with') {
    additionalCost += 1.0;
  }

  const totalPrice = basePrice + additionalCost;

  return totalPrice;
};

// Export the calculatePrice4 function
module.exports.calculatePrice4 = calculatePrice4;

// Function 5: Calculate Price 5
const calculatePrice5 = (options) => {
  const { drink_type, size, sugar, milk, whipped_cream } = options;

  let basePrice = 0;

  if (drink_type === 'coffee') {
    if (size === 'S') {
      basePrice = 2.5;
    } else if (size === 'M') {
      basePrice = 3.0;
    } else if (size === 'L') {
      basePrice = 3.5;
    }
  } else if (drink_type === 'tea') {
    if (size === 'S') {
      basePrice = 2.0;
    } else if (size === 'M') {
      basePrice = 2.5;
    } else if (size === 'L') {
      basePrice = 3.0;
    }
  }

  let additionalCost = 0;

  if (sugar === 'extra') {
    additionalCost += 0.5;
  }

  if (milk === 'extra') {
    additionalCost += 0.5;
  }

  if (whipped_cream === 'with') {
    additionalCost += 1.0;
  }

  const totalPrice = basePrice + additionalCost;

  return totalPrice;
};

// Export the calculatePrice5 function
module.exports.calculatePrice5 = calculatePrice5;
