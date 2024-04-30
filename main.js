// Ethan Lawrence
// April 29 2024
// fortune-teller-js

// Imput
const jobs = ['Farmer', 'Cobbler', 'Court Jester', 'Advisor', 'Blacksmith', 'Landlord', 'Merchant', 'Web Developer'];
const contries = ['Scotland', 'England', 'Ireland', 'Wales', 'The United Kingdom', 'Canada'];

// process
const randContry = contries[Math.floor(Math.random() * contries.length)];
const randJob = jobs[Math.floor(Math.random() * jobs.length)];

const firstName = prompt('Enter your firstname');

const fortune = `In ${Math.floor(Math.random() * 9) + 1} years, ${firstName} will be a(n) ${randJob}, in ${randContry}`;

// Output
document.getElementById('output').innerHTML = fortune;