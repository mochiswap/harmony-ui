import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PancakeSwap',
  description:
    'The mochiest AMM on Harmony! Earn hMOCHI through yield farming!!!',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Mochiswap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Mochiswap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Mochiswap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Mochiswap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Mochiswap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Mochiswap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Mochiswap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Mochiswap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Mochiswap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Mochiswap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Mochiswap')}`,
      }
    default:
      return null
  }
}
