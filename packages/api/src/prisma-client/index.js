Object.defineProperty(exports, "__esModule", { value: true });

const {
	PrismaClientKnownRequestError,
	PrismaClientUnknownRequestError,
	PrismaClientRustPanicError,
	PrismaClientInitializationError,
	PrismaClientValidationError,
	NotFoundError,
	getPrismaClient,
	sqltag,
	empty,
	join,
	raw,
	Decimal,
	Debug,
	objectEnumValues,
	makeStrictEnum,
	Extensions,
	warnOnce,
	defineDmmfProperty,
	Public,
	detectRuntime,
} = require("./runtime/library.js");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
	client: "5.9.1",
	engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
	DbNull: objectEnumValues.classes.DbNull,
	JsonNull: objectEnumValues.classes.JsonNull,
	AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require("path");

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
	ReadUncommitted: "ReadUncommitted",
	ReadCommitted: "ReadCommitted",
	RepeatableRead: "RepeatableRead",
	Serializable: "Serializable",
});

exports.Prisma.UserScalarFieldEnum = {
	id: "id",
	email: "email",
	password: "password",
	firstName: "firstName",
	lastName: "lastName",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
};

exports.Prisma.BalanceScalarFieldEnum = {
	id: "id",
	userId: "userId",
	value: "value",
	currency: "currency",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
};

exports.Prisma.TransactionScalarFieldEnum = {
	id: "id",
	userId: "userId",
	status: "status",
	type: "type",
	amount: "amount",
	currency: "currency",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
};

exports.Prisma.SortOrder = {
	asc: "asc",
	desc: "desc",
};

exports.Prisma.QueryMode = {
	default: "default",
	insensitive: "insensitive",
};

exports.Prisma.NullsOrder = {
	first: "first",
	last: "last",
};
exports.Currency = exports.$Enums.Currency = {
	USD: "USD",
	USDT: "USDT",
	UAH: "UAH",
};

exports.TransactionStatus = exports.$Enums.TransactionStatus = {
	pending: "pending",
	completed: "completed",
	failed: "failed",
};

exports.TransactionType = exports.$Enums.TransactionType = {
	deposit: "deposit",
	withdraw: "withdraw",
};

exports.Prisma.ModelName = {
	User: "User",
	Balance: "Balance",
	Transaction: "Transaction",
};
/**
 * Create the Client
 */
const config = {
	generator: {
		name: "client",
		provider: {
			fromEnvVar: null,
			value: "prisma-client-js",
		},
		output: {
			value:
				"C:\\Users\\pasic\\WebstormProjects\\fastify\\packages\\api\\src\\prisma-client",
			fromEnvVar: null,
		},
		config: {
			engineType: "library",
		},
		binaryTargets: [
			{
				fromEnvVar: null,
				value: "windows",
				native: true,
			},
		],
		previewFeatures: [],
		isCustomOutput: true,
	},
	relativeEnvPaths: {
		rootEnvPath: null,
		schemaEnvPath: "../../.env",
	},
	relativePath: "../../prisma",
	clientVersion: "5.9.1",
	engineVersion: "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
	datasourceNames: ["db"],
	activeProvider: "postgresql",
	postinstall: false,
	inlineDatasources: {
		db: {
			url: {
				fromEnvVar: "DATABASE_URL",
				value: null,
			},
		},
	},
	inlineSchema:
		"Z2VuZXJhdG9yIGNsaWVudCB7CiAgb3V0cHV0ID0gIi4uL3NyYy9wcmlzbWEtY2xpZW50IgogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIGVtYWlsICAgICBTdHJpbmcgICAgICBAdW5pcXVlCiAgcGFzc3dvcmQgIFN0cmluZyAgICAgIEBtYXAoInBhc3N3b3JkX2hhc2giKQogIGZpcnN0TmFtZSBTdHJpbmc/CiAgbGFzdE5hbWUgIFN0cmluZz8KICBjcmVhdGVkQXQgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXAoNikKICB1cGRhdGVkQXQgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXAoNikKfQoKbW9kZWwgQmFsYW5jZSB7CiAgaWQgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgdXNlcklkICAgIFN0cmluZwogIHZhbHVlICAgICBGbG9hdAogIGN1cnJlbmN5ICBDdXJyZW5jeSBAZGVmYXVsdChVU0QpCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wKDYpCiAgdXBkYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wKDYpCn0KCm1vZGVsIFRyYW5zYWN0aW9uIHsKICBpZCAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICB1c2VySWQgICAgU3RyaW5nCiAgc3RhdHVzICAgIFRyYW5zYWN0aW9uU3RhdHVzCiAgdHlwZSAgICAgIFRyYW5zYWN0aW9uVHlwZQogIGFtb3VudCAgICBGbG9hdAogIGN1cnJlbmN5ICBDdXJyZW5jeQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgICAgICAgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcCg2KQogIHVwZGF0ZWRBdCBEYXRlVGltZSAgICAgICAgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcCg2KQp9CgplbnVtIFRyYW5zYWN0aW9uU3RhdHVzIHsKICBwZW5kaW5nCiAgY29tcGxldGVkCiAgZmFpbGVkCn0KCmVudW0gVHJhbnNhY3Rpb25UeXBlIHsKICBkZXBvc2l0CiAgd2l0aGRyYXcKfQoKZW51bSBDdXJyZW5jeSB7CiAgVVNECiAgVVNEVAogIFVBSAp9Cg==",
	inlineSchemaHash:
		"674395bbc2b68fa00bd9391c5312d6874e85da81759381c9467352c26a74c003",
	noEngine: false,
};

const fs = require("fs");

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
	const alternativePaths = ["src/prisma-client", "prisma-client"];

	const alternativePath =
		alternativePaths.find((altPath) => {
			return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
		}) ?? alternativePaths[0];

	config.dirname = path.join(process.cwd(), alternativePath);
	config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
	'{"models":{"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","dbName":"password_hash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"firstName","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"lastName","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Balance":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"value","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"currency","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Currency","default":"USD","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Transaction":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"TransactionStatus","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"TransactionType","isGenerated":false,"isUpdatedAt":false},{"name":"amount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"currency","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Currency","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"TransactionStatus":{"values":[{"name":"pending","dbName":null},{"name":"completed","dbName":null},{"name":"failed","dbName":null}],"dbName":null},"TransactionType":{"values":[{"name":"deposit","dbName":null},{"name":"withdraw","dbName":null}],"dbName":null},"Currency":{"values":[{"name":"USD","dbName":null},{"name":"USDT","dbName":null},{"name":"UAH","dbName":null}],"dbName":null}},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.getQueryEngineWasmModule = undefined;

const { warnEnvConflicts } = require("./runtime/library.js");

warnEnvConflicts({
	rootEnvPath:
		config.relativeEnvPaths.rootEnvPath &&
		path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
	schemaEnvPath:
		config.relativeEnvPaths.schemaEnvPath &&
		path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/prisma-client/query_engine-windows.dll.node");
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/prisma-client/schema.prisma");
