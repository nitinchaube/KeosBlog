import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string';
import {isAuth,handleResponse} from "./auth"

export const createBlog = (blog, token) => {

    let createBlogEndpoint;

    if(isAuth() && isAuth().role==1){      //admin to create blog
        createBlogEndpoint=`${API}/blog`;
    }else if(isAuth() && isAuth().role==0){     //for users to create a blog
        createBlogEndpoint=`${API}/user/blog`
    }



    return fetch(`${createBlogEndpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listBlogsWithCategoriesAndTags = (skip, limit) => {
    const data = {
        limit,
        skip
    };
    console.log("here")
    return fetch(`${API}/blogs-categories-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleBlog = slug => {
    return fetch(`${API}/blog/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = blog => {
    return fetch(`${API}/blogs/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const list = (username) => {

    let listBlogsEndpoint;

    if(username){      
        listBlogsEndpoint=`${API}/${username}/blogs`;   //for user blogs (COLLECTION OF THIS USER BLOGS)
    }else {
        listBlogsEndpoint=`${API}/blogs`    //for admin (collection of all blogs)
    }


    return fetch(`${listBlogsEndpoint}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeBlog = (slug, token) => {

    let deleteBlogEndpoint;

    if(isAuth() && isAuth().role==1){      //admin to delete blog
        deleteBlogEndpoint=`${API}/blog/${slug}`;
    }else if(isAuth() && isAuth().role==0){     //for users to delete a blog
        deleteBlogEndpoint=`${API}/user/blog/${slug}`
    }

    return fetch(`${deleteBlogEndpoint}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateBlog = (blog, token, slug) => {

    let updateBlogEndpoint;

    if(isAuth() && isAuth().role==1){      //admin to update blog
        updateBlogEndpoint=`${API}/blog/${slug}`;
    }else if(isAuth() && isAuth().role==0){     //for users to update a blog
        updateBlogEndpoint=`${API}/user/blog/${slug}`
    }

    return fetch(`${updateBlogEndpoint}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listSearch = params => {
    console.log('search params', params);
    let query = queryString.stringify(params);
    console.log('query params', query);
    return fetch(`${API}/blogs/search?${query}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};