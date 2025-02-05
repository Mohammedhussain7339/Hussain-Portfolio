import dbConnect from '../../lib/dbConnect'
export async function GET(req) {
    try {
        await dbConnect();
        return new Response(JSON.stringify({ message: "Database connected successfully" }), {
            status: 200,
        });
    } catch (error) {
        console.error("Database connection error:", error);
        return new Response(JSON.stringify({ error: "Database connection failed" }), {
            status: 500,
        });
    }
}
