import { IconType } from 'react-icons/lib'
import { SiTwitter } from 'react-icons/si'
import { IoMoon } from 'react-icons/io5'

import { TWITTER_PROFILE } from '../constants'

type BaseItem = {
    title: string
}

export type PageItem = BaseItem & {
    href: string
}

export type SocialItem = BaseItem & {
    href: string
    icon: IconType
}

export type ThemeItem = BaseItem & {
    id: 'theme'
    icon: IconType
}

export type SearchItemsType = {
    pages: PageItem[]
    social: SocialItem[]
    theme: ThemeItem[]
}

export const searchItems: SearchItemsType = {
    pages: [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Blog',
            href: '/blog',
        },

        {
            title: 'Tools',
            href: '/tools',
        },
        {
            title: 'Gear',
            href: '/gear',
        },
    ],
    social: [
        {
            title: 'Twitter',
            icon: SiTwitter,
            href: TWITTER_PROFILE,
        },
    ],
    theme: [
        {
            id: 'theme',
            title: 'Change theme',
            icon: IoMoon,
        },
    ],
}
