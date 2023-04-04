import React from 'react'
import { Button, AutoRenewIcon, Skeleton } from '@pancakeswap/uikit'
import { useOldMochi, useUpgradeSwapContract } from 'hooks/useContract'
import { useTranslation } from 'contexts/Localization'
import styled, { DefaultTheme } from 'styled-components'
import useUpgradeSwapApprove from '../../hooks/useUpgradeSwapApprove'


interface ApprovalApprovalActionProps {
  isLoading?: boolean
}

const StyledButton = styled(Button)`
  margin-top: 30px;
`

const SwapApprovalAction: React.FC<ApprovalApprovalActionProps> = ({ isLoading }) => {
  const { t } = useTranslation()
  const swapContract = useUpgradeSwapContract()
  const oldMochi = useOldMochi()
  const {onApprove, requestedApproval} = useUpgradeSwapApprove(oldMochi, swapContract.address)
  return (
    <>
      {isLoading ? (
        // <Skeleton width="100%" height="52px" />
        <AutoRenewIcon spin color="currentColor" mt="5px" width="100px" />
      ) : (
        <StyledButton
          isLoading={requestedApproval}
          endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor" width="40px" /> : null}
          disabled={requestedApproval}
          onClick={onApprove}
          width="100%"
        >
          {t('Enable')}
        </StyledButton>
      )}
    </>
  )
}

export default SwapApprovalAction
