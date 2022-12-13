const main = async() => {
  const contractFactory = await ethers.getContractFactory('TwitterContract');
  // its going to go to the contracts folder and search for TwitterContract 
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log("Contract deployed to: ", contract.address);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();