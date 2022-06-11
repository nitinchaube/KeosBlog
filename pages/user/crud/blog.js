
import Layout from "../../../components/Layout";
import Link from "next/link";
import Private from "../../../components/auth/Private";
import CreateBlog from "../../../components/crud/BlogCreate"



const BlogCreateUsers= () => {
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create a new BLOG</h2>
                            <p><CreateBlog/></p>
                        </div>
                       
                        
                    </div>
                </div>
            </Private>
        </Layout>
    )
}

export default  BlogCreateUsers;
    ;
