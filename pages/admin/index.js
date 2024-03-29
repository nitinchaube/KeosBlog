
import Layout from "../../components/Layout";
import Link from "next/link";
import Admin from "../../components/auth/Admin";

const AdminIndex= () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin's Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Tags</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <a href="/admin/crud/blog"> Create Blogs</a>                                   
                                </li>
                                <li className="list-group-item">
                                    {/* <Link href="/admin/crud/blogs">
                                        <a>Update /delete blogs</a>
                                    </Link> */}
                                
                                    <a href="/admin/crud/blogs">Update / delete blogs</a>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminIndex;
