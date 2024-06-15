HOW TO RUN

1. Open terminal
2. Find your localhost ipv4 address.
[Windows]: ipconfig {and search the ipv4 and copy the ip address}
[Linux]: hostname -I {copy the ip address}
3. Go to the directory of the project
4. Type "REACT_APP_PAYMENT_IP={your-ip-goes-here} npm start"
5. Open [website](https://naikod.github.io)
6. Go to tab decrypt and paste this 
```
bEfA21e0c243C711cF52cb55BF9097Ec05BFc3Fbb7C718061b2835554cEF7e850425e6c78C5c4f82c986BF3F7c287863ce7675cB6f42c0779554F2c34eF6887484BF93358c278c6F6CF2446cf1A9F714Ab887c2F8EDc551c345807bf542F91482bc35F9c5741576c314702640668E2871f96B4f7cE660c5cF342F3E57ccCE630261819B99cE41c6c0c3566889c8027639622f9cf9089B27785956928c7f76C173c5c674e52ceb5c7f44747149D15229FB5C06306028862FB7c79077eCc01Dc987F8CB7875E560129fe6865B8B7f4167021B44
```
7. and input the Decryption Key : mongodbsecretkey
8. paste it on /Backend/index.js on line 25
9. and type in command 'node index' or 'nodemon index'

Need Fixed : When click confirm payment should be only 1x clicked (can be multipled, this make product stock will be decreased!) (Fixed!)