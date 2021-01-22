import React, {useState} from 'react';
import {graphql} from 'gatsby';
import Layout from '../templates/layout';
import SEO from '../components/seo';
import List from "../components/list"

const BlogIndex = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title || `Title`;
    const posts = data.allMdx.nodes;
    const [pos, setPos] = useState(posts);
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
            <section className="flex justify-between container mx-auto pt-12 pb-12 mx-auto md:w-3/4 lg:w-2/4">
                <aside className="-mx-8 w-3/12 hidden lg:block">
                    <div className="px-8">
                        <ul className="text-right">
                            {
                                cates.map((ite, ind) => {
                                    return (<li key={ite}><a className="catelink" onClick={() => filteArr(ite)}>{ite}</a></li>)
                                })
                            }
                        </ul>
                    </div>
                </aside>
                <div className="w-full lg:w-9/12">
                    {pos.map(List)}
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
                }
            }
        }
    }
`;