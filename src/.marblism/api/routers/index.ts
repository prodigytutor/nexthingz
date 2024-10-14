/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createItemRouter from "./Item.router";
import createCategoryRouter from "./Category.router";
import createItemCategoryRouter from "./ItemCategory.router";
import createTagRouter from "./Tag.router";
import createItemTagRouter from "./ItemTag.router";
import createSuggestionFeedbackRouter from "./SuggestionFeedback.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createUserRouter from "./User.router";
import createPushNotificationRouter from "./PushNotification.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as ItemClientType } from "./Item.router";
import { ClientType as CategoryClientType } from "./Category.router";
import { ClientType as ItemCategoryClientType } from "./ItemCategory.router";
import { ClientType as TagClientType } from "./Tag.router";
import { ClientType as ItemTagClientType } from "./ItemTag.router";
import { ClientType as SuggestionFeedbackClientType } from "./SuggestionFeedback.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PushNotificationClientType } from "./PushNotification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        item: createItemRouter(router, procedure),
        category: createCategoryRouter(router, procedure),
        itemCategory: createItemCategoryRouter(router, procedure),
        tag: createTagRouter(router, procedure),
        itemTag: createItemTagRouter(router, procedure),
        suggestionFeedback: createSuggestionFeedbackRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        user: createUserRouter(router, procedure),
        pushNotification: createPushNotificationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    item: ItemClientType<AppRouter>;
    category: CategoryClientType<AppRouter>;
    itemCategory: ItemCategoryClientType<AppRouter>;
    tag: TagClientType<AppRouter>;
    itemTag: ItemTagClientType<AppRouter>;
    suggestionFeedback: SuggestionFeedbackClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    pushNotification: PushNotificationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
