let number = {
    num1: 20,
    num2: 40,
    string: "penis"
  }

  function multiplyNumeric(number) {
    for (let key in number) {
      switch (typeof number[key])   {
        case typeof number: 
        console.log("Number");
        case typeof string:
          console.log("string");
      }
    }
  }
  multiplyNumeric(number);