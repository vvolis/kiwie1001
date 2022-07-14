Vienojāmies:
pats kontrakts:
Rarible default tokens
+ iespēja mainīt metadatus jebkad jebcik reizes
+ kontraktā ir kiwieAliveIPFS
+ kontraktā ir kiwieGhostIPFS




npm install
truffle test


To deploy:
truffle migrate --network rinkeby

Currently on:
0xb2BBd4aa42E50757A8Ff4aa53561223d6298F978

Check this: https://forum.openzeppelin.com/t/create-an-nft-and-deploy-to-a-public-testnet-using-truffle/2961


truffle console --network rinkeby
nft = await Kiwie1001.deployed()
nft.name()
nft.symbol()
nft.contractURI() etc

nft.setTokenURIPrefix("https://gateway.pinata.cloud/ipfs/")


nft.mint("QmTbyfKJ6NUAmmLq7arX7Gng4rzwcjV2JwhW4pYWJ2mrnw", "QmW2jHLPZdSg8Em4tPUoB4SpdvAVEcHD42gzGgLwsEosvt", [{recipient: accounts[0], value:200}]);
nft.tokenURI(1)

//TODO::verify
truffle run verify Kiwie1001 --network rinkeby

https://rinkeby.etherscan.io/address/0xd49f16BEaC92138EB6bbD205Ce174D05dCE11E9b#code


truffle migrate -f 2 --to 2 --network mainnet --dry-run --describe-json --verbose-rpc




=====
Rinkeby
0xd49f16BEaC92138EB6bbD205Ce174D05dCE11E9b address
0x9b8B04C90fA3d035e145db9E7595b550Ab0C1db2 accc



https://api-mainnet.rarible.com/contractMetadata/{address} 




 web3.eth.getBalance(web3.eth.accounts[0])



res.on('transactionHash', (hash) => {console.log('TxHash', hash);});


nft.mint("QmTbyfKJ6NUAmmLq7arX7Gng4rzwcjV2JwhW4pYWJ2mrnw", [{recipient: accounts[0], value:200}]);


const contract = new web3.eth.Contract(abi, address)
const totalSupply = await contract.methods.totalSupply().call()


await debug( nft.setContractURI("https://gateway.pinata.cloud/ipfs/Qmf1EMhapfBpNNFVSjY8A36qHnfGGSpSmmb9Yzo2UnR3p1", { from: accounts[0] }));

=======DESE WORKINGGGG=======
nft = await Kiwie1001.deployed()
await nft.setContractURI("https://gateway.pinata.cloud/ipfs/Qmf1EMhapfBpNNFVSjY8A36qHnfGGSpSmmb9Yzo2UnR3p1", { from: accounts[0] })

nft.mint("QmU2LjSr3PVSAb6DwuboSCVwDYt6fnnRwZuptDncLVMgJX", [{recipient: accounts[0], value:1000}]);

https://rinkeby.rarible.com/collection/0xCbdaCDE8A8C0a3ff3169e057640bcD04ddDA8B84






var nft = await Kiwie1001.at("0xA9b2D27FD81cB0A5195b5974A83CDCBDe5db1Af9");
nft.mint("QmRhbVYTdsV4t8mN61VQBSynuCNTJtwSpcV29ZG9i917Hd", [{recipient: accounts[0], value:1000}]);


=========================================================
nft.mint("Qma4cMcDa1dVyKAS7NS96vAmABsLW3jWuat2xVYFe9w5z2", [{recipient: accounts[0], value:1000}]);
nft.mint("QmaA99m1CuoYa3ybaGAN8vy1mBCE1ngLnncYzzTZz6BeK8", [{recipient: accounts[0], value:1000}]);
nft.mint("Qme33bFbMnYNz8KzDpgt4kPRApVHS24HtjLWbwebzk87mh", [{recipient: accounts[0], value:1000}]);
nft.mint("QmcvN1gSP6zhkjR9To4P8NAqjvW2hw24D2LMbyNzMsRRBi", [{recipient: accounts[0], value:1000}]);
nft.mint("QmcfPPwKHYscatmxUdpieAT75apUbYnR2pHKyNwqTwsETh", [{recipient: accounts[0], value:1000}]);

================DROP2=========================================


//Mainnet
truffle console --network mainnet
nft = await Kiwie1001.at("0xA9b2D27FD81cB0A5195b5974A83CDCBDe5db1Af9");

//Rinkeby
truffle console --network rinkeby
nft = await Kiwie1001.deployed()

nft.mint("Qmaecd9NWnNEWb7LYNsnQG8KSYBbj76gG9NLwNmoy88K9g", [{recipient: accounts[0], value:1000}]);
nft.mint("QmNUB9tmXLZ9r431Yid668FhrCh24o6YsjrWQvoYf6814S", [{recipient: accounts[0], value:1000}]);
nft.mint("QmTSBSxQ2UtiQyJFJCHgTvVaHGhu92NJ3pXPswtQGwAyXH", [{recipient: accounts[0], value:1000}]);
nft.mint("QmYkiiRw1bK3X5b7TutSsU7eScHnZseriwDpgAapUAAHBC", [{recipient: accounts[0], value:1000}]);

