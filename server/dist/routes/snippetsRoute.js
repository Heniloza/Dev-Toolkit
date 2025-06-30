"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const snippetsControllers_1 = require("../controllers/snippetsControllers");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post("/create", authMiddleware_1.authMiddleware, snippetsControllers_1.createSnippet);
router.get("/fetch", authMiddleware_1.authMiddleware, snippetsControllers_1.fetchSnippets);
router.delete("/delete/:id", authMiddleware_1.authMiddleware, snippetsControllers_1.deleteSnippets);
exports.default = router;
//# sourceMappingURL=snippetsRoute.js.map