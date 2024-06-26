# Blizzard Product Parser
A tool for parsing Blizzard Battle.net `product.db` file.

## Install
With yarn:

`yarn add blizzard-product-parser`

Or using npm:

`npm install blizzard-product-parser`

## Usage

### Contructing
```
import {BlizzardParser} from 'blizzard-product-parser'
const blizzardParser = new BlizzardParser()
```
`BlizzardParser()` will constructed with the default `product.db` path of your system ( Windows or macOS only ).

If you want to set the path manually, you can either get it done by:

`const blizzardParser = new BlizzardParser('/your/path/to/product.db')`

Or

```
const blizzardParser = new BlizzardParser()
blizzardParser.setPath('/your/path/to/product.db')
```

If you don't set the path and your system is not Windows or macOS, an error will be throwed since the path will be `null`.

### Decode a `product.db`
Simply call `blizzardParser.decode()` and it will be done.

An error will be throwed if `product.db` does not exist at your path.

Following functions needs you to `decode()` first, or it will throw an error.

### Get list of installed products
`blizzardParser.getProducts()` will return the **uid** of all install products in array.

### Get installed path of a determined product
`blizzardParser.getInstallPath(uid)`

If uid is invalid or not installed, this will return `false`.

### Get raw decoded string
`blizzardParser.getRaw()` will return an object with all the parsed raw data.

## Build
```
yarn
yarn build
```

## Credits
Protobuf description file was originally from [overtools/TACTLib](https://github.com/overtools/TACTLib/blob/master/TACTLib/Agent/Protobuf/ProtoDatabase.proto)
