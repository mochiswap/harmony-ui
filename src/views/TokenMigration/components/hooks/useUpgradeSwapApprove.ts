
import { useCallback, useEffect, useState } from 'react'
import { ethers, Contract } from 'ethers'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'

const useUpgradeSwapApprove = (tokenContract: Contract, spenderAddress: string) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { callWithGasPrice } = useCallWithGasPrice()
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()

  const onApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const tx = await callWithGasPrice(tokenContract, 'approve', [spenderAddress, ethers.constants.MaxUint256])
      const receipt = await tx.wait()
      if (receipt.status) {
        toastSuccess(
          t('Contract Enabled'),
          t('You can now swap old hMOCHI for new hMOCHI!'),
        )
        setRequestedApproval(false)
      } else {
        // user rejected tx or didn't go thru
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      setRequestedApproval(false)
    }
  }, [
    spenderAddress,
    tokenContract,
    callWithGasPrice,
    t,
    toastError,
    toastSuccess,
  ])
  return { onApprove, requestedApproval}
}

export default useUpgradeSwapApprove

// export const useApprovePool = (lpContract: Contract, sousId, earningTokenSymbol) => {
//   const [requestedApproval, setRequestedApproval] = useState(false)
//   const { toastSuccess, toastError } = useToast()
//   const { callWithGasPrice } = useCallWithGasPrice()
//   const { t } = useTranslation()
//   const dispatch = useAppDispatch()
//   const { account } = useWeb3React()
//   const sousChefContract = useSousChef(sousId)

//   const handleApprove = useCallback(async () => {
//     try {
//       setRequestedApproval(true)
//       const tx = await callWithGasPrice(lpContract, 'approve', [sousChefContract.address, ethers.constants.MaxUint256])
//       const receipt = await tx.wait()

//       dispatch(updateUserAllowance(sousId, account))
//       if (receipt.status) {
//         toastSuccess(
//           t('Contract Enabled'),
//           t('You can now stake in the %symbol% pool!', { symbol: earningTokenSymbol }),
//         )
//         setRequestedApproval(false)
//       } else {
//         // user rejected tx or didn't go thru
//         toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
//         setRequestedApproval(false)
//       }
//     } catch (e) {
//       console.error(e)
//       toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
//     }
//   }, [
//     account,
//     dispatch,
//     lpContract,
//     sousChefContract,
//     sousId,
//     earningTokenSymbol,
//     t,
//     toastError,
//     toastSuccess,
//     callWithGasPrice,
//   ])

//   return { handleApprove, requestedApproval }
// }
