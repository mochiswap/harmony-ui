import { Currency, ETHER, HARMONY, Token, MOCHI } from '@pancakeswap/sdk'
import { HarmonyIcon, MochiIcon } from '@pancakeswap/uikit'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import getTokenLogoURL from '../../utils/getTokenLogoURL'
import Logo from './Logo'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER || currency === HARMONY) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }
      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER || currency === HARMONY) {
    return (
      <HarmonyIcon width={size} height={size} style={style} />
    )
  }
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  console.log(currency)
  // console.log(MOCHI)
  // console.log(currency.symbol === "hMOCHI")
  // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  if (currency && currency.name === "hMOCHI") {
    return (
      <MochiIcon width={size} height={size} style={style} />
    )
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
