import { SecurityAdvisoryEcosystem } from "@octokit/graphql-schema";

const BASE_URL = "https://twelsh-aw.github.io/github-advisory-database-rss";
const createBase = (ecosystem: SecurityAdvisoryEcosystem, pkg: string) => {
    const low = ecosystem.toLowerCase();
    const link = pkg.split("/").findLast((_) => true);
    return {
        ecosystem: ecosystem,
        link: `${BASE_URL}/${link}.json`,
        homepage: `https://github.com/advisories?query=type%3Areviewed+ecosystem%3A${low}+package%3A${pkg}`,
        title: `Security Advisories for ${pkg}`,
        package: pkg
    };
};
export type RSS_FEED = {
    title: string;
    ecosystem: SecurityAdvisoryEcosystem;
    link: string;
    homepage: string;
    package: string;
};
export const RSS_FEEDS: RSS_FEED[] = [
    {
        ...createBase("GO", "github.com/openfga/openfga")
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
