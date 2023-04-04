import React from 'react'
import { Heading, Text } from '@pancakeswap/uikit'
import { useProfile } from 'state/profile/hooks'
import { useTranslation } from 'contexts/Localization'
import HeaderWrapper from 'views/Profile/components/HeaderWrapper'
import IntroCard from './IntroCard'

const TeamHeader = () => {
  const { t } = useTranslation()
  const { isInitialized, profile } = useProfile()
  const showIntroCallout = isInitialized && !profile

  return (
    <>
      {showIntroCallout && <IntroCard />}
      <HeaderWrapper>
        <Heading as="h1" scale="xl" color="secondary" mt="25px">
          {t('Old hMOCHI -> New hMOCHI Upgrade')}
        </Heading>
        <Text bold mt="20px" mb="12px">
          {t('This will burn your legacy hMOCHI tokens and mint you an equal amount of the new hMOCHI tokens.  Our new hMochi token will allow auto compounding pools and a host of new features.')}
        </Text>
      </HeaderWrapper>
    </>
  )
}

export default TeamHeader
