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
    address: '0x22Ae5d5a0Aa4d2763BE2A9090E1ea85E9BBE1f6b',
  }
  const v2Factory = {
    address: '0xcE9dfc76AA9665865B5138dcc5052dE47981dE6B',
  }
  const weth = {
    address: '0x4200000000000000000000000000000000000006',
  }
  const nftPositionManager = {
    address: '0xdF90a7E2d144d5e205C55DAd27D5d95DEad773D1',
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
