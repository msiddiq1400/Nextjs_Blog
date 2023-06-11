// 'http://localhost:3000/api/revalidate?path=/&secret=992ce9ea37ac516c1447ac85c56e47f1'

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({message: 'Invalid Token'})
    }

    const path = req.query.path as string
    
    await res.revalidate(path)

    return res.json({revalidated: true})
}