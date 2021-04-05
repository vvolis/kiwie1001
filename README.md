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

