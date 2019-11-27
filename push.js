var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BMzLBN47faSoxI6wBTk78JXJTLZoe4Kd96oy8bK6qVOu32LXl8-e70YJmeA41ZXMZ3SjjP-fBOBdCByyemoDMAw",
   "privateKey": "kdO8sVHpghSbMjpZAoV2OMTjBwprtDyD3vzHfuOLzck"
};
 
 
webPush.setVapidDetails(
   'mailto:alvinindrap@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cWxYuGV6ivE:APA91bGf0PzXTpyF6FrV6zXxr_sAR-YtDKaNhajaBpJty4vkg7k8qyXLXzyhcKD5ok-6GlNmOb3IlLx906utdg2vsi4jLraItQsOIAcQAxk5SyECNzmBBtzdHSYnIeDULL11pSmxsbMF",
   "keys": {
       "p256dh": "BFe/fxdS0ruUhQkGqseW4CaIaH1hsqgPHQBgLnAWOiY+cMSvz/sKvRCu8x9J3g6agGMkONiWy2LprHQNmqwdorc=",
       "auth": "VcXS9dC8Idpb0c13GxOu/Q=="
   }
};
var payload = 'Welcome To Football PWA';
 
var options = {
   gcmAPIKey: '178212190123',
   TTL: 60
};

webPush.sendNotification(
   pushSubscription,
   payload,
   options
);