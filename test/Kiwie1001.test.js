const { assert } = require('chai');

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

        it('has a contractURI', async() => {
            const contractURI = await contract.contractURI();
            //console.log("Contract uri: " + contractURI)
            assert.isTrue(!!contractURI);
        });

        it('has a tokenURIPrefix', async() => {
            const baseURI = await contract.tokenURIPrefix();
            //console.log("Base uri: " + baseURI)
            assert.isTrue(!!baseURI);
        });
    })


    describe('minting', async() => {
        it('creates a new token', async() => {
            const result = await contract.mint("mintTokenUri", "aliveIPFSHash", [{recipient: accounts[0], value:200}, {recipient: accounts[1], value:100}], {from: accounts[0]});
            const totalSupply = await contract.totalSupply();
            //Success 
            assert.equal(totalSupply, 1);
            const event = result.logs[0].args;
            assert.equal(event.tokenId.toNumber(), 1, 'id is correct');
            //assert.equal(event.from, '0x000000000000000000000000000000000000000')
            assert.equal(event.to, accounts[0], 'Reciever is correct');

            const token = await contract.tokenOfOwnerByIndex.call(accounts[0], 0)
            //console.log("Minted tokenUri:", await contract.tokenURI(token));
        });


        it('only owner can kill it once', async() => {
            const tokenId = await contract.tokenOfOwnerByIndex.call(accounts[0], 0);

            const tokenUri1 = await contract.tokenURI(tokenId);

            await contract.kill(tokenId, "deadTokenUri", "deadIPFSHash", {from: accounts[1]}).should.be.rejected;

            await contract.kill(tokenId, "deadTokenUri", "deadIPFSHash", {from: accounts[0]})
            const tokenUri2 = await contract.tokenURI(tokenId);
            //console.log("Uri before detah:" + tokenUri1);
            //console.log("Uri after death:" + tokenUri2);

            assert.notEqual(tokenUri1, tokenUri2);

            await contract.kill(tokenId, "deadTokenUri", "deadIPFSHash").should.be.rejected;
        });

        it('only owner can mint', async() => {
            await contract.mint("mintTokenUri", "aliveIPFSHash", [{recipient: accounts[0], value:200}], {from: accounts[1]}).should.be.rejected;
        });
    });


    describe('setting data', async() => {
        it('Only owner can set tokenUriPrefix', async() => {
            await contract.setTokenURIPrefix("prefix/", {from: accounts[1]}).should.be.rejected;
            await contract.setTokenURIPrefix("prefix/", {from: accounts[0]}).should.be.fulfilled;
        });

        it('Only owner can set contract uri', async() => {
            await contract.setContractURI("contractPrefix/", {from: accounts[1]}).should.be.rejected;
            await contract.setContractURI("contractPrefix/", {from: accounts[0]}).should.be.fulfilled;
        });

        it('Only owner can set token uri', async() => {
            await contract.setTokenURI(1, "tokenUri", {from: accounts[1]}).should.be.rejected;
            await contract.setTokenURI(1, "tokenUri", {from: accounts[0]}).should.be.fulfilled;
        });

    });

    describe('retrieving data', async() => {
        it('List token specific data', async() => {
            var printf = require('printf');
            //Mint 3 tokens
            await contract.mint("mintTokenUri2", "aliveIPFSHash2", [{recipient: accounts[0], value:200}, {recipient: accounts[1], value:100}]);
            await contract.mint("mintTokenUri3", "aliveIPFSHash3", [{recipient: accounts[0], value:200}, {recipient: accounts[1], value:100}]);
            await contract.mint("mintTokenUri4", "aliveIPFSHash4", [{recipient: accounts[0], value:200}, {recipient: accounts[1], value:100}]);

            const totalSupply = await contract.totalSupply();

            for (var i = 0; i < totalSupply; i++) {
                const tokenId = await contract.tokenByIndex(i);

                const tokenUri = await contract.tokenURI(tokenId);
                const alive = await contract.isAlive.call(tokenId);
                const aliveIPFS = await contract.aliveIPFSHash.call(tokenId);
                const ghostIPFS = await contract.ghostIPFSHash.call(tokenId);

                //const fee = await contract.getFeeBps.call(tokenId);
                //console.log(fee);

                //console.log(printf('Tokenid:[%s] uri:[%s], isAlive:[%s], aliveipfs:[%s], ghostIpfs:[%s]', tokenId, tokenUri, alive, aliveIPFS, ghostIPFS));
                
                assert.isTrue(!!aliveIPFS);
                assert.isTrue(!!tokenUri);

                if (alive) {
                    assert.isFalse(!!ghostIPFS);
                } else {
                    assert.isTrue(!!ghostIPFS);
                }
            }
        });
    });




})