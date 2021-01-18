import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../templates/layout'
import SEO from '../components/seo'

const ResourcePage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title='Resource'/>
            <article className="container px-4 py-24 mx-auto md:w-3/4 lg:w-2/4">
                <div className="w-full mx-auto mb-12 text-center md:w-2/3">
                    <p className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Development</p>
                    <h1 className="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl"
                        title="Rise of Tailwind - A Utility First CSS Framework">
                        GTD
                    </h1>
                    <p className="text-gray-700">
                        Written by
                        <span className="byline author vcard">
                        <a href="/about" target="_blank"
                           className="text-primary hover:text-primary-dark"><span> Max </span></a>
                    </span>
                        on <time>Jan 02 2021</time>
                    </p>
                </div>
                <div className="mx-auto prose articleContent">
                    <h4>GTD流程</h4>
                    <ul>
                        <li>写下所有你需要记住</li>
                        <li>将任务分解到非常简单</li>
                        <li>明确先后次序</li>
                        <li>先完成一个任务再开始新的任务</li>
                    </ul>

                    <h4>Plans - <small>from Brian Tracy</small></h4>
                    <ul>
                        <li>有远大的梦想——设法想像并设计出令人兴奋的成功蓝图。</li>
                        <li>构想一个清晰的发展方向——学会制订一个可以改变你生活的有效而确的目标。</li>
                        <li>要做自己的主人——设法完全掌握自己的职业和生活。</li>
                        <li>做你喜欢做的事——确定自己理想的工作，并能获得好的报酬。</li>
                        <li>工作出类拔萃——努力进入本领域前10%的行列。</li>
                        <li>工作更努力，时间更长——设法安排好你的时间，以便完成更多的工作，创造更多的价值。</li>
                        <li>活到老学到老——不断提高你的才能和本领。</li>
                        <li>优先付给自己——一生之中始终存储并投资你10%的收入百块，退休一百万。</li>
                        <li>学会掌握本行业的细节——努力成为所选定领域的行家能手。</li>
                        <li>热诚致力于服务他人——这是一切个人成功之起点，努力去做。</li>
                        <li>对己对人都要绝对真诚——个人的真诚总是与成功并肩而行。</li>
                        <li>分清主次，精力集中——关键是把精力和时间投入到最重要的工作中去。</li>
                        <li>树立一个办事迅速可靠的名声——由此你无论做何事都具有获胜的优势。</li>
                        <li>做从一个高峰到更高一峰的准备——要有长远眼光，做的未来计划，并拒绝日常有短期巨大情绪波动。</li>
                        <li>凡事注意自律——提高这一走向成功的最重要的品质。</li>
                        <li>发挥你内在的创造力——学会解决任何难题，克服任何障碍，达到任何目标。</li>
                        <li>与值得结交的人相处——在事业的阶段你身边都有有成就的人，这很重要。</li>
                        <li>倍加重视有一个健康的身体——努力提高健康水平，保持精力旺盛。</li>
                        <li>果敢并勇于行动——白手起家的百万富翁的一个标志就是他们仔细地思考并快速地做出决定，并勇于尝试。</li>
                        <li>绝不考虑失败的可能——记住：失败本身并不存在。失败让你更强大更有弹性更坚决。正是由于害怕失败或想象失败才使你的思想和行动停止不前，并牵绊着让你无法获得巨大的成功。</li>
                        <li>做成任何事情都不可缺少这两个特质：坚持和决心——没有坚持就没有成功，所以经常通过潜意识激励自己攻克难关坚持到底是很重要的;只要你下定决心并坚持去做，你就能获得成功。</li>
                    </ul>
                </div>
            </article>
        </Layout>
    )
}


export default ResourcePage
export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`