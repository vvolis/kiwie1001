const { assert } = require('chai')
//const { ethers } = require("hardhat");
//const { Item } = require('react-bootstrap/lib/breadcrumb')

const Kiwie1001 = artifacts.require('./Kiwie1001.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Kiwie1001', (accounts) => {

    let contract

    before(async() => {
        contract = await Kiwie1001.deployed();
    })
    
    //Container for test examples
    describe('deployment', async() => {
        //set of test examples
        it('deploys successfully', async() => {
            const address = contract.address;
            //console.log(address);
            assert.notEqual(address, '');
            assert.notEqual(address, 0x0);
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });

        it('has a name', async() => {
            const name = await contract.name();
            assert.equal(name, 'Kiwie1001');
        });

        it('has a symbol', async() => {
            const symbol = await contract.symbol();
            assert.equal(symbol, 'KIWIE1001');
        });
    })


    describe('minting', async() => {
        it('creates a new token', async() => {
            const result = await contract.mint("mintTokenUri", "aliveIPFSHash", [ {recipient: accounts[0], value:20}]);
            const totalSupply = await contract.totalSupply();
            //Success 
            assert.equal(totalSupply, 1);
            const event = result.logs[0].args;
            assert.equal(event.tokenId.toNumber(), 1, 'id is correct');
            //assert.equal(event.from, '0x000000000000000000000000000000000000000')
            assert.equal(event.to, accounts[0], 'Reciever is correct');

            const token = await contract.tokenOfOwnerByIndex.call(accounts[0], 0)
            console.log("Yoyoyo")
            console.log(await contract.tokenURI(token));
        });


        it('can kill it once', async() => {
            const tokenId = await contract.tokenOfOwnerByIndex.call(accounts[0], 0);

            const tokenUri1 = await contract.tokenURI(tokenId);

            await contract.kill(tokenId, "deadTokenUri", "deadIPFSHash");
            const tokenUri2 = await contract.tokenURI(tokenId);
            console.log(tokenUri1, tokenUri2);

            assert.notEqual(tokenUri1, tokenUri2);

            await contract.kill(tokenId, "deadTokenUri", "deadIPFSHash").should.be.rejected;
        });
    });





    describe('indexing', async() => {
        it('lists kiwies', async() => {
            //Mint 3 tokens
            await contract.mint("mintTokenUri2", "aliveIPFSHash2", []);
            await contract.mint("mintTokenUri3", "aliveIPFSHash3", []);
            await contract.mint("mintTokenUri4", "aliveIPFSHash4", []);

            const totalSupply = await contract.totalSupply();

            let kiwie
            let result = []
            for (var i = 0; i < totalSupply; i++) {
                kiwie = await contract.tokenByIndex(i);

                //console.log(await contract._liveURIs.call(kiwie));
                //VVVV
                //console.log(await contract.tokenURI(i - 1));


                //result.push(color);
            }
            //let expected = ['#EC058E',"#5386E4","#FFFFFF","#000000"]
            //assert.equal(result.join(','), expected.join(','));
        });
    });




})