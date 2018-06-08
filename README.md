# Upload files from devices with Azure IoT Hub

Azure IoT Hub allows users to upload files from their devices to the cloud with the assistance of IoT Hub.
There is no separate charge for file upload. Consumes only 2 messages,  initiation and completion of the upload, against the daily allotment of messages.

## Usage

### Configure IoT Hub
* Before uploading, you should connect Azure IoT Hub with Azure Blob storage.

![](https://docs.microsoft.com/ja-jp/azure/iot-hub/media/iot-hub-configure-file-upload/file-upload-settings.png)

## Upload file
```
npm install
npm start  # Upload hawaii.jpg
npm start <File to be uploaded>
```