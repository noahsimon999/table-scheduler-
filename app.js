function makeReservation(name, number, email, id){
    this.customerName = name,
    this.phoneNumber = number,
    this.customerEmail = email,
    this.customerID= id
};

var customerData = new makeReservation(foo, bar, baz, foobar);

--

$(".submit").on("click", () => {
    event.preventDefault();
    
    var resvName = $("#reserve_name").val().trim();
    var resvPhone = $("#reserve_phone").val().trim();
    var resvEmail = $("#reserve_email").val().trim();
    var resvID = $("#reserve_uniqueID").val().trim();
    
    var customerData = new makeReservation(resvName, resvPhone, resvEmail, resvID);

    alert("You've been added to the reservations list");
    console.log(customerData);
});
  
  
  