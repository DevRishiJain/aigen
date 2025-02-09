<div align="center">
<img src="https://aigenprotocol.com/static/media/aigen-logo-light.fad5403b0fa280336867e8ea8400db40.svg" />
<h3>
Aigen's open-source tools to create AINFTs effortlessly
</h3>
</div>

## deploy AINFTToken smart contract
The smart contract can be found at contracts->AINFTToken.sol
Using Remix IDE, deploy the smart contract to the local Ganache or Goerli testnet. 
It is recommended that you test the smart contract before deploying it to the mainnet.

## create environment variables

#### create a .env file and put these variables

```
ACCOUNT_ADDRESS=0x0000000000000000000000000000000000000000
PRIVATE_KEY=000000000000000000000000000000000000000000000000000000000000000
AINFT_CONTRACT_ADDRESS=0x000000000000000000000000000000000000
PROVIDER_URL=http://0.0.0.0:8545
NFTSTORAGE_TOKEN=<NFTStorage Token>
MODELS_DIR=/Users/apple/aigen
```

## commands

#### install python dependencies

```
pip install -r requirements
```

#### extract model weights and create shards in a single command

```
python main.py -n "Test" -m "<path-to-model.h5>" -no 20
```
provide model name, model path and no of ainfts to create
* For the time being, we only support Keras models

## code

### extract and save model weights

```
from ai import save_model
save_model(model_name=model_name, model_dir=MODELS_DIR, model_path=model_path)
```

provide model name and local model path to start extracting weights

### create shards of model weights

```
from ai import create_shards
create_shards(model_name=model_name, model_dir=MODELS_DIR, no_of_ainfts=no_of_ainfts)
```

provide model name and no of ainfts to create. This function will automatically create shards from model weights

### install node dependencies

```
npm install

or 

yarn
```

### mint ainfts

```
npm run ainft --action="createAINFT" --model_name="Test" --model_dir="/Users/apple/aigen/test"
```
this step will deploy files to NFTStorage and mint AINFTs

## License

<a href="https://github.com/aigenprotocol/aigen/blob/master/LICENSE"><img src="https://img.shields.io/github/license/aigenprotocol/aigen"></a>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
