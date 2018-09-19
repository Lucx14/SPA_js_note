var assert = {
  isTrue: function(assertionToCheck, description) {
    if(!assertionToCheck) {
      throw new Error(`Assertion failed: ${description}. ${assertionToCheck}.`);
    } else {
      console.log(`Assertion passed: ${description}. ${assertionToCheck}.`);
    }
  }
};
