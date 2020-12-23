import React from 'react'
import { Link} from 'gatsby';

const RecommandPost = (props) => {

    const relatedPost = props.allpost.filter((p) => {
        return (p !=null && p.frontmatter != null) ? p.frontmatter.category.indexOf(props.category[0]) !== -1 : {}
    });
    

    var myNewArray = [];
    for (var i = 0; i < 3; i++) {
        const a = relatedPost.splice(Math.random() * (relatedPost.length - 1), 1).pop();
        if(a !== undefined){
            myNewArray.push(a);
        }
    }
    return (
        <section className="text-gray-700 body-font section-more">
  <div className="container py-24 w-full mx-auto prose md:w-3/4 lg:w-2/3">
    <div className="flex flex-col">
      <div className="text-center text-gray-900 pb-24 title-font mb-2 sm:mb-0">
           <h1 className="font-bold text-3xl mb-1">Continue reading</h1>
            Recommended posts from the Max Blog
        </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

          { myNewArray.map((post, index) => {
                return (
                    <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{ post.frontmatter.title }</h2>
                        <p className="text-base leading-relaxed mt-2"> { post.frontmatter.excerpt || post.frontmatter.description }</p>
                        <Link to={ post.fields.slug } className="text-indigo-500 inline-flex items-center mt-3">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </Link>
                    </div>                        
                );
            })}

    </div>
  </div>
</section>
    )
}
export default RecommandPost