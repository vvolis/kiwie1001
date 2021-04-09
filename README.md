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