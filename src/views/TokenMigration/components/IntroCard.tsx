import React from 'react'
import { Button, Card, CardBody, Flex, Heading, Text, LinkExternal } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
// import {  } from 'react-router-dom'

const IntroCard = () => {
  const { t } = useTranslation()

  return (
    <Card mb="32px" isActive>
      <CardBody>
        <Flex
          alignItems={['start', null, 'center']}
          justifyContent={['start', null, 'space-between']}
          flexDirection={['column', null, 'row']}
        >
          <div>
            <Heading scale="lg" mb="8px">
              {t('Swap your old hMOCHI for new hMOCHI here.')}
            </Heading>
            <Text>{t('You can only do this for a limited time!')}</Text>
          </div>
          
            <Button id="teamsPageSetUpProfile" mt={['16px', null, 0]}>
              <LinkExternal href="https://docs.mochiswap.io" color="white"> {t('Learn More')} </LinkExternal>
            </Button>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default IntroCard
