import { IResolvers } from "graphql-tools";
import { authResolver } from "./AuthResolver";
import { groupResolver } from "./GroupResolver";
import { userResolver } from "./UserResolver";

const resolvers: IResolvers[] = [userResolver, groupResolver, authResolver];

export default resolvers;