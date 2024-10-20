import { ESLintUtils, TSESTree } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
    name => `https://example/com/rule/${name}`
)

export const rule = createRule({
    name: 'disable-div-in-js',
    meta: {
        schema: [],
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
                if (isIdentifier && isDivElement) {
                    context.report({node: node.openingElement.name, messageId: 'avoidDiv'})
                }
            }
        }
    },
    defaultOptions: []
})
