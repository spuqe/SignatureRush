const fs = require('fs');
const readline = require('readline');

function readDataFromFile(filename) {
  const data = fs.readFileSync(filename, 'utf-8');
  return data.split('\n').map(item => item.trim());
}

const firstNames = readDataFromFile('firstNames.txt');
const lastNames = readDataFromFile('lastNames.txt');
const locations = readDataFromFile('locations.txt');

function getUserInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(prompt, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function sendPostSignPetition() {
  const authToken = await getUserInput('Enter your AUTHTOKEN: ');
  const petitionId = await getUserInput('Enter the petition_id: ');
  const numTimes = await getUserInput('How many times do you want to send the request? ');

  const auth = encodeURIComponent(authToken);
  const url = `https://www.adressit.com/add_signature.php?petition_id=${petitionId}`;
  
  for (let i = 1; i <= numTimes; i++) {
    const firstName = encodeURIComponent(firstNames[Math.floor(Math.random() * firstNames.length)]);
    const lastName = encodeURIComponent(lastNames[Math.floor(Math.random() * lastNames.length)]);
    const location = encodeURIComponent(locations[Math.floor(Math.random() * locations.length)]);
    
    await fetch(url, {
      headers: {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'fi-FI,fi;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'max-age=0',
        'content-type': 'application/x-www-form-urlencoded',
      },
      referrer: `https://www.adressit.com/add_signature.php?petition_id=${petitionId}`,
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `authenticity_token=${auth}&screen_width=1920&screen_height=1080&timestamp=1689540046&datetime=2023-07-16+20%3A40%3A46&first_name=${firstName}&last_name=${lastName}&location=${location}&country=FI&is_public=1&allow_announcement_notifications=0`,
      method: 'POST', 
      mode: 'cors',
      credentials: 'include',
    });

    console.log(`Signature sent (${i}/${numTimes})`);
  }
}

sendPostSignPetition();
