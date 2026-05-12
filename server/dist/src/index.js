"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const track_api_1 = __importDefault(require("../datasources/track-api"));
const resolvers_1 = require("./resolvers");
const schema_1 = __importDefault(require("./schema"));
async function startApolloServer() {
    const server = new server_1.ApolloServer({ typeDefs: schema_1.default, resolvers: resolvers_1.resolvers });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    trackAPI: new track_api_1.default({ cache }),
                },
            };
        },
    });
    console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}
startApolloServer();
