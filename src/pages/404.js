import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../../content/assets/not-found.svg'

const NotFoundPage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title='404: Not Found'/>
            <div class="gradient min-h-screen flex items-center">
                <div class="container mx-auto p-4 flex flex-wrap items-center">
                    <div class="w-full md:w-5/12 text-center p-4">
                        {/*<image  width="500"   height="500" href={NotFound}   />*/}
                        {/* <img src="./content/assets/not-found.svg" alt="Not Found" /> */}
                    </div>
                    <div class="w-full md:w-7/12 text-center md:text-left p-4">
                        <div class="text-6xl font-medium">404</div>
                        <div class="text-xl md:text-3xl font-medium mb-4">
                            Oops. This page has gone missing.
                        </div>
                        <div class="text-lg mb-8">
                            You may have mistyped the address or the page may have moved.
                        </div>
                        <Link to="/" class="border border-white rounded p-4">Go Home</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
