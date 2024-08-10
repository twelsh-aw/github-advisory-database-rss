import { SecurityAdvisoryEcosystem } from "@octokit/graphql-schema";
import { GenerateRSSOptions, Item } from "./generate-rss";

const BASE_URL = "https://twelsh-aw.github.io/github-advisory-database-rss";
const createBase = (ecosystem: SecurityAdvisoryEcosystem, link: string) => {
    const low = ecosystem.toLowerCase();
    return {
        ecosystem: ecosystem,
        link: `${BASE_URL}/${link}.json`,
        homepage: `https://github.com/advisories?query=type%3Areviewed+ecosystem%3A${low}`
    };
};
export type RSS_FEED = {
    title: string;
    ecosystem: SecurityAdvisoryEcosystem;
    link: string;
    homepage: string;
    options?: GenerateRSSOptions;
};
export const RSS_FEEDS: RSS_FEED[] = [
    {
        title: "Security Advisories for IAM dependencies",
        options: {
            filter: (item: Item) => {
                return item.title.includes("github.com/openfga");
            }
        } as GenerateRSSOptions,
        ...createBase("GO", "iam")
    }
    // {
    //     title: "Security Advisory for JavaScript packages hosted at npmjs.com",
    //     ...createBase("NPM")
    // },
    // {
    //     title: "Security Advisory for Github Actions",
    //     ...createBase("ACTIONS")
    // },
];
