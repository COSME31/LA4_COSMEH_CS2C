let customerQueue = [ 'Althea', 'Angelo', 'Lito', 'Engelbert', 'John'];

while (true) {
  let customerName = prompt("Enter your name to join the queue:");
  customerQueue.push(customerName);
  alert(`Welcome ${customerName}! Your number is ${customerQueue.length}.`);

  let serviceNumber = parseInt(prompt("Enter the number of the customer to be serviced:"));

  if (serviceNumber > 0 && serviceNumber <= customerQueue.length) {
    let servicedCustomer = customerQueue.shift();
    alert(`Servicing customer ${serviceNumber}: ${servicedCustomer}`);
    console.log("Updated Queue:", customerQueue);
  } else {
    alert("Invalid service number. Please enter a valid number.");
  }

  if (customerQueue.length === 0) {
    alert("All customers have been serviced. Thank you!");
    break;
  }
}
startQueueSystem();