const acc_id = 6655;
let acc_email = "Payal@gmail.com";
var acc_password = "12345";
acc_city = "Cuttack";

// acc_id = 2;  // not allowed
/**
 * Prefer not to use var
 * because of issue in block scope and functional scope
 */

acc_email = "abc@gmail.com";
acc_password = "56789";
acc_city = "bbsr";
console.log(acc_id);
console.table([acc_email, acc_id, acc_password, acc_city]);
