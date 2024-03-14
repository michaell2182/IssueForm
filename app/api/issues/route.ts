import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import prisma from '@prisma/client';

const CategoryEnum = z.enum(['SOFTWARE', 'HARDWARE', 'ACCESSORIES', 'REQUEST', 'OTHER']);

const createIssueSchema = z.object({
    fullName: z.string().min(1).max(255),
    contact: z.string().min(1).max(255),
    email: z.string().min(1).max(255),
    department: z.string().min(1).max(255),
    title: z.string().min(1).max(255),
    category: CategoryEnum,
    description: z.string().min(1),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { fullName, contact, email, department, title, category, description } = createIssueSchema.parse(req.body);

            const newIssue = await prisma.issue.create({
                data: {
                    fullName,
                    contact,
                    email,
                    department,
                    title,
                    category,
                    description,
                },
            });

            res.status(201).json(newIssue);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
