"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogRouter_1 = __importDefault(require("./blogRouter"));
const userRrouter_1 = require("./userRrouter");
const router = (0, express_1.Router)();
router.use('/blogs', blogRouter_1.default);
router.use('/', userRrouter_1.userRouter);
exports.default = router;
//# sourceMappingURL=router.js.map