const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.Private_Key);
  const encryptedJsonkey = await wallet.encrypt(
    process.env.Private_Key_Password,
    process.env.Private_Key
  );
  console.log(encryptedJsonkey);
  fs.writeFileSync("./.encryptedKey.json",encryptedJsonkey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
