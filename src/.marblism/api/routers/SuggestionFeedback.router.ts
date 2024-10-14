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

        createMany: procedure.input($Schema.SuggestionFeedbackInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).suggestionFeedback.createMany(input as any))),

        create: procedure.input($Schema.SuggestionFeedbackInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).suggestionFeedback.create(input as any))),

        deleteMany: procedure.input($Schema.SuggestionFeedbackInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).suggestionFeedback.deleteMany(input as any))),

        delete: procedure.input($Schema.SuggestionFeedbackInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).suggestionFeedback.delete(input as any))),

        findFirst: procedure.input($Schema.SuggestionFeedbackInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).suggestionFeedback.findFirst(input as any))),

        findMany: procedure.input($Schema.SuggestionFeedbackInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).suggestionFeedback.findMany(input as any))),

        findUnique: procedure.input($Schema.SuggestionFeedbackInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).suggestionFeedback.findUnique(input as any))),

        updateMany: procedure.input($Schema.SuggestionFeedbackInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).suggestionFeedback.updateMany(input as any))),

        update: procedure.input($Schema.SuggestionFeedbackInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).suggestionFeedback.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SuggestionFeedbackCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SuggestionFeedbackCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SuggestionFeedbackCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SuggestionFeedbackCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SuggestionFeedbackCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SuggestionFeedbackCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SuggestionFeedbackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SuggestionFeedbackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SuggestionFeedbackCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SuggestionFeedbackCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SuggestionFeedbackGetPayload<T>, Context>) => Promise<Prisma.SuggestionFeedbackGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SuggestionFeedbackDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SuggestionFeedbackDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SuggestionFeedbackDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SuggestionFeedbackDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SuggestionFeedbackDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SuggestionFeedbackDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SuggestionFeedbackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SuggestionFeedbackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SuggestionFeedbackDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SuggestionFeedbackDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SuggestionFeedbackGetPayload<T>, Context>) => Promise<Prisma.SuggestionFeedbackGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SuggestionFeedbackFindFirstArgs, TData = Prisma.SuggestionFeedbackGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SuggestionFeedbackFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SuggestionFeedbackGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SuggestionFeedbackFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SuggestionFeedbackFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SuggestionFeedbackGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SuggestionFeedbackGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SuggestionFeedbackFindManyArgs, TData = Array<Prisma.SuggestionFeedbackGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SuggestionFeedbackFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SuggestionFeedbackGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SuggestionFeedbackFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SuggestionFeedbackFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SuggestionFeedbackGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SuggestionFeedbackGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SuggestionFeedbackFindUniqueArgs, TData = Prisma.SuggestionFeedbackGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SuggestionFeedbackFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SuggestionFeedbackGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SuggestionFeedbackFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SuggestionFeedbackFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SuggestionFeedbackGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SuggestionFeedbackGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SuggestionFeedbackUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SuggestionFeedbackUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SuggestionFeedbackUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SuggestionFeedbackUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SuggestionFeedbackUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SuggestionFeedbackUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SuggestionFeedbackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SuggestionFeedbackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SuggestionFeedbackUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SuggestionFeedbackUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SuggestionFeedbackGetPayload<T>, Context>) => Promise<Prisma.SuggestionFeedbackGetPayload<T>>
            };

    };
}
