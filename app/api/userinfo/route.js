// // app/api/auth/signup/route.js
import dbConnect from '../../lib/dbConnect';
import User from '../../lib/model/userinfo'; // Ensure correct relative path to your model
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Parse request body
        const { firstname, lastname, email, message } = await request.json();

        // Validate input
        if (!firstname || !lastname || !email || !message) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        // Connect to the database
        await dbConnect();
        console.log('Connected to database');

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }

        // Create a new user
        const user = new User({
            firstname,
            lastname,
            email,
            message
        });

        // Save the user to the database
        await user.save();
        console.log('User registered successfully');

        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error in signup route:', error);
        return NextResponse.json({ message: error.message || 'Server error' }, { status: 500 });
    }
}
