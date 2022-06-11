
import Layout from "../../../components/Layout";
import Link from "next/link";
import Admin from "../../../components/auth/Admin";
import BlogRead from "../../../components/crud/BlogRead"



const Blog= () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row ml-5">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Update Blogs</h2>
                            
                        </div>
                        <div className="col-md-6">
                            <BlogRead/>
                        </div>
                        
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default  Blog;
    ;
