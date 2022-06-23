let user = {
    firstName: "Chinazor",
    lastName : "Akah",
    height   : "165cm",
    country: "Nigeria",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(user);
