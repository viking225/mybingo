import { ESLintUtils, TSESTree, TSESLint } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
    name => `https://example/com/rule/${name}`
)

export const rule = createRule({
    name: 'disable-div-in-js',
    meta: {
        schema: [],
        fixable: "code",
        messages: {
          avoidDiv: "Avoid using div since they are not supported by React native in all platform"
        },
        type: "problem",
        docs: {
            description: "React native doesnt allow div usage, use view instead to separate elements"
        },
    },
    create: function(context) {

        return {
            JSXElement(node: TSESTree.JSXElement) {
                const isIdentifier = node.openingElement.name.type === 'JSXIdentifier'
                const isDivElement = node.openingElement.name.name === 'div'
                const hasClosingElement = node.closingElement && node.closingElement.name.name  === 'div'
                const fixes: ((fixer: TSESLint.RuleFixer) => TSESLint.RuleFix)[] = []
                if (isIdentifier && isDivElement) {
                    fixes.push((fixer: TSESLint.RuleFixer) => fixer.replaceText(node.openingElement.name, "View"))

                    if (hasClosingElement) {
                        fixes.push((fixer: TSESLint.RuleFixer) => fixer.replaceText(node.closingElement.name, "View"))
                    }
                }
                    if (fixes.length) {
                        context.report({node: node.openingElement.name, messageId: 'avoidDiv', fix(fixer) {
                            return fixes.map(fn => fn(fixer))
                            }})
                    }

            }
        }
    },
    defaultOptions: []
})
