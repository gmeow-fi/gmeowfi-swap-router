import { ethers } from 'hardhat'
import { ContractFactory, Contract } from 'ethers'
import { deployContract, deployContractWithArtifact } from './helper'

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contracts with the account:', deployer.address)
  console.log(
    'Account balance:',
    ethers.parseUnits((await ethers.provider.getBalance(deployer.address)).toString(), 'wei').toString()
  )
  const v3Factory = {
    address: '0xaE218256bB7aD772F04c78D5fCb64E9AC73A22DA',
  }
  const v2Factory = {
    address: '0x3874db48bBDD965DA824BE998f63f5cF689D4f79',
  }
  const weth = {
    address: '0x4200000000000000000000000000000000000006',
  }
  const nftPositionManager = {
    address: '0x959F24517aEecC15F718dFd9F29EBb61195C59BA',
  }

  const swapRouter2 = await deployContract(
    'SwapRouter02',
    [v2Factory.address, v3Factory.address, nftPositionManager.address, weth.address],
    'SwapRouter02',
    {}
  )
  console.log(
    'Account balance:',
    ethers.parseUnits((await ethers.provider.getBalance(deployer.address)).toString(), 'wei').toString()
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
