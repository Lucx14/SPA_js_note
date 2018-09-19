var assert = {

  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy.");
    } else {
      console.log("Assertion passed: " + assertionToCheck + ". ");
    }
  }
};
//
//
//  An assertion file can be used to support the test file and make it more readable
//