nft.mint("Qme9ztxLUCxhMk7zEriuAdrGjTdu1dbPagqrotMGjWxW38", [{recipient: accounts[0], value:1000}]);
nft.mint("QmdtAZcTLZorx5cYzHTPggBAfKGXvYEhzCccoMhQUU2fP9", [{recipient: accounts[0], value:1000}]);



================DROP3=========================================
//Mainnet
truffle console --network mainnet
nft = await Kiwie1001.at("0xA9b2D27FD81cB0A5195b5974A83CDCBDe5db1Af9");

//Rinkeby
truffle console --network rinkeby
nft = await Kiwie1001.deployed()

nft.mint("QmcvQRVMdEH55gypLJz1NWyfZHbTCzpZssbgkZVdfNmG7Y", [{recipient: accounts[0], value:1000}]);
nft.mint("QmasW9oUAtyyo3ComUysvdzduGFeoDDV8g1FtqCVvsYYeN", [{recipient: accounts[0], value:1000}]);
nft.mint("QmQtfEBXaiUrwHo6qcwfBs1N7HWx5B7WffdJtytReWTtEV", [{recipient: accounts[0], value:1000}]);
nft.mint("QmSWHvChyhYy3zCHbms3cfHxh1bKexYiuJkqjRjAta3xwa", [{recipient: accounts[0], value:1000}]);
nft.mint("QmcSQdeKPhAa29xUCjb2H13pFkdpP6pHNEog6MfvakbFYD", [{recipient: accounts[0], value:1000}]);
nft.mint("Qmcyevw66QNNa1PiTYjQqfRuJBPTarbsMKLpezZDQgYmGK", [{recipient: accounts[0], value:1000}]);
nft.mint("QmXFTnkNF53JWnHRugpf7EYv3QrdCNfmSLBCzAvbjNXZB4", [{recipient: accounts[0], value:1000}]);

===VVVb bulsshit
QmWKMW5CBXeac1Wdqhvk9JR2Bh9RLoqzwm6JKaExinfPoL

nft = await Kiwie1001.deployed()
nft.mint("QmaNbXGbCfTTqEym2K92cSeg2wt26tEpfjzbs8Fe6ZkE3m", [{recipient: accounts[0], value:1000}]);

11.21.2021 7:00 PM
11.23.2021 7:00 PM

================DROP4=========================================
//Mainnet
truffle console --network mainnet
nft = await Kiwie1001.at("0xA9b2D27FD81cB0A5195b5974A83CDCBDe5db1Af9");

//Rinkeby
truffle console --network rinkeby
nft = await Kiwie1001.deployed()


nft.mint("QmYQYr9QUhs8tD2hYqKY9o4mPvBE3MuhBdisbLoTBWQ5Wd", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmfC9TibPmqp8PvFUgiW1yDoQ1Sk5m3B9gPx48MrEswPGd", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmcwysarJ9nSXyPC9RPUy8m1B3vjeQj4sbH7bUx71Awu8R", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmQsP58Sfv2iYcc5jH558nSidZ2kWxRiewXpt8N3VvdPom", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmSsAd4tCwEvBm5WJs3TNppsLN4ujVUcRuEFDkQcZZpZxQ", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmPFm1YmKZUDt5R3SYJYt8zBhCxJMF36SkGzbvdV9P89xh", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmXdbrERr3QXVp6HSJeyZmgo48Hv8BXA8Y4WYMMybDq6jn", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmPZPDKNBuDZiBtZw5DS1suMYGWxCWii7JpZwH8EqPNqVa", [{recipient: "0x58cebe12FDD80b46283A8eBa69B11145A226b0f2", value:1000}]);

nft.mint("QmP6B9MjVqAmTpZduNk2vMcsjsxTWaaejPiwrcufphWLhr", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);




================DROP5=========================================
truffle console --network mainnet
nft = await Kiwie1001.at("0xA9b2D27FD81cB0A5195b5974A83CDCBDe5db1Af9");

nft.mint("QmTwz3HVKxsJvgYZxHRE5aBEfjThJjpQEzBWq1L4519VuR", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmdCeg5fnSrcZvwZdoqLWebePgduCVi8qB8KVsUqcPZp1D", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("Qmf2N6ziPJxaxQKrJirsMqZfXvxKVMbRozkmMGPqCkfm63", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmVP6a3s3LB6nvxynsQk8BQJeAZw6hbwToNNdByLhF1d4q", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmSVaVaDUbhFAjsVaDZnieBn2WYAzPa7RKxoHsHDZqKKtr", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmXzqYUwp1Wqu5dJaF3YzP9maMZHg9fySVEnATZnpRS1Ew", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmaPwCfC8pXLYXWsAXqA6uLZXEetqX33snHVo21m9V7aYv", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
nft.mint("QmdJV8DEw6j5BbirqfhgbFhqwnmMmhfVxFycWc58kxd14e", [{recipient: "0x207F86e2795666365747aAF1e86A4114bEbD6FAB", value:1000}]);
