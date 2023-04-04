import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
      // {
      //   label: t('LP Migration'),
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Token Migration'),
    icon: 'SunIcon',
    href: '/migrate',
  },
  {
    label: t('V1 Farms'),
    icon: 'FarmIcon',
    href: 'https://harmony-legacy.mochiswap.io',
  },
  // {
  //   label: t('V1 Farms'),
  //   icon: 'FarmIcon',
  //   href: 'https://one.mochiswap.io',
  // },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   href: 'https://docs.mochiswap.io',
  // },
  // {
  //   label: t('IFO'),
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Docs'),
        href: 'https://docs.mochiswap.io',
      },
      {
        label: t('Discord'),
        href: 'http://discord.gg/Xq3NjNPadM',
      },
      {
        label: t('Addresses'),
        href: 'https://docs.mochiswap.io/tokenomics',
      },
      {
        label: t('Github'),
        href: 'https://github.com/mochiswap',
      },
      {
        label: t('Partnerships'),
        href: 'https://docs.mochiswap.io/partnerships',
      },
      // {
      //   label: t('Merch'),
      //   href: 'https://mochiswag.com/',
      // },
    ],
  },
]

export default config
