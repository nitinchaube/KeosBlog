
import Layout from "../../../components/Layout";
import Link from "next/link";
import Admin from "../../../components/auth/Admin";
import CreateBlog from "../../../components/crud/BlogCreate"



const BlogCreate= () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create a new BLOG</h2>
                            <p><CreateBlog/></p>
                        </div>
                       
                        
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default  BlogCreate;
    ;
