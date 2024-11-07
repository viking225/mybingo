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
                const openingTagIdentifier = node.openingElement.name as TSESTree.JSXIdentifier
                const closingTagIdentifier = node.closingElement?.name && (node.closingElement.name as TSESTree.JSXIdentifier)

                const isIdentifier = openingTagIdentifier.type === 'JSXIdentifier'
                const isDivElement = openingTagIdentifier.name

                const fixes: ((fixer: TSESLint.RuleFixer) => TSESLint.RuleFix)[] = []
                if (isIdentifier && isDivElement) {
                    fixes.push((fixer: TSESLint.RuleFixer) => fixer.replaceText(openingTagIdentifier, "View"))

                    if (closingTagIdentifier?.name === 'div') {
                        fixes.push((fixer: TSESLint.RuleFixer) => fixer.replaceText(closingTagIdentifier, "View"))
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
