/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Balance
 *
 */
export type Balance = $Result.DefaultSelection<Prisma.$BalancePayload>;
/**
 * Model Transaction
 *
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>;

/**
 * Enums
 */
export namespace $Enums {
	export const Currency: {
		USD: "USD";
		USDT: "USDT";
		UAH: "UAH";
	};

	export type Currency = (typeof Currency)[keyof typeof Currency];

	export const TransactionStatus: {
		pending: "pending";
		completed: "completed";
		failed: "failed";
	};

	export type TransactionStatus =
		(typeof TransactionStatus)[keyof typeof TransactionStatus];

	export const TransactionType: {
		deposit: "deposit";
		withdraw: "withdraw";
	};

	export type TransactionType =
		(typeof TransactionType)[keyof typeof TransactionType];
}

export type Currency = $Enums.Currency;

export const Currency: typeof $Enums.Currency;

export type TransactionStatus = $Enums.TransactionStatus;

export const TransactionStatus: typeof $Enums.TransactionStatus;

export type TransactionType = $Enums.TransactionType;

export const TransactionType: typeof $Enums.TransactionType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.utils
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
	T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
	U = "log" extends keyof T
		? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
			? Prisma.GetEvents<T["log"]>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

	/**
	 * ##  Prisma Client ʲˢ
	 *
	 * Type-safe database client for TypeScript & Node.utils
	 * @example
	 * ```
	 * const prisma = new PrismaClient()
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 *
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
	 */

	constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
	$on<V extends U>(
		eventType: V,
		callback: (
			event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
		) => void,
	): void;

	/**
	 * Connect with the database
	 */
	$connect(): $Utils.JsPromise<void>;

	/**
	 * Disconnect from the database
	 */
	$disconnect(): $Utils.JsPromise<void>;

	/**
	 * Add a middleware
	 * @deprecated since 4.16.0. For new code, prefer client extensions instead.
	 * @see https://pris.ly/d/extensions
	 */
	$use(cb: Prisma.Middleware): void;

	/**
	 * Executes a prepared raw query and returns the number of affected rows.
	 * @example
	 * ```
	 * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Executes a raw query and returns the number of affected rows.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Performs a prepared raw query and returns the `SELECT` data.
	 * @example
	 * ```
	 * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<T>;

	/**
	 * Performs a raw query and returns the `SELECT` data.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<T>;

	/**
	 * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
	 * @example
	 * ```
	 * const [george, bob, alice] = await prisma.$transactions([
	 *   prisma.user.create({ data: { name: 'George' } }),
	 *   prisma.user.create({ data: { name: 'Bob' } }),
	 *   prisma.user.create({ data: { name: 'Alice' } }),
	 * ])
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
	 */
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
		options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

	$transaction<R>(
		fn: (
			prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
		) => $Utils.JsPromise<R>,
		options?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		},
	): $Utils.JsPromise<R>;

	$extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;

	/**
	 * `prisma.user`: Exposes CRUD operations for the **User** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 */
	get user(): Prisma.UserDelegate<ExtArgs>;

	/**
	 * `prisma.balance`: Exposes CRUD operations for the **Balance** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Balances
	 * const balances = await prisma.balance.findMany()
	 * ```
	 */
	get balance(): Prisma.BalanceDelegate<ExtArgs>;

	/**
	 * `prisma.transactions`: Exposes CRUD operations for the **Transaction** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Transactions
	 * const transactions = await prisma.transactions.findMany()
	 * ```
	 */
	get transaction(): Prisma.TransactionDelegate<ExtArgs>;
}

export namespace Prisma {
	export import DMMF = runtime.DMMF;

	export type PrismaPromise<T> = $Public.PrismaPromise<T>;

	/**
	 * Validator
	 */
	export import validator = runtime.Public.validator;

	/**
	 * Prisma Errors
	 */
	export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
	export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
	export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
	export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
	export import PrismaClientValidationError = runtime.PrismaClientValidationError;
	export import NotFoundError = runtime.NotFoundError;

	/**
	 * Re-export of sql-template-tag
	 */
	export import sql = runtime.sqltag;
	export import empty = runtime.empty;
	export import join = runtime.join;
	export import raw = runtime.raw;
	export import Sql = runtime.Sql;

	/**
	 * Decimal.utils
	 */
	export import Decimal = runtime.Decimal;

	export type DecimalJsLike = runtime.DecimalJsLike;

	/**
	 * Metrics
	 */
	export type Metrics = runtime.Metrics;
	export type Metric<T> = runtime.Metric<T>;
	export type MetricHistogram = runtime.MetricHistogram;
	export type MetricHistogramBucket = runtime.MetricHistogramBucket;

	/**
	 * Extensions
	 */
	export import Extension = $Extensions.UserArgs;
	export import getExtensionContext = runtime.Extensions.getExtensionContext;
	export import Args = $Public.Args;
	export import Payload = $Public.Payload;
	export import Result = $Public.Result;
	export import Exact = $Public.Exact;

	/**
	 * Prisma Client JS version: 5.9.1
	 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
	 */
	export type PrismaVersion = {
		client: string;
	};

	export const prismaVersion: PrismaVersion;

	/**
	 * Utility Types
	 */

	/**
	 * From https://github.com/sindresorhus/type-fest/
	 * Matches a JSON object.
	 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
	 */
	export type JsonObject = { [Key in string]?: JsonValue };

	/**
	 * From https://github.com/sindresorhus/type-fest/
	 * Matches a JSON array.
	 */
	export interface JsonArray extends Array<JsonValue> {}

	/**
	 * From https://github.com/sindresorhus/type-fest/
	 * Matches any valid JSON value.
	 */
	export type JsonValue =
		| string
		| number
		| boolean
		| JsonObject
		| JsonArray
		| null;

	/**
	 * Matches a JSON object.
	 * Unlike `JsonObject`, this type allows undefined and read-only properties.
	 */
	export type InputJsonObject = {
		readonly [Key in string]?: InputJsonValue | null;
	};

	/**
	 * Matches a JSON array.
	 * Unlike `JsonArray`, readonly arrays are assignable to this type.
	 */
	export interface InputJsonArray
		extends ReadonlyArray<InputJsonValue | null> {}

	/**
	 * Matches any valid value that can be used as an input for operations like
	 * create and update as the value of a JSON field. Unlike `JsonValue`, this
	 * type allows read-only arrays and read-only object properties and disallows
	 * `null` at the top level.
	 *
	 * `null` cannot be used as the value of a JSON field because its meaning
	 * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
	 * `Prisma.DbNull` to clear the JSON value and set the field to the database
	 * NULL value instead.
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
	 */
	export type InputJsonValue =
		| string
		| number
		| boolean
		| InputJsonObject
		| InputJsonArray
		| { toJSON(): unknown };

