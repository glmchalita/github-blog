import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { MarkdownBody } from './styles'

type MarkdownRendererProps = {
  children: string
}

export function MarkdownRenderer({
  children: markdown,
}: MarkdownRendererProps) {
  return (
    <MarkdownBody
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '')

          return !inline && match ? (
            <SyntaxHighlighter
              style={dracula}
              PreTag="div"
              language={match[1]}
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {markdown}
    </MarkdownBody>
  )
}
