import express from "express";
import Parent from '../models/Parent.js'
import asyncHandler from 'express-async-handler'
import Child from "../models/Child.js";
// fetch parent data, pagination and sorting
const getParents = asyncHandler(async (req, res) => {
    const { page = 1, pageSize = 2, sort = 'id' } = req.query;  // Destructuring the query payload
    const skip = (page - 1) * pageSize;    // Handling pagination
    const limit = parseInt(pageSize);

    try {
        const parents = await Parent.find({})   // Data fetching 
            .sort(sort)
            .skip(skip)
            .limit(limit);
        const count = await Parent.countDocuments({});  // Count for total No. of records
        res.json({ data: parents, count });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// Fetching children against the respective parent id
const getChildren = asyncHandler(async (req, res) => {
    try {
        const parentId = req.params.parentId;
        const children = await Child.find({ parentId }).sort({ id: 1 });
        res.json(children);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

export { getParents, getChildren }