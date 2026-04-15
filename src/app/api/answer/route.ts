import { answerCollection, db } from "@/models/name";
import { databases, users } from "@/models/server/config";
import { NextRequest, NextResponse } from "next/server";
import { ID } from "node-appwrite";
import {UserPrefs} from "@/store/Auth"

export async function POST(request: NextRequest){
    try {
        const {questionId, answer, authorId} = await request.json();

        const response = await databases.createDocument(db, answerCollection, ID.unique(),
        {
            content: answer,
            authorId: authorId,
            questionId: questionId
        })

        // increase author reputation
        const prefs = await users.getPrefs<UserPrefs>(authorId);

        await users.updatePrefs(authorId,{
            reputation: Number(prefs.reputation) + 1
        })

        return NextResponse.json(response,{
            status: 201
        })

    } catch (error: any) {
        return NextResponse.json(
            {error: error?.error || "Error creating answer"},
            { status:error?.status || error?.code || 500}
        )
    }
}

export async function DELETE(request: NextRequest){
    try {
        const {answerId} = await request.json();

        const response = await databases.getDocument(db,answerCollection,answerId);

        await databases.deleteDocument(db,answerCollection,answerId);

        // decrease author reputation

        const prefs = await users.getPrefs<UserPrefs>(response.authorId);

        await users.updatePrefs(response.authorId,{
            reputation: Number(prefs.reputation) - 1
        })

        return NextResponse.json(response,{
            status: 2010
        },)

    } catch (error: any) {
        return NextResponse.json(
            {error: error?.error || "Error deleting answer"},
            { status:error?.status || error?.code || 500}
        )
    }
}