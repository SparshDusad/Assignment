const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const router = express.Router();
let cachedBlogData = null;

router.get('/blog-stats', async (req, res) => {
    try {
        const blogData = await fetchBlogData();
        const stats = analyzeBlogData(blogData);
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve blog statistics' });
    }
});

router.get('/blog-search', (req, res) => {
    try {
        const query = req.query.query;
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        if (!cachedBlogData) {
            return res.status(400).json({ error: 'Blog data not available for search' });
        }

        const filteredBlogs = cachedBlogData.filter(blog => blog.title.toLowerCase().includes(query.toLowerCase()));
        res.json(filteredBlogs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to perform the blog search' });
    }
});

const fetchBlogData = async () => {
    try {
        if (!cachedBlogData) {
            const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
                headers: {
                    'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
                }
            });
            cachedBlogData = response.data;
        }
        return cachedBlogData;
    } catch (error) {
        throw new Error('Failed to fetch blog data');
    }
};

const analyzeBlogData = blogData => {
    const totalBlogs = blogData.length;
    const longestTitleBlog = _.maxBy(blogData, 'title');
    const blogsContainingPrivacy = blogData.filter(blog => blog.title.toLowerCase().includes('privacy'));
    const uniqueTitles = _.uniqBy(blogData, 'title').map(blog => blog.title);

    return {
        totalBlogs,
        longestTitle: longestTitleBlog ? longestTitleBlog.title : null,
        blogsContainingPrivacy: blogsContainingPrivacy.length,
        uniqueTitles
    };
};

module.exports = router;
