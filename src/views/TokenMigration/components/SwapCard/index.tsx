import React, { useState } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, Card, CommunityIcon, Flex, Heading, PrizeIcon, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useAppDispatch } from 'state'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { EnableStatus, SwapCardProps } from './types'
import useUpgradeSwapApprove from '../hooks/useUpgradeSwapApprove'
import SwapCardActions from './SwapCardActions'

const Body = styled.div`
  align-items: start;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.md} {
    align-items: center;
    flex-direction: row;
    font-size: 40px;
  }
`

const Info = styled.div`
  flex: 1;
  padding: 0px;
  padding-top: 15px;
  padding-left: 15px;
  width: 100px;
`

const InfoButton = styled.div`
  flex: 1;
  padding: 30px;
  margin-left: auto;
  
`

const InfoMiddle = styled.div`
  flex: 1;
  margin-left: auto;
  width: 100px;
`

const InfoLast = styled.div`
  flex: 1;
  padding: 15px;
  padding-left: 25px;
`

const Avatar = styled.img`
  border-radius: 50%;
`

const TitleHead = styled(Heading).attrs({ as: 'span' })`
  font-size: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
`

const MobileAvatar = styled.div`
  flex: none;
  margin-right: 8px;

  ${Avatar} {
    height: 64px;
    width: 64px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const StyledTeamCard = styled(Card)`
  margin-bottom: 16px;
`

const SwapCard: React.FC<SwapCardProps> = ({
  oldMochiTokenAddress,
  oldMochiTokenBalance,
  bMochiTokenAddress,
  bMochiTokenBalance,
  isLoading,
}) => {
  const { t } = useTranslation()
  return (
    <StyledTeamCard>
      <Flex>
        
        <Info>
          <Flex alignItems="start" mb="16px" ml="52px">
            <Heading scale="md" color="textSubtle">
              <TitleHead>Old hMOCHI Balance</TitleHead>
            </Heading> 
          </Flex>
          
          <Flex alignItems="end" mb="16px" ml="52px">
            <Heading scale="md" color="textSubtle">
              {getFullDisplayBalance(oldMochiTokenBalance, 18, 6)}
            </Heading> 
          </Flex>
          
        </Info>
        
        <InfoMiddle>
          
          <SwapCardActions 
            oldMochiTokenAddress={oldMochiTokenAddress}
            oldMochiTokenBalance={oldMochiTokenBalance}
            bMochiTokenAddress={bMochiTokenAddress}
            bMochiTokenBalance={bMochiTokenBalance}
            isLoading={isLoading}
          />
          
        </InfoMiddle>

        <InfoLast>
          
          <Flex alignItems="center" mb="16px" ml="52px">
            <Heading scale="md" color="textSubtle">
              <TitleHead>New hMOCHI Balance</TitleHead>
            </Heading> 
          </Flex>
          
          <Flex alignItems="end" mb="16px" ml="52px">
            <Heading scale="md" color="textSubtle">
              {getFullDisplayBalance(bMochiTokenBalance, 18, 6)}
            </Heading> 
          </Flex>
        
        </InfoLast>
        
      </Flex>
      
    </StyledTeamCard>
  )
}

export default SwapCard
