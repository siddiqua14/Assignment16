import { UPLOAD_FOLDER } from "../config/config.js";
import { moveFile } from "../utility/moveFile.js";

// Create
export const createBlog = (req, res) => {
    return res.json({ message: 'Blog created successfully' });
};

// Read
export const readBlog = (req, res) => {
    return res.json({ message: 'Blog read successfully' });
};

// Update
export const updateBlog = (req, res) => {
    return res.json({ message: 'Blog updated successfully' });
};

// Delete
export const deleteBlog = (req, res) => {
    return res.json({ message: 'Blog deleted successfully' });
};
