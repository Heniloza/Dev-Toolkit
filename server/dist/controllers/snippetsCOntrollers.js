import SNIPPETS from '../models/snippetsModel.js';
export const createSnippet = async (req, res, next) => {
    try {
        const { title, code, language } = req.body;
        if (!title || !code || !language) {
            res.status(400).json({
                message: "All fiels are required"
            });
        }
        const snippet = await SNIPPETS.create({
            title,
            code,
            language,
            user: req.user._id
        });
        res.status(201).json({
            message: "Snippet created successfully",
            data: snippet
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Enable to create asnippet"
        });
    }
};
export const fetchSnippets = async (req, res, next) => {
    try {
        const snippets = await SNIPPETS.find({ user: req.user._id });
        res.status(200).json({
            message: "User posts fetched successfully",
            data: snippets
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Enable to fetch snippets"
        });
    }
};
export const deleteSnippets = async (req, res, next) => {
    try {
        const snippetId = req.params.id;
        if (!snippetId) {
            res.status(400).json({
                message: "Snippet ID is required to delete snippet"
            });
        }
        const snippet = await SNIPPETS.findById(snippetId);
        if (!snippet) {
            res.status(404).json({
                message: "Snippet not found"
            });
        }
        await SNIPPETS.findByIdAndDelete(snippetId);
        res.status(200).json({ message: "Snippet deleted successfully" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error in deleting snippets"
        });
    }
};
