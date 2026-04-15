import { databases, users } from "@/models/server/config";
import { UserPrefs } from "@/store/Auth";
import React from "react";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import NumberTicker from "@/components/magicui/number-ticker";
import { answerCollection, db, questionCollection } from "@/models/name";
import { Query } from "node-appwrite";

const Page = async ({
    params,
}: {
    params: Promise<{ userId: string; userSlug: string }>;
}) => {
    // ✅ unwrap params first
    const { userId, userSlug } = await params;

    const [user, questions, answers] = await Promise.all([
        users.get<UserPrefs>(userId),
        databases.listDocuments(db, questionCollection, [
            Query.equal("authorId", userId),
            Query.limit(1),
        ]),
        databases.listDocuments(db, answerCollection, [
            Query.equal("authorId", userId),
            Query.limit(1),
        ]),
    ]);

    return (
        <MagicContainer className={"flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"}>
            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
                <div className="absolute inset-x-4 top-4">
                    <h2 className="text-xl font-medium">Reputation</h2>
                </div>
                <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
                    <NumberTicker value={user.prefs.reputation} />
                </p>
            </MagicCard>

            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
                <div className="absolute inset-x-4 top-4">
                    <h2 className="text-xl font-medium">Questions asked</h2>
                </div>
                <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
                    <NumberTicker value={questions.total} />
                </p>
            </MagicCard>

            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
                <div className="absolute inset-x-4 top-4">
                    <h2 className="text-xl font-medium">Answers given</h2>
                </div>
                <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
                    <NumberTicker value={answers.total} />
                </p>
            </MagicCard>
        </MagicContainer>
    );
};

export default Page;