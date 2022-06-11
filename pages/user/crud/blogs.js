
import Layout from "../../../components/Layout";
import Link from "next/link";
import Private from "../../../components/auth/Private";
import BlogRead from "../../../components/crud/BlogRead"
import {isAuth} from '../../../actions/auth'



const CategoryTag= () => {
const username= isAuth() && isAuth().username;      //signin user is stored in localstorage
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row ml-5">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Update Blogs</h2>
                            
                        </div>
                        <div className="col-md-6">
                            <BlogRead username={username}/>
                        </div>
                        
                    </div>
                </div>
            </Private>
        </Layout>
    )
}

export default  CategoryTag;
    ;
