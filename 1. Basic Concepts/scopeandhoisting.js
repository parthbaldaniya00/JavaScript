function testScope() {
    if (true) {
      var x = 10; // Function-scoped
      let y = 20; // Block-scoped
    }
    console.log(x); // Outputs: 10
    // console.log(y); // Error: y is not defined
  }
  testScope();