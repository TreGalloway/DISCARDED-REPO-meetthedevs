import { extendTheme, theme as base, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

const purpleRing = (props: any) => ({
    _focus: {
        ringColor: mode('purple.300', 'purple.600')(props),
        ring: 3,
    },
})

const inputBorder = (props: any) => ({
    _focus: {
        borderColor: mode('purple.300', 'purple.600')(props),
    },
})

const theme = extendTheme({
    config,
    styles: {
        global: (props: any) => ({
            body: {
                fontFeatureSettings: 'Oswald',
                bg: mode('white', 'Black')(props),
            },
        }),
    },
    sizes: {
        18: '4.5rem',
    },
    components: {
        Heading: {
            baseStyle: (props: any) => ({
                color: mode('gray.700', 'white')(props),
                letterSpacing: '1px',
            }),
        },
        Text: {
            baseStyle: (props: any) => ({
                color: mode('gray.700', 'white')(props),
            }),
        },
        Link: {
            baseStyle: (props: any) => ({
                ...purpleRing(props),
            }),
        },
        Button: {
            baseStyle: (props: any) => ({
                ...purpleRing(props),
            }),
        },
        Input: {
            variants: {
                filled: (props: any) => ({
                    field: {
                        ...inputBorder(props),
                    },
                }),
            },
        },
        Textarea: {
            variants: {
                filled: (props: any) => ({
                    ...inputBorder(props),
                }),
            },
        },
    },
    colors: {
        twitter: '#1EA1F1',
        purple: {
            50: '#f8f6fb',
            100: '#e5ddf0',
            200: '#cfbfe2',
            300: '#b49cd3',
            400: '#a587ca',
            500: '#906cbd',
            600: '#7e55b3',
            700: '#674198',
            800: '#573781',
            900: '#3f285d',
        },
    },
    fonts: {
        heading: `Cal Sans, ${base.fonts.heading}`,
        body: `Inter, ${base.fonts.body}`,
    },
    mdx: {
        h1: {
            fontSize: '3xl',
            letterSpacing: '1px',
        },
        h2: {
            fontSize: 'xl',
            letterSpacing: '0.8px',
        },
        h3: {
            fontSize: 'md',
            letterSpacing: '0.6px',
        },
        h4: {
            fontSize: 'xs',
            letterSpacing: '0.5px',
        },
    },
})

export default theme
