import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'

function WorkshopContent({ content }) {
  return (
    <article className="prose prose-lg prose-slate max-w-none 
      prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 
      prose-p:leading-relaxed prose-p:text-slate-700
      prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-blue-500 hover:prose-a:underline
      prose-strong:font-semibold prose-strong:text-slate-900
      prose-code:text-pink-600 prose-code:font-medium prose-code:bg-pink-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-slate-900 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:border prose-pre:border-slate-800
      prose-img:rounded-xl prose-img:shadow-md
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <div className="not-prose rounded-xl overflow-hidden shadow-md my-6 border border-slate-200">
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{match[1]}</span>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                <SyntaxHighlighter
                  style={prism}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{ margin: 0, borderRadius: 0, padding: '1.5rem', backgroundColor: '#f8fafc' }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}

export default WorkshopContent
