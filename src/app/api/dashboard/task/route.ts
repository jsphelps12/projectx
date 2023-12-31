import { useState } from "react";

export async function POST(request: Request){

    const body = await request.json();

    const name = body.name;
    const description = body.description;

    console.log("Name: " + name);
    console.log("Description: " + description);

    //talk to database
    return new Response("Successfully created a new task!")
}

export async function PUT(request: Request){
    return new Response("Successfully created a new task!")
}

export async function DELETE(request: Request){
    return new Response("Successfully created a new task!")
}