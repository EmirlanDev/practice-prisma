import { Request, Response } from "express";
import prisma from "../../config/prisma";

const createData = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const newData = await prisma.user.create({
      data: {
        email,
      },
    });
    res.status(200).json({
      success: true,
      data: newData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error in create function: ${error}`,
    });
  }
};

const getAllData = async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany();
    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getAllData ${error}`,
    });
  }
};

const upadateData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const updated = await prisma.user.update({
      where: { id: Number(id) },
      data: { email },
    });
    res.status(201).json({
      success: true,
      updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in upadateData ${error}`,
    });
  }
};

const patchData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const updated = await prisma.user.update({
      where: { id: Number(id) },
      data: { email },
    });
    res.status(201).json({
      success: true,
      updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in upadateData ${error}`,
    });
  }
};

const deteleData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in Delete function ${error}`,
    });
  }
};

export default {
  getAllData,
  createData,
  upadateData,
  patchData,
  deteleData,
};
