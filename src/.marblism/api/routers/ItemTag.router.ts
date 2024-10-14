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

        createMany: procedure.input($Schema.ItemTagInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemTag.createMany(input as any))),

        create: procedure.input($Schema.ItemTagInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemTag.create(input as any))),

        deleteMany: procedure.input($Schema.ItemTagInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemTag.deleteMany(input as any))),

        delete: procedure.input($Schema.ItemTagInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemTag.delete(input as any))),

        findFirst: procedure.input($Schema.ItemTagInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).itemTag.findFirst(input as any))),

        findMany: procedure.input($Schema.ItemTagInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).itemTag.findMany(input as any))),

        findUnique: procedure.input($Schema.ItemTagInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).itemTag.findUnique(input as any))),

        updateMany: procedure.input($Schema.ItemTagInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemTag.updateMany(input as any))),

        update: procedure.input($Schema.ItemTagInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemTag.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ItemTagCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemTagCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemTagCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemTagCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ItemTagCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemTagCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ItemTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ItemTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemTagCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemTagCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ItemTagGetPayload<T>, Context>) => Promise<Prisma.ItemTagGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ItemTagDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemTagDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemTagDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemTagDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ItemTagDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemTagDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ItemTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ItemTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemTagDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemTagDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ItemTagGetPayload<T>, Context>) => Promise<Prisma.ItemTagGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ItemTagFindFirstArgs, TData = Prisma.ItemTagGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ItemTagFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemTagGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ItemTagFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemTagFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemTagGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ItemTagGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ItemTagFindManyArgs, TData = Array<Prisma.ItemTagGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ItemTagFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ItemTagGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ItemTagFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemTagFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ItemTagGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ItemTagGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ItemTagFindUniqueArgs, TData = Prisma.ItemTagGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ItemTagFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemTagGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ItemTagFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemTagFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemTagGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ItemTagGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ItemTagUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemTagUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemTagUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemTagUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ItemTagUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ItemTagUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ItemTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ItemTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ItemTagUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ItemTagUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ItemTagGetPayload<T>, Context>) => Promise<Prisma.ItemTagGetPayload<T>>
            };

    };
}
