import { useCallback } from 'react'
import { tokenUpgradeSwap } from 'utils/calls'
import { useUpgradeSwapContract } from 'hooks/useContract'

const useUpgradeSwap = () => {
  const swapContract = useUpgradeSwapContract()

  const onSwap = useCallback(
    async (amount: string) => {
      await tokenUpgradeSwap(swapContract, amount)
    },
    [swapContract],
  )

  return { onSwap }
}

export default useUpgradeSwap
