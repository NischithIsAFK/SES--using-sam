# ses using eventbridge
### Introduction 
Using SES to send Email daily at 5PM IST using EventBridge Scheduler

### Working steps:
- Initialize EventBridge rule and schedule a cron job at 11:30 GMT(17:00 IST)
- Daily at 5PM IST it will trigger the Lambda and then the SES email Service is executed with the data to the senders Email Address.

