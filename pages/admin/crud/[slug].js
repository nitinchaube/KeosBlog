
import Layout from "../../../components/Layout";
import Link from "next/link";
import Admin from "../../../components/auth/Admin";
import BlogUpdate from "../../../components/crud/BlogUpdate"



const AdminCrud= () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Update BLOG</h2>
                            <p><BlogUpdate/></p>
                        </div>
                       
                        
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminCrud;
    
