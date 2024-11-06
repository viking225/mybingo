import { RuleTester } from '@typescript-eslint/rule-tester'
import { rule } from './disable-div-in-jsx'
import {afterAll} from "vitest";
const test = new RuleTester({  languageOptions: {
        parserOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true
            }
        },
    },});

test.run('disable-div-in-jsx', rule, {
    valid: [
        {code: `<view test-id="all"></view>`},
        {code: `<span test-id="all"></span>`},
        {code: `<input test-id="all"></input>`}
    ],
    invalid: [
        {code: `<div
                    class="2000"
                    test-id="all">
                    my big div
                </div>`
            , output: `<View
                    class="2000"
                    test-id="all">
                    my big div
                </View>`, errors: [{messageId: 'avoidDiv'}] },
        {code: `<div test-id="all"></div>`, output: '<View test-id="all"></View>', errors: [{messageId: 'avoidDiv'}] },
        {code: `<div test-id="all"/>`, output: '<View test-id="all"/>', errors: [{messageId: 'avoidDiv'}]}
    ]
})

afterAll(() => {
    console.log('All tests were runned')
})