	/**
	 * Types of the values used to represent different kinds of `null` values when working with JSON fields.
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	namespace NullTypes {
		/**
		 * Type of `Prisma.DbNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class DbNull {
			private DbNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.JsonNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class JsonNull {
			private JsonNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.AnyNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class AnyNull {
			private AnyNull: never;
			private constructor();
		}
	}

	/**
	 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const DbNull: NullTypes.DbNull;

	/**
	 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const JsonNull: NullTypes.JsonNull;

	/**
	 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const AnyNull: NullTypes.AnyNull;

	type SelectAndInclude = {
		select: any;
		include: any;
	};

	/**
	 * Get the type of the value, that the Promise holds.
	 */
	export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
		infer U
	>
		? U
		: T;

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<
		T extends (...args: any) => $Utils.JsPromise<any>,
	> = PromiseType<ReturnType<T>>;

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P];
	};

	export type Enumerable<T> = T | Array<T>;

	export type RequiredKeys<T> = {
		[K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
	}[keyof T];

	export type TruthyKeys<T> = keyof {
		[K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
	};

	export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

	/**
	 * Subset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
	 */
	export type Subset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	};

	/**
	 * SelectSubset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
	 * Additionally, it validates, if both select and include are present. If the case, it errors.
	 */
	export type SelectSubset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & (T extends SelectAndInclude
		? "Please either choose `select` or `include`."
		: {});

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & K;

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T;

	/**
	 * Is T a Record?
	 */
	type IsObject<T extends any> = T extends Array<any>
		? False
		: T extends Date
		  ? False
		  : T extends Uint8Array
			  ? False
			  : T extends BigInt
				  ? False
				  : T extends object
					  ? True
					  : False;

	/**
	 * If it's T[], return T
	 */
	export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

	/**
	 * From ts-toolbelt
	 */

	type __Either<O extends object, K extends Key> = Omit<O, K> &
		{
			// Merge all but K
			[P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
		}[K];

	type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

	type EitherLoose<O extends object, K extends Key> = ComputeRaw<
		__Either<O, K>
	>;

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>;
		0: EitherLoose<O, K>;
	}[strict];

	type Either<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = O extends unknown ? _Either<O, K, strict> : never;

	export type Union = any;

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
	} & {};

	/** Helper Types for "Merge" **/
	export type IntersectOf<U extends Union> = (
		U extends unknown
			? (k: U) => void
			: never
	) extends (k: infer I) => void
		? I
		: never;

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
	} & {};

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>;
			}
		>
	>;

	type Key = string | number | symbol;
	type AtBasic<O extends object, K extends Key> = K extends keyof O
		? O[K]
		: never;
	type AtStrict<O extends object, K extends Key> = O[K & keyof O];
	type AtLoose<O extends object, K extends Key> = O extends unknown
		? AtStrict<O, K>
		: never;
	export type At<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = {
		1: AtStrict<O, K>;
		0: AtLoose<O, K>;
	}[strict];

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
				[K in keyof A]: A[K];
		  } & {};

	export type OptionalFlat<O> = {
		[K in keyof O]?: O[K];
	} & {};

	type _Record<K extends keyof any, T> = {
		[P in K]: T;
	};

	// cause typescript not to expand types and preserve names
	type NoExpand<T> = T extends unknown ? T : never;

	// this type assumes the passed object is entirely optional
	type AtLeast<O extends object, K extends string> = NoExpand<
		O extends unknown
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
			: never
	>;

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never;

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

	/**
  A [[Boolean]]
  */
	export type Boolean = True | False;

	// /**
	// 1
	// */
	export type True = 1;

	/**
  0
  */
	export type False = 0;

	export type Not<B extends Boolean> = {
		0: 1;
		1: 0;
	}[B];

	export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
		? 0 // anything `never` is false
		: A1 extends A2
		  ? 1
		  : 0;

	export type Has<U extends Union, U1 extends Union> = Not<
		Extends<Exclude<U1, U>, U1>
	>;

	export type Or<B1 extends Boolean, B2 extends Boolean> = {
		0: {
			0: 0;
			1: 1;
		};
		1: {
			0: 1;
			1: 1;
		};
	}[B1][B2];

	export type Keys<U extends Union> = U extends unknown ? keyof U : never;

	type Cast<A, B> = A extends B ? A : B;

	export const type: unique symbol;

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never;
		  }
		: never;

	type FieldPaths<
		T,
		U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
	> = IsObject<T> extends True ? U : T;

	type GetHavingFields<T> = {
		[K in keyof T]: Or<
			Or<Extends<"OR", K>, Extends<"AND", K>>,
			Extends<"NOT", K>
		> extends True
			? // infer is only needed to not hit TS limit
			  // based on the brilliant idea of Pierre-Antoine Mills
			  // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
			  T[K] extends infer TK
				? GetHavingFields<
						UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
				  >
				: never
			: {} extends FieldPaths<T[K]>
			  ? never
			  : K;
	}[keyof T];

	/**
	 * Convert tuple to union
	 */
	type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
	type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
	type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

	/**
	 * Like `Pick`, but additionally can also accept an array of keys
	 */
	type PickEnumerable<
		T,
		K extends Enumerable<keyof T> | keyof T,
	> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
		? never
		: T;

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>;

	export const ModelName: {
		User: "User";
		Balance: "Balance";
		Transaction: "Transaction";
	};

	export type ModelName = (typeof ModelName)[keyof typeof ModelName];

	export type Datasources = {
		db?: Datasource;
	};

	interface TypeMapCb
		extends $Utils.Fn<
			{ extArgs: $Extensions.InternalArgs },
			$Utils.Record<string, any>
		> {
		returns: Prisma.TypeMap<this["params"]["extArgs"]>;
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		meta: {
			modelProps: "user" | "balance" | "transaction";
			txIsolationLevel: Prisma.TransactionIsolationLevel;
		};
		model: {
			User: {
				payload: Prisma.$UserPayload<ExtArgs>;
				fields: Prisma.UserFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.UserFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findFirst: {
						args: Prisma.UserFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findMany: {
						args: Prisma.UserFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					create: {
						args: Prisma.UserCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					createMany: {
						args: Prisma.UserCreateManyArgs<ExtArgs>;
						result: Prisma.BatchPayload;
					};
					delete: {
						args: Prisma.UserDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					update: {
						args: Prisma.UserUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					deleteMany: {
						args: Prisma.UserDeleteManyArgs<ExtArgs>;
						result: Prisma.BatchPayload;
					};
					updateMany: {
						args: Prisma.UserUpdateManyArgs<ExtArgs>;
						result: Prisma.BatchPayload;
					};
					upsert: {
						args: Prisma.UserUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					aggregate: {
						args: Prisma.UserAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateUser>;
					};
					groupBy: {
						args: Prisma.UserGroupByArgs<ExtArgs>;
						result: $Utils.Optional<UserGroupByOutputType>[];
					};
					count: {
						args: Prisma.UserCountArgs<ExtArgs>;
						result: $Utils.Optional<UserCountAggregateOutputType> | number;
					};
				};
			};
			Balance: {
				payload: Prisma.$BalancePayload<ExtArgs>;
				fields: Prisma.BalanceFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.BalanceFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.BalanceFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$BalancePayload>;
					};
					findFirst: {
						args: Prisma.BalanceFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.BalanceFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$BalancePayload>;
					};
					findMany: {
						args: Prisma.BalanceFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$BalancePayload>[];
					};
					create: {
						args: Prisma.BalanceCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$BalancePayload>;
					};
					createMany: {
						args: Prisma.BalanceCreateManyArgs<ExtArgs>;
						result: Prisma.BatchPayload;
					};
					delete: {
						args: Prisma.BalanceDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$BalancePayload>;
					};
					update: {
						args: Prisma.BalanceUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$BalancePayload>;
					};
					deleteMany: {
						args: Prisma.BalanceDeleteManyArgs<ExtArgs>;
						result: Prisma.BatchPayload;
					};
					updateMany: {
						args: Prisma.BalanceUpdateManyArgs<ExtArgs>;
						result: Prisma.BatchPayload;
					};
					upsert: {
						args: Prisma.BalanceUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$BalancePayload>;
					};
					aggregate: {
						args: Prisma.BalanceAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateBalance>;
					};
					groupBy: {
						args: Prisma.BalanceGroupByArgs<ExtArgs>;
						result: $Utils.Optional<BalanceGroupByOutputType>[];
					};
					count: {
						args: Prisma.BalanceCountArgs<ExtArgs>;
						result: $Utils.Optional<BalanceCountAggregateOutputType> | number;
					};
				};
			};
			Transaction: {
				payload: Prisma.$TransactionPayload<ExtArgs>;
				fields: Prisma.TransactionFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.TransactionFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
					};
					findFirst: {
						args: Prisma.TransactionFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
					};
					findMany: {
						args: Prisma.TransactionFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
					};
					create: {
						args: Prisma.TransactionCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
					};
					createMany: {
						args: Prisma.TransactionCreateManyArgs<ExtArgs>;
						result: Prisma.BatchPayload;
					};
					delete: {
						args: Prisma.TransactionDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
					};
					update: {
						args: Prisma.TransactionUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
					};
					deleteMany: {
						args: Prisma.TransactionDeleteManyArgs<ExtArgs>;
						result: Prisma.BatchPayload;
					};
					updateMany: {
						args: Prisma.TransactionUpdateManyArgs<ExtArgs>;
						result: Prisma.BatchPayload;
					};
					upsert: {
						args: Prisma.TransactionUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
					};
					aggregate: {
						args: Prisma.TransactionAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateTransaction>;
					};
					groupBy: {
						args: Prisma.TransactionGroupByArgs<ExtArgs>;
						result: $Utils.Optional<TransactionGroupByOutputType>[];
					};
					count: {
						args: Prisma.TransactionCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<TransactionCountAggregateOutputType>
							| number;
					};
				};
			};
		};
	} & {
		other: {
			payload: any;
			operations: {
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
				$executeRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
				$queryRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
			};
		};
	};
	export const defineExtension: $Extensions.ExtendsHook<
		"define",
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>;
	export type DefaultPrismaClient = PrismaClient;
	export type ErrorFormat = "pretty" | "colorless" | "minimal";
	export interface PrismaClientOptions {
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasources?: Datasources;
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasourceUrl?: string;
		/**
		 * @default "colorless"
		 */
		errorFormat?: ErrorFormat;
		/**
		 * @example
		 * ```
		 * // Defaults to stdout
		 * log: ['query', 'info', 'warn', 'error']
		 *
		 * // Emit as events
		 * log: [
		 *   { emit: 'stdout', level: 'query' },
		 *   { emit: 'stdout', level: 'info' },
		 *   { emit: 'stdout', level: 'warn' }
		 *   { emit: 'stdout', level: 'error' }
		 * ]
		 * ```
		 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
		 */
		log?: (LogLevel | LogDefinition)[];
	}

	/* Types for Logging */
	export type LogLevel = "info" | "query" | "warn" | "error";
	export type LogDefinition = {
		level: LogLevel;
		emit: "stdout" | "event";
	};

	export type GetLogType<T extends LogLevel | LogDefinition> =
		T extends LogDefinition
			? T["emit"] extends "event"
				? T["level"]
				: never
			: never;
	export type GetEvents<T extends any> = T extends Array<
		LogLevel | LogDefinition
	>
		? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
		: never;

	export type QueryEvent = {
		timestamp: Date;
		query: string;
		params: string;
		duration: number;
		target: string;
	};

	export type LogEvent = {
		timestamp: Date;
		message: string;
		target: string;
	};
	/* End Types for Logging */

	export type PrismaAction =
		| "findUnique"
		| "findUniqueOrThrow"
		| "findMany"
		| "findFirst"
		| "findFirstOrThrow"
		| "create"
		| "createMany"
		| "update"
		| "updateMany"
		| "upsert"
		| "delete"
		| "deleteMany"
		| "executeRaw"
		| "queryRaw"
		| "aggregate"
		| "count"
		| "runCommandRaw"
		| "findRaw"
		| "groupBy";

	/**
	 * These options are being passed into the middleware as "params"
	 */
	export type MiddlewareParams = {
		model?: ModelName;
		action: PrismaAction;
		args: any;
		dataPath: string[];
		runInTransaction: boolean;
	};

	/**
	 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
	 */
	export type Middleware<T = any> = (
		params: MiddlewareParams,
		next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
	) => $Utils.JsPromise<T>;

	// tested in getLogLevel.test.ts
	export function getLogLevel(
		log: Array<LogLevel | LogDefinition>,
	): LogLevel | undefined;

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<
		Prisma.DefaultPrismaClient,
		runtime.ITXClientDenyList
	>;

	export type Datasource = {
		url?: string;
	};

	/**
	 * Count Types
	 */

	/**
	 * Models
	 */

	/**
	 * Model User
	 */

	export type AggregateUser = {
		_count: UserCountAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	export type UserMinAggregateOutputType = {
		id: string | null;
		email: string | null;
		password: string | null;
		firstName: string | null;
		lastName: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type UserMaxAggregateOutputType = {
		id: string | null;
		email: string | null;
		password: string | null;
		firstName: string | null;
		lastName: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type UserCountAggregateOutputType = {
		id: number;
		email: number;
		password: number;
		firstName: number;
		lastName: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type UserMinAggregateInputType = {
		id?: true;
		email?: true;
		password?: true;
		firstName?: true;
		lastName?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type UserMaxAggregateInputType = {
		id?: true;
		email?: true;
		password?: true;
		firstName?: true;
		lastName?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type UserCountAggregateInputType = {
		id?: true;
		email?: true;
		password?: true;
		firstName?: true;
		lastName?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type UserAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which User to aggregate.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Users
		 **/
		_count?: true | UserCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserMaxAggregateInputType;
	};

	export type GetUserAggregateType<T extends UserAggregateArgs> = {
		[P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUser[P]>
			: GetScalarType<T[P], AggregateUser[P]>;
	};

	export type UserGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserWhereInput;
		orderBy?:
			| UserOrderByWithAggregationInput
			| UserOrderByWithAggregationInput[];
		by: UserScalarFieldEnum[] | UserScalarFieldEnum;
		having?: UserScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: UserCountAggregateInputType | true;
		_min?: UserMinAggregateInputType;
		_max?: UserMaxAggregateInputType;
	};

	export type UserGroupByOutputType = {
		id: string;
		email: string;
		password: string;
		firstName: string | null;
		lastName: string | null;
		createdAt: Date;
		updatedAt: Date;
		_count: UserCountAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserGroupByOutputType[P]>
					: GetScalarType<T[P], UserGroupByOutputType[P]>;
			}
		>
	>;

	export type UserSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			email?: boolean;
			password?: boolean;
			firstName?: boolean;
			lastName?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs["result"]["user"]
	>;

	export type UserSelectScalar = {
		id?: boolean;
		email?: boolean;
		password?: boolean;
		firstName?: boolean;
		lastName?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type $UserPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "User";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				email: string;
				password: string;
				firstName: string | null;
				lastName: string | null;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs["result"]["user"]
		>;
		composites: {};
	};

	type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
		$Result.GetResult<Prisma.$UserPayload, S>;

	type UserCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<UserFindManyArgs, "select" | "include" | "distinct"> & {
		select?: UserCountAggregateInputType | true;
	};

	export interface UserDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["User"];
			meta: { name: "User" };
		};
		/**
		 * Find zero or one User that matches the filter.
		 * @param {UserFindUniqueArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null,
			null,
			ExtArgs
		>;

		/**
		 * Find one User that matches the filter or throw an error  with `error.code='P2025'`
		 *     if no matches were found.
		 * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
			args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">,
			never,
			ExtArgs
		>;

		/**
		 * Find the first User that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findFirst<T extends UserFindFirstArgs<ExtArgs>>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null,
			null,
			ExtArgs
		>;

		/**
		 * Find the first User that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">,
			never,
			ExtArgs
		>;

		/**
		 * Find zero or more Users that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Users
		 * const users = await prisma.user.findMany()
		 *
		 * // Get first 10 Users
		 * const users = await prisma.user.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
		 *
		 **/
		findMany<T extends UserFindManyArgs<ExtArgs>>(
			args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">
		>;

		/**
		 * Create a User.
		 * @param {UserCreateArgs} args - Arguments to create a User.
		 * @example
		 * // Create one User
		 * const User = await prisma.user.create({
		 *   data: {
		 *     // ... data to create a User
		 *   }
		 * })
		 *
		 **/
		create<T extends UserCreateArgs<ExtArgs>>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">,
			never,
			ExtArgs
		>;

		/**
		 * Create many Users.
		 *     @param {UserCreateManyArgs} args - Arguments to create many Users.
		 *     @example
		 *     // Create many Users
		 *     const user = await prisma.user.createMany({
		 *       data: {
		 *         // ... provide data here
		 *       }
		 *     })
		 *
		 **/
		createMany<T extends UserCreateManyArgs<ExtArgs>>(
			args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Delete a User.
		 * @param {UserDeleteArgs} args - Arguments to delete one User.
		 * @example
		 * // Delete one User
		 * const User = await prisma.user.delete({
		 *   where: {
		 *     // ... filter to delete one User
		 *   }
		 * })
		 *
		 **/
		delete<T extends UserDeleteArgs<ExtArgs>>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">,
			never,
			ExtArgs
		>;

		/**
		 * Update one User.
		 * @param {UserUpdateArgs} args - Arguments to update one User.
		 * @example
		 * // Update one User
		 * const user = await prisma.user.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 **/
		update<T extends UserUpdateArgs<ExtArgs>>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">,
			never,
			ExtArgs
		>;

		/**
		 * Delete zero or more Users.
		 * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
		 * @example
		 * // Delete a few Users
		 * const { count } = await prisma.user.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 **/
		deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
			args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 **/
		updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
			args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create or update one User.
		 * @param {UserUpsertArgs} args - Arguments to update or create a User.
		 * @example
		 * // Update or create a User
		 * const user = await prisma.user.upsert({
		 *   create: {
		 *     // ... data to create a User
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the User we want to update
		 *   }
		 * })
		 **/
		upsert<T extends UserUpsertArgs<ExtArgs>>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">,
			never,
			ExtArgs
		>;

		/**
		 * Count the number of Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserCountArgs} args - Arguments to filter Users to count.
		 * @example
		 * // Count the number of Users
		 * const count = await prisma.user.count({
		 *   where: {
		 *     // ... the filter for the Users we want to count
		 *   }
		 * })
		 **/
		count<T extends UserCountArgs>(
			args?: Subset<T, UserCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], UserCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends UserAggregateArgs>(
			args: Subset<T, UserAggregateArgs>,
		): Prisma.PrismaPromise<GetUserAggregateType<T>>;

		/**
		 * Group by User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends UserGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserGroupByArgs["orderBy"] }
				: { orderBy?: UserGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
				  ? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
								  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
								  : [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
									  ];
					  }[HavingFields]
				  : "take" extends Keys<T>
					  ? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
								  }[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
					  : "skip" extends Keys<T>
						  ? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									  }[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
						  : ByValid extends True
							  ? {}
							  : {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
								  }[OrderFields],
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetUserGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the User model
		 */
		readonly fields: UserFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for User.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";

		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the User model
	 */
	interface UserFieldRefs {
		readonly id: FieldRef<"User", "String">;
		readonly email: FieldRef<"User", "String">;
		readonly password: FieldRef<"User", "String">;
		readonly firstName: FieldRef<"User", "String">;
		readonly lastName: FieldRef<"User", "String">;
		readonly createdAt: FieldRef<"User", "DateTime">;
		readonly updatedAt: FieldRef<"User", "DateTime">;
	}

	// Custom InputTypes

	/**
	 * User findUnique
	 */
	export type UserFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findUniqueOrThrow
	 */
	export type UserFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findFirst
	 */
	export type UserFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findFirstOrThrow
	 */
	export type UserFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findMany
	 */
	export type UserFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Filter, which Users to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User create
	 */
	export type UserCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>;
	};

	/**
	 * User createMany
	 */
	export type UserCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User update
	 */
	export type UserUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * The data needed to update a User.
		 */
		data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
		/**
		 * Choose, which User to update.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User updateMany
	 */
	export type UserUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
	};

	/**
	 * User upsert
	 */
	export type UserUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * The filter to search for the User to update in case it exists.
		 */
		where: UserWhereUniqueInput;
		/**
		 * In case the User found by the `where` argument doesn't exist, create a new User with this data.
		 */
		create: XOR<UserCreateInput, UserUncheckedCreateInput>;
		/**
		 * In case the User was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
	};

	/**
	 * User delete
	 */
	export type UserDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User deleteMany
	 */
	export type UserDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Users to delete
		 */
		where?: UserWhereInput;
	};

	/**
	 * User without action
	 */
	export type UserDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
	};

	/**
	 * Model Balance
	 */

	export type AggregateBalance = {
		_count: BalanceCountAggregateOutputType | null;
		_avg: BalanceAvgAggregateOutputType | null;
		_sum: BalanceSumAggregateOutputType | null;
		_min: BalanceMinAggregateOutputType | null;
		_max: BalanceMaxAggregateOutputType | null;
	};

	export type BalanceAvgAggregateOutputType = {
		value: number | null;
	};

	export type BalanceSumAggregateOutputType = {
		value: number | null;
	};

	export type BalanceMinAggregateOutputType = {
		id: string | null;
		userId: string | null;
		value: number | null;
		currency: $Enums.Currency | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type BalanceMaxAggregateOutputType = {
		id: string | null;
		userId: string | null;
		value: number | null;
		currency: $Enums.Currency | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type BalanceCountAggregateOutputType = {
		id: number;
		userId: number;
		value: number;
		currency: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type BalanceAvgAggregateInputType = {
		value?: true;
	};

	export type BalanceSumAggregateInputType = {
		value?: true;
	};

	export type BalanceMinAggregateInputType = {
		id?: true;
		userId?: true;
		value?: true;
		currency?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type BalanceMaxAggregateInputType = {
		id?: true;
		userId?: true;
		value?: true;
		currency?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type BalanceCountAggregateInputType = {
		id?: true;
		userId?: true;
		value?: true;
		currency?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type BalanceAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Balance to aggregate.
		 */
		where?: BalanceWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Balances to fetch.
		 */
		orderBy?:
			| BalanceOrderByWithRelationInput
			| BalanceOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: BalanceWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Balances from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Balances.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Balances
		 **/
		_count?: true | BalanceCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: BalanceAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: BalanceSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: BalanceMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: BalanceMaxAggregateInputType;
	};

	export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
		[P in keyof T & keyof AggregateBalance]: P extends "_count" | "count"
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateBalance[P]>
			: GetScalarType<T[P], AggregateBalance[P]>;
	};

	export type BalanceGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: BalanceWhereInput;
		orderBy?:
			| BalanceOrderByWithAggregationInput
			| BalanceOrderByWithAggregationInput[];
		by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum;
		having?: BalanceScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: BalanceCountAggregateInputType | true;
		_avg?: BalanceAvgAggregateInputType;
		_sum?: BalanceSumAggregateInputType;
		_min?: BalanceMinAggregateInputType;
		_max?: BalanceMaxAggregateInputType;
	};

	export type BalanceGroupByOutputType = {
		id: string;
		userId: string;
		value: number;
		currency: $Enums.Currency;
		createdAt: Date;
		updatedAt: Date;
		_count: BalanceCountAggregateOutputType | null;
		_avg: BalanceAvgAggregateOutputType | null;
		_sum: BalanceSumAggregateOutputType | null;
		_min: BalanceMinAggregateOutputType | null;
		_max: BalanceMaxAggregateOutputType | null;
	};

	type GetBalanceGroupByPayload<T extends BalanceGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<BalanceGroupByOutputType, T["by"]> & {
					[P in keyof T & keyof BalanceGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], BalanceGroupByOutputType[P]>
						: GetScalarType<T[P], BalanceGroupByOutputType[P]>;
				}
			>
		>;

	export type BalanceSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			userId?: boolean;
			value?: boolean;
			currency?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs["result"]["balance"]
	>;

	export type BalanceSelectScalar = {
		id?: boolean;
		userId?: boolean;
		value?: boolean;
		currency?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type $BalancePayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Balance";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				userId: string;
				value: number;
				currency: $Enums.Currency;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs["result"]["balance"]
		>;
		composites: {};
	};

	type BalanceGetPayload<
		S extends boolean | null | undefined | BalanceDefaultArgs,
	> = $Result.GetResult<Prisma.$BalancePayload, S>;

	type BalanceCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<BalanceFindManyArgs, "select" | "include" | "distinct"> & {
		select?: BalanceCountAggregateInputType | true;
	};

	export interface BalanceDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Balance"];
			meta: { name: "Balance" };
		};
		/**
		 * Find zero or one Balance that matches the filter.
		 * @param {BalanceFindUniqueArgs} args - Arguments to find a Balance
		 * @example
		 * // Get one Balance
		 * const balance = await prisma.balance.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findUnique<T extends BalanceFindUniqueArgs<ExtArgs>>(
			args: SelectSubset<T, BalanceFindUniqueArgs<ExtArgs>>,
		): Prisma__BalanceClient<
			$Result.GetResult<
				Prisma.$BalancePayload<ExtArgs>,
				T,
				"findUnique"
			> | null,
			null,
			ExtArgs
		>;

		/**
		 * Find one Balance that matches the filter or throw an error  with `error.code='P2025'`
		 *     if no matches were found.
		 * @param {BalanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
		 * @example
		 * // Get one Balance
		 * const balance = await prisma.balance.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findUniqueOrThrow<T extends BalanceFindUniqueOrThrowArgs<ExtArgs>>(
			args?: SelectSubset<T, BalanceFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__BalanceClient<
			$Result.GetResult<
				Prisma.$BalancePayload<ExtArgs>,
				T,
				"findUniqueOrThrow"
			>,
			never,
			ExtArgs
		>;

		/**
		 * Find the first Balance that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {BalanceFindFirstArgs} args - Arguments to find a Balance
		 * @example
		 * // Get one Balance
		 * const balance = await prisma.balance.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findFirst<T extends BalanceFindFirstArgs<ExtArgs>>(
			args?: SelectSubset<T, BalanceFindFirstArgs<ExtArgs>>,
		): Prisma__BalanceClient<
			$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirst"> | null,
			null,
			ExtArgs
		>;

		/**
		 * Find the first Balance that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {BalanceFindFirstOrThrowArgs} args - Arguments to find a Balance
		 * @example
		 * // Get one Balance
		 * const balance = await prisma.balance.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findFirstOrThrow<T extends BalanceFindFirstOrThrowArgs<ExtArgs>>(
			args?: SelectSubset<T, BalanceFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__BalanceClient<
			$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirstOrThrow">,
			never,
			ExtArgs
		>;

		/**
		 * Find zero or more Balances that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {BalanceFindManyArgs=} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Balances
		 * const balances = await prisma.balance.findMany()
		 *
		 * // Get first 10 Balances
		 * const balances = await prisma.balance.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
		 *
		 **/
		findMany<T extends BalanceFindManyArgs<ExtArgs>>(
			args?: SelectSubset<T, BalanceFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany">
		>;

		/**
		 * Create a Balance.
		 * @param {BalanceCreateArgs} args - Arguments to create a Balance.
		 * @example
		 * // Create one Balance
		 * const Balance = await prisma.balance.create({
		 *   data: {
		 *     // ... data to create a Balance
		 *   }
		 * })
		 *
		 **/
		create<T extends BalanceCreateArgs<ExtArgs>>(
			args: SelectSubset<T, BalanceCreateArgs<ExtArgs>>,
		): Prisma__BalanceClient<
			$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "create">,
			never,
			ExtArgs
		>;

		/**
		 * Create many Balances.
		 *     @param {BalanceCreateManyArgs} args - Arguments to create many Balances.
		 *     @example
		 *     // Create many Balances
		 *     const balance = await prisma.balance.createMany({
		 *       data: {
		 *         // ... provide data here
		 *       }
		 *     })
		 *
		 **/
		createMany<T extends BalanceCreateManyArgs<ExtArgs>>(
			args?: SelectSubset<T, BalanceCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Delete a Balance.
		 * @param {BalanceDeleteArgs} args - Arguments to delete one Balance.
		 * @example
		 * // Delete one Balance
		 * const Balance = await prisma.balance.delete({
		 *   where: {
		 *     // ... filter to delete one Balance
		 *   }
		 * })
		 *
		 **/
		delete<T extends BalanceDeleteArgs<ExtArgs>>(
			args: SelectSubset<T, BalanceDeleteArgs<ExtArgs>>,
		): Prisma__BalanceClient<
			$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "delete">,
			never,
			ExtArgs
		>;

		/**
		 * Update one Balance.
		 * @param {BalanceUpdateArgs} args - Arguments to update one Balance.
		 * @example
		 * // Update one Balance
		 * const balance = await prisma.balance.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 **/
		update<T extends BalanceUpdateArgs<ExtArgs>>(
			args: SelectSubset<T, BalanceUpdateArgs<ExtArgs>>,
		): Prisma__BalanceClient<
			$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "update">,
			never,
			ExtArgs
		>;

		/**
		 * Delete zero or more Balances.
		 * @param {BalanceDeleteManyArgs} args - Arguments to filter Balances to delete.
		 * @example
		 * // Delete a few Balances
		 * const { count } = await prisma.balance.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 **/
		deleteMany<T extends BalanceDeleteManyArgs<ExtArgs>>(
			args?: SelectSubset<T, BalanceDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Balances.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {BalanceUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Balances
		 * const balance = await prisma.balance.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 **/
		updateMany<T extends BalanceUpdateManyArgs<ExtArgs>>(
			args: SelectSubset<T, BalanceUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create or update one Balance.
		 * @param {BalanceUpsertArgs} args - Arguments to update or create a Balance.
		 * @example
		 * // Update or create a Balance
		 * const balance = await prisma.balance.upsert({
		 *   create: {
		 *     // ... data to create a Balance
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Balance we want to update
		 *   }
		 * })
		 **/
		upsert<T extends BalanceUpsertArgs<ExtArgs>>(
			args: SelectSubset<T, BalanceUpsertArgs<ExtArgs>>,
		): Prisma__BalanceClient<
			$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "upsert">,
			never,
			ExtArgs
		>;

		/**
		 * Count the number of Balances.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {BalanceCountArgs} args - Arguments to filter Balances to count.
		 * @example
		 * // Count the number of Balances
		 * const count = await prisma.balance.count({
		 *   where: {
		 *     // ... the filter for the Balances we want to count
		 *   }
		 * })
		 **/
		count<T extends BalanceCountArgs>(
			args?: Subset<T, BalanceCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], BalanceCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Balance.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends BalanceAggregateArgs>(
			args: Subset<T, BalanceAggregateArgs>,
		): Prisma.PrismaPromise<GetBalanceAggregateType<T>>;

		/**
		 * Group by Balance.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {BalanceGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends BalanceGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: BalanceGroupByArgs["orderBy"] }
				: { orderBy?: BalanceGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
				  ? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
								  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
								  : [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
									  ];
					  }[HavingFields]
				  : "take" extends Keys<T>
					  ? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
								  }[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
					  : "skip" extends Keys<T>
						  ? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									  }[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
						  : ByValid extends True
							  ? {}
							  : {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
								  }[OrderFields],
		>(
			args: SubsetIntersection<T, BalanceGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetBalanceGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Balance model
		 */
		readonly fields: BalanceFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Balance.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__BalanceClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";

		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Balance model
	 */
	interface BalanceFieldRefs {
		readonly id: FieldRef<"Balance", "String">;
		readonly userId: FieldRef<"Balance", "String">;
		readonly value: FieldRef<"Balance", "Float">;
		readonly currency: FieldRef<"Balance", "Currency">;
		readonly createdAt: FieldRef<"Balance", "DateTime">;
		readonly updatedAt: FieldRef<"Balance", "DateTime">;
	}

	// Custom InputTypes

	/**
	 * Balance findUnique
	 */
	export type BalanceFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Balance
		 */
		select?: BalanceSelect<ExtArgs> | null;
		/**
		 * Filter, which Balance to fetch.
		 */
		where: BalanceWhereUniqueInput;
	};

	/**
	 * Balance findUniqueOrThrow
	 */
	export type BalanceFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Balance
		 */
		select?: BalanceSelect<ExtArgs> | null;
		/**
		 * Filter, which Balance to fetch.
		 */
		where: BalanceWhereUniqueInput;
	};

	/**
	 * Balance findFirst
	 */
	export type BalanceFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Balance
		 */
		select?: BalanceSelect<ExtArgs> | null;
		/**
		 * Filter, which Balance to fetch.
		 */
		where?: BalanceWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Balances to fetch.
		 */
		orderBy?:
			| BalanceOrderByWithRelationInput
			| BalanceOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Balances.
		 */
		cursor?: BalanceWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Balances from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Balances.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Balances.
		 */
		distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[];
	};

	/**
	 * Balance findFirstOrThrow
	 */
	export type BalanceFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Balance
		 */
		select?: BalanceSelect<ExtArgs> | null;
		/**
		 * Filter, which Balance to fetch.
		 */
		where?: BalanceWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Balances to fetch.
		 */
		orderBy?:
			| BalanceOrderByWithRelationInput
			| BalanceOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Balances.
		 */
		cursor?: BalanceWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Balances from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Balances.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Balances.
		 */
		distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[];
	};

	/**
	 * Balance findMany
	 */
	export type BalanceFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Balance
		 */
		select?: BalanceSelect<ExtArgs> | null;
		/**
		 * Filter, which Balances to fetch.
		 */
		where?: BalanceWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Balances to fetch.
		 */
		orderBy?:
			| BalanceOrderByWithRelationInput
			| BalanceOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Balances.
		 */
		cursor?: BalanceWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Balances from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Balances.
		 */
		skip?: number;
		distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[];
	};

	/**
	 * Balance create
	 */
	export type BalanceCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Balance
		 */
		select?: BalanceSelect<ExtArgs> | null;
		/**
		 * The data needed to create a Balance.
		 */
		data: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>;
	};

	/**
	 * Balance createMany
	 */
	export type BalanceCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Balances.
		 */
		data: BalanceCreateManyInput | BalanceCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Balance update
	 */
	export type BalanceUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Balance
		 */
		select?: BalanceSelect<ExtArgs> | null;
		/**
		 * The data needed to update a Balance.
		 */
		data: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>;
		/**
		 * Choose, which Balance to update.
		 */
		where: BalanceWhereUniqueInput;
	};

	/**
	 * Balance updateMany
	 */
	export type BalanceUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Balances.
		 */
		data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>;
		/**
		 * Filter which Balances to update
		 */
		where?: BalanceWhereInput;
	};

	/**
	 * Balance upsert
	 */
	export type BalanceUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Balance
		 */
		select?: BalanceSelect<ExtArgs> | null;
		/**
		 * The filter to search for the Balance to update in case it exists.
		 */
		where: BalanceWhereUniqueInput;
		/**
		 * In case the Balance found by the `where` argument doesn't exist, create a new Balance with this data.
		 */
		create: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>;
		/**
		 * In case the Balance was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>;
	};

	/**
	 * Balance delete
	 */
	export type BalanceDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Balance
		 */
		select?: BalanceSelect<ExtArgs> | null;
		/**
		 * Filter which Balance to delete.
		 */
		where: BalanceWhereUniqueInput;
	};

	/**
	 * Balance deleteMany
	 */
	export type BalanceDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Balances to delete
		 */
		where?: BalanceWhereInput;
	};

	/**
	 * Balance without action
	 */
	export type BalanceDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Balance
		 */
		select?: BalanceSelect<ExtArgs> | null;
	};

	/**
	 * Model Transaction
	 */

	export type AggregateTransaction = {
		_count: TransactionCountAggregateOutputType | null;
		_avg: TransactionAvgAggregateOutputType | null;
		_sum: TransactionSumAggregateOutputType | null;
		_min: TransactionMinAggregateOutputType | null;
		_max: TransactionMaxAggregateOutputType | null;
	};

	export type TransactionAvgAggregateOutputType = {
		amount: number | null;
	};

	export type TransactionSumAggregateOutputType = {
		amount: number | null;
	};

	export type TransactionMinAggregateOutputType = {
		id: string | null;
		userId: string | null;
		status: $Enums.TransactionStatus | null;
		type: $Enums.TransactionType | null;
		amount: number | null;
		currency: $Enums.Currency | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type TransactionMaxAggregateOutputType = {
		id: string | null;
		userId: string | null;
		status: $Enums.TransactionStatus | null;
		type: $Enums.TransactionType | null;
		amount: number | null;
		currency: $Enums.Currency | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type TransactionCountAggregateOutputType = {
		id: number;
		userId: number;
		status: number;
		type: number;
		amount: number;
		currency: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type TransactionAvgAggregateInputType = {
		amount?: true;
	};

	export type TransactionSumAggregateInputType = {
		amount?: true;
	};

	export type TransactionMinAggregateInputType = {
		id?: true;
		userId?: true;
		status?: true;
		type?: true;
		amount?: true;
		currency?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type TransactionMaxAggregateInputType = {
		id?: true;
		userId?: true;
		status?: true;
		type?: true;
		amount?: true;
		currency?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type TransactionCountAggregateInputType = {
		id?: true;
		userId?: true;
		status?: true;
		type?: true;
		amount?: true;
		currency?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type TransactionAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Transaction to aggregate.
		 */
		where?: TransactionWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Transactions to fetch.
		 */
		orderBy?:
			| TransactionOrderByWithRelationInput
			| TransactionOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: TransactionWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Transactions from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Transactions.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Transactions
		 **/
		_count?: true | TransactionCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: TransactionAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: TransactionSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: TransactionMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: TransactionMaxAggregateInputType;
	};

	export type GetTransactionAggregateType<T extends TransactionAggregateArgs> =
		{
			[P in keyof T & keyof AggregateTransaction]: P extends "_count" | "count"
				? T[P] extends true
					? number
					: GetScalarType<T[P], AggregateTransaction[P]>
				: GetScalarType<T[P], AggregateTransaction[P]>;
		};

	export type TransactionGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: TransactionWhereInput;
		orderBy?:
			| TransactionOrderByWithAggregationInput
			| TransactionOrderByWithAggregationInput[];
		by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum;
		having?: TransactionScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: TransactionCountAggregateInputType | true;
		_avg?: TransactionAvgAggregateInputType;
		_sum?: TransactionSumAggregateInputType;
		_min?: TransactionMinAggregateInputType;
		_max?: TransactionMaxAggregateInputType;
	};

	export type TransactionGroupByOutputType = {
		id: string;
		userId: string;
		status: $Enums.TransactionStatus;
		type: $Enums.TransactionType;
		amount: number;
		currency: $Enums.Currency;
		createdAt: Date;
		updatedAt: Date;
		_count: TransactionCountAggregateOutputType | null;
		_avg: TransactionAvgAggregateOutputType | null;
		_sum: TransactionSumAggregateOutputType | null;
		_min: TransactionMinAggregateOutputType | null;
		_max: TransactionMaxAggregateOutputType | null;
	};

	type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<TransactionGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof TransactionGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], TransactionGroupByOutputType[P]>
						: GetScalarType<T[P], TransactionGroupByOutputType[P]>;
				}
			>
		>;

	export type TransactionSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			userId?: boolean;
			status?: boolean;
			type?: boolean;
			amount?: boolean;
			currency?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs["result"]["transaction"]
	>;

	export type TransactionSelectScalar = {
		id?: boolean;
		userId?: boolean;
		status?: boolean;
		type?: boolean;
		amount?: boolean;
		currency?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type $TransactionPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "Transaction";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				userId: string;
				status: $Enums.TransactionStatus;
				type: $Enums.TransactionType;
				amount: number;
				currency: $Enums.Currency;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs["result"]["transaction"]
		>;
		composites: {};
	};

	type TransactionGetPayload<
		S extends boolean | null | undefined | TransactionDefaultArgs,
	> = $Result.GetResult<Prisma.$TransactionPayload, S>;

	type TransactionCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<TransactionFindManyArgs, "select" | "include" | "distinct"> & {
		select?: TransactionCountAggregateInputType | true;
	};

	export interface TransactionDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["Transaction"];
			meta: { name: "Transaction" };
		};
		/**
		 * Find zero or one Transaction that matches the filter.
		 * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
		 * @example
		 * // Get one Transaction
		 * const transactions = await prisma.transactions.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findUnique<T extends TransactionFindUniqueArgs<ExtArgs>>(
			args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>,
		): Prisma__TransactionClient<
			$Result.GetResult<
				Prisma.$TransactionPayload<ExtArgs>,
				T,
				"findUnique"
			> | null,
			null,
			ExtArgs
		>;

		/**
		 * Find one Transaction that matches the filter or throw an error  with `error.code='P2025'`
		 *     if no matches were found.
		 * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
		 * @example
		 * // Get one Transaction
		 * const transactions = await prisma.transactions.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs<ExtArgs>>(
			args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__TransactionClient<
			$Result.GetResult<
				Prisma.$TransactionPayload<ExtArgs>,
				T,
				"findUniqueOrThrow"
			>,
			never,
			ExtArgs
		>;

		/**
		 * Find the first Transaction that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
		 * @example
		 * // Get one Transaction
		 * const transactions = await prisma.transactions.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findFirst<T extends TransactionFindFirstArgs<ExtArgs>>(
			args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>,
		): Prisma__TransactionClient<
			$Result.GetResult<
				Prisma.$TransactionPayload<ExtArgs>,
				T,
				"findFirst"
			> | null,
			null,
			ExtArgs
		>;

		/**
		 * Find the first Transaction that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
		 * @example
		 * // Get one Transaction
		 * const transactions = await prisma.transactions.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 **/
		findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs<ExtArgs>>(
			args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__TransactionClient<
			$Result.GetResult<
				Prisma.$TransactionPayload<ExtArgs>,
				T,
				"findFirstOrThrow"
			>,
			never,
			ExtArgs
		>;

		/**
		 * Find zero or more Transactions that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Transactions
		 * const transactions = await prisma.transactions.findMany()
		 *
		 * // Get first 10 Transactions
		 * const transactions = await prisma.transactions.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const transactionWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
		 *
		 **/
		findMany<T extends TransactionFindManyArgs<ExtArgs>>(
			args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">
		>;

		/**
		 * Create a Transaction.
		 * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
		 * @example
		 * // Create one Transaction
		 * const Transaction = await prisma.transactions.create({
		 *   data: {
		 *     // ... data to create a Transaction
		 *   }
		 * })
		 *
		 **/
		create<T extends TransactionCreateArgs<ExtArgs>>(
			args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>,
		): Prisma__TransactionClient<
			$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">,
			never,
			ExtArgs
		>;

		/**
		 * Create many Transactions.
		 *     @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
		 *     @example
		 *     // Create many Transactions
		 *     const transactions = await prisma.transactions.createMany({
		 *       data: {
		 *         // ... provide data here
		 *       }
		 *     })
		 *
		 **/
		createMany<T extends TransactionCreateManyArgs<ExtArgs>>(
			args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Delete a Transaction.
		 * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
		 * @example
		 * // Delete one Transaction
		 * const Transaction = await prisma.transactions.delete({
		 *   where: {
		 *     // ... filter to delete one Transaction
		 *   }
		 * })
		 *
		 **/
		delete<T extends TransactionDeleteArgs<ExtArgs>>(
			args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>,
		): Prisma__TransactionClient<
			$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">,
			never,
			ExtArgs
		>;

		/**
		 * Update one Transaction.
		 * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
		 * @example
		 * // Update one Transaction
		 * const transactions = await prisma.transactions.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 **/
		update<T extends TransactionUpdateArgs<ExtArgs>>(
			args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>,
		): Prisma__TransactionClient<
			$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">,
			never,
			ExtArgs
		>;

		/**
		 * Delete zero or more Transactions.
		 * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
		 * @example
		 * // Delete a few Transactions
		 * const { count } = await prisma.transactions.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 **/
		deleteMany<T extends TransactionDeleteManyArgs<ExtArgs>>(
			args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Transactions.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Transactions
		 * const transactions = await prisma.transactions.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 **/
		updateMany<T extends TransactionUpdateManyArgs<ExtArgs>>(
			args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create or update one Transaction.
		 * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
		 * @example
		 * // Update or create a Transaction
		 * const transactions = await prisma.transactions.upsert({
		 *   create: {
		 *     // ... data to create a Transaction
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Transaction we want to update
		 *   }
		 * })
		 **/
		upsert<T extends TransactionUpsertArgs<ExtArgs>>(
			args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>,
		): Prisma__TransactionClient<
			$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">,
			never,
			ExtArgs
		>;

		/**
		 * Count the number of Transactions.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
		 * @example
		 * // Count the number of Transactions
		 * const count = await prisma.transactions.count({
		 *   where: {
		 *     // ... the filter for the Transactions we want to count
		 *   }
		 * })
		 **/
		count<T extends TransactionCountArgs>(
			args?: Subset<T, TransactionCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<T["select"], TransactionCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Transaction.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends TransactionAggregateArgs>(
			args: Subset<T, TransactionAggregateArgs>,
		): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;

		/**
		 * Group by Transaction.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {TransactionGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends TransactionGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: TransactionGroupByArgs["orderBy"] }
				: { orderBy?: TransactionGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
				  ? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
								  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
								  : [
											Error,
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
									  ];
					  }[HavingFields]
				  : "take" extends Keys<T>
					  ? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
								  }[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
					  : "skip" extends Keys<T>
						  ? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									  }[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
						  : ByValid extends True
							  ? {}
							  : {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
								  }[OrderFields],
		>(
			args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> &
				InputErrors,
		): {} extends InputErrors
			? GetTransactionGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Transaction model
		 */
		readonly fields: TransactionFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Transaction.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__TransactionClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";

		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Transaction model
	 */
	interface TransactionFieldRefs {
		readonly id: FieldRef<"Transaction", "String">;
		readonly userId: FieldRef<"Transaction", "String">;
		readonly status: FieldRef<"Transaction", "TransactionStatus">;
		readonly type: FieldRef<"Transaction", "TransactionType">;
		readonly amount: FieldRef<"Transaction", "Float">;
		readonly currency: FieldRef<"Transaction", "Currency">;
		readonly createdAt: FieldRef<"Transaction", "DateTime">;
		readonly updatedAt: FieldRef<"Transaction", "DateTime">;
	}

	// Custom InputTypes

	/**
	 * Transaction findUnique
	 */
	export type TransactionFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Transaction
		 */
		select?: TransactionSelect<ExtArgs> | null;
		/**
		 * Filter, which Transaction to fetch.
		 */
		where: TransactionWhereUniqueInput;
	};

	/**
	 * Transaction findUniqueOrThrow
	 */
	export type TransactionFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Transaction
		 */
		select?: TransactionSelect<ExtArgs> | null;
		/**
		 * Filter, which Transaction to fetch.
		 */
		where: TransactionWhereUniqueInput;
	};

	/**
	 * Transaction findFirst
	 */
	export type TransactionFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Transaction
		 */
		select?: TransactionSelect<ExtArgs> | null;
		/**
		 * Filter, which Transaction to fetch.
		 */
		where?: TransactionWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Transactions to fetch.
		 */
		orderBy?:
			| TransactionOrderByWithRelationInput
			| TransactionOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Transactions.
		 */
		cursor?: TransactionWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Transactions from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Transactions.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Transactions.
		 */
		distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
	};

	/**
	 * Transaction findFirstOrThrow
	 */
	export type TransactionFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Transaction
		 */
		select?: TransactionSelect<ExtArgs> | null;
		/**
		 * Filter, which Transaction to fetch.
		 */
		where?: TransactionWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Transactions to fetch.
		 */
		orderBy?:
			| TransactionOrderByWithRelationInput
			| TransactionOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Transactions.
		 */
		cursor?: TransactionWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Transactions from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Transactions.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Transactions.
		 */
		distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
	};

	/**
	 * Transaction findMany
	 */
	export type TransactionFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Transaction
		 */
		select?: TransactionSelect<ExtArgs> | null;
		/**
		 * Filter, which Transactions to fetch.
		 */
		where?: TransactionWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Transactions to fetch.
		 */
		orderBy?:
			| TransactionOrderByWithRelationInput
			| TransactionOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Transactions.
		 */
		cursor?: TransactionWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Transactions from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Transactions.
		 */
		skip?: number;
		distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
	};

	/**
	 * Transaction create
	 */
	export type TransactionCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Transaction
		 */
		select?: TransactionSelect<ExtArgs> | null;
		/**
		 * The data needed to create a Transaction.
		 */
		data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>;
	};

	/**
	 * Transaction createMany
	 */
	export type TransactionCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Transactions.
		 */
		data: TransactionCreateManyInput | TransactionCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Transaction update
	 */
	export type TransactionUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Transaction
		 */
		select?: TransactionSelect<ExtArgs> | null;
		/**
		 * The data needed to update a Transaction.
		 */
		data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>;
		/**
		 * Choose, which Transaction to update.
		 */
		where: TransactionWhereUniqueInput;
	};

	/**
	 * Transaction updateMany
	 */
	export type TransactionUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Transactions.
		 */
		data: XOR<
			TransactionUpdateManyMutationInput,
			TransactionUncheckedUpdateManyInput
		>;
		/**
		 * Filter which Transactions to update
		 */
		where?: TransactionWhereInput;
	};

	/**
	 * Transaction upsert
	 */
	export type TransactionUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Transaction
		 */
		select?: TransactionSelect<ExtArgs> | null;
		/**
		 * The filter to search for the Transaction to update in case it exists.
		 */
		where: TransactionWhereUniqueInput;
		/**
		 * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
		 */
		create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>;
		/**
		 * In case the Transaction was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>;
	};

	/**
	 * Transaction delete
	 */
	export type TransactionDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Transaction
		 */
		select?: TransactionSelect<ExtArgs> | null;
		/**
		 * Filter which Transaction to delete.
		 */
		where: TransactionWhereUniqueInput;
	};

	/**
	 * Transaction deleteMany
	 */
	export type TransactionDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Transactions to delete
		 */
		where?: TransactionWhereInput;
	};

	/**
	 * Transaction without action
	 */
	export type TransactionDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Transaction
		 */
		select?: TransactionSelect<ExtArgs> | null;
	};

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		ReadUncommitted: "ReadUncommitted";
		ReadCommitted: "ReadCommitted";
		RepeatableRead: "RepeatableRead";
		Serializable: "Serializable";
	};

	export type TransactionIsolationLevel =
		(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

	export const UserScalarFieldEnum: {
		id: "id";
		email: "email";
		password: "password";
		firstName: "firstName";
		lastName: "lastName";
		createdAt: "createdAt";
		updatedAt: "updatedAt";
	};

	export type UserScalarFieldEnum =
		(typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

	export const BalanceScalarFieldEnum: {
		id: "id";
		userId: "userId";
		value: "value";
		currency: "currency";
		createdAt: "createdAt";
		updatedAt: "updatedAt";
	};

	export type BalanceScalarFieldEnum =
		(typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum];

	export const TransactionScalarFieldEnum: {
		id: "id";
		userId: "userId";
		status: "status";
		type: "type";
		amount: "amount";
		currency: "currency";
		createdAt: "createdAt";
		updatedAt: "updatedAt";
	};

	export type TransactionScalarFieldEnum =
		(typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];

	export const SortOrder: {
		asc: "asc";
		desc: "desc";
	};

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

	export const QueryMode: {
		default: "default";
		insensitive: "insensitive";
	};

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

	export const NullsOrder: {
		first: "first";
		last: "last";
	};

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String"
	>;

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String[]"
	>;

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"DateTime"
	>;

	/**
	 * Reference to a field of type 'DateTime[]'
	 */
	export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"DateTime[]"
	>;

	/**
	 * Reference to a field of type 'Float'
	 */
	export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float"
	>;

	/**
	 * Reference to a field of type 'Float[]'
	 */
	export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float[]"
	>;

	/**
	 * Reference to a field of type 'Currency'
	 */
	export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Currency"
	>;

	/**
	 * Reference to a field of type 'Currency[]'
	 */
	export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Currency[]"
	>;

	/**
	 * Reference to a field of type 'TransactionStatus'
	 */
	export type EnumTransactionStatusFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "TransactionStatus">;

	/**
	 * Reference to a field of type 'TransactionStatus[]'
	 */
	export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "TransactionStatus[]">;

	/**
	 * Reference to a field of type 'TransactionType'
	 */
	export type EnumTransactionTypeFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "TransactionType">;

	/**
	 * Reference to a field of type 'TransactionType[]'
	 */
	export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> =
		FieldRefInputType<$PrismaModel, "TransactionType[]">;

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int"
	>;

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int[]"
	>;

	/**
	 * Deep Input Types
	 */

	export type UserWhereInput = {
		AND?: UserWhereInput | UserWhereInput[];
		OR?: UserWhereInput[];
		NOT?: UserWhereInput | UserWhereInput[];
		id?: StringFilter<"User"> | string;
		email?: StringFilter<"User"> | string;
		password?: StringFilter<"User"> | string;
		firstName?: StringNullableFilter<"User"> | string | null;
		lastName?: StringNullableFilter<"User"> | string | null;
		createdAt?: DateTimeFilter<"User"> | Date | string;
		updatedAt?: DateTimeFilter<"User"> | Date | string;
	};

	export type UserOrderByWithRelationInput = {
		id?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		firstName?: SortOrderInput | SortOrder;
		lastName?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			email?: string;
			AND?: UserWhereInput | UserWhereInput[];
			OR?: UserWhereInput[];
			NOT?: UserWhereInput | UserWhereInput[];
			password?: StringFilter<"User"> | string;
			firstName?: StringNullableFilter<"User"> | string | null;
			lastName?: StringNullableFilter<"User"> | string | null;
			createdAt?: DateTimeFilter<"User"> | Date | string;
			updatedAt?: DateTimeFilter<"User"> | Date | string;
		},
		"id" | "email"
	>;

	export type UserOrderByWithAggregationInput = {
		id?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		firstName?: SortOrderInput | SortOrder;
		lastName?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: UserCountOrderByAggregateInput;
		_max?: UserMaxOrderByAggregateInput;
		_min?: UserMinOrderByAggregateInput;
	};

	export type UserScalarWhereWithAggregatesInput = {
		AND?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[];
		OR?: UserScalarWhereWithAggregatesInput[];
		NOT?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"User"> | string;
		email?: StringWithAggregatesFilter<"User"> | string;
		password?: StringWithAggregatesFilter<"User"> | string;
		firstName?: StringNullableWithAggregatesFilter<"User"> | string | null;
		lastName?: StringNullableWithAggregatesFilter<"User"> | string | null;
		createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
	};

	export type BalanceWhereInput = {
		AND?: BalanceWhereInput | BalanceWhereInput[];
		OR?: BalanceWhereInput[];
		NOT?: BalanceWhereInput | BalanceWhereInput[];
		id?: StringFilter<"Balance"> | string;
		userId?: StringFilter<"Balance"> | string;
		value?: FloatFilter<"Balance"> | number;
		currency?: EnumCurrencyFilter<"Balance"> | $Enums.Currency;
		createdAt?: DateTimeFilter<"Balance"> | Date | string;
		updatedAt?: DateTimeFilter<"Balance"> | Date | string;
	};

	export type BalanceOrderByWithRelationInput = {
		id?: SortOrder;
		userId?: SortOrder;
		value?: SortOrder;
		currency?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type BalanceWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: BalanceWhereInput | BalanceWhereInput[];
			OR?: BalanceWhereInput[];
			NOT?: BalanceWhereInput | BalanceWhereInput[];
			userId?: StringFilter<"Balance"> | string;
			value?: FloatFilter<"Balance"> | number;
			currency?: EnumCurrencyFilter<"Balance"> | $Enums.Currency;
			createdAt?: DateTimeFilter<"Balance"> | Date | string;
			updatedAt?: DateTimeFilter<"Balance"> | Date | string;
		},
		"id"
	>;

	export type BalanceOrderByWithAggregationInput = {
		id?: SortOrder;
		userId?: SortOrder;
		value?: SortOrder;
		currency?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: BalanceCountOrderByAggregateInput;
		_avg?: BalanceAvgOrderByAggregateInput;
		_max?: BalanceMaxOrderByAggregateInput;
		_min?: BalanceMinOrderByAggregateInput;
		_sum?: BalanceSumOrderByAggregateInput;
	};

	export type BalanceScalarWhereWithAggregatesInput = {
		AND?:
			| BalanceScalarWhereWithAggregatesInput
			| BalanceScalarWhereWithAggregatesInput[];
		OR?: BalanceScalarWhereWithAggregatesInput[];
		NOT?:
			| BalanceScalarWhereWithAggregatesInput
			| BalanceScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"Balance"> | string;
		userId?: StringWithAggregatesFilter<"Balance"> | string;
		value?: FloatWithAggregatesFilter<"Balance"> | number;
		currency?: EnumCurrencyWithAggregatesFilter<"Balance"> | $Enums.Currency;
		createdAt?: DateTimeWithAggregatesFilter<"Balance"> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<"Balance"> | Date | string;
	};

	export type TransactionWhereInput = {
		AND?: TransactionWhereInput | TransactionWhereInput[];
		OR?: TransactionWhereInput[];
		NOT?: TransactionWhereInput | TransactionWhereInput[];
		id?: StringFilter<"Transaction"> | string;
		userId?: StringFilter<"Transaction"> | string;
		status?:
			| EnumTransactionStatusFilter<"Transaction">
			| $Enums.TransactionStatus;
		type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
		amount?: FloatFilter<"Transaction"> | number;
		currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency;
		createdAt?: DateTimeFilter<"Transaction"> | Date | string;
		updatedAt?: DateTimeFilter<"Transaction"> | Date | string;
	};

	export type TransactionOrderByWithRelationInput = {
		id?: SortOrder;
		userId?: SortOrder;
		status?: SortOrder;
		type?: SortOrder;
		amount?: SortOrder;
		currency?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type TransactionWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: TransactionWhereInput | TransactionWhereInput[];
			OR?: TransactionWhereInput[];
			NOT?: TransactionWhereInput | TransactionWhereInput[];
			userId?: StringFilter<"Transaction"> | string;
			status?:
				| EnumTransactionStatusFilter<"Transaction">
				| $Enums.TransactionStatus;
			type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
			amount?: FloatFilter<"Transaction"> | number;
			currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency;
			createdAt?: DateTimeFilter<"Transaction"> | Date | string;
			updatedAt?: DateTimeFilter<"Transaction"> | Date | string;
		},
		"id"
	>;

	export type TransactionOrderByWithAggregationInput = {
		id?: SortOrder;
		userId?: SortOrder;
		status?: SortOrder;
		type?: SortOrder;
		amount?: SortOrder;
		currency?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: TransactionCountOrderByAggregateInput;
		_avg?: TransactionAvgOrderByAggregateInput;
		_max?: TransactionMaxOrderByAggregateInput;
		_min?: TransactionMinOrderByAggregateInput;
		_sum?: TransactionSumOrderByAggregateInput;
	};

	export type TransactionScalarWhereWithAggregatesInput = {
		AND?:
			| TransactionScalarWhereWithAggregatesInput
			| TransactionScalarWhereWithAggregatesInput[];
		OR?: TransactionScalarWhereWithAggregatesInput[];
		NOT?:
			| TransactionScalarWhereWithAggregatesInput
			| TransactionScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"Transaction"> | string;
		userId?: StringWithAggregatesFilter<"Transaction"> | string;
		status?:
			| EnumTransactionStatusWithAggregatesFilter<"Transaction">
			| $Enums.TransactionStatus;
		type?:
			| EnumTransactionTypeWithAggregatesFilter<"Transaction">
			| $Enums.TransactionType;
		amount?: FloatWithAggregatesFilter<"Transaction"> | number;
		currency?:
			| EnumCurrencyWithAggregatesFilter<"Transaction">
			| $Enums.Currency;
		createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
	};

	export type UserCreateInput = {
		id?: string;
		email: string;
		password: string;
		firstName?: string | null;
		lastName?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserUncheckedCreateInput = {
		id?: string;
		email: string;
		password: string;
		firstName?: string | null;
		lastName?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		firstName?: NullableStringFieldUpdateOperationsInput | string | null;
		lastName?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		firstName?: NullableStringFieldUpdateOperationsInput | string | null;
		lastName?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserCreateManyInput = {
		id?: string;
		email: string;
		password: string;
		firstName?: string | null;
		lastName?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		firstName?: NullableStringFieldUpdateOperationsInput | string | null;
		lastName?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		password?: StringFieldUpdateOperationsInput | string;
		firstName?: NullableStringFieldUpdateOperationsInput | string | null;
		lastName?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type BalanceCreateInput = {
		id?: string;
		userId: string;
		value: number;
		currency?: $Enums.Currency;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type BalanceUncheckedCreateInput = {
		id?: string;
		userId: string;
		value: number;
		currency?: $Enums.Currency;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type BalanceUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		userId?: StringFieldUpdateOperationsInput | string;
		value?: FloatFieldUpdateOperationsInput | number;
		currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type BalanceUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		userId?: StringFieldUpdateOperationsInput | string;
		value?: FloatFieldUpdateOperationsInput | number;
		currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type BalanceCreateManyInput = {
		id?: string;
		userId: string;
		value: number;
		currency?: $Enums.Currency;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type BalanceUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		userId?: StringFieldUpdateOperationsInput | string;
		value?: FloatFieldUpdateOperationsInput | number;
		currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type BalanceUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		userId?: StringFieldUpdateOperationsInput | string;
		value?: FloatFieldUpdateOperationsInput | number;
		currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type TransactionCreateInput = {
		id?: string;
		userId: string;
		status: $Enums.TransactionStatus;
		type: $Enums.TransactionType;
		amount: number;
		currency: $Enums.Currency;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type TransactionUncheckedCreateInput = {
		id?: string;
		userId: string;
		status: $Enums.TransactionStatus;
		type: $Enums.TransactionType;
		amount: number;
		currency: $Enums.Currency;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type TransactionUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		userId?: StringFieldUpdateOperationsInput | string;
		status?:
			| EnumTransactionStatusFieldUpdateOperationsInput
			| $Enums.TransactionStatus;
		type?:
			| EnumTransactionTypeFieldUpdateOperationsInput
			| $Enums.TransactionType;
		amount?: FloatFieldUpdateOperationsInput | number;
		currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type TransactionUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		userId?: StringFieldUpdateOperationsInput | string;
		status?:
			| EnumTransactionStatusFieldUpdateOperationsInput
			| $Enums.TransactionStatus;
		type?:
			| EnumTransactionTypeFieldUpdateOperationsInput
			| $Enums.TransactionType;
		amount?: FloatFieldUpdateOperationsInput | number;
		currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type TransactionCreateManyInput = {
		id?: string;
		userId: string;
		status: $Enums.TransactionStatus;
		type: $Enums.TransactionType;
		amount: number;
		currency: $Enums.Currency;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type TransactionUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		userId?: StringFieldUpdateOperationsInput | string;
		status?:
			| EnumTransactionStatusFieldUpdateOperationsInput
			| $Enums.TransactionStatus;
		type?:
			| EnumTransactionTypeFieldUpdateOperationsInput
			| $Enums.TransactionType;
		amount?: FloatFieldUpdateOperationsInput | number;
		currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type TransactionUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		userId?: StringFieldUpdateOperationsInput | string;
		status?:
			| EnumTransactionStatusFieldUpdateOperationsInput
			| $Enums.TransactionStatus;
		type?:
			| EnumTransactionTypeFieldUpdateOperationsInput
			| $Enums.TransactionType;
		amount?: FloatFieldUpdateOperationsInput | number;
		currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type StringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type StringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type DateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type SortOrderInput = {
		sort: SortOrder;
		nulls?: NullsOrder;
	};

	export type UserCountOrderByAggregateInput = {
		id?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		firstName?: SortOrder;
		lastName?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserMaxOrderByAggregateInput = {
		id?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		firstName?: SortOrder;
		lastName?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserMinOrderByAggregateInput = {
		id?: SortOrder;
		email?: SortOrder;
		password?: SortOrder;
		firstName?: SortOrder;
		lastName?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type StringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?:
			| NestedStringNullableWithAggregatesFilter<$PrismaModel>
			| string
			| null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type FloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatFilter<$PrismaModel> | number;
	};

	export type EnumCurrencyFilter<$PrismaModel = never> = {
		equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
		in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
		notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
		not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency;
	};

	export type BalanceCountOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		value?: SortOrder;
		currency?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type BalanceAvgOrderByAggregateInput = {
		value?: SortOrder;
	};

	export type BalanceMaxOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		value?: SortOrder;
		currency?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type BalanceMinOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		value?: SortOrder;
		currency?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type BalanceSumOrderByAggregateInput = {
		value?: SortOrder;
	};

	export type FloatWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedFloatFilter<$PrismaModel>;
		_min?: NestedFloatFilter<$PrismaModel>;
		_max?: NestedFloatFilter<$PrismaModel>;
	};

	export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
		in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
		notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumCurrencyWithAggregatesFilter<$PrismaModel>
			| $Enums.Currency;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumCurrencyFilter<$PrismaModel>;
		_max?: NestedEnumCurrencyFilter<$PrismaModel>;
	};

	export type EnumTransactionStatusFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.TransactionStatus
			| EnumTransactionStatusFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.TransactionStatus[]
			| ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.TransactionStatus[]
			| ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumTransactionStatusFilter<$PrismaModel>
			| $Enums.TransactionStatus;
	};

	export type EnumTransactionTypeFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.TransactionType
			| EnumTransactionTypeFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.TransactionType[]
			| ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.TransactionType[]
			| ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumTransactionTypeFilter<$PrismaModel>
			| $Enums.TransactionType;
	};

	export type TransactionCountOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		status?: SortOrder;
		type?: SortOrder;
		amount?: SortOrder;
		currency?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type TransactionAvgOrderByAggregateInput = {
		amount?: SortOrder;
	};

	export type TransactionMaxOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		status?: SortOrder;
		type?: SortOrder;
		amount?: SortOrder;
		currency?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type TransactionMinOrderByAggregateInput = {
		id?: SortOrder;
		userId?: SortOrder;
		status?: SortOrder;
		type?: SortOrder;
		amount?: SortOrder;
		currency?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type TransactionSumOrderByAggregateInput = {
		amount?: SortOrder;
	};

	export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> =
		{
			equals?:
				| $Enums.TransactionStatus
				| EnumTransactionStatusFieldRefInput<$PrismaModel>;
			in?:
				| $Enums.TransactionStatus[]
				| ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
			notIn?:
				| $Enums.TransactionStatus[]
				| ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
			not?:
				| NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel>
				| $Enums.TransactionStatus;
			_count?: NestedIntFilter<$PrismaModel>;
			_min?: NestedEnumTransactionStatusFilter<$PrismaModel>;
			_max?: NestedEnumTransactionStatusFilter<$PrismaModel>;
		};

	export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.TransactionType
			| EnumTransactionTypeFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.TransactionType[]
			| ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.TransactionType[]
			| ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel>
			| $Enums.TransactionType;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumTransactionTypeFilter<$PrismaModel>;
		_max?: NestedEnumTransactionTypeFilter<$PrismaModel>;
	};

	export type StringFieldUpdateOperationsInput = {
		set?: string;
	};

	export type NullableStringFieldUpdateOperationsInput = {
		set?: string | null;
	};

	export type DateTimeFieldUpdateOperationsInput = {
		set?: Date | string;
	};

	export type FloatFieldUpdateOperationsInput = {
		set?: number;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type EnumCurrencyFieldUpdateOperationsInput = {
		set?: $Enums.Currency;
	};

	export type EnumTransactionStatusFieldUpdateOperationsInput = {
		set?: $Enums.TransactionStatus;
	};

	export type EnumTransactionTypeFieldUpdateOperationsInput = {
		set?: $Enums.TransactionType;
	};

	export type NestedStringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type NestedStringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type NestedDateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type NestedIntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?:
			| NestedStringNullableWithAggregatesFilter<$PrismaModel>
			| string
			| null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type NestedIntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntNullableFilter<$PrismaModel> | number | null;
	};

	export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type NestedFloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatFilter<$PrismaModel> | number;
	};

	export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
		equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
		in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
		notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
		not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency;
	};

	export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedFloatFilter<$PrismaModel>;
		_min?: NestedFloatFilter<$PrismaModel>;
		_max?: NestedFloatFilter<$PrismaModel>;
	};

	export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>;
		in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
		notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumCurrencyWithAggregatesFilter<$PrismaModel>
			| $Enums.Currency;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumCurrencyFilter<$PrismaModel>;
		_max?: NestedEnumCurrencyFilter<$PrismaModel>;
	};

	export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.TransactionStatus
			| EnumTransactionStatusFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.TransactionStatus[]
			| ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.TransactionStatus[]
			| ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumTransactionStatusFilter<$PrismaModel>
			| $Enums.TransactionStatus;
	};

	export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
		equals?:
			| $Enums.TransactionType
			| EnumTransactionTypeFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.TransactionType[]
			| ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.TransactionType[]
			| ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumTransactionTypeFilter<$PrismaModel>
			| $Enums.TransactionType;
	};

	export type NestedEnumTransactionStatusWithAggregatesFilter<
		$PrismaModel = never,
	> = {
		equals?:
			| $Enums.TransactionStatus
			| EnumTransactionStatusFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.TransactionStatus[]
			| ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.TransactionStatus[]
			| ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel>
			| $Enums.TransactionStatus;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumTransactionStatusFilter<$PrismaModel>;
		_max?: NestedEnumTransactionStatusFilter<$PrismaModel>;
	};

	export type NestedEnumTransactionTypeWithAggregatesFilter<
		$PrismaModel = never,
	> = {
		equals?:
			| $Enums.TransactionType
			| EnumTransactionTypeFieldRefInput<$PrismaModel>;
		in?:
			| $Enums.TransactionType[]
			| ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
		notIn?:
			| $Enums.TransactionType[]
			| ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
		not?:
			| NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel>
			| $Enums.TransactionType;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedEnumTransactionTypeFilter<$PrismaModel>;
		_max?: NestedEnumTransactionTypeFilter<$PrismaModel>;
	};

	/**
	 * Aliases for legacy arg types
	 */
	/**
	 * @deprecated Use UserDefaultArgs instead
	 */
	export type UserArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = UserDefaultArgs<ExtArgs>;
	/**
	 * @deprecated Use BalanceDefaultArgs instead
	 */
	export type BalanceArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = BalanceDefaultArgs<ExtArgs>;
	/**
	 * @deprecated Use TransactionDefaultArgs instead
	 */
	export type TransactionArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = TransactionDefaultArgs<ExtArgs>;

	/**
	 * Batch Payload for updateMany & deleteMany & createMany
	 */

	export type BatchPayload = {
		count: number;
	};

	/**
	 * DMMF
	 */
	export const dmmf: runtime.BaseDMMF;
}
