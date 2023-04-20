# PostIT
## Post Your Thoughts, Ideas, and Everything.

The blockchain project that our group has created is a social media platform where people all around the world can share their thoughts in the public domain and view other people's thoughts. This can be used in multiple scenarios - whenever people want to share their knowledge, motivational quotes, a funny joke, a meme, or even a story, this platform can be used so that others can connect, learn/infer information from each other around the world or be entertained.

![image](https://user-images.githubusercontent.com/78360526/233489256-1401e8e4-8fbb-41d1-9a68-8b0090a74000.png)

How the platform works is that any person using it can choose to post any random thought or piece of information on the platform. Then, he/she will choose the option to type out the words and post them on the open domain, as shown in the figure below. Once this happens, the user will get a popup prompt to make a transaction, which will be specific to that particular thought posted. This transaction will get stored onto a blockchain network. So every thought/information posted will be linked to a particular block in a blockchain network once the transaction is complete, and will have a unique hash value. 

![image](https://user-images.githubusercontent.com/78360526/233489533-cf46d61f-aa6d-4a56-a1c9-410c6b717ad1.png)


Now, if the user wishes to edit/delete the thought that he/she posted on the platform earlier, they can do so by using the options on the UI as shown above (frontend part). Irrespective of this, the blockchain network will have the stored value of each transaction ever made and that cannot be tampered with or deleted, hence avoiding any sort of hacking or malicious attacks.

![image](https://user-images.githubusercontent.com/78360526/233489585-408b1e2c-a8df-491b-a40e-4dae607564ee.png)

In the image below, the blockchain has been depicted. We can see the genesis block along with the other transactions that have been made and how the blockchain accepts a new transaction and block. As the chain grows longer and longer, the more secure and hack-proof it becomes. The unique hash values have also been shown.


![image](https://user-images.githubusercontent.com/78360526/233489652-81d83b66-5a95-41e5-8aac-488786512bbf.png)
![image](https://user-images.githubusercontent.com/78360526/233489674-4f693bec-942e-40a4-acd7-139503a1b6f0.png)


Initially, we thought of using the Rinkeby Test Network and started making our project using it, but later we realised that it is depreciated now and we switched to Georli. We used “goerli.etherscan.io”: which is meant for displaying the entire blockchain right from its genesis block and also displays all the transaction amounts that were deducted from our metamask wallet to perform the action.

![image](https://user-images.githubusercontent.com/78360526/233489717-5e932fc0-9468-4ce9-98b6-e551ee9d862f.png)

So now, firstly the thought got posted, which says: “this post is to demonstrate how the delete function works”. Secondly, we have to delete the tweet for which we also need some ether, over here we are using goerli ether, which we got from goerli faucet. We had to create an alchemy account, and then we get 0.5 goerli eth once every time we make a request in 24 hours.

![image](https://user-images.githubusercontent.com/78360526/233489882-a503a944-a8b8-46f0-a8dd-aa24843d4754.png)


![image](https://user-images.githubusercontent.com/78360526/233489910-122576e4-b2e0-4165-b4b4-26fce129f669.png)


Now, as we can see, the thought doesn't exist anymore. Although its still there will all the details on our blockchain.



We have made use of Hardhat, to run all tests on the backend and to deploy it too.
1. npx hardhat test
2. npx hardhat run scripts/deploy.js --network goerli


![image](https://user-images.githubusercontent.com/78360526/233489858-c74400df-256d-4d67-a41e-50c6cc43605b.png)



![image](https://user-images.githubusercontent.com/78360526/233489828-6e40e139-3884-439c-ad34-356eb366c5b5.png)





LINKS: 

https://goerlifaucet.com/: for free goerli ether
https://goerli.etherscan.io/address/0x0Eb2212CAB945cA9d86905BFA8d6Ce3D8A10888E: displays entire blockchain
Contract: 0x0Eb2212CAB945cA9d86905BFA8d6Ce3D8A10888E
Obtained from running : npx hardhat run scripts/deploy.js --network goerli
Put this contract in the config.js file too and then npm start in the client folder
https://mui.com/material-ui/material-icons/?query=emoji: Material UI 5 for all the icons and buttons that have been used in the project
http://localhost:3000/: hosted on personal computer, on localhost 3000
chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#: metamask chrome extension

