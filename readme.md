### _*SPIKE BOT*_

> An implementation of [@neoxr/wb](https://www.npmjs.com/package/@neoxr/wb) which has been optimized to be lightweigth && [@whiskeysockets/baileys](https://www.npmjs.com/package/@whiskeysockets/baileys)



**Creator / Group** : [Kysage](https://wa.me/254735306047) / [Spike Network](https://chat.whatsapp.com/G25QRqzjv189j6muR5ZF7J)

### _*Requirements*_

- [x] NodeJS 14
- [x] FFMPEG
- [x] Server vCPU/RAM 1/2GB (Min)

### _*Configuration*_

There are 2 configuration files namely ```.env``` and ```config.json```, just adjust owner and owner name, others leave as they are.

```Javascript
{
   "owner": "254735306047",
   "owner_name": "Kysage",
   "database": "data",
   "limit": 15,
   "ram_limit": "900mb",
   "max_upload": 50,
   "max_upload_free": 10,
   "cooldown": 3,
   "timer": 180000,
   "timeout": 1800000,
   "blocks": ["994", "91", "92"],
   "evaluate_chars":  ["=>", "~>", "<", ">", "$"],
   "pairing": {
      "state": false, //default is "false" toggle "true" if you want to use the pairing code
      "number": 254xxxx // start number with country code minus the "+"
   }
}
```

```.env
API_ENDPOINT = 'https://api.neoxr.my.id/api'
API_KEY = 'your_apikey' // same to api don't edit

DATABASE_URL = '' // default database has been configured... don't edit

TZ = 'Africa/Nairobi'
```

_**Notes**:_
+ ```ram_limit``` : ram usage limit, for example you have a server with 1gb of ram set before the maximum capacity is 900mb.

+ ```API_KEY``` : some of the features in this script use apikey, especially the downloader feature, to get an apiKey you can get it on the [Neoxr Api's](https://api.neoxr.my.id) with prices that vary according to your needs.

+ ```DATABASE_URL``` : can be filled with mongo and postgresql URLs to use localdb just leave it blank and the data will be saved to the .json file.

> Localdb is only for development state, for production state you must use a cloud database (mongo / postgres)


### _*Pairing Code*_

Connecting account without qr scan but using pairing code.

<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/ea52580845d5fc13efdc8.png" /></p>

```Javascript
{
   "pairing": {
      "state": true, // "true" if you want to use the pairing code
      "number": 254xxxx // start number with country code
   }
}
```

### _*Installation & Run*_

Make sure the configuration and server meet the requirements so that there are no problems during installation or when this bot is running, type this on your console :

```
$ yarn
$ node .
```

or want to use pm2

```
$ yarn
$ npm i -g pm2
$ pm2 start index.js && pm2 save && pm2 logs
```

### _*NOTE:*_
Check this repository regularly to get updates because the progress base is not 100% yet, if you find an error, please make an issue. Thanks.