import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'ethers'
import { BIG_ZERO } from 'utils/bigNumber'
import { useOldMochi, useUpgradeSwapContract } from 'hooks/useContract'
import useLastUpdated from 'hooks/useLastUpdated'


export const useCheckSwapApprovalStatus = () => {
  const [isSwapApproved, setIsSwapApproved] = useState(false)
  const { account } = useWeb3React()

  // Swap Contract needs to have allowanace of oldMOCHI
  const oldMochiContract = useOldMochi()
  const upgradeSwapContract = useUpgradeSwapContract()
  const { lastUpdated, setLastUpdated } = useLastUpdated()

  useEffect(() => {
    const checkApprovalStatus = async () => {
      try {
        const response = await oldMochiContract.allowance(account, upgradeSwapContract.address)
        console.log('checkApprovalStatus response', response)
        const currentAllowance = new BigNumber(response.toString())
        setIsSwapApproved(currentAllowance.gt(0))
      } catch (error) {
        setIsSwapApproved(false)
        console.log('checkApprovalStatus error', error)
      }
    }

    checkApprovalStatus()
  }) // [account, oldMochiContract, upgradeSwapContract, lastUpdated, isSwapApproved] | cakeVaultContract, lastUpdated

  return { isSwapApproved, setLastUpdated }
}
