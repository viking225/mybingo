import { rule as disableDivInJsx} from './disable-div-in-jsx'


export const plugin = {
    meta: {
        name: '@mybingo/eslint-plugin'
    },
    rules: {
        'disable-div-in-jsx': disableDivInJsx
    }
}
