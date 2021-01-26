import React, {useState} from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../templates/layout';
import SEO from '../components/seo';
import ListByYear from '../components/listByYear'

const BlogIndex = ({data, location}) => {


    const siteTitle = data.site.siteMetadata.title || `Title`;
    const posts = data.allMdx.nodes;
    const hash = location.hash.replace(/#/,'');
    const resultPosts = (!hash || hash === 'all') 
    ? [].concat(posts)
    : posts.filter( (iit,iin) => iit.frontmatter.category === hash) ; 
    const [pos, setPos] = useState(resultPosts);
    const categories = {}, cates = [];
    categories.all = posts;
    posts.forEach((ite, ind) => {
        const name = ite.frontmatter.category;
        if (!categories[name]) {
            categories[name] = []
        }
        categories[name].push(ite);
    });

    for (let key in categories) {
        cates.push(key)
    }
    cates.sort(function(a, b){
        if(b === 'all') { return 1; }
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    })
    const filteArr = (name) => {
        const filterArray = categories[name];
        setPos(filterArray);
    }

    if (posts.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <SEO title='All posts'/>
                <p>No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the
                    "gatsby-source-filesystem" plugin in gatsby-config.js).</p>
            </Layout>
        );
    }
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title='All posts'/>
            <section className="justify-between container mx-auto pt-4 pb-12 w-full mx-auto mb-12 text-left md:w-3/4 lg:w-full max-w-4xl">
            <div className="list-wrapper px-6 md:px-0">
                <ul className="flex flex-wrap tagList mb-8">
                    {
                        cates.map((ite, ind) => {
                            return (<li key={ite}><Link to={
                                ite === 'all' ? '/' : `#${ite}`
                                } className={`catelink type${ind}`} onClick={() => filteArr(ite)}>
                                {ite !== 'js' ? ite : 'javascript' }
                            </Link></li>)
                        })
                    }
                </ul>
            </div>
            <div className="w-full">
                <ListByYear props={pos}/>
            </div>
            </section>
        </Layout>
    );
};

export default BlogIndex;
export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                fields {
                    slug
                }
                frontmatter {
                    excerpt
                    date(formatString: "MM-DD YYYY")
                    title
                    tag
                    category
                    featured
                }
            }
        }
    }
`;