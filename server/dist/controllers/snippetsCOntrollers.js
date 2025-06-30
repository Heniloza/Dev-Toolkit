"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSnippets = exports.fetchSnippets = exports.createSnippet = void 0;
const snippets_1 = __importDefault(require("../models/snippets"));
const createSnippet = async (req, res) => {
    try {
        const { title, code, language } = req.body;
        if (!title || !code || !language) {
            return res.status(400).json({
                message: "All fiels are required"
            });
        }
        const snippet = await snippets_1.default.create({
            title,
            code,
            language,
            user: req.user._id
        });
        return res.status(201).json({
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
exports.createSnippet = createSnippet;
const fetchSnippets = async (req, res) => {
    try {
        const snippets = await snippets_1.default.find({ user: req.user._id });
        return res.status(200).json({
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
exports.fetchSnippets = fetchSnippets;
const deleteSnippets = async (req, res) => {
    try {
        const snippetId = req.params.id;
        if (!snippetId) {
            return res.status().json({
                message: "Snippet ID is required to delete snippet"
            });
        }
        const snippet = await snippets_1.default.findById(snippetId);
        if (!snippet) {
            return res.status(404).json({
                message: "Snippet not found"
            });
        }
        await snippets_1.default.findByIdAndDelete(snippetId);
        res.status(200).json({ message: "Snippet deleted successfully" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error in deleting snippets"
        });
    }
};
exports.deleteSnippets = deleteSnippets;
//# sourceMappingURL=snippetsCOntrollers.js.map