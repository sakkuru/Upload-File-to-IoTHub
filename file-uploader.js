'use strict';

require('dotenv').config();

const fs = require('fs');
const mqtt = require('azure-iot-device-mqtt').Mqtt;
const clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;

const connectionString = process.env.deviceConnectionString;
const filename = process.argv[2] || 'hawaii.jpg';

const client = clientFromConnectionString(connectionString);
console.log('Client connected.');

fs.stat(filename, (err, stats) => {
    if (err) {
        console.error('Error opening file: ' + err.toString());
        return;
    }
    const rr = fs.createReadStream(filename);

    console.log('Uploading:', filename);
    client.uploadToBlob(filename, rr, stats.size, err => {
        if (err) {
            console.error('Error uploading file: ' + err.toString());
        } else {
            console.log('Size:', stats.size);
            console.log('File uploaded!');
        }
    });
});