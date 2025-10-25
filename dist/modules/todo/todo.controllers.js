"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../config/prisma"));
const createData = async (req, res) => {
    try {
        const { email } = req.body;
        const newData = await prisma_1.default.user.create({
            data: {
                email,
            },
        });
        res.status(200).json({
            success: true,
            data: newData,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: `Error in create function: ${error}`,
        });
    }
};
const getAllData = async (req, res) => {
    try {
        const data = await prisma_1.default.user.findMany();
        res.status(201).json({
            success: true,
            data,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in getAllData ${error}`,
        });
    }
};
const upadateData = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;
        const updated = await prisma_1.default.user.update({
            where: { id: Number(id) },
            data: { email },
        });
        res.status(201).json({
            success: true,
            updated,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in upadateData ${error}`,
        });
    }
};
const patchData = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;
        const updated = await prisma_1.default.user.update({
            where: { id: Number(id) },
            data: { email },
        });
        res.status(201).json({
            success: true,
            updated,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in upadateData ${error}`,
        });
    }
};
const deteleData = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await prisma_1.default.user.delete({
            where: {
                id: Number(id),
            },
        });
        res.status(200).json({
            success: true,
            data: item,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in Delete function ${error}`,
        });
    }
};
exports.default = {
    getAllData,
    createData,
    upadateData,
    patchData,
    deteleData,
};
