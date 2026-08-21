const https = require('https');

const options = {
  hostname: 'api.linkedin.com',
  path: '/v2/userinfo',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer AQXfpzeAy_Hp65g-a6ZLaK6ZAQMnLiq_KK9lD0g90NC3mF0FpIvjhJGascfXEioUbYGjvIoMrN4pZpAA9LU1UDp1Izs9RUxFgCiqIO4GSNPQcFkCu0-qzM3D9qv5Ba74_DzcCItOBoO48Fddgvk0Yn_21ZsLV8UOmy_xMBwW2-eUwC91ofRzBF-hnBN11wbblBDU-L6bCeQP0nN8-51iWTKnBr0oUmM6rbx3LzgqVAtpjfprfeGNENh7mpd1p9tLOmxGwZBjXkrG0_URSqIdmu8UFklm3-yPbPz33JMksWhifaNkV7-e_AvrX5B4PboVx2ei93VM-fd-OyGcS6XOtHd-GzxGkA'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Status Code:', res.statusCode);
    console.log('Response:', JSON.stringify(JSON.parse(data), null, 2));
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
