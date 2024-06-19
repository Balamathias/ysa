import { NextResponse } from "next/server"

export const POST = async (req: Request, res: Response) => {
    const { email, message } = await req.json() as { email: string, message: string}

    // DO SOME EMAIL SENDING LOGIC

    return NextResponse.json({message: "Thank you for your message. We will reply you shortly."}, {
        status: 200,
        statusText: 'OK'
    })
}