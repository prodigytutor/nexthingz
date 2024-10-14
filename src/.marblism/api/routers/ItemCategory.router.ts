/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ItemCategoryInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemCategory.createMany(input as any))),

        create: procedure.input($Schema.ItemCategoryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemCategory.create(input as any))),

        deleteMany: procedure.input($Schema.ItemCategoryInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemCategory.deleteMany(input as any))),

        delete: procedure.input($Schema.ItemCategoryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemCategory.delete(input as any))),

        findFirst: procedure.input($Schema.ItemCategoryInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).itemCategory.findFirst(input as any))),

        findMany: procedure.input($Schema.ItemCategoryInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).itemCategory.findMany(input as any))),

        findUnique: procedure.input($Schema.ItemCategoryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).itemCategory.findUnique(input as any))),

        updateMany: procedure.input($Schema.ItemCategoryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemCategory.updateMany(input as any))),

        update: procedure.input($Schema.ItemCategoryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemCategory.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ItemCategoryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemCategoryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemCategoryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemCategoryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ItemCategoryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemCategoryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ItemCategoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ItemCategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemCategoryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemCategoryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ItemCategoryGetPayload<T>, Context>) => Promise<Prisma.ItemCategoryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ItemCategoryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemCategoryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemCategoryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemCategoryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ItemCategoryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemCategoryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ItemCategoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ItemCategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemCategoryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemCategoryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ItemCategoryGetPayload<T>, Context>) => Promise<Prisma.ItemCategoryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ItemCategoryFindFirstArgs, TData = Prisma.ItemCategoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ItemCategoryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemCategoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ItemCategoryFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemCategoryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemCategoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ItemCategoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ItemCategoryFindManyArgs, TData = Array<Prisma.ItemCategoryGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ItemCategoryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ItemCategoryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ItemCategoryFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemCategoryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ItemCategoryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ItemCategoryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ItemCategoryFindUniqueArgs, TData = Prisma.ItemCategoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ItemCategoryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemCategoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ItemCategoryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemCategoryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemCategoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ItemCategoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ItemCategoryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemCategoryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemCategoryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemCategoryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ItemCategoryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemCategoryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ItemCategoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ItemCategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemCategoryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemCategoryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ItemCategoryGetPayload<T>, Context>) => Promise<Prisma.ItemCategoryGetPayload<T>>
            };

    };
}
