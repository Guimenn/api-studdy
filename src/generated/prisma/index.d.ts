
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Relationship_teacher_subject
 * 
 */
export type Relationship_teacher_subject = $Result.DefaultSelection<Prisma.$Relationship_teacher_subjectPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Relationship_teacher_subject_class
 * 
 */
export type Relationship_teacher_subject_class = $Result.DefaultSelection<Prisma.$Relationship_teacher_subject_classPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Alternative
 * 
 */
export type Alternative = $Result.DefaultSelection<Prisma.$AlternativePayload>
/**
 * Model Question_images
 * 
 */
export type Question_images = $Result.DefaultSelection<Prisma.$Question_imagesPayload>
/**
 * Model Quiz_attempt
 * 
 */
export type Quiz_attempt = $Result.DefaultSelection<Prisma.$Quiz_attemptPayload>
/**
 * Model Question_response
 * 
 */
export type Question_response = $Result.DefaultSelection<Prisma.$Question_responsePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Admin: 'Admin',
  Student: 'Student',
  Teacher: 'Teacher'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Shift: {
  Morning: 'Morning',
  Afternoon: 'Afternoon',
  Evening: 'Evening',
  Full: 'Full'
};

export type Shift = (typeof Shift)[keyof typeof Shift]


export const QuizVisibility: {
  draft: 'draft',
  public: 'public',
  archived: 'archived'
};

export type QuizVisibility = (typeof QuizVisibility)[keyof typeof QuizVisibility]


export const AttemptStatus: {
  in_progress: 'in_progress',
  completed: 'completed',
  abandoned: 'abandoned'
};

export type AttemptStatus = (typeof AttemptStatus)[keyof typeof AttemptStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Shift = $Enums.Shift

export const Shift: typeof $Enums.Shift

export type QuizVisibility = $Enums.QuizVisibility

export const QuizVisibility: typeof $Enums.QuizVisibility

export type AttemptStatus = $Enums.AttemptStatus

export const AttemptStatus: typeof $Enums.AttemptStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relationship_teacher_subject`: Exposes CRUD operations for the **Relationship_teacher_subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relationship_teacher_subjects
    * const relationship_teacher_subjects = await prisma.relationship_teacher_subject.findMany()
    * ```
    */
  get relationship_teacher_subject(): Prisma.Relationship_teacher_subjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relationship_teacher_subject_class`: Exposes CRUD operations for the **Relationship_teacher_subject_class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relationship_teacher_subject_classes
    * const relationship_teacher_subject_classes = await prisma.relationship_teacher_subject_class.findMany()
    * ```
    */
  get relationship_teacher_subject_class(): Prisma.Relationship_teacher_subject_classDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alternative`: Exposes CRUD operations for the **Alternative** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alternatives
    * const alternatives = await prisma.alternative.findMany()
    * ```
    */
  get alternative(): Prisma.AlternativeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question_images`: Exposes CRUD operations for the **Question_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Question_images
    * const question_images = await prisma.question_images.findMany()
    * ```
    */
  get question_images(): Prisma.Question_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz_attempt`: Exposes CRUD operations for the **Quiz_attempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quiz_attempts
    * const quiz_attempts = await prisma.quiz_attempt.findMany()
    * ```
    */
  get quiz_attempt(): Prisma.Quiz_attemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question_response`: Exposes CRUD operations for the **Question_response** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Question_responses
    * const question_responses = await prisma.question_response.findMany()
    * ```
    */
  get question_response(): Prisma.Question_responseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Teacher: 'Teacher',
    Subject: 'Subject',
    Relationship_teacher_subject: 'Relationship_teacher_subject',
    Class: 'Class',
    Student: 'Student',
    Relationship_teacher_subject_class: 'Relationship_teacher_subject_class',
    Quiz: 'Quiz',
    Question: 'Question',
    Alternative: 'Alternative',
    Question_images: 'Question_images',
    Quiz_attempt: 'Quiz_attempt',
    Question_response: 'Question_response'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "teacher" | "subject" | "relationship_teacher_subject" | "class" | "student" | "relationship_teacher_subject_class" | "quiz" | "question" | "alternative" | "question_images" | "quiz_attempt" | "question_response"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Relationship_teacher_subject: {
        payload: Prisma.$Relationship_teacher_subjectPayload<ExtArgs>
        fields: Prisma.Relationship_teacher_subjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Relationship_teacher_subjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Relationship_teacher_subjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload>
          }
          findFirst: {
            args: Prisma.Relationship_teacher_subjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Relationship_teacher_subjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload>
          }
          findMany: {
            args: Prisma.Relationship_teacher_subjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload>[]
          }
          create: {
            args: Prisma.Relationship_teacher_subjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload>
          }
          createMany: {
            args: Prisma.Relationship_teacher_subjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Relationship_teacher_subjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload>[]
          }
          delete: {
            args: Prisma.Relationship_teacher_subjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload>
          }
          update: {
            args: Prisma.Relationship_teacher_subjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload>
          }
          deleteMany: {
            args: Prisma.Relationship_teacher_subjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Relationship_teacher_subjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Relationship_teacher_subjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload>[]
          }
          upsert: {
            args: Prisma.Relationship_teacher_subjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subjectPayload>
          }
          aggregate: {
            args: Prisma.Relationship_teacher_subjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelationship_teacher_subject>
          }
          groupBy: {
            args: Prisma.Relationship_teacher_subjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<Relationship_teacher_subjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.Relationship_teacher_subjectCountArgs<ExtArgs>
            result: $Utils.Optional<Relationship_teacher_subjectCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Relationship_teacher_subject_class: {
        payload: Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>
        fields: Prisma.Relationship_teacher_subject_classFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Relationship_teacher_subject_classFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Relationship_teacher_subject_classFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload>
          }
          findFirst: {
            args: Prisma.Relationship_teacher_subject_classFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Relationship_teacher_subject_classFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload>
          }
          findMany: {
            args: Prisma.Relationship_teacher_subject_classFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload>[]
          }
          create: {
            args: Prisma.Relationship_teacher_subject_classCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload>
          }
          createMany: {
            args: Prisma.Relationship_teacher_subject_classCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Relationship_teacher_subject_classCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload>[]
          }
          delete: {
            args: Prisma.Relationship_teacher_subject_classDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload>
          }
          update: {
            args: Prisma.Relationship_teacher_subject_classUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload>
          }
          deleteMany: {
            args: Prisma.Relationship_teacher_subject_classDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Relationship_teacher_subject_classUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Relationship_teacher_subject_classUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload>[]
          }
          upsert: {
            args: Prisma.Relationship_teacher_subject_classUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Relationship_teacher_subject_classPayload>
          }
          aggregate: {
            args: Prisma.Relationship_teacher_subject_classAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelationship_teacher_subject_class>
          }
          groupBy: {
            args: Prisma.Relationship_teacher_subject_classGroupByArgs<ExtArgs>
            result: $Utils.Optional<Relationship_teacher_subject_classGroupByOutputType>[]
          }
          count: {
            args: Prisma.Relationship_teacher_subject_classCountArgs<ExtArgs>
            result: $Utils.Optional<Relationship_teacher_subject_classCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Alternative: {
        payload: Prisma.$AlternativePayload<ExtArgs>
        fields: Prisma.AlternativeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlternativeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlternativeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          findFirst: {
            args: Prisma.AlternativeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlternativeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          findMany: {
            args: Prisma.AlternativeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          create: {
            args: Prisma.AlternativeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          createMany: {
            args: Prisma.AlternativeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlternativeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          delete: {
            args: Prisma.AlternativeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          update: {
            args: Prisma.AlternativeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          deleteMany: {
            args: Prisma.AlternativeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlternativeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlternativeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          upsert: {
            args: Prisma.AlternativeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          aggregate: {
            args: Prisma.AlternativeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlternative>
          }
          groupBy: {
            args: Prisma.AlternativeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlternativeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlternativeCountArgs<ExtArgs>
            result: $Utils.Optional<AlternativeCountAggregateOutputType> | number
          }
        }
      }
      Question_images: {
        payload: Prisma.$Question_imagesPayload<ExtArgs>
        fields: Prisma.Question_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Question_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Question_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload>
          }
          findFirst: {
            args: Prisma.Question_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Question_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload>
          }
          findMany: {
            args: Prisma.Question_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload>[]
          }
          create: {
            args: Prisma.Question_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload>
          }
          createMany: {
            args: Prisma.Question_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Question_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload>[]
          }
          delete: {
            args: Prisma.Question_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload>
          }
          update: {
            args: Prisma.Question_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload>
          }
          deleteMany: {
            args: Prisma.Question_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Question_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Question_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload>[]
          }
          upsert: {
            args: Prisma.Question_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_imagesPayload>
          }
          aggregate: {
            args: Prisma.Question_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion_images>
          }
          groupBy: {
            args: Prisma.Question_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Question_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Question_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Question_imagesCountAggregateOutputType> | number
          }
        }
      }
      Quiz_attempt: {
        payload: Prisma.$Quiz_attemptPayload<ExtArgs>
        fields: Prisma.Quiz_attemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Quiz_attemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Quiz_attemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload>
          }
          findFirst: {
            args: Prisma.Quiz_attemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Quiz_attemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload>
          }
          findMany: {
            args: Prisma.Quiz_attemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload>[]
          }
          create: {
            args: Prisma.Quiz_attemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload>
          }
          createMany: {
            args: Prisma.Quiz_attemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Quiz_attemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload>[]
          }
          delete: {
            args: Prisma.Quiz_attemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload>
          }
          update: {
            args: Prisma.Quiz_attemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload>
          }
          deleteMany: {
            args: Prisma.Quiz_attemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Quiz_attemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Quiz_attemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload>[]
          }
          upsert: {
            args: Prisma.Quiz_attemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_attemptPayload>
          }
          aggregate: {
            args: Prisma.Quiz_attemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz_attempt>
          }
          groupBy: {
            args: Prisma.Quiz_attemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<Quiz_attemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.Quiz_attemptCountArgs<ExtArgs>
            result: $Utils.Optional<Quiz_attemptCountAggregateOutputType> | number
          }
        }
      }
      Question_response: {
        payload: Prisma.$Question_responsePayload<ExtArgs>
        fields: Prisma.Question_responseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Question_responseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Question_responseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload>
          }
          findFirst: {
            args: Prisma.Question_responseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Question_responseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload>
          }
          findMany: {
            args: Prisma.Question_responseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload>[]
          }
          create: {
            args: Prisma.Question_responseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload>
          }
          createMany: {
            args: Prisma.Question_responseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Question_responseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload>[]
          }
          delete: {
            args: Prisma.Question_responseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload>
          }
          update: {
            args: Prisma.Question_responseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload>
          }
          deleteMany: {
            args: Prisma.Question_responseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Question_responseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Question_responseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload>[]
          }
          upsert: {
            args: Prisma.Question_responseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Question_responsePayload>
          }
          aggregate: {
            args: Prisma.Question_responseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion_response>
          }
          groupBy: {
            args: Prisma.Question_responseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Question_responseGroupByOutputType>[]
          }
          count: {
            args: Prisma.Question_responseCountArgs<ExtArgs>
            result: $Utils.Optional<Question_responseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    teacher?: TeacherOmit
    subject?: SubjectOmit
    relationship_teacher_subject?: Relationship_teacher_subjectOmit
    class?: ClassOmit
    student?: StudentOmit
    relationship_teacher_subject_class?: Relationship_teacher_subject_classOmit
    quiz?: QuizOmit
    question?: QuestionOmit
    alternative?: AlternativeOmit
    question_images?: Question_imagesOmit
    quiz_attempt?: Quiz_attemptOmit
    question_response?: Question_responseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    teacher_subjects: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subjects?: boolean | TeacherCountOutputTypeCountTeacher_subjectsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountTeacher_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Relationship_teacher_subjectWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    teacher_subjects: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subjects?: boolean | SubjectCountOutputTypeCountTeacher_subjectsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTeacher_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Relationship_teacher_subjectWhereInput
  }


  /**
   * Count Type Relationship_teacher_subjectCountOutputType
   */

  export type Relationship_teacher_subjectCountOutputType = {
    teacher_subject_classes: number
  }

  export type Relationship_teacher_subjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subject_classes?: boolean | Relationship_teacher_subjectCountOutputTypeCountTeacher_subject_classesArgs
  }

  // Custom InputTypes
  /**
   * Relationship_teacher_subjectCountOutputType without action
   */
  export type Relationship_teacher_subjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subjectCountOutputType
     */
    select?: Relationship_teacher_subjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Relationship_teacher_subjectCountOutputType without action
   */
  export type Relationship_teacher_subjectCountOutputTypeCountTeacher_subject_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Relationship_teacher_subject_classWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    students: number
    teacher_subject_classes: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassCountOutputTypeCountStudentsArgs
    teacher_subject_classes?: boolean | ClassCountOutputTypeCountTeacher_subject_classesArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountTeacher_subject_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Relationship_teacher_subject_classWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    quiz_attempts: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz_attempts?: boolean | StudentCountOutputTypeCountQuiz_attemptsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountQuiz_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Quiz_attemptWhereInput
  }


  /**
   * Count Type Relationship_teacher_subject_classCountOutputType
   */

  export type Relationship_teacher_subject_classCountOutputType = {
    quizzes: number
  }

  export type Relationship_teacher_subject_classCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | Relationship_teacher_subject_classCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes
  /**
   * Relationship_teacher_subject_classCountOutputType without action
   */
  export type Relationship_teacher_subject_classCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_classCountOutputType
     */
    select?: Relationship_teacher_subject_classCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Relationship_teacher_subject_classCountOutputType without action
   */
  export type Relationship_teacher_subject_classCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
    quiz_attempts: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
    quiz_attempts?: boolean | QuizCountOutputTypeCountQuiz_attemptsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuiz_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Quiz_attemptWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    alternatives: number
    question_images: number
    question_responses: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alternatives?: boolean | QuestionCountOutputTypeCountAlternativesArgs
    question_images?: boolean | QuestionCountOutputTypeCountQuestion_imagesArgs
    question_responses?: boolean | QuestionCountOutputTypeCountQuestion_responsesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountQuestion_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Question_imagesWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountQuestion_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Question_responseWhereInput
  }


  /**
   * Count Type AlternativeCountOutputType
   */

  export type AlternativeCountOutputType = {
    question_responses: number
  }

  export type AlternativeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question_responses?: boolean | AlternativeCountOutputTypeCountQuestion_responsesArgs
  }

  // Custom InputTypes
  /**
   * AlternativeCountOutputType without action
   */
  export type AlternativeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlternativeCountOutputType
     */
    select?: AlternativeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlternativeCountOutputType without action
   */
  export type AlternativeCountOutputTypeCountQuestion_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Question_responseWhereInput
  }


  /**
   * Count Type Quiz_attemptCountOutputType
   */

  export type Quiz_attemptCountOutputType = {
    question_responses: number
  }

  export type Quiz_attemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question_responses?: boolean | Quiz_attemptCountOutputTypeCountQuestion_responsesArgs
  }

  // Custom InputTypes
  /**
   * Quiz_attemptCountOutputType without action
   */
  export type Quiz_attemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attemptCountOutputType
     */
    select?: Quiz_attemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Quiz_attemptCountOutputType without action
   */
  export type Quiz_attemptCountOutputTypeCountQuestion_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Question_responseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    birth_date: Date | null
    cpf: string | null
    created_at: Date | null
    modified_at: Date | null
    role: $Enums.Role | null
    hashed_password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    birth_date: Date | null
    cpf: string | null
    created_at: Date | null
    modified_at: Date | null
    role: $Enums.Role | null
    hashed_password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    birth_date: number
    cpf: number
    created_at: number
    modified_at: number
    role: number
    hashed_password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    birth_date?: true
    cpf?: true
    created_at?: true
    modified_at?: true
    role?: true
    hashed_password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    birth_date?: true
    cpf?: true
    created_at?: true
    modified_at?: true
    role?: true
    hashed_password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    birth_date?: true
    cpf?: true
    created_at?: true
    modified_at?: true
    role?: true
    hashed_password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    birth_date: Date
    cpf: string
    created_at: Date
    modified_at: Date
    role: $Enums.Role
    hashed_password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    birth_date?: boolean
    cpf?: boolean
    created_at?: boolean
    modified_at?: boolean
    role?: boolean
    hashed_password?: boolean
    teacher?: boolean | User$teacherArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    birth_date?: boolean
    cpf?: boolean
    created_at?: boolean
    modified_at?: boolean
    role?: boolean
    hashed_password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    birth_date?: boolean
    cpf?: boolean
    created_at?: boolean
    modified_at?: boolean
    role?: boolean
    hashed_password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    birth_date?: boolean
    cpf?: boolean
    created_at?: boolean
    modified_at?: boolean
    role?: boolean
    hashed_password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "birth_date" | "cpf" | "created_at" | "modified_at" | "role" | "hashed_password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | User$teacherArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
      student: Prisma.$StudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      birth_date: Date
      cpf: string
      created_at: Date
      modified_at: Date
      role: $Enums.Role
      hashed_password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends User$teacherArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly birth_date: FieldRef<"User", 'DateTime'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly modified_at: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly hashed_password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teacher
   */
  export type User$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    user_id: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    modified_at?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    modified_at?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    user_id: number
    created_at: Date
    modified_at: Date
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    teacher_subjects?: boolean | Teacher$teacher_subjectsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "created_at" | "modified_at", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    teacher_subjects?: boolean | Teacher$teacher_subjectsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      teacher_subjects: Prisma.$Relationship_teacher_subjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher_subjects<T extends Teacher$teacher_subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$teacher_subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly user_id: FieldRef<"Teacher", 'Int'>
    readonly created_at: FieldRef<"Teacher", 'DateTime'>
    readonly modified_at: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.teacher_subjects
   */
  export type Teacher$teacher_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    where?: Relationship_teacher_subjectWhereInput
    orderBy?: Relationship_teacher_subjectOrderByWithRelationInput | Relationship_teacher_subjectOrderByWithRelationInput[]
    cursor?: Relationship_teacher_subjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Relationship_teacher_subjectScalarFieldEnum | Relationship_teacher_subjectScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    modified_at?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    modified_at?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    modified_at: Date
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    modified_at?: boolean
    teacher_subjects?: boolean | Subject$teacher_subjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "modified_at", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subjects?: boolean | Subject$teacher_subjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      teacher_subjects: Prisma.$Relationship_teacher_subjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher_subjects<T extends Subject$teacher_subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teacher_subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly created_at: FieldRef<"Subject", 'DateTime'>
    readonly modified_at: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.teacher_subjects
   */
  export type Subject$teacher_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    where?: Relationship_teacher_subjectWhereInput
    orderBy?: Relationship_teacher_subjectOrderByWithRelationInput | Relationship_teacher_subjectOrderByWithRelationInput[]
    cursor?: Relationship_teacher_subjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Relationship_teacher_subjectScalarFieldEnum | Relationship_teacher_subjectScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Relationship_teacher_subject
   */

  export type AggregateRelationship_teacher_subject = {
    _count: Relationship_teacher_subjectCountAggregateOutputType | null
    _avg: Relationship_teacher_subjectAvgAggregateOutputType | null
    _sum: Relationship_teacher_subjectSumAggregateOutputType | null
    _min: Relationship_teacher_subjectMinAggregateOutputType | null
    _max: Relationship_teacher_subjectMaxAggregateOutputType | null
  }

  export type Relationship_teacher_subjectAvgAggregateOutputType = {
    id: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type Relationship_teacher_subjectSumAggregateOutputType = {
    id: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type Relationship_teacher_subjectMinAggregateOutputType = {
    id: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type Relationship_teacher_subjectMaxAggregateOutputType = {
    id: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type Relationship_teacher_subjectCountAggregateOutputType = {
    id: number
    subject_id: number
    teacher_id: number
    _all: number
  }


  export type Relationship_teacher_subjectAvgAggregateInputType = {
    id?: true
    subject_id?: true
    teacher_id?: true
  }

  export type Relationship_teacher_subjectSumAggregateInputType = {
    id?: true
    subject_id?: true
    teacher_id?: true
  }

  export type Relationship_teacher_subjectMinAggregateInputType = {
    id?: true
    subject_id?: true
    teacher_id?: true
  }

  export type Relationship_teacher_subjectMaxAggregateInputType = {
    id?: true
    subject_id?: true
    teacher_id?: true
  }

  export type Relationship_teacher_subjectCountAggregateInputType = {
    id?: true
    subject_id?: true
    teacher_id?: true
    _all?: true
  }

  export type Relationship_teacher_subjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationship_teacher_subject to aggregate.
     */
    where?: Relationship_teacher_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationship_teacher_subjects to fetch.
     */
    orderBy?: Relationship_teacher_subjectOrderByWithRelationInput | Relationship_teacher_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Relationship_teacher_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationship_teacher_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationship_teacher_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relationship_teacher_subjects
    **/
    _count?: true | Relationship_teacher_subjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Relationship_teacher_subjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Relationship_teacher_subjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Relationship_teacher_subjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Relationship_teacher_subjectMaxAggregateInputType
  }

  export type GetRelationship_teacher_subjectAggregateType<T extends Relationship_teacher_subjectAggregateArgs> = {
        [P in keyof T & keyof AggregateRelationship_teacher_subject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelationship_teacher_subject[P]>
      : GetScalarType<T[P], AggregateRelationship_teacher_subject[P]>
  }




  export type Relationship_teacher_subjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Relationship_teacher_subjectWhereInput
    orderBy?: Relationship_teacher_subjectOrderByWithAggregationInput | Relationship_teacher_subjectOrderByWithAggregationInput[]
    by: Relationship_teacher_subjectScalarFieldEnum[] | Relationship_teacher_subjectScalarFieldEnum
    having?: Relationship_teacher_subjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Relationship_teacher_subjectCountAggregateInputType | true
    _avg?: Relationship_teacher_subjectAvgAggregateInputType
    _sum?: Relationship_teacher_subjectSumAggregateInputType
    _min?: Relationship_teacher_subjectMinAggregateInputType
    _max?: Relationship_teacher_subjectMaxAggregateInputType
  }

  export type Relationship_teacher_subjectGroupByOutputType = {
    id: number
    subject_id: number
    teacher_id: number
    _count: Relationship_teacher_subjectCountAggregateOutputType | null
    _avg: Relationship_teacher_subjectAvgAggregateOutputType | null
    _sum: Relationship_teacher_subjectSumAggregateOutputType | null
    _min: Relationship_teacher_subjectMinAggregateOutputType | null
    _max: Relationship_teacher_subjectMaxAggregateOutputType | null
  }

  type GetRelationship_teacher_subjectGroupByPayload<T extends Relationship_teacher_subjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Relationship_teacher_subjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Relationship_teacher_subjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Relationship_teacher_subjectGroupByOutputType[P]>
            : GetScalarType<T[P], Relationship_teacher_subjectGroupByOutputType[P]>
        }
      >
    >


  export type Relationship_teacher_subjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    teacher_subject_classes?: boolean | Relationship_teacher_subject$teacher_subject_classesArgs<ExtArgs>
    _count?: boolean | Relationship_teacher_subjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship_teacher_subject"]>

  export type Relationship_teacher_subjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship_teacher_subject"]>

  export type Relationship_teacher_subjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship_teacher_subject"]>

  export type Relationship_teacher_subjectSelectScalar = {
    id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
  }

  export type Relationship_teacher_subjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject_id" | "teacher_id", ExtArgs["result"]["relationship_teacher_subject"]>
  export type Relationship_teacher_subjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    teacher_subject_classes?: boolean | Relationship_teacher_subject$teacher_subject_classesArgs<ExtArgs>
    _count?: boolean | Relationship_teacher_subjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Relationship_teacher_subjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type Relationship_teacher_subjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $Relationship_teacher_subjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relationship_teacher_subject"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
      teacher_subject_classes: Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subject_id: number
      teacher_id: number
    }, ExtArgs["result"]["relationship_teacher_subject"]>
    composites: {}
  }

  type Relationship_teacher_subjectGetPayload<S extends boolean | null | undefined | Relationship_teacher_subjectDefaultArgs> = $Result.GetResult<Prisma.$Relationship_teacher_subjectPayload, S>

  type Relationship_teacher_subjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Relationship_teacher_subjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Relationship_teacher_subjectCountAggregateInputType | true
    }

  export interface Relationship_teacher_subjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relationship_teacher_subject'], meta: { name: 'Relationship_teacher_subject' } }
    /**
     * Find zero or one Relationship_teacher_subject that matches the filter.
     * @param {Relationship_teacher_subjectFindUniqueArgs} args - Arguments to find a Relationship_teacher_subject
     * @example
     * // Get one Relationship_teacher_subject
     * const relationship_teacher_subject = await prisma.relationship_teacher_subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Relationship_teacher_subjectFindUniqueArgs>(args: SelectSubset<T, Relationship_teacher_subjectFindUniqueArgs<ExtArgs>>): Prisma__Relationship_teacher_subjectClient<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relationship_teacher_subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Relationship_teacher_subjectFindUniqueOrThrowArgs} args - Arguments to find a Relationship_teacher_subject
     * @example
     * // Get one Relationship_teacher_subject
     * const relationship_teacher_subject = await prisma.relationship_teacher_subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Relationship_teacher_subjectFindUniqueOrThrowArgs>(args: SelectSubset<T, Relationship_teacher_subjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Relationship_teacher_subjectClient<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relationship_teacher_subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subjectFindFirstArgs} args - Arguments to find a Relationship_teacher_subject
     * @example
     * // Get one Relationship_teacher_subject
     * const relationship_teacher_subject = await prisma.relationship_teacher_subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Relationship_teacher_subjectFindFirstArgs>(args?: SelectSubset<T, Relationship_teacher_subjectFindFirstArgs<ExtArgs>>): Prisma__Relationship_teacher_subjectClient<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relationship_teacher_subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subjectFindFirstOrThrowArgs} args - Arguments to find a Relationship_teacher_subject
     * @example
     * // Get one Relationship_teacher_subject
     * const relationship_teacher_subject = await prisma.relationship_teacher_subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Relationship_teacher_subjectFindFirstOrThrowArgs>(args?: SelectSubset<T, Relationship_teacher_subjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__Relationship_teacher_subjectClient<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relationship_teacher_subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relationship_teacher_subjects
     * const relationship_teacher_subjects = await prisma.relationship_teacher_subject.findMany()
     * 
     * // Get first 10 Relationship_teacher_subjects
     * const relationship_teacher_subjects = await prisma.relationship_teacher_subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationship_teacher_subjectWithIdOnly = await prisma.relationship_teacher_subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Relationship_teacher_subjectFindManyArgs>(args?: SelectSubset<T, Relationship_teacher_subjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relationship_teacher_subject.
     * @param {Relationship_teacher_subjectCreateArgs} args - Arguments to create a Relationship_teacher_subject.
     * @example
     * // Create one Relationship_teacher_subject
     * const Relationship_teacher_subject = await prisma.relationship_teacher_subject.create({
     *   data: {
     *     // ... data to create a Relationship_teacher_subject
     *   }
     * })
     * 
     */
    create<T extends Relationship_teacher_subjectCreateArgs>(args: SelectSubset<T, Relationship_teacher_subjectCreateArgs<ExtArgs>>): Prisma__Relationship_teacher_subjectClient<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relationship_teacher_subjects.
     * @param {Relationship_teacher_subjectCreateManyArgs} args - Arguments to create many Relationship_teacher_subjects.
     * @example
     * // Create many Relationship_teacher_subjects
     * const relationship_teacher_subject = await prisma.relationship_teacher_subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Relationship_teacher_subjectCreateManyArgs>(args?: SelectSubset<T, Relationship_teacher_subjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relationship_teacher_subjects and returns the data saved in the database.
     * @param {Relationship_teacher_subjectCreateManyAndReturnArgs} args - Arguments to create many Relationship_teacher_subjects.
     * @example
     * // Create many Relationship_teacher_subjects
     * const relationship_teacher_subject = await prisma.relationship_teacher_subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relationship_teacher_subjects and only return the `id`
     * const relationship_teacher_subjectWithIdOnly = await prisma.relationship_teacher_subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Relationship_teacher_subjectCreateManyAndReturnArgs>(args?: SelectSubset<T, Relationship_teacher_subjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Relationship_teacher_subject.
     * @param {Relationship_teacher_subjectDeleteArgs} args - Arguments to delete one Relationship_teacher_subject.
     * @example
     * // Delete one Relationship_teacher_subject
     * const Relationship_teacher_subject = await prisma.relationship_teacher_subject.delete({
     *   where: {
     *     // ... filter to delete one Relationship_teacher_subject
     *   }
     * })
     * 
     */
    delete<T extends Relationship_teacher_subjectDeleteArgs>(args: SelectSubset<T, Relationship_teacher_subjectDeleteArgs<ExtArgs>>): Prisma__Relationship_teacher_subjectClient<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relationship_teacher_subject.
     * @param {Relationship_teacher_subjectUpdateArgs} args - Arguments to update one Relationship_teacher_subject.
     * @example
     * // Update one Relationship_teacher_subject
     * const relationship_teacher_subject = await prisma.relationship_teacher_subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Relationship_teacher_subjectUpdateArgs>(args: SelectSubset<T, Relationship_teacher_subjectUpdateArgs<ExtArgs>>): Prisma__Relationship_teacher_subjectClient<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relationship_teacher_subjects.
     * @param {Relationship_teacher_subjectDeleteManyArgs} args - Arguments to filter Relationship_teacher_subjects to delete.
     * @example
     * // Delete a few Relationship_teacher_subjects
     * const { count } = await prisma.relationship_teacher_subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Relationship_teacher_subjectDeleteManyArgs>(args?: SelectSubset<T, Relationship_teacher_subjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationship_teacher_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relationship_teacher_subjects
     * const relationship_teacher_subject = await prisma.relationship_teacher_subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Relationship_teacher_subjectUpdateManyArgs>(args: SelectSubset<T, Relationship_teacher_subjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationship_teacher_subjects and returns the data updated in the database.
     * @param {Relationship_teacher_subjectUpdateManyAndReturnArgs} args - Arguments to update many Relationship_teacher_subjects.
     * @example
     * // Update many Relationship_teacher_subjects
     * const relationship_teacher_subject = await prisma.relationship_teacher_subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Relationship_teacher_subjects and only return the `id`
     * const relationship_teacher_subjectWithIdOnly = await prisma.relationship_teacher_subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Relationship_teacher_subjectUpdateManyAndReturnArgs>(args: SelectSubset<T, Relationship_teacher_subjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Relationship_teacher_subject.
     * @param {Relationship_teacher_subjectUpsertArgs} args - Arguments to update or create a Relationship_teacher_subject.
     * @example
     * // Update or create a Relationship_teacher_subject
     * const relationship_teacher_subject = await prisma.relationship_teacher_subject.upsert({
     *   create: {
     *     // ... data to create a Relationship_teacher_subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relationship_teacher_subject we want to update
     *   }
     * })
     */
    upsert<T extends Relationship_teacher_subjectUpsertArgs>(args: SelectSubset<T, Relationship_teacher_subjectUpsertArgs<ExtArgs>>): Prisma__Relationship_teacher_subjectClient<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relationship_teacher_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subjectCountArgs} args - Arguments to filter Relationship_teacher_subjects to count.
     * @example
     * // Count the number of Relationship_teacher_subjects
     * const count = await prisma.relationship_teacher_subject.count({
     *   where: {
     *     // ... the filter for the Relationship_teacher_subjects we want to count
     *   }
     * })
    **/
    count<T extends Relationship_teacher_subjectCountArgs>(
      args?: Subset<T, Relationship_teacher_subjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Relationship_teacher_subjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relationship_teacher_subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Relationship_teacher_subjectAggregateArgs>(args: Subset<T, Relationship_teacher_subjectAggregateArgs>): Prisma.PrismaPromise<GetRelationship_teacher_subjectAggregateType<T>>

    /**
     * Group by Relationship_teacher_subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subjectGroupByArgs} args - Group by arguments.
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
      T extends Relationship_teacher_subjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Relationship_teacher_subjectGroupByArgs['orderBy'] }
        : { orderBy?: Relationship_teacher_subjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Relationship_teacher_subjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationship_teacher_subjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relationship_teacher_subject model
   */
  readonly fields: Relationship_teacher_subjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relationship_teacher_subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Relationship_teacher_subjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher_subject_classes<T extends Relationship_teacher_subject$teacher_subject_classesArgs<ExtArgs> = {}>(args?: Subset<T, Relationship_teacher_subject$teacher_subject_classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Relationship_teacher_subject model
   */
  interface Relationship_teacher_subjectFieldRefs {
    readonly id: FieldRef<"Relationship_teacher_subject", 'Int'>
    readonly subject_id: FieldRef<"Relationship_teacher_subject", 'Int'>
    readonly teacher_id: FieldRef<"Relationship_teacher_subject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Relationship_teacher_subject findUnique
   */
  export type Relationship_teacher_subjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    /**
     * Filter, which Relationship_teacher_subject to fetch.
     */
    where: Relationship_teacher_subjectWhereUniqueInput
  }

  /**
   * Relationship_teacher_subject findUniqueOrThrow
   */
  export type Relationship_teacher_subjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    /**
     * Filter, which Relationship_teacher_subject to fetch.
     */
    where: Relationship_teacher_subjectWhereUniqueInput
  }

  /**
   * Relationship_teacher_subject findFirst
   */
  export type Relationship_teacher_subjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    /**
     * Filter, which Relationship_teacher_subject to fetch.
     */
    where?: Relationship_teacher_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationship_teacher_subjects to fetch.
     */
    orderBy?: Relationship_teacher_subjectOrderByWithRelationInput | Relationship_teacher_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationship_teacher_subjects.
     */
    cursor?: Relationship_teacher_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationship_teacher_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationship_teacher_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationship_teacher_subjects.
     */
    distinct?: Relationship_teacher_subjectScalarFieldEnum | Relationship_teacher_subjectScalarFieldEnum[]
  }

  /**
   * Relationship_teacher_subject findFirstOrThrow
   */
  export type Relationship_teacher_subjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    /**
     * Filter, which Relationship_teacher_subject to fetch.
     */
    where?: Relationship_teacher_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationship_teacher_subjects to fetch.
     */
    orderBy?: Relationship_teacher_subjectOrderByWithRelationInput | Relationship_teacher_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationship_teacher_subjects.
     */
    cursor?: Relationship_teacher_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationship_teacher_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationship_teacher_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationship_teacher_subjects.
     */
    distinct?: Relationship_teacher_subjectScalarFieldEnum | Relationship_teacher_subjectScalarFieldEnum[]
  }

  /**
   * Relationship_teacher_subject findMany
   */
  export type Relationship_teacher_subjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    /**
     * Filter, which Relationship_teacher_subjects to fetch.
     */
    where?: Relationship_teacher_subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationship_teacher_subjects to fetch.
     */
    orderBy?: Relationship_teacher_subjectOrderByWithRelationInput | Relationship_teacher_subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relationship_teacher_subjects.
     */
    cursor?: Relationship_teacher_subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationship_teacher_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationship_teacher_subjects.
     */
    skip?: number
    distinct?: Relationship_teacher_subjectScalarFieldEnum | Relationship_teacher_subjectScalarFieldEnum[]
  }

  /**
   * Relationship_teacher_subject create
   */
  export type Relationship_teacher_subjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Relationship_teacher_subject.
     */
    data: XOR<Relationship_teacher_subjectCreateInput, Relationship_teacher_subjectUncheckedCreateInput>
  }

  /**
   * Relationship_teacher_subject createMany
   */
  export type Relationship_teacher_subjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relationship_teacher_subjects.
     */
    data: Relationship_teacher_subjectCreateManyInput | Relationship_teacher_subjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relationship_teacher_subject createManyAndReturn
   */
  export type Relationship_teacher_subjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * The data used to create many Relationship_teacher_subjects.
     */
    data: Relationship_teacher_subjectCreateManyInput | Relationship_teacher_subjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relationship_teacher_subject update
   */
  export type Relationship_teacher_subjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Relationship_teacher_subject.
     */
    data: XOR<Relationship_teacher_subjectUpdateInput, Relationship_teacher_subjectUncheckedUpdateInput>
    /**
     * Choose, which Relationship_teacher_subject to update.
     */
    where: Relationship_teacher_subjectWhereUniqueInput
  }

  /**
   * Relationship_teacher_subject updateMany
   */
  export type Relationship_teacher_subjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relationship_teacher_subjects.
     */
    data: XOR<Relationship_teacher_subjectUpdateManyMutationInput, Relationship_teacher_subjectUncheckedUpdateManyInput>
    /**
     * Filter which Relationship_teacher_subjects to update
     */
    where?: Relationship_teacher_subjectWhereInput
    /**
     * Limit how many Relationship_teacher_subjects to update.
     */
    limit?: number
  }

  /**
   * Relationship_teacher_subject updateManyAndReturn
   */
  export type Relationship_teacher_subjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * The data used to update Relationship_teacher_subjects.
     */
    data: XOR<Relationship_teacher_subjectUpdateManyMutationInput, Relationship_teacher_subjectUncheckedUpdateManyInput>
    /**
     * Filter which Relationship_teacher_subjects to update
     */
    where?: Relationship_teacher_subjectWhereInput
    /**
     * Limit how many Relationship_teacher_subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relationship_teacher_subject upsert
   */
  export type Relationship_teacher_subjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Relationship_teacher_subject to update in case it exists.
     */
    where: Relationship_teacher_subjectWhereUniqueInput
    /**
     * In case the Relationship_teacher_subject found by the `where` argument doesn't exist, create a new Relationship_teacher_subject with this data.
     */
    create: XOR<Relationship_teacher_subjectCreateInput, Relationship_teacher_subjectUncheckedCreateInput>
    /**
     * In case the Relationship_teacher_subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Relationship_teacher_subjectUpdateInput, Relationship_teacher_subjectUncheckedUpdateInput>
  }

  /**
   * Relationship_teacher_subject delete
   */
  export type Relationship_teacher_subjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
    /**
     * Filter which Relationship_teacher_subject to delete.
     */
    where: Relationship_teacher_subjectWhereUniqueInput
  }

  /**
   * Relationship_teacher_subject deleteMany
   */
  export type Relationship_teacher_subjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationship_teacher_subjects to delete
     */
    where?: Relationship_teacher_subjectWhereInput
    /**
     * Limit how many Relationship_teacher_subjects to delete.
     */
    limit?: number
  }

  /**
   * Relationship_teacher_subject.teacher_subject_classes
   */
  export type Relationship_teacher_subject$teacher_subject_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    where?: Relationship_teacher_subject_classWhereInput
    orderBy?: Relationship_teacher_subject_classOrderByWithRelationInput | Relationship_teacher_subject_classOrderByWithRelationInput[]
    cursor?: Relationship_teacher_subject_classWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Relationship_teacher_subject_classScalarFieldEnum | Relationship_teacher_subject_classScalarFieldEnum[]
  }

  /**
   * Relationship_teacher_subject without action
   */
  export type Relationship_teacher_subjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject
     */
    select?: Relationship_teacher_subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject
     */
    omit?: Relationship_teacher_subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subjectInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    id: number | null
  }

  export type ClassSumAggregateOutputType = {
    id: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: number | null
    name: string | null
    shift: $Enums.Shift | null
    course: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: number | null
    name: string | null
    shift: $Enums.Shift | null
    course: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    shift: number
    course: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    id?: true
  }

  export type ClassSumAggregateInputType = {
    id?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
    shift?: true
    course?: true
    created_at?: true
    modified_at?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
    shift?: true
    course?: true
    created_at?: true
    modified_at?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    shift?: true
    course?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: number
    name: string
    shift: $Enums.Shift
    course: string
    created_at: Date
    modified_at: Date
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shift?: boolean
    course?: boolean
    created_at?: boolean
    modified_at?: boolean
    students?: boolean | Class$studentsArgs<ExtArgs>
    teacher_subject_classes?: boolean | Class$teacher_subject_classesArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shift?: boolean
    course?: boolean
    created_at?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shift?: boolean
    course?: boolean
    created_at?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
    shift?: boolean
    course?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shift" | "course" | "created_at" | "modified_at", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Class$studentsArgs<ExtArgs>
    teacher_subject_classes?: boolean | Class$teacher_subject_classesArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
      teacher_subject_classes: Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      shift: $Enums.Shift
      course: string
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Class$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacher_subject_classes<T extends Class$teacher_subject_classesArgs<ExtArgs> = {}>(args?: Subset<T, Class$teacher_subject_classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'Int'>
    readonly name: FieldRef<"Class", 'String'>
    readonly shift: FieldRef<"Class", 'Shift'>
    readonly course: FieldRef<"Class", 'String'>
    readonly created_at: FieldRef<"Class", 'DateTime'>
    readonly modified_at: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.students
   */
  export type Class$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Class.teacher_subject_classes
   */
  export type Class$teacher_subject_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    where?: Relationship_teacher_subject_classWhereInput
    orderBy?: Relationship_teacher_subject_classOrderByWithRelationInput | Relationship_teacher_subject_classOrderByWithRelationInput[]
    cursor?: Relationship_teacher_subject_classWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Relationship_teacher_subject_classScalarFieldEnum | Relationship_teacher_subject_classScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    class_id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    class_id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    enrollment: string | null
    user_id: number | null
    class_id: number | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    enrollment: string | null
    user_id: number | null
    class_id: number | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    enrollment: number
    user_id: number
    class_id: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    enrollment?: true
    user_id?: true
    class_id?: true
    created_at?: true
    modified_at?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    enrollment?: true
    user_id?: true
    class_id?: true
    created_at?: true
    modified_at?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    enrollment?: true
    user_id?: true
    class_id?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    enrollment: string
    user_id: number
    class_id: number
    created_at: Date
    modified_at: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollment?: boolean
    user_id?: boolean
    class_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    quiz_attempts?: boolean | Student$quiz_attemptsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollment?: boolean
    user_id?: boolean
    class_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollment?: boolean
    user_id?: boolean
    class_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    enrollment?: boolean
    user_id?: boolean
    class_id?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enrollment" | "user_id" | "class_id" | "created_at" | "modified_at", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    quiz_attempts?: boolean | Student$quiz_attemptsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
      quiz_attempts: Prisma.$Quiz_attemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enrollment: string
      user_id: number
      class_id: number
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz_attempts<T extends Student$quiz_attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Student$quiz_attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly enrollment: FieldRef<"Student", 'String'>
    readonly user_id: FieldRef<"Student", 'Int'>
    readonly class_id: FieldRef<"Student", 'Int'>
    readonly created_at: FieldRef<"Student", 'DateTime'>
    readonly modified_at: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.quiz_attempts
   */
  export type Student$quiz_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    where?: Quiz_attemptWhereInput
    orderBy?: Quiz_attemptOrderByWithRelationInput | Quiz_attemptOrderByWithRelationInput[]
    cursor?: Quiz_attemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Quiz_attemptScalarFieldEnum | Quiz_attemptScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Relationship_teacher_subject_class
   */

  export type AggregateRelationship_teacher_subject_class = {
    _count: Relationship_teacher_subject_classCountAggregateOutputType | null
    _avg: Relationship_teacher_subject_classAvgAggregateOutputType | null
    _sum: Relationship_teacher_subject_classSumAggregateOutputType | null
    _min: Relationship_teacher_subject_classMinAggregateOutputType | null
    _max: Relationship_teacher_subject_classMaxAggregateOutputType | null
  }

  export type Relationship_teacher_subject_classAvgAggregateOutputType = {
    id: number | null
    class_id: number | null
    teacher_subject_id: number | null
  }

  export type Relationship_teacher_subject_classSumAggregateOutputType = {
    id: number | null
    class_id: number | null
    teacher_subject_id: number | null
  }

  export type Relationship_teacher_subject_classMinAggregateOutputType = {
    id: number | null
    class_id: number | null
    teacher_subject_id: number | null
  }

  export type Relationship_teacher_subject_classMaxAggregateOutputType = {
    id: number | null
    class_id: number | null
    teacher_subject_id: number | null
  }

  export type Relationship_teacher_subject_classCountAggregateOutputType = {
    id: number
    class_id: number
    teacher_subject_id: number
    _all: number
  }


  export type Relationship_teacher_subject_classAvgAggregateInputType = {
    id?: true
    class_id?: true
    teacher_subject_id?: true
  }

  export type Relationship_teacher_subject_classSumAggregateInputType = {
    id?: true
    class_id?: true
    teacher_subject_id?: true
  }

  export type Relationship_teacher_subject_classMinAggregateInputType = {
    id?: true
    class_id?: true
    teacher_subject_id?: true
  }

  export type Relationship_teacher_subject_classMaxAggregateInputType = {
    id?: true
    class_id?: true
    teacher_subject_id?: true
  }

  export type Relationship_teacher_subject_classCountAggregateInputType = {
    id?: true
    class_id?: true
    teacher_subject_id?: true
    _all?: true
  }

  export type Relationship_teacher_subject_classAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationship_teacher_subject_class to aggregate.
     */
    where?: Relationship_teacher_subject_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationship_teacher_subject_classes to fetch.
     */
    orderBy?: Relationship_teacher_subject_classOrderByWithRelationInput | Relationship_teacher_subject_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Relationship_teacher_subject_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationship_teacher_subject_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationship_teacher_subject_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relationship_teacher_subject_classes
    **/
    _count?: true | Relationship_teacher_subject_classCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Relationship_teacher_subject_classAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Relationship_teacher_subject_classSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Relationship_teacher_subject_classMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Relationship_teacher_subject_classMaxAggregateInputType
  }

  export type GetRelationship_teacher_subject_classAggregateType<T extends Relationship_teacher_subject_classAggregateArgs> = {
        [P in keyof T & keyof AggregateRelationship_teacher_subject_class]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelationship_teacher_subject_class[P]>
      : GetScalarType<T[P], AggregateRelationship_teacher_subject_class[P]>
  }




  export type Relationship_teacher_subject_classGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Relationship_teacher_subject_classWhereInput
    orderBy?: Relationship_teacher_subject_classOrderByWithAggregationInput | Relationship_teacher_subject_classOrderByWithAggregationInput[]
    by: Relationship_teacher_subject_classScalarFieldEnum[] | Relationship_teacher_subject_classScalarFieldEnum
    having?: Relationship_teacher_subject_classScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Relationship_teacher_subject_classCountAggregateInputType | true
    _avg?: Relationship_teacher_subject_classAvgAggregateInputType
    _sum?: Relationship_teacher_subject_classSumAggregateInputType
    _min?: Relationship_teacher_subject_classMinAggregateInputType
    _max?: Relationship_teacher_subject_classMaxAggregateInputType
  }

  export type Relationship_teacher_subject_classGroupByOutputType = {
    id: number
    class_id: number
    teacher_subject_id: number
    _count: Relationship_teacher_subject_classCountAggregateOutputType | null
    _avg: Relationship_teacher_subject_classAvgAggregateOutputType | null
    _sum: Relationship_teacher_subject_classSumAggregateOutputType | null
    _min: Relationship_teacher_subject_classMinAggregateOutputType | null
    _max: Relationship_teacher_subject_classMaxAggregateOutputType | null
  }

  type GetRelationship_teacher_subject_classGroupByPayload<T extends Relationship_teacher_subject_classGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Relationship_teacher_subject_classGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Relationship_teacher_subject_classGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Relationship_teacher_subject_classGroupByOutputType[P]>
            : GetScalarType<T[P], Relationship_teacher_subject_classGroupByOutputType[P]>
        }
      >
    >


  export type Relationship_teacher_subject_classSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    teacher_subject_id?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher_subject?: boolean | Relationship_teacher_subjectDefaultArgs<ExtArgs>
    quizzes?: boolean | Relationship_teacher_subject_class$quizzesArgs<ExtArgs>
    _count?: boolean | Relationship_teacher_subject_classCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship_teacher_subject_class"]>

  export type Relationship_teacher_subject_classSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    teacher_subject_id?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher_subject?: boolean | Relationship_teacher_subjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship_teacher_subject_class"]>

  export type Relationship_teacher_subject_classSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    teacher_subject_id?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher_subject?: boolean | Relationship_teacher_subjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship_teacher_subject_class"]>

  export type Relationship_teacher_subject_classSelectScalar = {
    id?: boolean
    class_id?: boolean
    teacher_subject_id?: boolean
  }

  export type Relationship_teacher_subject_classOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "class_id" | "teacher_subject_id", ExtArgs["result"]["relationship_teacher_subject_class"]>
  export type Relationship_teacher_subject_classInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher_subject?: boolean | Relationship_teacher_subjectDefaultArgs<ExtArgs>
    quizzes?: boolean | Relationship_teacher_subject_class$quizzesArgs<ExtArgs>
    _count?: boolean | Relationship_teacher_subject_classCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Relationship_teacher_subject_classIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher_subject?: boolean | Relationship_teacher_subjectDefaultArgs<ExtArgs>
  }
  export type Relationship_teacher_subject_classIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    teacher_subject?: boolean | Relationship_teacher_subjectDefaultArgs<ExtArgs>
  }

  export type $Relationship_teacher_subject_classPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relationship_teacher_subject_class"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      teacher_subject: Prisma.$Relationship_teacher_subjectPayload<ExtArgs>
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      class_id: number
      teacher_subject_id: number
    }, ExtArgs["result"]["relationship_teacher_subject_class"]>
    composites: {}
  }

  type Relationship_teacher_subject_classGetPayload<S extends boolean | null | undefined | Relationship_teacher_subject_classDefaultArgs> = $Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload, S>

  type Relationship_teacher_subject_classCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Relationship_teacher_subject_classFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Relationship_teacher_subject_classCountAggregateInputType | true
    }

  export interface Relationship_teacher_subject_classDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relationship_teacher_subject_class'], meta: { name: 'Relationship_teacher_subject_class' } }
    /**
     * Find zero or one Relationship_teacher_subject_class that matches the filter.
     * @param {Relationship_teacher_subject_classFindUniqueArgs} args - Arguments to find a Relationship_teacher_subject_class
     * @example
     * // Get one Relationship_teacher_subject_class
     * const relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Relationship_teacher_subject_classFindUniqueArgs>(args: SelectSubset<T, Relationship_teacher_subject_classFindUniqueArgs<ExtArgs>>): Prisma__Relationship_teacher_subject_classClient<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relationship_teacher_subject_class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Relationship_teacher_subject_classFindUniqueOrThrowArgs} args - Arguments to find a Relationship_teacher_subject_class
     * @example
     * // Get one Relationship_teacher_subject_class
     * const relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Relationship_teacher_subject_classFindUniqueOrThrowArgs>(args: SelectSubset<T, Relationship_teacher_subject_classFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Relationship_teacher_subject_classClient<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relationship_teacher_subject_class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subject_classFindFirstArgs} args - Arguments to find a Relationship_teacher_subject_class
     * @example
     * // Get one Relationship_teacher_subject_class
     * const relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Relationship_teacher_subject_classFindFirstArgs>(args?: SelectSubset<T, Relationship_teacher_subject_classFindFirstArgs<ExtArgs>>): Prisma__Relationship_teacher_subject_classClient<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relationship_teacher_subject_class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subject_classFindFirstOrThrowArgs} args - Arguments to find a Relationship_teacher_subject_class
     * @example
     * // Get one Relationship_teacher_subject_class
     * const relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Relationship_teacher_subject_classFindFirstOrThrowArgs>(args?: SelectSubset<T, Relationship_teacher_subject_classFindFirstOrThrowArgs<ExtArgs>>): Prisma__Relationship_teacher_subject_classClient<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relationship_teacher_subject_classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subject_classFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relationship_teacher_subject_classes
     * const relationship_teacher_subject_classes = await prisma.relationship_teacher_subject_class.findMany()
     * 
     * // Get first 10 Relationship_teacher_subject_classes
     * const relationship_teacher_subject_classes = await prisma.relationship_teacher_subject_class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationship_teacher_subject_classWithIdOnly = await prisma.relationship_teacher_subject_class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Relationship_teacher_subject_classFindManyArgs>(args?: SelectSubset<T, Relationship_teacher_subject_classFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relationship_teacher_subject_class.
     * @param {Relationship_teacher_subject_classCreateArgs} args - Arguments to create a Relationship_teacher_subject_class.
     * @example
     * // Create one Relationship_teacher_subject_class
     * const Relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.create({
     *   data: {
     *     // ... data to create a Relationship_teacher_subject_class
     *   }
     * })
     * 
     */
    create<T extends Relationship_teacher_subject_classCreateArgs>(args: SelectSubset<T, Relationship_teacher_subject_classCreateArgs<ExtArgs>>): Prisma__Relationship_teacher_subject_classClient<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relationship_teacher_subject_classes.
     * @param {Relationship_teacher_subject_classCreateManyArgs} args - Arguments to create many Relationship_teacher_subject_classes.
     * @example
     * // Create many Relationship_teacher_subject_classes
     * const relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Relationship_teacher_subject_classCreateManyArgs>(args?: SelectSubset<T, Relationship_teacher_subject_classCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relationship_teacher_subject_classes and returns the data saved in the database.
     * @param {Relationship_teacher_subject_classCreateManyAndReturnArgs} args - Arguments to create many Relationship_teacher_subject_classes.
     * @example
     * // Create many Relationship_teacher_subject_classes
     * const relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relationship_teacher_subject_classes and only return the `id`
     * const relationship_teacher_subject_classWithIdOnly = await prisma.relationship_teacher_subject_class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Relationship_teacher_subject_classCreateManyAndReturnArgs>(args?: SelectSubset<T, Relationship_teacher_subject_classCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Relationship_teacher_subject_class.
     * @param {Relationship_teacher_subject_classDeleteArgs} args - Arguments to delete one Relationship_teacher_subject_class.
     * @example
     * // Delete one Relationship_teacher_subject_class
     * const Relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.delete({
     *   where: {
     *     // ... filter to delete one Relationship_teacher_subject_class
     *   }
     * })
     * 
     */
    delete<T extends Relationship_teacher_subject_classDeleteArgs>(args: SelectSubset<T, Relationship_teacher_subject_classDeleteArgs<ExtArgs>>): Prisma__Relationship_teacher_subject_classClient<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relationship_teacher_subject_class.
     * @param {Relationship_teacher_subject_classUpdateArgs} args - Arguments to update one Relationship_teacher_subject_class.
     * @example
     * // Update one Relationship_teacher_subject_class
     * const relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Relationship_teacher_subject_classUpdateArgs>(args: SelectSubset<T, Relationship_teacher_subject_classUpdateArgs<ExtArgs>>): Prisma__Relationship_teacher_subject_classClient<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relationship_teacher_subject_classes.
     * @param {Relationship_teacher_subject_classDeleteManyArgs} args - Arguments to filter Relationship_teacher_subject_classes to delete.
     * @example
     * // Delete a few Relationship_teacher_subject_classes
     * const { count } = await prisma.relationship_teacher_subject_class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Relationship_teacher_subject_classDeleteManyArgs>(args?: SelectSubset<T, Relationship_teacher_subject_classDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationship_teacher_subject_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subject_classUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relationship_teacher_subject_classes
     * const relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Relationship_teacher_subject_classUpdateManyArgs>(args: SelectSubset<T, Relationship_teacher_subject_classUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationship_teacher_subject_classes and returns the data updated in the database.
     * @param {Relationship_teacher_subject_classUpdateManyAndReturnArgs} args - Arguments to update many Relationship_teacher_subject_classes.
     * @example
     * // Update many Relationship_teacher_subject_classes
     * const relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Relationship_teacher_subject_classes and only return the `id`
     * const relationship_teacher_subject_classWithIdOnly = await prisma.relationship_teacher_subject_class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Relationship_teacher_subject_classUpdateManyAndReturnArgs>(args: SelectSubset<T, Relationship_teacher_subject_classUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Relationship_teacher_subject_class.
     * @param {Relationship_teacher_subject_classUpsertArgs} args - Arguments to update or create a Relationship_teacher_subject_class.
     * @example
     * // Update or create a Relationship_teacher_subject_class
     * const relationship_teacher_subject_class = await prisma.relationship_teacher_subject_class.upsert({
     *   create: {
     *     // ... data to create a Relationship_teacher_subject_class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relationship_teacher_subject_class we want to update
     *   }
     * })
     */
    upsert<T extends Relationship_teacher_subject_classUpsertArgs>(args: SelectSubset<T, Relationship_teacher_subject_classUpsertArgs<ExtArgs>>): Prisma__Relationship_teacher_subject_classClient<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relationship_teacher_subject_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subject_classCountArgs} args - Arguments to filter Relationship_teacher_subject_classes to count.
     * @example
     * // Count the number of Relationship_teacher_subject_classes
     * const count = await prisma.relationship_teacher_subject_class.count({
     *   where: {
     *     // ... the filter for the Relationship_teacher_subject_classes we want to count
     *   }
     * })
    **/
    count<T extends Relationship_teacher_subject_classCountArgs>(
      args?: Subset<T, Relationship_teacher_subject_classCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Relationship_teacher_subject_classCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relationship_teacher_subject_class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subject_classAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Relationship_teacher_subject_classAggregateArgs>(args: Subset<T, Relationship_teacher_subject_classAggregateArgs>): Prisma.PrismaPromise<GetRelationship_teacher_subject_classAggregateType<T>>

    /**
     * Group by Relationship_teacher_subject_class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relationship_teacher_subject_classGroupByArgs} args - Group by arguments.
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
      T extends Relationship_teacher_subject_classGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Relationship_teacher_subject_classGroupByArgs['orderBy'] }
        : { orderBy?: Relationship_teacher_subject_classGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Relationship_teacher_subject_classGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationship_teacher_subject_classGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relationship_teacher_subject_class model
   */
  readonly fields: Relationship_teacher_subject_classFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relationship_teacher_subject_class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Relationship_teacher_subject_classClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher_subject<T extends Relationship_teacher_subjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Relationship_teacher_subjectDefaultArgs<ExtArgs>>): Prisma__Relationship_teacher_subjectClient<$Result.GetResult<Prisma.$Relationship_teacher_subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quizzes<T extends Relationship_teacher_subject_class$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Relationship_teacher_subject_class$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Relationship_teacher_subject_class model
   */
  interface Relationship_teacher_subject_classFieldRefs {
    readonly id: FieldRef<"Relationship_teacher_subject_class", 'Int'>
    readonly class_id: FieldRef<"Relationship_teacher_subject_class", 'Int'>
    readonly teacher_subject_id: FieldRef<"Relationship_teacher_subject_class", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Relationship_teacher_subject_class findUnique
   */
  export type Relationship_teacher_subject_classFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    /**
     * Filter, which Relationship_teacher_subject_class to fetch.
     */
    where: Relationship_teacher_subject_classWhereUniqueInput
  }

  /**
   * Relationship_teacher_subject_class findUniqueOrThrow
   */
  export type Relationship_teacher_subject_classFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    /**
     * Filter, which Relationship_teacher_subject_class to fetch.
     */
    where: Relationship_teacher_subject_classWhereUniqueInput
  }

  /**
   * Relationship_teacher_subject_class findFirst
   */
  export type Relationship_teacher_subject_classFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    /**
     * Filter, which Relationship_teacher_subject_class to fetch.
     */
    where?: Relationship_teacher_subject_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationship_teacher_subject_classes to fetch.
     */
    orderBy?: Relationship_teacher_subject_classOrderByWithRelationInput | Relationship_teacher_subject_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationship_teacher_subject_classes.
     */
    cursor?: Relationship_teacher_subject_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationship_teacher_subject_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationship_teacher_subject_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationship_teacher_subject_classes.
     */
    distinct?: Relationship_teacher_subject_classScalarFieldEnum | Relationship_teacher_subject_classScalarFieldEnum[]
  }

  /**
   * Relationship_teacher_subject_class findFirstOrThrow
   */
  export type Relationship_teacher_subject_classFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    /**
     * Filter, which Relationship_teacher_subject_class to fetch.
     */
    where?: Relationship_teacher_subject_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationship_teacher_subject_classes to fetch.
     */
    orderBy?: Relationship_teacher_subject_classOrderByWithRelationInput | Relationship_teacher_subject_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationship_teacher_subject_classes.
     */
    cursor?: Relationship_teacher_subject_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationship_teacher_subject_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationship_teacher_subject_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationship_teacher_subject_classes.
     */
    distinct?: Relationship_teacher_subject_classScalarFieldEnum | Relationship_teacher_subject_classScalarFieldEnum[]
  }

  /**
   * Relationship_teacher_subject_class findMany
   */
  export type Relationship_teacher_subject_classFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    /**
     * Filter, which Relationship_teacher_subject_classes to fetch.
     */
    where?: Relationship_teacher_subject_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationship_teacher_subject_classes to fetch.
     */
    orderBy?: Relationship_teacher_subject_classOrderByWithRelationInput | Relationship_teacher_subject_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relationship_teacher_subject_classes.
     */
    cursor?: Relationship_teacher_subject_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationship_teacher_subject_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationship_teacher_subject_classes.
     */
    skip?: number
    distinct?: Relationship_teacher_subject_classScalarFieldEnum | Relationship_teacher_subject_classScalarFieldEnum[]
  }

  /**
   * Relationship_teacher_subject_class create
   */
  export type Relationship_teacher_subject_classCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    /**
     * The data needed to create a Relationship_teacher_subject_class.
     */
    data: XOR<Relationship_teacher_subject_classCreateInput, Relationship_teacher_subject_classUncheckedCreateInput>
  }

  /**
   * Relationship_teacher_subject_class createMany
   */
  export type Relationship_teacher_subject_classCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relationship_teacher_subject_classes.
     */
    data: Relationship_teacher_subject_classCreateManyInput | Relationship_teacher_subject_classCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relationship_teacher_subject_class createManyAndReturn
   */
  export type Relationship_teacher_subject_classCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * The data used to create many Relationship_teacher_subject_classes.
     */
    data: Relationship_teacher_subject_classCreateManyInput | Relationship_teacher_subject_classCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relationship_teacher_subject_class update
   */
  export type Relationship_teacher_subject_classUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    /**
     * The data needed to update a Relationship_teacher_subject_class.
     */
    data: XOR<Relationship_teacher_subject_classUpdateInput, Relationship_teacher_subject_classUncheckedUpdateInput>
    /**
     * Choose, which Relationship_teacher_subject_class to update.
     */
    where: Relationship_teacher_subject_classWhereUniqueInput
  }

  /**
   * Relationship_teacher_subject_class updateMany
   */
  export type Relationship_teacher_subject_classUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relationship_teacher_subject_classes.
     */
    data: XOR<Relationship_teacher_subject_classUpdateManyMutationInput, Relationship_teacher_subject_classUncheckedUpdateManyInput>
    /**
     * Filter which Relationship_teacher_subject_classes to update
     */
    where?: Relationship_teacher_subject_classWhereInput
    /**
     * Limit how many Relationship_teacher_subject_classes to update.
     */
    limit?: number
  }

  /**
   * Relationship_teacher_subject_class updateManyAndReturn
   */
  export type Relationship_teacher_subject_classUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * The data used to update Relationship_teacher_subject_classes.
     */
    data: XOR<Relationship_teacher_subject_classUpdateManyMutationInput, Relationship_teacher_subject_classUncheckedUpdateManyInput>
    /**
     * Filter which Relationship_teacher_subject_classes to update
     */
    where?: Relationship_teacher_subject_classWhereInput
    /**
     * Limit how many Relationship_teacher_subject_classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relationship_teacher_subject_class upsert
   */
  export type Relationship_teacher_subject_classUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    /**
     * The filter to search for the Relationship_teacher_subject_class to update in case it exists.
     */
    where: Relationship_teacher_subject_classWhereUniqueInput
    /**
     * In case the Relationship_teacher_subject_class found by the `where` argument doesn't exist, create a new Relationship_teacher_subject_class with this data.
     */
    create: XOR<Relationship_teacher_subject_classCreateInput, Relationship_teacher_subject_classUncheckedCreateInput>
    /**
     * In case the Relationship_teacher_subject_class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Relationship_teacher_subject_classUpdateInput, Relationship_teacher_subject_classUncheckedUpdateInput>
  }

  /**
   * Relationship_teacher_subject_class delete
   */
  export type Relationship_teacher_subject_classDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
    /**
     * Filter which Relationship_teacher_subject_class to delete.
     */
    where: Relationship_teacher_subject_classWhereUniqueInput
  }

  /**
   * Relationship_teacher_subject_class deleteMany
   */
  export type Relationship_teacher_subject_classDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationship_teacher_subject_classes to delete
     */
    where?: Relationship_teacher_subject_classWhereInput
    /**
     * Limit how many Relationship_teacher_subject_classes to delete.
     */
    limit?: number
  }

  /**
   * Relationship_teacher_subject_class.quizzes
   */
  export type Relationship_teacher_subject_class$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Relationship_teacher_subject_class without action
   */
  export type Relationship_teacher_subject_classDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship_teacher_subject_class
     */
    select?: Relationship_teacher_subject_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship_teacher_subject_class
     */
    omit?: Relationship_teacher_subject_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Relationship_teacher_subject_classInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    id: number | null
    duration_minutes: number | null
    max_points: Decimal | null
    max_attempt: number | null
    teacher_subject_class_id: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: number | null
    duration_minutes: number | null
    max_points: Decimal | null
    max_attempt: number | null
    teacher_subject_class_id: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: number | null
    title: string | null
    icon: string | null
    description: string | null
    duration_minutes: number | null
    max_points: Decimal | null
    max_attempt: number | null
    visibility: $Enums.QuizVisibility | null
    created_at: Date | null
    modified_at: Date | null
    teacher_subject_class_id: number | null
  }

  export type QuizMaxAggregateOutputType = {
    id: number | null
    title: string | null
    icon: string | null
    description: string | null
    duration_minutes: number | null
    max_points: Decimal | null
    max_attempt: number | null
    visibility: $Enums.QuizVisibility | null
    created_at: Date | null
    modified_at: Date | null
    teacher_subject_class_id: number | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    title: number
    icon: number
    description: number
    duration_minutes: number
    max_points: number
    max_attempt: number
    visibility: number
    created_at: number
    modified_at: number
    teacher_subject_class_id: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
    duration_minutes?: true
    max_points?: true
    max_attempt?: true
    teacher_subject_class_id?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
    duration_minutes?: true
    max_points?: true
    max_attempt?: true
    teacher_subject_class_id?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    description?: true
    duration_minutes?: true
    max_points?: true
    max_attempt?: true
    visibility?: true
    created_at?: true
    modified_at?: true
    teacher_subject_class_id?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    description?: true
    duration_minutes?: true
    max_points?: true
    max_attempt?: true
    visibility?: true
    created_at?: true
    modified_at?: true
    teacher_subject_class_id?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    description?: true
    duration_minutes?: true
    max_points?: true
    max_attempt?: true
    visibility?: true
    created_at?: true
    modified_at?: true
    teacher_subject_class_id?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: number
    title: string
    icon: string
    description: string
    duration_minutes: number | null
    max_points: Decimal
    max_attempt: number | null
    visibility: $Enums.QuizVisibility
    created_at: Date
    modified_at: Date
    teacher_subject_class_id: number
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    description?: boolean
    duration_minutes?: boolean
    max_points?: boolean
    max_attempt?: boolean
    visibility?: boolean
    created_at?: boolean
    modified_at?: boolean
    teacher_subject_class_id?: boolean
    teacher_subject_class?: boolean | Relationship_teacher_subject_classDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    quiz_attempts?: boolean | Quiz$quiz_attemptsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    description?: boolean
    duration_minutes?: boolean
    max_points?: boolean
    max_attempt?: boolean
    visibility?: boolean
    created_at?: boolean
    modified_at?: boolean
    teacher_subject_class_id?: boolean
    teacher_subject_class?: boolean | Relationship_teacher_subject_classDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    description?: boolean
    duration_minutes?: boolean
    max_points?: boolean
    max_attempt?: boolean
    visibility?: boolean
    created_at?: boolean
    modified_at?: boolean
    teacher_subject_class_id?: boolean
    teacher_subject_class?: boolean | Relationship_teacher_subject_classDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    title?: boolean
    icon?: boolean
    description?: boolean
    duration_minutes?: boolean
    max_points?: boolean
    max_attempt?: boolean
    visibility?: boolean
    created_at?: boolean
    modified_at?: boolean
    teacher_subject_class_id?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "icon" | "description" | "duration_minutes" | "max_points" | "max_attempt" | "visibility" | "created_at" | "modified_at" | "teacher_subject_class_id", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subject_class?: boolean | Relationship_teacher_subject_classDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    quiz_attempts?: boolean | Quiz$quiz_attemptsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subject_class?: boolean | Relationship_teacher_subject_classDefaultArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subject_class?: boolean | Relationship_teacher_subject_classDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      teacher_subject_class: Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      quiz_attempts: Prisma.$Quiz_attemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      icon: string
      description: string
      duration_minutes: number | null
      max_points: Prisma.Decimal
      max_attempt: number | null
      visibility: $Enums.QuizVisibility
      created_at: Date
      modified_at: Date
      teacher_subject_class_id: number
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher_subject_class<T extends Relationship_teacher_subject_classDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Relationship_teacher_subject_classDefaultArgs<ExtArgs>>): Prisma__Relationship_teacher_subject_classClient<$Result.GetResult<Prisma.$Relationship_teacher_subject_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quiz_attempts<T extends Quiz$quiz_attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$quiz_attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'Int'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly icon: FieldRef<"Quiz", 'String'>
    readonly description: FieldRef<"Quiz", 'String'>
    readonly duration_minutes: FieldRef<"Quiz", 'Int'>
    readonly max_points: FieldRef<"Quiz", 'Decimal'>
    readonly max_attempt: FieldRef<"Quiz", 'Int'>
    readonly visibility: FieldRef<"Quiz", 'QuizVisibility'>
    readonly created_at: FieldRef<"Quiz", 'DateTime'>
    readonly modified_at: FieldRef<"Quiz", 'DateTime'>
    readonly teacher_subject_class_id: FieldRef<"Quiz", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz.quiz_attempts
   */
  export type Quiz$quiz_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    where?: Quiz_attemptWhereInput
    orderBy?: Quiz_attemptOrderByWithRelationInput | Quiz_attemptOrderByWithRelationInput[]
    cursor?: Quiz_attemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Quiz_attemptScalarFieldEnum | Quiz_attemptScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    points: Decimal | null
    quiz_id: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    points: Decimal | null
    quiz_id: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    statement: string | null
    points: Decimal | null
    quiz_id: number | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    statement: string | null
    points: Decimal | null
    quiz_id: number | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    statement: number
    points: number
    quiz_id: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    points?: true
    quiz_id?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    points?: true
    quiz_id?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    statement?: true
    points?: true
    quiz_id?: true
    created_at?: true
    modified_at?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    statement?: true
    points?: true
    quiz_id?: true
    created_at?: true
    modified_at?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    statement?: true
    points?: true
    quiz_id?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    statement: string
    points: Decimal
    quiz_id: number
    created_at: Date
    modified_at: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statement?: boolean
    points?: boolean
    quiz_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    alternatives?: boolean | Question$alternativesArgs<ExtArgs>
    question_images?: boolean | Question$question_imagesArgs<ExtArgs>
    question_responses?: boolean | Question$question_responsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statement?: boolean
    points?: boolean
    quiz_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statement?: boolean
    points?: boolean
    quiz_id?: boolean
    created_at?: boolean
    modified_at?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    statement?: boolean
    points?: boolean
    quiz_id?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statement" | "points" | "quiz_id" | "created_at" | "modified_at", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    alternatives?: boolean | Question$alternativesArgs<ExtArgs>
    question_images?: boolean | Question$question_imagesArgs<ExtArgs>
    question_responses?: boolean | Question$question_responsesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      alternatives: Prisma.$AlternativePayload<ExtArgs>[]
      question_images: Prisma.$Question_imagesPayload<ExtArgs>[]
      question_responses: Prisma.$Question_responsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      statement: string
      points: Prisma.Decimal
      quiz_id: number
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alternatives<T extends Question$alternativesArgs<ExtArgs> = {}>(args?: Subset<T, Question$alternativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    question_images<T extends Question$question_imagesArgs<ExtArgs> = {}>(args?: Subset<T, Question$question_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    question_responses<T extends Question$question_responsesArgs<ExtArgs> = {}>(args?: Subset<T, Question$question_responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly statement: FieldRef<"Question", 'String'>
    readonly points: FieldRef<"Question", 'Decimal'>
    readonly quiz_id: FieldRef<"Question", 'Int'>
    readonly created_at: FieldRef<"Question", 'DateTime'>
    readonly modified_at: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.alternatives
   */
  export type Question$alternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    where?: AlternativeWhereInput
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    cursor?: AlternativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Question.question_images
   */
  export type Question$question_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
    where?: Question_imagesWhereInput
    orderBy?: Question_imagesOrderByWithRelationInput | Question_imagesOrderByWithRelationInput[]
    cursor?: Question_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Question_imagesScalarFieldEnum | Question_imagesScalarFieldEnum[]
  }

  /**
   * Question.question_responses
   */
  export type Question$question_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    where?: Question_responseWhereInput
    orderBy?: Question_responseOrderByWithRelationInput | Question_responseOrderByWithRelationInput[]
    cursor?: Question_responseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Question_responseScalarFieldEnum | Question_responseScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Alternative
   */

  export type AggregateAlternative = {
    _count: AlternativeCountAggregateOutputType | null
    _avg: AlternativeAvgAggregateOutputType | null
    _sum: AlternativeSumAggregateOutputType | null
    _min: AlternativeMinAggregateOutputType | null
    _max: AlternativeMaxAggregateOutputType | null
  }

  export type AlternativeAvgAggregateOutputType = {
    id: number | null
    question_id: number | null
  }

  export type AlternativeSumAggregateOutputType = {
    id: number | null
    question_id: number | null
  }

  export type AlternativeMinAggregateOutputType = {
    id: number | null
    question_id: number | null
    response: string | null
    correct_alternative: boolean | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type AlternativeMaxAggregateOutputType = {
    id: number | null
    question_id: number | null
    response: string | null
    correct_alternative: boolean | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type AlternativeCountAggregateOutputType = {
    id: number
    question_id: number
    response: number
    correct_alternative: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type AlternativeAvgAggregateInputType = {
    id?: true
    question_id?: true
  }

  export type AlternativeSumAggregateInputType = {
    id?: true
    question_id?: true
  }

  export type AlternativeMinAggregateInputType = {
    id?: true
    question_id?: true
    response?: true
    correct_alternative?: true
    created_at?: true
    modified_at?: true
  }

  export type AlternativeMaxAggregateInputType = {
    id?: true
    question_id?: true
    response?: true
    correct_alternative?: true
    created_at?: true
    modified_at?: true
  }

  export type AlternativeCountAggregateInputType = {
    id?: true
    question_id?: true
    response?: true
    correct_alternative?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type AlternativeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternative to aggregate.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alternatives
    **/
    _count?: true | AlternativeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlternativeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlternativeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlternativeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlternativeMaxAggregateInputType
  }

  export type GetAlternativeAggregateType<T extends AlternativeAggregateArgs> = {
        [P in keyof T & keyof AggregateAlternative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlternative[P]>
      : GetScalarType<T[P], AggregateAlternative[P]>
  }




  export type AlternativeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeWhereInput
    orderBy?: AlternativeOrderByWithAggregationInput | AlternativeOrderByWithAggregationInput[]
    by: AlternativeScalarFieldEnum[] | AlternativeScalarFieldEnum
    having?: AlternativeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlternativeCountAggregateInputType | true
    _avg?: AlternativeAvgAggregateInputType
    _sum?: AlternativeSumAggregateInputType
    _min?: AlternativeMinAggregateInputType
    _max?: AlternativeMaxAggregateInputType
  }

  export type AlternativeGroupByOutputType = {
    id: number
    question_id: number
    response: string
    correct_alternative: boolean
    created_at: Date
    modified_at: Date
    _count: AlternativeCountAggregateOutputType | null
    _avg: AlternativeAvgAggregateOutputType | null
    _sum: AlternativeSumAggregateOutputType | null
    _min: AlternativeMinAggregateOutputType | null
    _max: AlternativeMaxAggregateOutputType | null
  }

  type GetAlternativeGroupByPayload<T extends AlternativeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlternativeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlternativeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlternativeGroupByOutputType[P]>
            : GetScalarType<T[P], AlternativeGroupByOutputType[P]>
        }
      >
    >


  export type AlternativeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    response?: boolean
    correct_alternative?: boolean
    created_at?: boolean
    modified_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    question_responses?: boolean | Alternative$question_responsesArgs<ExtArgs>
    _count?: boolean | AlternativeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    response?: boolean
    correct_alternative?: boolean
    created_at?: boolean
    modified_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    response?: boolean
    correct_alternative?: boolean
    created_at?: boolean
    modified_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>

  export type AlternativeSelectScalar = {
    id?: boolean
    question_id?: boolean
    response?: boolean
    correct_alternative?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type AlternativeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_id" | "response" | "correct_alternative" | "created_at" | "modified_at", ExtArgs["result"]["alternative"]>
  export type AlternativeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    question_responses?: boolean | Alternative$question_responsesArgs<ExtArgs>
    _count?: boolean | AlternativeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlternativeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AlternativeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AlternativePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alternative"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      question_responses: Prisma.$Question_responsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question_id: number
      response: string
      correct_alternative: boolean
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["alternative"]>
    composites: {}
  }

  type AlternativeGetPayload<S extends boolean | null | undefined | AlternativeDefaultArgs> = $Result.GetResult<Prisma.$AlternativePayload, S>

  type AlternativeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlternativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlternativeCountAggregateInputType | true
    }

  export interface AlternativeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alternative'], meta: { name: 'Alternative' } }
    /**
     * Find zero or one Alternative that matches the filter.
     * @param {AlternativeFindUniqueArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlternativeFindUniqueArgs>(args: SelectSubset<T, AlternativeFindUniqueArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alternative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlternativeFindUniqueOrThrowArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlternativeFindUniqueOrThrowArgs>(args: SelectSubset<T, AlternativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindFirstArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlternativeFindFirstArgs>(args?: SelectSubset<T, AlternativeFindFirstArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindFirstOrThrowArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlternativeFindFirstOrThrowArgs>(args?: SelectSubset<T, AlternativeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alternatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alternatives
     * const alternatives = await prisma.alternative.findMany()
     * 
     * // Get first 10 Alternatives
     * const alternatives = await prisma.alternative.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alternativeWithIdOnly = await prisma.alternative.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlternativeFindManyArgs>(args?: SelectSubset<T, AlternativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alternative.
     * @param {AlternativeCreateArgs} args - Arguments to create a Alternative.
     * @example
     * // Create one Alternative
     * const Alternative = await prisma.alternative.create({
     *   data: {
     *     // ... data to create a Alternative
     *   }
     * })
     * 
     */
    create<T extends AlternativeCreateArgs>(args: SelectSubset<T, AlternativeCreateArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alternatives.
     * @param {AlternativeCreateManyArgs} args - Arguments to create many Alternatives.
     * @example
     * // Create many Alternatives
     * const alternative = await prisma.alternative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlternativeCreateManyArgs>(args?: SelectSubset<T, AlternativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alternatives and returns the data saved in the database.
     * @param {AlternativeCreateManyAndReturnArgs} args - Arguments to create many Alternatives.
     * @example
     * // Create many Alternatives
     * const alternative = await prisma.alternative.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alternatives and only return the `id`
     * const alternativeWithIdOnly = await prisma.alternative.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlternativeCreateManyAndReturnArgs>(args?: SelectSubset<T, AlternativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alternative.
     * @param {AlternativeDeleteArgs} args - Arguments to delete one Alternative.
     * @example
     * // Delete one Alternative
     * const Alternative = await prisma.alternative.delete({
     *   where: {
     *     // ... filter to delete one Alternative
     *   }
     * })
     * 
     */
    delete<T extends AlternativeDeleteArgs>(args: SelectSubset<T, AlternativeDeleteArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alternative.
     * @param {AlternativeUpdateArgs} args - Arguments to update one Alternative.
     * @example
     * // Update one Alternative
     * const alternative = await prisma.alternative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlternativeUpdateArgs>(args: SelectSubset<T, AlternativeUpdateArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alternatives.
     * @param {AlternativeDeleteManyArgs} args - Arguments to filter Alternatives to delete.
     * @example
     * // Delete a few Alternatives
     * const { count } = await prisma.alternative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlternativeDeleteManyArgs>(args?: SelectSubset<T, AlternativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alternatives
     * const alternative = await prisma.alternative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlternativeUpdateManyArgs>(args: SelectSubset<T, AlternativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternatives and returns the data updated in the database.
     * @param {AlternativeUpdateManyAndReturnArgs} args - Arguments to update many Alternatives.
     * @example
     * // Update many Alternatives
     * const alternative = await prisma.alternative.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alternatives and only return the `id`
     * const alternativeWithIdOnly = await prisma.alternative.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlternativeUpdateManyAndReturnArgs>(args: SelectSubset<T, AlternativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alternative.
     * @param {AlternativeUpsertArgs} args - Arguments to update or create a Alternative.
     * @example
     * // Update or create a Alternative
     * const alternative = await prisma.alternative.upsert({
     *   create: {
     *     // ... data to create a Alternative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alternative we want to update
     *   }
     * })
     */
    upsert<T extends AlternativeUpsertArgs>(args: SelectSubset<T, AlternativeUpsertArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCountArgs} args - Arguments to filter Alternatives to count.
     * @example
     * // Count the number of Alternatives
     * const count = await prisma.alternative.count({
     *   where: {
     *     // ... the filter for the Alternatives we want to count
     *   }
     * })
    **/
    count<T extends AlternativeCountArgs>(
      args?: Subset<T, AlternativeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlternativeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlternativeAggregateArgs>(args: Subset<T, AlternativeAggregateArgs>): Prisma.PrismaPromise<GetAlternativeAggregateType<T>>

    /**
     * Group by Alternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeGroupByArgs} args - Group by arguments.
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
      T extends AlternativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlternativeGroupByArgs['orderBy'] }
        : { orderBy?: AlternativeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlternativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlternativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alternative model
   */
  readonly fields: AlternativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alternative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlternativeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question_responses<T extends Alternative$question_responsesArgs<ExtArgs> = {}>(args?: Subset<T, Alternative$question_responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alternative model
   */
  interface AlternativeFieldRefs {
    readonly id: FieldRef<"Alternative", 'Int'>
    readonly question_id: FieldRef<"Alternative", 'Int'>
    readonly response: FieldRef<"Alternative", 'String'>
    readonly correct_alternative: FieldRef<"Alternative", 'Boolean'>
    readonly created_at: FieldRef<"Alternative", 'DateTime'>
    readonly modified_at: FieldRef<"Alternative", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alternative findUnique
   */
  export type AlternativeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative findUniqueOrThrow
   */
  export type AlternativeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative findFirst
   */
  export type AlternativeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternatives.
     */
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative findFirstOrThrow
   */
  export type AlternativeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternatives.
     */
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative findMany
   */
  export type AlternativeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternatives to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative create
   */
  export type AlternativeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The data needed to create a Alternative.
     */
    data: XOR<AlternativeCreateInput, AlternativeUncheckedCreateInput>
  }

  /**
   * Alternative createMany
   */
  export type AlternativeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alternatives.
     */
    data: AlternativeCreateManyInput | AlternativeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alternative createManyAndReturn
   */
  export type AlternativeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * The data used to create many Alternatives.
     */
    data: AlternativeCreateManyInput | AlternativeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alternative update
   */
  export type AlternativeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The data needed to update a Alternative.
     */
    data: XOR<AlternativeUpdateInput, AlternativeUncheckedUpdateInput>
    /**
     * Choose, which Alternative to update.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative updateMany
   */
  export type AlternativeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alternatives.
     */
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyInput>
    /**
     * Filter which Alternatives to update
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to update.
     */
    limit?: number
  }

  /**
   * Alternative updateManyAndReturn
   */
  export type AlternativeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * The data used to update Alternatives.
     */
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyInput>
    /**
     * Filter which Alternatives to update
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alternative upsert
   */
  export type AlternativeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The filter to search for the Alternative to update in case it exists.
     */
    where: AlternativeWhereUniqueInput
    /**
     * In case the Alternative found by the `where` argument doesn't exist, create a new Alternative with this data.
     */
    create: XOR<AlternativeCreateInput, AlternativeUncheckedCreateInput>
    /**
     * In case the Alternative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlternativeUpdateInput, AlternativeUncheckedUpdateInput>
  }

  /**
   * Alternative delete
   */
  export type AlternativeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter which Alternative to delete.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative deleteMany
   */
  export type AlternativeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternatives to delete
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to delete.
     */
    limit?: number
  }

  /**
   * Alternative.question_responses
   */
  export type Alternative$question_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    where?: Question_responseWhereInput
    orderBy?: Question_responseOrderByWithRelationInput | Question_responseOrderByWithRelationInput[]
    cursor?: Question_responseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Question_responseScalarFieldEnum | Question_responseScalarFieldEnum[]
  }

  /**
   * Alternative without action
   */
  export type AlternativeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
  }


  /**
   * Model Question_images
   */

  export type AggregateQuestion_images = {
    _count: Question_imagesCountAggregateOutputType | null
    _avg: Question_imagesAvgAggregateOutputType | null
    _sum: Question_imagesSumAggregateOutputType | null
    _min: Question_imagesMinAggregateOutputType | null
    _max: Question_imagesMaxAggregateOutputType | null
  }

  export type Question_imagesAvgAggregateOutputType = {
    id: number | null
    question_id: number | null
  }

  export type Question_imagesSumAggregateOutputType = {
    id: number | null
    question_id: number | null
  }

  export type Question_imagesMinAggregateOutputType = {
    id: number | null
    image_path: string | null
    alt_text: string | null
    question_id: number | null
    created_at: Date | null
  }

  export type Question_imagesMaxAggregateOutputType = {
    id: number | null
    image_path: string | null
    alt_text: string | null
    question_id: number | null
    created_at: Date | null
  }

  export type Question_imagesCountAggregateOutputType = {
    id: number
    image_path: number
    alt_text: number
    question_id: number
    created_at: number
    _all: number
  }


  export type Question_imagesAvgAggregateInputType = {
    id?: true
    question_id?: true
  }

  export type Question_imagesSumAggregateInputType = {
    id?: true
    question_id?: true
  }

  export type Question_imagesMinAggregateInputType = {
    id?: true
    image_path?: true
    alt_text?: true
    question_id?: true
    created_at?: true
  }

  export type Question_imagesMaxAggregateInputType = {
    id?: true
    image_path?: true
    alt_text?: true
    question_id?: true
    created_at?: true
  }

  export type Question_imagesCountAggregateInputType = {
    id?: true
    image_path?: true
    alt_text?: true
    question_id?: true
    created_at?: true
    _all?: true
  }

  export type Question_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question_images to aggregate.
     */
    where?: Question_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Question_images to fetch.
     */
    orderBy?: Question_imagesOrderByWithRelationInput | Question_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Question_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Question_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Question_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Question_images
    **/
    _count?: true | Question_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Question_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Question_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Question_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Question_imagesMaxAggregateInputType
  }

  export type GetQuestion_imagesAggregateType<T extends Question_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion_images[P]>
      : GetScalarType<T[P], AggregateQuestion_images[P]>
  }




  export type Question_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Question_imagesWhereInput
    orderBy?: Question_imagesOrderByWithAggregationInput | Question_imagesOrderByWithAggregationInput[]
    by: Question_imagesScalarFieldEnum[] | Question_imagesScalarFieldEnum
    having?: Question_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Question_imagesCountAggregateInputType | true
    _avg?: Question_imagesAvgAggregateInputType
    _sum?: Question_imagesSumAggregateInputType
    _min?: Question_imagesMinAggregateInputType
    _max?: Question_imagesMaxAggregateInputType
  }

  export type Question_imagesGroupByOutputType = {
    id: number
    image_path: string
    alt_text: string
    question_id: number
    created_at: Date
    _count: Question_imagesCountAggregateOutputType | null
    _avg: Question_imagesAvgAggregateOutputType | null
    _sum: Question_imagesSumAggregateOutputType | null
    _min: Question_imagesMinAggregateOutputType | null
    _max: Question_imagesMaxAggregateOutputType | null
  }

  type GetQuestion_imagesGroupByPayload<T extends Question_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Question_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Question_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Question_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Question_imagesGroupByOutputType[P]>
        }
      >
    >


  export type Question_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_path?: boolean
    alt_text?: boolean
    question_id?: boolean
    created_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_images"]>

  export type Question_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_path?: boolean
    alt_text?: boolean
    question_id?: boolean
    created_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_images"]>

  export type Question_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_path?: boolean
    alt_text?: boolean
    question_id?: boolean
    created_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_images"]>

  export type Question_imagesSelectScalar = {
    id?: boolean
    image_path?: boolean
    alt_text?: boolean
    question_id?: boolean
    created_at?: boolean
  }

  export type Question_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image_path" | "alt_text" | "question_id" | "created_at", ExtArgs["result"]["question_images"]>
  export type Question_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type Question_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type Question_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $Question_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question_images"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image_path: string
      alt_text: string
      question_id: number
      created_at: Date
    }, ExtArgs["result"]["question_images"]>
    composites: {}
  }

  type Question_imagesGetPayload<S extends boolean | null | undefined | Question_imagesDefaultArgs> = $Result.GetResult<Prisma.$Question_imagesPayload, S>

  type Question_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Question_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Question_imagesCountAggregateInputType | true
    }

  export interface Question_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question_images'], meta: { name: 'Question_images' } }
    /**
     * Find zero or one Question_images that matches the filter.
     * @param {Question_imagesFindUniqueArgs} args - Arguments to find a Question_images
     * @example
     * // Get one Question_images
     * const question_images = await prisma.question_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Question_imagesFindUniqueArgs>(args: SelectSubset<T, Question_imagesFindUniqueArgs<ExtArgs>>): Prisma__Question_imagesClient<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Question_imagesFindUniqueOrThrowArgs} args - Arguments to find a Question_images
     * @example
     * // Get one Question_images
     * const question_images = await prisma.question_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Question_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, Question_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Question_imagesClient<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_imagesFindFirstArgs} args - Arguments to find a Question_images
     * @example
     * // Get one Question_images
     * const question_images = await prisma.question_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Question_imagesFindFirstArgs>(args?: SelectSubset<T, Question_imagesFindFirstArgs<ExtArgs>>): Prisma__Question_imagesClient<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_imagesFindFirstOrThrowArgs} args - Arguments to find a Question_images
     * @example
     * // Get one Question_images
     * const question_images = await prisma.question_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Question_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, Question_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Question_imagesClient<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Question_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Question_images
     * const question_images = await prisma.question_images.findMany()
     * 
     * // Get first 10 Question_images
     * const question_images = await prisma.question_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const question_imagesWithIdOnly = await prisma.question_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Question_imagesFindManyArgs>(args?: SelectSubset<T, Question_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question_images.
     * @param {Question_imagesCreateArgs} args - Arguments to create a Question_images.
     * @example
     * // Create one Question_images
     * const Question_images = await prisma.question_images.create({
     *   data: {
     *     // ... data to create a Question_images
     *   }
     * })
     * 
     */
    create<T extends Question_imagesCreateArgs>(args: SelectSubset<T, Question_imagesCreateArgs<ExtArgs>>): Prisma__Question_imagesClient<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Question_images.
     * @param {Question_imagesCreateManyArgs} args - Arguments to create many Question_images.
     * @example
     * // Create many Question_images
     * const question_images = await prisma.question_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Question_imagesCreateManyArgs>(args?: SelectSubset<T, Question_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Question_images and returns the data saved in the database.
     * @param {Question_imagesCreateManyAndReturnArgs} args - Arguments to create many Question_images.
     * @example
     * // Create many Question_images
     * const question_images = await prisma.question_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Question_images and only return the `id`
     * const question_imagesWithIdOnly = await prisma.question_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Question_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, Question_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question_images.
     * @param {Question_imagesDeleteArgs} args - Arguments to delete one Question_images.
     * @example
     * // Delete one Question_images
     * const Question_images = await prisma.question_images.delete({
     *   where: {
     *     // ... filter to delete one Question_images
     *   }
     * })
     * 
     */
    delete<T extends Question_imagesDeleteArgs>(args: SelectSubset<T, Question_imagesDeleteArgs<ExtArgs>>): Prisma__Question_imagesClient<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question_images.
     * @param {Question_imagesUpdateArgs} args - Arguments to update one Question_images.
     * @example
     * // Update one Question_images
     * const question_images = await prisma.question_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Question_imagesUpdateArgs>(args: SelectSubset<T, Question_imagesUpdateArgs<ExtArgs>>): Prisma__Question_imagesClient<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Question_images.
     * @param {Question_imagesDeleteManyArgs} args - Arguments to filter Question_images to delete.
     * @example
     * // Delete a few Question_images
     * const { count } = await prisma.question_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Question_imagesDeleteManyArgs>(args?: SelectSubset<T, Question_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Question_images
     * const question_images = await prisma.question_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Question_imagesUpdateManyArgs>(args: SelectSubset<T, Question_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_images and returns the data updated in the database.
     * @param {Question_imagesUpdateManyAndReturnArgs} args - Arguments to update many Question_images.
     * @example
     * // Update many Question_images
     * const question_images = await prisma.question_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Question_images and only return the `id`
     * const question_imagesWithIdOnly = await prisma.question_images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Question_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, Question_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question_images.
     * @param {Question_imagesUpsertArgs} args - Arguments to update or create a Question_images.
     * @example
     * // Update or create a Question_images
     * const question_images = await prisma.question_images.upsert({
     *   create: {
     *     // ... data to create a Question_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question_images we want to update
     *   }
     * })
     */
    upsert<T extends Question_imagesUpsertArgs>(args: SelectSubset<T, Question_imagesUpsertArgs<ExtArgs>>): Prisma__Question_imagesClient<$Result.GetResult<Prisma.$Question_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Question_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_imagesCountArgs} args - Arguments to filter Question_images to count.
     * @example
     * // Count the number of Question_images
     * const count = await prisma.question_images.count({
     *   where: {
     *     // ... the filter for the Question_images we want to count
     *   }
     * })
    **/
    count<T extends Question_imagesCountArgs>(
      args?: Subset<T, Question_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Question_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Question_imagesAggregateArgs>(args: Subset<T, Question_imagesAggregateArgs>): Prisma.PrismaPromise<GetQuestion_imagesAggregateType<T>>

    /**
     * Group by Question_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_imagesGroupByArgs} args - Group by arguments.
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
      T extends Question_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Question_imagesGroupByArgs['orderBy'] }
        : { orderBy?: Question_imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Question_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestion_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question_images model
   */
  readonly fields: Question_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Question_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question_images model
   */
  interface Question_imagesFieldRefs {
    readonly id: FieldRef<"Question_images", 'Int'>
    readonly image_path: FieldRef<"Question_images", 'String'>
    readonly alt_text: FieldRef<"Question_images", 'String'>
    readonly question_id: FieldRef<"Question_images", 'Int'>
    readonly created_at: FieldRef<"Question_images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question_images findUnique
   */
  export type Question_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Question_images to fetch.
     */
    where: Question_imagesWhereUniqueInput
  }

  /**
   * Question_images findUniqueOrThrow
   */
  export type Question_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Question_images to fetch.
     */
    where: Question_imagesWhereUniqueInput
  }

  /**
   * Question_images findFirst
   */
  export type Question_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Question_images to fetch.
     */
    where?: Question_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Question_images to fetch.
     */
    orderBy?: Question_imagesOrderByWithRelationInput | Question_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Question_images.
     */
    cursor?: Question_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Question_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Question_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Question_images.
     */
    distinct?: Question_imagesScalarFieldEnum | Question_imagesScalarFieldEnum[]
  }

  /**
   * Question_images findFirstOrThrow
   */
  export type Question_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Question_images to fetch.
     */
    where?: Question_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Question_images to fetch.
     */
    orderBy?: Question_imagesOrderByWithRelationInput | Question_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Question_images.
     */
    cursor?: Question_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Question_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Question_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Question_images.
     */
    distinct?: Question_imagesScalarFieldEnum | Question_imagesScalarFieldEnum[]
  }

  /**
   * Question_images findMany
   */
  export type Question_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Question_images to fetch.
     */
    where?: Question_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Question_images to fetch.
     */
    orderBy?: Question_imagesOrderByWithRelationInput | Question_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Question_images.
     */
    cursor?: Question_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Question_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Question_images.
     */
    skip?: number
    distinct?: Question_imagesScalarFieldEnum | Question_imagesScalarFieldEnum[]
  }

  /**
   * Question_images create
   */
  export type Question_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Question_images.
     */
    data: XOR<Question_imagesCreateInput, Question_imagesUncheckedCreateInput>
  }

  /**
   * Question_images createMany
   */
  export type Question_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Question_images.
     */
    data: Question_imagesCreateManyInput | Question_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question_images createManyAndReturn
   */
  export type Question_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many Question_images.
     */
    data: Question_imagesCreateManyInput | Question_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question_images update
   */
  export type Question_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Question_images.
     */
    data: XOR<Question_imagesUpdateInput, Question_imagesUncheckedUpdateInput>
    /**
     * Choose, which Question_images to update.
     */
    where: Question_imagesWhereUniqueInput
  }

  /**
   * Question_images updateMany
   */
  export type Question_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Question_images.
     */
    data: XOR<Question_imagesUpdateManyMutationInput, Question_imagesUncheckedUpdateManyInput>
    /**
     * Filter which Question_images to update
     */
    where?: Question_imagesWhereInput
    /**
     * Limit how many Question_images to update.
     */
    limit?: number
  }

  /**
   * Question_images updateManyAndReturn
   */
  export type Question_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * The data used to update Question_images.
     */
    data: XOR<Question_imagesUpdateManyMutationInput, Question_imagesUncheckedUpdateManyInput>
    /**
     * Filter which Question_images to update
     */
    where?: Question_imagesWhereInput
    /**
     * Limit how many Question_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question_images upsert
   */
  export type Question_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Question_images to update in case it exists.
     */
    where: Question_imagesWhereUniqueInput
    /**
     * In case the Question_images found by the `where` argument doesn't exist, create a new Question_images with this data.
     */
    create: XOR<Question_imagesCreateInput, Question_imagesUncheckedCreateInput>
    /**
     * In case the Question_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Question_imagesUpdateInput, Question_imagesUncheckedUpdateInput>
  }

  /**
   * Question_images delete
   */
  export type Question_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
    /**
     * Filter which Question_images to delete.
     */
    where: Question_imagesWhereUniqueInput
  }

  /**
   * Question_images deleteMany
   */
  export type Question_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question_images to delete
     */
    where?: Question_imagesWhereInput
    /**
     * Limit how many Question_images to delete.
     */
    limit?: number
  }

  /**
   * Question_images without action
   */
  export type Question_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_images
     */
    select?: Question_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_images
     */
    omit?: Question_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_imagesInclude<ExtArgs> | null
  }


  /**
   * Model Quiz_attempt
   */

  export type AggregateQuiz_attempt = {
    _count: Quiz_attemptCountAggregateOutputType | null
    _avg: Quiz_attemptAvgAggregateOutputType | null
    _sum: Quiz_attemptSumAggregateOutputType | null
    _min: Quiz_attemptMinAggregateOutputType | null
    _max: Quiz_attemptMaxAggregateOutputType | null
  }

  export type Quiz_attemptAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    quiz_id: number | null
    total_score: Decimal | null
  }

  export type Quiz_attemptSumAggregateOutputType = {
    id: number | null
    student_id: number | null
    quiz_id: number | null
    total_score: Decimal | null
  }

  export type Quiz_attemptMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    quiz_id: number | null
    started_at: Date | null
    finished_at: Date | null
    status: $Enums.AttemptStatus | null
    total_score: Decimal | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type Quiz_attemptMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    quiz_id: number | null
    started_at: Date | null
    finished_at: Date | null
    status: $Enums.AttemptStatus | null
    total_score: Decimal | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type Quiz_attemptCountAggregateOutputType = {
    id: number
    student_id: number
    quiz_id: number
    started_at: number
    finished_at: number
    status: number
    total_score: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type Quiz_attemptAvgAggregateInputType = {
    id?: true
    student_id?: true
    quiz_id?: true
    total_score?: true
  }

  export type Quiz_attemptSumAggregateInputType = {
    id?: true
    student_id?: true
    quiz_id?: true
    total_score?: true
  }

  export type Quiz_attemptMinAggregateInputType = {
    id?: true
    student_id?: true
    quiz_id?: true
    started_at?: true
    finished_at?: true
    status?: true
    total_score?: true
    created_at?: true
    modified_at?: true
  }

  export type Quiz_attemptMaxAggregateInputType = {
    id?: true
    student_id?: true
    quiz_id?: true
    started_at?: true
    finished_at?: true
    status?: true
    total_score?: true
    created_at?: true
    modified_at?: true
  }

  export type Quiz_attemptCountAggregateInputType = {
    id?: true
    student_id?: true
    quiz_id?: true
    started_at?: true
    finished_at?: true
    status?: true
    total_score?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type Quiz_attemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz_attempt to aggregate.
     */
    where?: Quiz_attemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quiz_attempts to fetch.
     */
    orderBy?: Quiz_attemptOrderByWithRelationInput | Quiz_attemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Quiz_attemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quiz_attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quiz_attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quiz_attempts
    **/
    _count?: true | Quiz_attemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Quiz_attemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Quiz_attemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Quiz_attemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Quiz_attemptMaxAggregateInputType
  }

  export type GetQuiz_attemptAggregateType<T extends Quiz_attemptAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz_attempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz_attempt[P]>
      : GetScalarType<T[P], AggregateQuiz_attempt[P]>
  }




  export type Quiz_attemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Quiz_attemptWhereInput
    orderBy?: Quiz_attemptOrderByWithAggregationInput | Quiz_attemptOrderByWithAggregationInput[]
    by: Quiz_attemptScalarFieldEnum[] | Quiz_attemptScalarFieldEnum
    having?: Quiz_attemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Quiz_attemptCountAggregateInputType | true
    _avg?: Quiz_attemptAvgAggregateInputType
    _sum?: Quiz_attemptSumAggregateInputType
    _min?: Quiz_attemptMinAggregateInputType
    _max?: Quiz_attemptMaxAggregateInputType
  }

  export type Quiz_attemptGroupByOutputType = {
    id: number
    student_id: number
    quiz_id: number
    started_at: Date
    finished_at: Date | null
    status: $Enums.AttemptStatus
    total_score: Decimal
    created_at: Date
    modified_at: Date
    _count: Quiz_attemptCountAggregateOutputType | null
    _avg: Quiz_attemptAvgAggregateOutputType | null
    _sum: Quiz_attemptSumAggregateOutputType | null
    _min: Quiz_attemptMinAggregateOutputType | null
    _max: Quiz_attemptMaxAggregateOutputType | null
  }

  type GetQuiz_attemptGroupByPayload<T extends Quiz_attemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Quiz_attemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Quiz_attemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Quiz_attemptGroupByOutputType[P]>
            : GetScalarType<T[P], Quiz_attemptGroupByOutputType[P]>
        }
      >
    >


  export type Quiz_attemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    quiz_id?: boolean
    started_at?: boolean
    finished_at?: boolean
    status?: boolean
    total_score?: boolean
    created_at?: boolean
    modified_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    question_responses?: boolean | Quiz_attempt$question_responsesArgs<ExtArgs>
    _count?: boolean | Quiz_attemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz_attempt"]>

  export type Quiz_attemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    quiz_id?: boolean
    started_at?: boolean
    finished_at?: boolean
    status?: boolean
    total_score?: boolean
    created_at?: boolean
    modified_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz_attempt"]>

  export type Quiz_attemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    quiz_id?: boolean
    started_at?: boolean
    finished_at?: boolean
    status?: boolean
    total_score?: boolean
    created_at?: boolean
    modified_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz_attempt"]>

  export type Quiz_attemptSelectScalar = {
    id?: boolean
    student_id?: boolean
    quiz_id?: boolean
    started_at?: boolean
    finished_at?: boolean
    status?: boolean
    total_score?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type Quiz_attemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "quiz_id" | "started_at" | "finished_at" | "status" | "total_score" | "created_at" | "modified_at", ExtArgs["result"]["quiz_attempt"]>
  export type Quiz_attemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    question_responses?: boolean | Quiz_attempt$question_responsesArgs<ExtArgs>
    _count?: boolean | Quiz_attemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Quiz_attemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type Quiz_attemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $Quiz_attemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz_attempt"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
      question_responses: Prisma.$Question_responsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number
      quiz_id: number
      started_at: Date
      finished_at: Date | null
      status: $Enums.AttemptStatus
      total_score: Prisma.Decimal
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["quiz_attempt"]>
    composites: {}
  }

  type Quiz_attemptGetPayload<S extends boolean | null | undefined | Quiz_attemptDefaultArgs> = $Result.GetResult<Prisma.$Quiz_attemptPayload, S>

  type Quiz_attemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Quiz_attemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Quiz_attemptCountAggregateInputType | true
    }

  export interface Quiz_attemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz_attempt'], meta: { name: 'Quiz_attempt' } }
    /**
     * Find zero or one Quiz_attempt that matches the filter.
     * @param {Quiz_attemptFindUniqueArgs} args - Arguments to find a Quiz_attempt
     * @example
     * // Get one Quiz_attempt
     * const quiz_attempt = await prisma.quiz_attempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Quiz_attemptFindUniqueArgs>(args: SelectSubset<T, Quiz_attemptFindUniqueArgs<ExtArgs>>): Prisma__Quiz_attemptClient<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz_attempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Quiz_attemptFindUniqueOrThrowArgs} args - Arguments to find a Quiz_attempt
     * @example
     * // Get one Quiz_attempt
     * const quiz_attempt = await prisma.quiz_attempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Quiz_attemptFindUniqueOrThrowArgs>(args: SelectSubset<T, Quiz_attemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Quiz_attemptClient<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz_attempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_attemptFindFirstArgs} args - Arguments to find a Quiz_attempt
     * @example
     * // Get one Quiz_attempt
     * const quiz_attempt = await prisma.quiz_attempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Quiz_attemptFindFirstArgs>(args?: SelectSubset<T, Quiz_attemptFindFirstArgs<ExtArgs>>): Prisma__Quiz_attemptClient<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz_attempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_attemptFindFirstOrThrowArgs} args - Arguments to find a Quiz_attempt
     * @example
     * // Get one Quiz_attempt
     * const quiz_attempt = await prisma.quiz_attempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Quiz_attemptFindFirstOrThrowArgs>(args?: SelectSubset<T, Quiz_attemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__Quiz_attemptClient<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quiz_attempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_attemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempt.findMany()
     * 
     * // Get first 10 Quiz_attempts
     * const quiz_attempts = await prisma.quiz_attempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quiz_attemptWithIdOnly = await prisma.quiz_attempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Quiz_attemptFindManyArgs>(args?: SelectSubset<T, Quiz_attemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz_attempt.
     * @param {Quiz_attemptCreateArgs} args - Arguments to create a Quiz_attempt.
     * @example
     * // Create one Quiz_attempt
     * const Quiz_attempt = await prisma.quiz_attempt.create({
     *   data: {
     *     // ... data to create a Quiz_attempt
     *   }
     * })
     * 
     */
    create<T extends Quiz_attemptCreateArgs>(args: SelectSubset<T, Quiz_attemptCreateArgs<ExtArgs>>): Prisma__Quiz_attemptClient<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quiz_attempts.
     * @param {Quiz_attemptCreateManyArgs} args - Arguments to create many Quiz_attempts.
     * @example
     * // Create many Quiz_attempts
     * const quiz_attempt = await prisma.quiz_attempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Quiz_attemptCreateManyArgs>(args?: SelectSubset<T, Quiz_attemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quiz_attempts and returns the data saved in the database.
     * @param {Quiz_attemptCreateManyAndReturnArgs} args - Arguments to create many Quiz_attempts.
     * @example
     * // Create many Quiz_attempts
     * const quiz_attempt = await prisma.quiz_attempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quiz_attempts and only return the `id`
     * const quiz_attemptWithIdOnly = await prisma.quiz_attempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Quiz_attemptCreateManyAndReturnArgs>(args?: SelectSubset<T, Quiz_attemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz_attempt.
     * @param {Quiz_attemptDeleteArgs} args - Arguments to delete one Quiz_attempt.
     * @example
     * // Delete one Quiz_attempt
     * const Quiz_attempt = await prisma.quiz_attempt.delete({
     *   where: {
     *     // ... filter to delete one Quiz_attempt
     *   }
     * })
     * 
     */
    delete<T extends Quiz_attemptDeleteArgs>(args: SelectSubset<T, Quiz_attemptDeleteArgs<ExtArgs>>): Prisma__Quiz_attemptClient<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz_attempt.
     * @param {Quiz_attemptUpdateArgs} args - Arguments to update one Quiz_attempt.
     * @example
     * // Update one Quiz_attempt
     * const quiz_attempt = await prisma.quiz_attempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Quiz_attemptUpdateArgs>(args: SelectSubset<T, Quiz_attemptUpdateArgs<ExtArgs>>): Prisma__Quiz_attemptClient<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quiz_attempts.
     * @param {Quiz_attemptDeleteManyArgs} args - Arguments to filter Quiz_attempts to delete.
     * @example
     * // Delete a few Quiz_attempts
     * const { count } = await prisma.quiz_attempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Quiz_attemptDeleteManyArgs>(args?: SelectSubset<T, Quiz_attemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quiz_attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_attemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quiz_attempts
     * const quiz_attempt = await prisma.quiz_attempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Quiz_attemptUpdateManyArgs>(args: SelectSubset<T, Quiz_attemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quiz_attempts and returns the data updated in the database.
     * @param {Quiz_attemptUpdateManyAndReturnArgs} args - Arguments to update many Quiz_attempts.
     * @example
     * // Update many Quiz_attempts
     * const quiz_attempt = await prisma.quiz_attempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quiz_attempts and only return the `id`
     * const quiz_attemptWithIdOnly = await prisma.quiz_attempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Quiz_attemptUpdateManyAndReturnArgs>(args: SelectSubset<T, Quiz_attemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz_attempt.
     * @param {Quiz_attemptUpsertArgs} args - Arguments to update or create a Quiz_attempt.
     * @example
     * // Update or create a Quiz_attempt
     * const quiz_attempt = await prisma.quiz_attempt.upsert({
     *   create: {
     *     // ... data to create a Quiz_attempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz_attempt we want to update
     *   }
     * })
     */
    upsert<T extends Quiz_attemptUpsertArgs>(args: SelectSubset<T, Quiz_attemptUpsertArgs<ExtArgs>>): Prisma__Quiz_attemptClient<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quiz_attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_attemptCountArgs} args - Arguments to filter Quiz_attempts to count.
     * @example
     * // Count the number of Quiz_attempts
     * const count = await prisma.quiz_attempt.count({
     *   where: {
     *     // ... the filter for the Quiz_attempts we want to count
     *   }
     * })
    **/
    count<T extends Quiz_attemptCountArgs>(
      args?: Subset<T, Quiz_attemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Quiz_attemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz_attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_attemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Quiz_attemptAggregateArgs>(args: Subset<T, Quiz_attemptAggregateArgs>): Prisma.PrismaPromise<GetQuiz_attemptAggregateType<T>>

    /**
     * Group by Quiz_attempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_attemptGroupByArgs} args - Group by arguments.
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
      T extends Quiz_attemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Quiz_attemptGroupByArgs['orderBy'] }
        : { orderBy?: Quiz_attemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Quiz_attemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_attemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz_attempt model
   */
  readonly fields: Quiz_attemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz_attempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Quiz_attemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question_responses<T extends Quiz_attempt$question_responsesArgs<ExtArgs> = {}>(args?: Subset<T, Quiz_attempt$question_responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz_attempt model
   */
  interface Quiz_attemptFieldRefs {
    readonly id: FieldRef<"Quiz_attempt", 'Int'>
    readonly student_id: FieldRef<"Quiz_attempt", 'Int'>
    readonly quiz_id: FieldRef<"Quiz_attempt", 'Int'>
    readonly started_at: FieldRef<"Quiz_attempt", 'DateTime'>
    readonly finished_at: FieldRef<"Quiz_attempt", 'DateTime'>
    readonly status: FieldRef<"Quiz_attempt", 'AttemptStatus'>
    readonly total_score: FieldRef<"Quiz_attempt", 'Decimal'>
    readonly created_at: FieldRef<"Quiz_attempt", 'DateTime'>
    readonly modified_at: FieldRef<"Quiz_attempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz_attempt findUnique
   */
  export type Quiz_attemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    /**
     * Filter, which Quiz_attempt to fetch.
     */
    where: Quiz_attemptWhereUniqueInput
  }

  /**
   * Quiz_attempt findUniqueOrThrow
   */
  export type Quiz_attemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    /**
     * Filter, which Quiz_attempt to fetch.
     */
    where: Quiz_attemptWhereUniqueInput
  }

  /**
   * Quiz_attempt findFirst
   */
  export type Quiz_attemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    /**
     * Filter, which Quiz_attempt to fetch.
     */
    where?: Quiz_attemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quiz_attempts to fetch.
     */
    orderBy?: Quiz_attemptOrderByWithRelationInput | Quiz_attemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quiz_attempts.
     */
    cursor?: Quiz_attemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quiz_attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quiz_attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quiz_attempts.
     */
    distinct?: Quiz_attemptScalarFieldEnum | Quiz_attemptScalarFieldEnum[]
  }

  /**
   * Quiz_attempt findFirstOrThrow
   */
  export type Quiz_attemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    /**
     * Filter, which Quiz_attempt to fetch.
     */
    where?: Quiz_attemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quiz_attempts to fetch.
     */
    orderBy?: Quiz_attemptOrderByWithRelationInput | Quiz_attemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quiz_attempts.
     */
    cursor?: Quiz_attemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quiz_attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quiz_attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quiz_attempts.
     */
    distinct?: Quiz_attemptScalarFieldEnum | Quiz_attemptScalarFieldEnum[]
  }

  /**
   * Quiz_attempt findMany
   */
  export type Quiz_attemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    /**
     * Filter, which Quiz_attempts to fetch.
     */
    where?: Quiz_attemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quiz_attempts to fetch.
     */
    orderBy?: Quiz_attemptOrderByWithRelationInput | Quiz_attemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quiz_attempts.
     */
    cursor?: Quiz_attemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quiz_attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quiz_attempts.
     */
    skip?: number
    distinct?: Quiz_attemptScalarFieldEnum | Quiz_attemptScalarFieldEnum[]
  }

  /**
   * Quiz_attempt create
   */
  export type Quiz_attemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz_attempt.
     */
    data: XOR<Quiz_attemptCreateInput, Quiz_attemptUncheckedCreateInput>
  }

  /**
   * Quiz_attempt createMany
   */
  export type Quiz_attemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quiz_attempts.
     */
    data: Quiz_attemptCreateManyInput | Quiz_attemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz_attempt createManyAndReturn
   */
  export type Quiz_attemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * The data used to create many Quiz_attempts.
     */
    data: Quiz_attemptCreateManyInput | Quiz_attemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz_attempt update
   */
  export type Quiz_attemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz_attempt.
     */
    data: XOR<Quiz_attemptUpdateInput, Quiz_attemptUncheckedUpdateInput>
    /**
     * Choose, which Quiz_attempt to update.
     */
    where: Quiz_attemptWhereUniqueInput
  }

  /**
   * Quiz_attempt updateMany
   */
  export type Quiz_attemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quiz_attempts.
     */
    data: XOR<Quiz_attemptUpdateManyMutationInput, Quiz_attemptUncheckedUpdateManyInput>
    /**
     * Filter which Quiz_attempts to update
     */
    where?: Quiz_attemptWhereInput
    /**
     * Limit how many Quiz_attempts to update.
     */
    limit?: number
  }

  /**
   * Quiz_attempt updateManyAndReturn
   */
  export type Quiz_attemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * The data used to update Quiz_attempts.
     */
    data: XOR<Quiz_attemptUpdateManyMutationInput, Quiz_attemptUncheckedUpdateManyInput>
    /**
     * Filter which Quiz_attempts to update
     */
    where?: Quiz_attemptWhereInput
    /**
     * Limit how many Quiz_attempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz_attempt upsert
   */
  export type Quiz_attemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz_attempt to update in case it exists.
     */
    where: Quiz_attemptWhereUniqueInput
    /**
     * In case the Quiz_attempt found by the `where` argument doesn't exist, create a new Quiz_attempt with this data.
     */
    create: XOR<Quiz_attemptCreateInput, Quiz_attemptUncheckedCreateInput>
    /**
     * In case the Quiz_attempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Quiz_attemptUpdateInput, Quiz_attemptUncheckedUpdateInput>
  }

  /**
   * Quiz_attempt delete
   */
  export type Quiz_attemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
    /**
     * Filter which Quiz_attempt to delete.
     */
    where: Quiz_attemptWhereUniqueInput
  }

  /**
   * Quiz_attempt deleteMany
   */
  export type Quiz_attemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz_attempts to delete
     */
    where?: Quiz_attemptWhereInput
    /**
     * Limit how many Quiz_attempts to delete.
     */
    limit?: number
  }

  /**
   * Quiz_attempt.question_responses
   */
  export type Quiz_attempt$question_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    where?: Question_responseWhereInput
    orderBy?: Question_responseOrderByWithRelationInput | Question_responseOrderByWithRelationInput[]
    cursor?: Question_responseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Question_responseScalarFieldEnum | Question_responseScalarFieldEnum[]
  }

  /**
   * Quiz_attempt without action
   */
  export type Quiz_attemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_attempt
     */
    select?: Quiz_attemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_attempt
     */
    omit?: Quiz_attemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_attemptInclude<ExtArgs> | null
  }


  /**
   * Model Question_response
   */

  export type AggregateQuestion_response = {
    _count: Question_responseCountAggregateOutputType | null
    _avg: Question_responseAvgAggregateOutputType | null
    _sum: Question_responseSumAggregateOutputType | null
    _min: Question_responseMinAggregateOutputType | null
    _max: Question_responseMaxAggregateOutputType | null
  }

  export type Question_responseAvgAggregateOutputType = {
    id: number | null
    question_id: number | null
    marked_alternative_id: number | null
    quiz_attempt_id: number | null
    points_earned: Decimal | null
  }

  export type Question_responseSumAggregateOutputType = {
    id: number | null
    question_id: number | null
    marked_alternative_id: number | null
    quiz_attempt_id: number | null
    points_earned: Decimal | null
  }

  export type Question_responseMinAggregateOutputType = {
    id: number | null
    question_id: number | null
    marked_alternative_id: number | null
    quiz_attempt_id: number | null
    is_correct: boolean | null
    points_earned: Decimal | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type Question_responseMaxAggregateOutputType = {
    id: number | null
    question_id: number | null
    marked_alternative_id: number | null
    quiz_attempt_id: number | null
    is_correct: boolean | null
    points_earned: Decimal | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type Question_responseCountAggregateOutputType = {
    id: number
    question_id: number
    marked_alternative_id: number
    quiz_attempt_id: number
    is_correct: number
    points_earned: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type Question_responseAvgAggregateInputType = {
    id?: true
    question_id?: true
    marked_alternative_id?: true
    quiz_attempt_id?: true
    points_earned?: true
  }

  export type Question_responseSumAggregateInputType = {
    id?: true
    question_id?: true
    marked_alternative_id?: true
    quiz_attempt_id?: true
    points_earned?: true
  }

  export type Question_responseMinAggregateInputType = {
    id?: true
    question_id?: true
    marked_alternative_id?: true
    quiz_attempt_id?: true
    is_correct?: true
    points_earned?: true
    created_at?: true
    modified_at?: true
  }

  export type Question_responseMaxAggregateInputType = {
    id?: true
    question_id?: true
    marked_alternative_id?: true
    quiz_attempt_id?: true
    is_correct?: true
    points_earned?: true
    created_at?: true
    modified_at?: true
  }

  export type Question_responseCountAggregateInputType = {
    id?: true
    question_id?: true
    marked_alternative_id?: true
    quiz_attempt_id?: true
    is_correct?: true
    points_earned?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type Question_responseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question_response to aggregate.
     */
    where?: Question_responseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Question_responses to fetch.
     */
    orderBy?: Question_responseOrderByWithRelationInput | Question_responseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Question_responseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Question_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Question_responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Question_responses
    **/
    _count?: true | Question_responseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Question_responseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Question_responseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Question_responseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Question_responseMaxAggregateInputType
  }

  export type GetQuestion_responseAggregateType<T extends Question_responseAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion_response]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion_response[P]>
      : GetScalarType<T[P], AggregateQuestion_response[P]>
  }




  export type Question_responseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Question_responseWhereInput
    orderBy?: Question_responseOrderByWithAggregationInput | Question_responseOrderByWithAggregationInput[]
    by: Question_responseScalarFieldEnum[] | Question_responseScalarFieldEnum
    having?: Question_responseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Question_responseCountAggregateInputType | true
    _avg?: Question_responseAvgAggregateInputType
    _sum?: Question_responseSumAggregateInputType
    _min?: Question_responseMinAggregateInputType
    _max?: Question_responseMaxAggregateInputType
  }

  export type Question_responseGroupByOutputType = {
    id: number
    question_id: number
    marked_alternative_id: number
    quiz_attempt_id: number
    is_correct: boolean
    points_earned: Decimal
    created_at: Date
    modified_at: Date
    _count: Question_responseCountAggregateOutputType | null
    _avg: Question_responseAvgAggregateOutputType | null
    _sum: Question_responseSumAggregateOutputType | null
    _min: Question_responseMinAggregateOutputType | null
    _max: Question_responseMaxAggregateOutputType | null
  }

  type GetQuestion_responseGroupByPayload<T extends Question_responseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Question_responseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Question_responseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Question_responseGroupByOutputType[P]>
            : GetScalarType<T[P], Question_responseGroupByOutputType[P]>
        }
      >
    >


  export type Question_responseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    marked_alternative_id?: boolean
    quiz_attempt_id?: boolean
    is_correct?: boolean
    points_earned?: boolean
    created_at?: boolean
    modified_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    marked_alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    quiz_attempt?: boolean | Quiz_attemptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_response"]>

  export type Question_responseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    marked_alternative_id?: boolean
    quiz_attempt_id?: boolean
    is_correct?: boolean
    points_earned?: boolean
    created_at?: boolean
    modified_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    marked_alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    quiz_attempt?: boolean | Quiz_attemptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_response"]>

  export type Question_responseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    marked_alternative_id?: boolean
    quiz_attempt_id?: boolean
    is_correct?: boolean
    points_earned?: boolean
    created_at?: boolean
    modified_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    marked_alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    quiz_attempt?: boolean | Quiz_attemptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question_response"]>

  export type Question_responseSelectScalar = {
    id?: boolean
    question_id?: boolean
    marked_alternative_id?: boolean
    quiz_attempt_id?: boolean
    is_correct?: boolean
    points_earned?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type Question_responseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_id" | "marked_alternative_id" | "quiz_attempt_id" | "is_correct" | "points_earned" | "created_at" | "modified_at", ExtArgs["result"]["question_response"]>
  export type Question_responseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    marked_alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    quiz_attempt?: boolean | Quiz_attemptDefaultArgs<ExtArgs>
  }
  export type Question_responseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    marked_alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    quiz_attempt?: boolean | Quiz_attemptDefaultArgs<ExtArgs>
  }
  export type Question_responseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    marked_alternative?: boolean | AlternativeDefaultArgs<ExtArgs>
    quiz_attempt?: boolean | Quiz_attemptDefaultArgs<ExtArgs>
  }

  export type $Question_responsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question_response"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      marked_alternative: Prisma.$AlternativePayload<ExtArgs>
      quiz_attempt: Prisma.$Quiz_attemptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question_id: number
      marked_alternative_id: number
      quiz_attempt_id: number
      is_correct: boolean
      points_earned: Prisma.Decimal
      created_at: Date
      modified_at: Date
    }, ExtArgs["result"]["question_response"]>
    composites: {}
  }

  type Question_responseGetPayload<S extends boolean | null | undefined | Question_responseDefaultArgs> = $Result.GetResult<Prisma.$Question_responsePayload, S>

  type Question_responseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Question_responseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Question_responseCountAggregateInputType | true
    }

  export interface Question_responseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question_response'], meta: { name: 'Question_response' } }
    /**
     * Find zero or one Question_response that matches the filter.
     * @param {Question_responseFindUniqueArgs} args - Arguments to find a Question_response
     * @example
     * // Get one Question_response
     * const question_response = await prisma.question_response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Question_responseFindUniqueArgs>(args: SelectSubset<T, Question_responseFindUniqueArgs<ExtArgs>>): Prisma__Question_responseClient<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question_response that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Question_responseFindUniqueOrThrowArgs} args - Arguments to find a Question_response
     * @example
     * // Get one Question_response
     * const question_response = await prisma.question_response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Question_responseFindUniqueOrThrowArgs>(args: SelectSubset<T, Question_responseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Question_responseClient<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_responseFindFirstArgs} args - Arguments to find a Question_response
     * @example
     * // Get one Question_response
     * const question_response = await prisma.question_response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Question_responseFindFirstArgs>(args?: SelectSubset<T, Question_responseFindFirstArgs<ExtArgs>>): Prisma__Question_responseClient<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question_response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_responseFindFirstOrThrowArgs} args - Arguments to find a Question_response
     * @example
     * // Get one Question_response
     * const question_response = await prisma.question_response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Question_responseFindFirstOrThrowArgs>(args?: SelectSubset<T, Question_responseFindFirstOrThrowArgs<ExtArgs>>): Prisma__Question_responseClient<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Question_responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_responseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Question_responses
     * const question_responses = await prisma.question_response.findMany()
     * 
     * // Get first 10 Question_responses
     * const question_responses = await prisma.question_response.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const question_responseWithIdOnly = await prisma.question_response.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Question_responseFindManyArgs>(args?: SelectSubset<T, Question_responseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question_response.
     * @param {Question_responseCreateArgs} args - Arguments to create a Question_response.
     * @example
     * // Create one Question_response
     * const Question_response = await prisma.question_response.create({
     *   data: {
     *     // ... data to create a Question_response
     *   }
     * })
     * 
     */
    create<T extends Question_responseCreateArgs>(args: SelectSubset<T, Question_responseCreateArgs<ExtArgs>>): Prisma__Question_responseClient<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Question_responses.
     * @param {Question_responseCreateManyArgs} args - Arguments to create many Question_responses.
     * @example
     * // Create many Question_responses
     * const question_response = await prisma.question_response.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Question_responseCreateManyArgs>(args?: SelectSubset<T, Question_responseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Question_responses and returns the data saved in the database.
     * @param {Question_responseCreateManyAndReturnArgs} args - Arguments to create many Question_responses.
     * @example
     * // Create many Question_responses
     * const question_response = await prisma.question_response.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Question_responses and only return the `id`
     * const question_responseWithIdOnly = await prisma.question_response.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Question_responseCreateManyAndReturnArgs>(args?: SelectSubset<T, Question_responseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question_response.
     * @param {Question_responseDeleteArgs} args - Arguments to delete one Question_response.
     * @example
     * // Delete one Question_response
     * const Question_response = await prisma.question_response.delete({
     *   where: {
     *     // ... filter to delete one Question_response
     *   }
     * })
     * 
     */
    delete<T extends Question_responseDeleteArgs>(args: SelectSubset<T, Question_responseDeleteArgs<ExtArgs>>): Prisma__Question_responseClient<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question_response.
     * @param {Question_responseUpdateArgs} args - Arguments to update one Question_response.
     * @example
     * // Update one Question_response
     * const question_response = await prisma.question_response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Question_responseUpdateArgs>(args: SelectSubset<T, Question_responseUpdateArgs<ExtArgs>>): Prisma__Question_responseClient<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Question_responses.
     * @param {Question_responseDeleteManyArgs} args - Arguments to filter Question_responses to delete.
     * @example
     * // Delete a few Question_responses
     * const { count } = await prisma.question_response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Question_responseDeleteManyArgs>(args?: SelectSubset<T, Question_responseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_responseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Question_responses
     * const question_response = await prisma.question_response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Question_responseUpdateManyArgs>(args: SelectSubset<T, Question_responseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Question_responses and returns the data updated in the database.
     * @param {Question_responseUpdateManyAndReturnArgs} args - Arguments to update many Question_responses.
     * @example
     * // Update many Question_responses
     * const question_response = await prisma.question_response.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Question_responses and only return the `id`
     * const question_responseWithIdOnly = await prisma.question_response.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Question_responseUpdateManyAndReturnArgs>(args: SelectSubset<T, Question_responseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question_response.
     * @param {Question_responseUpsertArgs} args - Arguments to update or create a Question_response.
     * @example
     * // Update or create a Question_response
     * const question_response = await prisma.question_response.upsert({
     *   create: {
     *     // ... data to create a Question_response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question_response we want to update
     *   }
     * })
     */
    upsert<T extends Question_responseUpsertArgs>(args: SelectSubset<T, Question_responseUpsertArgs<ExtArgs>>): Prisma__Question_responseClient<$Result.GetResult<Prisma.$Question_responsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Question_responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_responseCountArgs} args - Arguments to filter Question_responses to count.
     * @example
     * // Count the number of Question_responses
     * const count = await prisma.question_response.count({
     *   where: {
     *     // ... the filter for the Question_responses we want to count
     *   }
     * })
    **/
    count<T extends Question_responseCountArgs>(
      args?: Subset<T, Question_responseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Question_responseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question_response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_responseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Question_responseAggregateArgs>(args: Subset<T, Question_responseAggregateArgs>): Prisma.PrismaPromise<GetQuestion_responseAggregateType<T>>

    /**
     * Group by Question_response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Question_responseGroupByArgs} args - Group by arguments.
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
      T extends Question_responseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Question_responseGroupByArgs['orderBy'] }
        : { orderBy?: Question_responseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Question_responseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestion_responseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question_response model
   */
  readonly fields: Question_responseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question_response.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Question_responseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    marked_alternative<T extends AlternativeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlternativeDefaultArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz_attempt<T extends Quiz_attemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Quiz_attemptDefaultArgs<ExtArgs>>): Prisma__Quiz_attemptClient<$Result.GetResult<Prisma.$Quiz_attemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question_response model
   */
  interface Question_responseFieldRefs {
    readonly id: FieldRef<"Question_response", 'Int'>
    readonly question_id: FieldRef<"Question_response", 'Int'>
    readonly marked_alternative_id: FieldRef<"Question_response", 'Int'>
    readonly quiz_attempt_id: FieldRef<"Question_response", 'Int'>
    readonly is_correct: FieldRef<"Question_response", 'Boolean'>
    readonly points_earned: FieldRef<"Question_response", 'Decimal'>
    readonly created_at: FieldRef<"Question_response", 'DateTime'>
    readonly modified_at: FieldRef<"Question_response", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question_response findUnique
   */
  export type Question_responseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    /**
     * Filter, which Question_response to fetch.
     */
    where: Question_responseWhereUniqueInput
  }

  /**
   * Question_response findUniqueOrThrow
   */
  export type Question_responseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    /**
     * Filter, which Question_response to fetch.
     */
    where: Question_responseWhereUniqueInput
  }

  /**
   * Question_response findFirst
   */
  export type Question_responseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    /**
     * Filter, which Question_response to fetch.
     */
    where?: Question_responseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Question_responses to fetch.
     */
    orderBy?: Question_responseOrderByWithRelationInput | Question_responseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Question_responses.
     */
    cursor?: Question_responseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Question_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Question_responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Question_responses.
     */
    distinct?: Question_responseScalarFieldEnum | Question_responseScalarFieldEnum[]
  }

  /**
   * Question_response findFirstOrThrow
   */
  export type Question_responseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    /**
     * Filter, which Question_response to fetch.
     */
    where?: Question_responseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Question_responses to fetch.
     */
    orderBy?: Question_responseOrderByWithRelationInput | Question_responseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Question_responses.
     */
    cursor?: Question_responseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Question_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Question_responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Question_responses.
     */
    distinct?: Question_responseScalarFieldEnum | Question_responseScalarFieldEnum[]
  }

  /**
   * Question_response findMany
   */
  export type Question_responseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    /**
     * Filter, which Question_responses to fetch.
     */
    where?: Question_responseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Question_responses to fetch.
     */
    orderBy?: Question_responseOrderByWithRelationInput | Question_responseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Question_responses.
     */
    cursor?: Question_responseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Question_responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Question_responses.
     */
    skip?: number
    distinct?: Question_responseScalarFieldEnum | Question_responseScalarFieldEnum[]
  }

  /**
   * Question_response create
   */
  export type Question_responseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    /**
     * The data needed to create a Question_response.
     */
    data: XOR<Question_responseCreateInput, Question_responseUncheckedCreateInput>
  }

  /**
   * Question_response createMany
   */
  export type Question_responseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Question_responses.
     */
    data: Question_responseCreateManyInput | Question_responseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question_response createManyAndReturn
   */
  export type Question_responseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * The data used to create many Question_responses.
     */
    data: Question_responseCreateManyInput | Question_responseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question_response update
   */
  export type Question_responseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    /**
     * The data needed to update a Question_response.
     */
    data: XOR<Question_responseUpdateInput, Question_responseUncheckedUpdateInput>
    /**
     * Choose, which Question_response to update.
     */
    where: Question_responseWhereUniqueInput
  }

  /**
   * Question_response updateMany
   */
  export type Question_responseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Question_responses.
     */
    data: XOR<Question_responseUpdateManyMutationInput, Question_responseUncheckedUpdateManyInput>
    /**
     * Filter which Question_responses to update
     */
    where?: Question_responseWhereInput
    /**
     * Limit how many Question_responses to update.
     */
    limit?: number
  }

  /**
   * Question_response updateManyAndReturn
   */
  export type Question_responseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * The data used to update Question_responses.
     */
    data: XOR<Question_responseUpdateManyMutationInput, Question_responseUncheckedUpdateManyInput>
    /**
     * Filter which Question_responses to update
     */
    where?: Question_responseWhereInput
    /**
     * Limit how many Question_responses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question_response upsert
   */
  export type Question_responseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    /**
     * The filter to search for the Question_response to update in case it exists.
     */
    where: Question_responseWhereUniqueInput
    /**
     * In case the Question_response found by the `where` argument doesn't exist, create a new Question_response with this data.
     */
    create: XOR<Question_responseCreateInput, Question_responseUncheckedCreateInput>
    /**
     * In case the Question_response was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Question_responseUpdateInput, Question_responseUncheckedUpdateInput>
  }

  /**
   * Question_response delete
   */
  export type Question_responseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
    /**
     * Filter which Question_response to delete.
     */
    where: Question_responseWhereUniqueInput
  }

  /**
   * Question_response deleteMany
   */
  export type Question_responseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question_responses to delete
     */
    where?: Question_responseWhereInput
    /**
     * Limit how many Question_responses to delete.
     */
    limit?: number
  }

  /**
   * Question_response without action
   */
  export type Question_responseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question_response
     */
    select?: Question_responseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question_response
     */
    omit?: Question_responseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Question_responseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    birth_date: 'birth_date',
    cpf: 'cpf',
    created_at: 'created_at',
    modified_at: 'modified_at',
    role: 'role',
    hashed_password: 'hashed_password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const Relationship_teacher_subjectScalarFieldEnum: {
    id: 'id',
    subject_id: 'subject_id',
    teacher_id: 'teacher_id'
  };

  export type Relationship_teacher_subjectScalarFieldEnum = (typeof Relationship_teacher_subjectScalarFieldEnum)[keyof typeof Relationship_teacher_subjectScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shift: 'shift',
    course: 'course',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    enrollment: 'enrollment',
    user_id: 'user_id',
    class_id: 'class_id',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const Relationship_teacher_subject_classScalarFieldEnum: {
    id: 'id',
    class_id: 'class_id',
    teacher_subject_id: 'teacher_subject_id'
  };

  export type Relationship_teacher_subject_classScalarFieldEnum = (typeof Relationship_teacher_subject_classScalarFieldEnum)[keyof typeof Relationship_teacher_subject_classScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon',
    description: 'description',
    duration_minutes: 'duration_minutes',
    max_points: 'max_points',
    max_attempt: 'max_attempt',
    visibility: 'visibility',
    created_at: 'created_at',
    modified_at: 'modified_at',
    teacher_subject_class_id: 'teacher_subject_class_id'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    statement: 'statement',
    points: 'points',
    quiz_id: 'quiz_id',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AlternativeScalarFieldEnum: {
    id: 'id',
    question_id: 'question_id',
    response: 'response',
    correct_alternative: 'correct_alternative',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type AlternativeScalarFieldEnum = (typeof AlternativeScalarFieldEnum)[keyof typeof AlternativeScalarFieldEnum]


  export const Question_imagesScalarFieldEnum: {
    id: 'id',
    image_path: 'image_path',
    alt_text: 'alt_text',
    question_id: 'question_id',
    created_at: 'created_at'
  };

  export type Question_imagesScalarFieldEnum = (typeof Question_imagesScalarFieldEnum)[keyof typeof Question_imagesScalarFieldEnum]


  export const Quiz_attemptScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    quiz_id: 'quiz_id',
    started_at: 'started_at',
    finished_at: 'finished_at',
    status: 'status',
    total_score: 'total_score',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type Quiz_attemptScalarFieldEnum = (typeof Quiz_attemptScalarFieldEnum)[keyof typeof Quiz_attemptScalarFieldEnum]


  export const Question_responseScalarFieldEnum: {
    id: 'id',
    question_id: 'question_id',
    marked_alternative_id: 'marked_alternative_id',
    quiz_attempt_id: 'quiz_attempt_id',
    is_correct: 'is_correct',
    points_earned: 'points_earned',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type Question_responseScalarFieldEnum = (typeof Question_responseScalarFieldEnum)[keyof typeof Question_responseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Shift'
   */
  export type EnumShiftFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Shift'>
    


  /**
   * Reference to a field of type 'Shift[]'
   */
  export type ListEnumShiftFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Shift[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'QuizVisibility'
   */
  export type EnumQuizVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizVisibility'>
    


  /**
   * Reference to a field of type 'QuizVisibility[]'
   */
  export type ListEnumQuizVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizVisibility[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AttemptStatus'
   */
  export type EnumAttemptStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttemptStatus'>
    


  /**
   * Reference to a field of type 'AttemptStatus[]'
   */
  export type ListEnumAttemptStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttemptStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    birth_date?: DateTimeFilter<"User"> | Date | string
    cpf?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    modified_at?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    hashed_password?: StringFilter<"User"> | string
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    birth_date?: SortOrder
    cpf?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    role?: SortOrder
    hashed_password?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    birth_date?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    modified_at?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    hashed_password?: StringFilter<"User"> | string
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }, "id" | "id" | "email" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    birth_date?: SortOrder
    cpf?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    role?: SortOrder
    hashed_password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    birth_date?: DateTimeWithAggregatesFilter<"User"> | Date | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    hashed_password?: StringWithAggregatesFilter<"User"> | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    user_id?: IntFilter<"Teacher"> | number
    created_at?: DateTimeFilter<"Teacher"> | Date | string
    modified_at?: DateTimeFilter<"Teacher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    teacher_subjects?: Relationship_teacher_subjectListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    user?: UserOrderByWithRelationInput
    teacher_subjects?: Relationship_teacher_subjectOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    created_at?: DateTimeFilter<"Teacher"> | Date | string
    modified_at?: DateTimeFilter<"Teacher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    teacher_subjects?: Relationship_teacher_subjectListRelationFilter
  }, "id" | "id" | "user_id">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    user_id?: IntWithAggregatesFilter<"Teacher"> | number
    created_at?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    created_at?: DateTimeFilter<"Subject"> | Date | string
    modified_at?: DateTimeFilter<"Subject"> | Date | string
    teacher_subjects?: Relationship_teacher_subjectListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    teacher_subjects?: Relationship_teacher_subjectOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    created_at?: DateTimeFilter<"Subject"> | Date | string
    modified_at?: DateTimeFilter<"Subject"> | Date | string
    teacher_subjects?: Relationship_teacher_subjectListRelationFilter
  }, "id" | "id" | "name">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    name?: StringWithAggregatesFilter<"Subject"> | string
    created_at?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type Relationship_teacher_subjectWhereInput = {
    AND?: Relationship_teacher_subjectWhereInput | Relationship_teacher_subjectWhereInput[]
    OR?: Relationship_teacher_subjectWhereInput[]
    NOT?: Relationship_teacher_subjectWhereInput | Relationship_teacher_subjectWhereInput[]
    id?: IntFilter<"Relationship_teacher_subject"> | number
    subject_id?: IntFilter<"Relationship_teacher_subject"> | number
    teacher_id?: IntFilter<"Relationship_teacher_subject"> | number
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    teacher_subject_classes?: Relationship_teacher_subject_classListRelationFilter
  }

  export type Relationship_teacher_subjectOrderByWithRelationInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
    teacher_subject_classes?: Relationship_teacher_subject_classOrderByRelationAggregateInput
  }

  export type Relationship_teacher_subjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teacher_id_subject_id?: Relationship_teacher_subjectTeacher_idSubject_idCompoundUniqueInput
    AND?: Relationship_teacher_subjectWhereInput | Relationship_teacher_subjectWhereInput[]
    OR?: Relationship_teacher_subjectWhereInput[]
    NOT?: Relationship_teacher_subjectWhereInput | Relationship_teacher_subjectWhereInput[]
    subject_id?: IntFilter<"Relationship_teacher_subject"> | number
    teacher_id?: IntFilter<"Relationship_teacher_subject"> | number
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    teacher_subject_classes?: Relationship_teacher_subject_classListRelationFilter
  }, "id" | "id" | "teacher_id_subject_id">

  export type Relationship_teacher_subjectOrderByWithAggregationInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    _count?: Relationship_teacher_subjectCountOrderByAggregateInput
    _avg?: Relationship_teacher_subjectAvgOrderByAggregateInput
    _max?: Relationship_teacher_subjectMaxOrderByAggregateInput
    _min?: Relationship_teacher_subjectMinOrderByAggregateInput
    _sum?: Relationship_teacher_subjectSumOrderByAggregateInput
  }

  export type Relationship_teacher_subjectScalarWhereWithAggregatesInput = {
    AND?: Relationship_teacher_subjectScalarWhereWithAggregatesInput | Relationship_teacher_subjectScalarWhereWithAggregatesInput[]
    OR?: Relationship_teacher_subjectScalarWhereWithAggregatesInput[]
    NOT?: Relationship_teacher_subjectScalarWhereWithAggregatesInput | Relationship_teacher_subjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Relationship_teacher_subject"> | number
    subject_id?: IntWithAggregatesFilter<"Relationship_teacher_subject"> | number
    teacher_id?: IntWithAggregatesFilter<"Relationship_teacher_subject"> | number
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: IntFilter<"Class"> | number
    name?: StringFilter<"Class"> | string
    shift?: EnumShiftFilter<"Class"> | $Enums.Shift
    course?: StringFilter<"Class"> | string
    created_at?: DateTimeFilter<"Class"> | Date | string
    modified_at?: DateTimeFilter<"Class"> | Date | string
    students?: StudentListRelationFilter
    teacher_subject_classes?: Relationship_teacher_subject_classListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shift?: SortOrder
    course?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    students?: StudentOrderByRelationAggregateInput
    teacher_subject_classes?: Relationship_teacher_subject_classOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_shift_course?: ClassNameShiftCourseCompoundUniqueInput
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    shift?: EnumShiftFilter<"Class"> | $Enums.Shift
    course?: StringFilter<"Class"> | string
    created_at?: DateTimeFilter<"Class"> | Date | string
    modified_at?: DateTimeFilter<"Class"> | Date | string
    students?: StudentListRelationFilter
    teacher_subject_classes?: Relationship_teacher_subject_classListRelationFilter
  }, "id" | "id" | "name_shift_course">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shift?: SortOrder
    course?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Class"> | number
    name?: StringWithAggregatesFilter<"Class"> | string
    shift?: EnumShiftWithAggregatesFilter<"Class"> | $Enums.Shift
    course?: StringWithAggregatesFilter<"Class"> | string
    created_at?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    enrollment?: StringFilter<"Student"> | string
    user_id?: IntFilter<"Student"> | number
    class_id?: IntFilter<"Student"> | number
    created_at?: DateTimeFilter<"Student"> | Date | string
    modified_at?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    quiz_attempts?: Quiz_attemptListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    enrollment?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    user?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
    quiz_attempts?: Quiz_attemptOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    enrollment?: string
    user_id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    class_id?: IntFilter<"Student"> | number
    created_at?: DateTimeFilter<"Student"> | Date | string
    modified_at?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    quiz_attempts?: Quiz_attemptListRelationFilter
  }, "id" | "id" | "enrollment" | "user_id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    enrollment?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    enrollment?: StringWithAggregatesFilter<"Student"> | string
    user_id?: IntWithAggregatesFilter<"Student"> | number
    class_id?: IntWithAggregatesFilter<"Student"> | number
    created_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type Relationship_teacher_subject_classWhereInput = {
    AND?: Relationship_teacher_subject_classWhereInput | Relationship_teacher_subject_classWhereInput[]
    OR?: Relationship_teacher_subject_classWhereInput[]
    NOT?: Relationship_teacher_subject_classWhereInput | Relationship_teacher_subject_classWhereInput[]
    id?: IntFilter<"Relationship_teacher_subject_class"> | number
    class_id?: IntFilter<"Relationship_teacher_subject_class"> | number
    teacher_subject_id?: IntFilter<"Relationship_teacher_subject_class"> | number
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    teacher_subject?: XOR<Relationship_teacher_subjectScalarRelationFilter, Relationship_teacher_subjectWhereInput>
    quizzes?: QuizListRelationFilter
  }

  export type Relationship_teacher_subject_classOrderByWithRelationInput = {
    id?: SortOrder
    class_id?: SortOrder
    teacher_subject_id?: SortOrder
    class?: ClassOrderByWithRelationInput
    teacher_subject?: Relationship_teacher_subjectOrderByWithRelationInput
    quizzes?: QuizOrderByRelationAggregateInput
  }

  export type Relationship_teacher_subject_classWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teacher_subject_id_class_id?: Relationship_teacher_subject_classTeacher_subject_idClass_idCompoundUniqueInput
    AND?: Relationship_teacher_subject_classWhereInput | Relationship_teacher_subject_classWhereInput[]
    OR?: Relationship_teacher_subject_classWhereInput[]
    NOT?: Relationship_teacher_subject_classWhereInput | Relationship_teacher_subject_classWhereInput[]
    class_id?: IntFilter<"Relationship_teacher_subject_class"> | number
    teacher_subject_id?: IntFilter<"Relationship_teacher_subject_class"> | number
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    teacher_subject?: XOR<Relationship_teacher_subjectScalarRelationFilter, Relationship_teacher_subjectWhereInput>
    quizzes?: QuizListRelationFilter
  }, "id" | "id" | "teacher_subject_id_class_id">

  export type Relationship_teacher_subject_classOrderByWithAggregationInput = {
    id?: SortOrder
    class_id?: SortOrder
    teacher_subject_id?: SortOrder
    _count?: Relationship_teacher_subject_classCountOrderByAggregateInput
    _avg?: Relationship_teacher_subject_classAvgOrderByAggregateInput
    _max?: Relationship_teacher_subject_classMaxOrderByAggregateInput
    _min?: Relationship_teacher_subject_classMinOrderByAggregateInput
    _sum?: Relationship_teacher_subject_classSumOrderByAggregateInput
  }

  export type Relationship_teacher_subject_classScalarWhereWithAggregatesInput = {
    AND?: Relationship_teacher_subject_classScalarWhereWithAggregatesInput | Relationship_teacher_subject_classScalarWhereWithAggregatesInput[]
    OR?: Relationship_teacher_subject_classScalarWhereWithAggregatesInput[]
    NOT?: Relationship_teacher_subject_classScalarWhereWithAggregatesInput | Relationship_teacher_subject_classScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Relationship_teacher_subject_class"> | number
    class_id?: IntWithAggregatesFilter<"Relationship_teacher_subject_class"> | number
    teacher_subject_id?: IntWithAggregatesFilter<"Relationship_teacher_subject_class"> | number
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: IntFilter<"Quiz"> | number
    title?: StringFilter<"Quiz"> | string
    icon?: StringFilter<"Quiz"> | string
    description?: StringFilter<"Quiz"> | string
    duration_minutes?: IntNullableFilter<"Quiz"> | number | null
    max_points?: DecimalFilter<"Quiz"> | Decimal | DecimalJsLike | number | string
    max_attempt?: IntNullableFilter<"Quiz"> | number | null
    visibility?: EnumQuizVisibilityFilter<"Quiz"> | $Enums.QuizVisibility
    created_at?: DateTimeFilter<"Quiz"> | Date | string
    modified_at?: DateTimeFilter<"Quiz"> | Date | string
    teacher_subject_class_id?: IntFilter<"Quiz"> | number
    teacher_subject_class?: XOR<Relationship_teacher_subject_classScalarRelationFilter, Relationship_teacher_subject_classWhereInput>
    questions?: QuestionListRelationFilter
    quiz_attempts?: Quiz_attemptListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrderInput | SortOrder
    max_points?: SortOrder
    max_attempt?: SortOrderInput | SortOrder
    visibility?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    teacher_subject_class_id?: SortOrder
    teacher_subject_class?: Relationship_teacher_subject_classOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    quiz_attempts?: Quiz_attemptOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    title?: StringFilter<"Quiz"> | string
    icon?: StringFilter<"Quiz"> | string
    description?: StringFilter<"Quiz"> | string
    duration_minutes?: IntNullableFilter<"Quiz"> | number | null
    max_points?: DecimalFilter<"Quiz"> | Decimal | DecimalJsLike | number | string
    max_attempt?: IntNullableFilter<"Quiz"> | number | null
    visibility?: EnumQuizVisibilityFilter<"Quiz"> | $Enums.QuizVisibility
    created_at?: DateTimeFilter<"Quiz"> | Date | string
    modified_at?: DateTimeFilter<"Quiz"> | Date | string
    teacher_subject_class_id?: IntFilter<"Quiz"> | number
    teacher_subject_class?: XOR<Relationship_teacher_subject_classScalarRelationFilter, Relationship_teacher_subject_classWhereInput>
    questions?: QuestionListRelationFilter
    quiz_attempts?: Quiz_attemptListRelationFilter
  }, "id" | "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrderInput | SortOrder
    max_points?: SortOrder
    max_attempt?: SortOrderInput | SortOrder
    visibility?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    teacher_subject_class_id?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quiz"> | number
    title?: StringWithAggregatesFilter<"Quiz"> | string
    icon?: StringWithAggregatesFilter<"Quiz"> | string
    description?: StringWithAggregatesFilter<"Quiz"> | string
    duration_minutes?: IntNullableWithAggregatesFilter<"Quiz"> | number | null
    max_points?: DecimalWithAggregatesFilter<"Quiz"> | Decimal | DecimalJsLike | number | string
    max_attempt?: IntNullableWithAggregatesFilter<"Quiz"> | number | null
    visibility?: EnumQuizVisibilityWithAggregatesFilter<"Quiz"> | $Enums.QuizVisibility
    created_at?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    teacher_subject_class_id?: IntWithAggregatesFilter<"Quiz"> | number
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    statement?: StringFilter<"Question"> | string
    points?: DecimalFilter<"Question"> | Decimal | DecimalJsLike | number | string
    quiz_id?: IntFilter<"Question"> | number
    created_at?: DateTimeFilter<"Question"> | Date | string
    modified_at?: DateTimeFilter<"Question"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    alternatives?: AlternativeListRelationFilter
    question_images?: Question_imagesListRelationFilter
    question_responses?: Question_responseListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    statement?: SortOrder
    points?: SortOrder
    quiz_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    alternatives?: AlternativeOrderByRelationAggregateInput
    question_images?: Question_imagesOrderByRelationAggregateInput
    question_responses?: Question_responseOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    statement?: StringFilter<"Question"> | string
    points?: DecimalFilter<"Question"> | Decimal | DecimalJsLike | number | string
    quiz_id?: IntFilter<"Question"> | number
    created_at?: DateTimeFilter<"Question"> | Date | string
    modified_at?: DateTimeFilter<"Question"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    alternatives?: AlternativeListRelationFilter
    question_images?: Question_imagesListRelationFilter
    question_responses?: Question_responseListRelationFilter
  }, "id" | "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    statement?: SortOrder
    points?: SortOrder
    quiz_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    statement?: StringWithAggregatesFilter<"Question"> | string
    points?: DecimalWithAggregatesFilter<"Question"> | Decimal | DecimalJsLike | number | string
    quiz_id?: IntWithAggregatesFilter<"Question"> | number
    created_at?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type AlternativeWhereInput = {
    AND?: AlternativeWhereInput | AlternativeWhereInput[]
    OR?: AlternativeWhereInput[]
    NOT?: AlternativeWhereInput | AlternativeWhereInput[]
    id?: IntFilter<"Alternative"> | number
    question_id?: IntFilter<"Alternative"> | number
    response?: StringFilter<"Alternative"> | string
    correct_alternative?: BoolFilter<"Alternative"> | boolean
    created_at?: DateTimeFilter<"Alternative"> | Date | string
    modified_at?: DateTimeFilter<"Alternative"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    question_responses?: Question_responseListRelationFilter
  }

  export type AlternativeOrderByWithRelationInput = {
    id?: SortOrder
    question_id?: SortOrder
    response?: SortOrder
    correct_alternative?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    question?: QuestionOrderByWithRelationInput
    question_responses?: Question_responseOrderByRelationAggregateInput
  }

  export type AlternativeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlternativeWhereInput | AlternativeWhereInput[]
    OR?: AlternativeWhereInput[]
    NOT?: AlternativeWhereInput | AlternativeWhereInput[]
    question_id?: IntFilter<"Alternative"> | number
    response?: StringFilter<"Alternative"> | string
    correct_alternative?: BoolFilter<"Alternative"> | boolean
    created_at?: DateTimeFilter<"Alternative"> | Date | string
    modified_at?: DateTimeFilter<"Alternative"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    question_responses?: Question_responseListRelationFilter
  }, "id" | "id">

  export type AlternativeOrderByWithAggregationInput = {
    id?: SortOrder
    question_id?: SortOrder
    response?: SortOrder
    correct_alternative?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: AlternativeCountOrderByAggregateInput
    _avg?: AlternativeAvgOrderByAggregateInput
    _max?: AlternativeMaxOrderByAggregateInput
    _min?: AlternativeMinOrderByAggregateInput
    _sum?: AlternativeSumOrderByAggregateInput
  }

  export type AlternativeScalarWhereWithAggregatesInput = {
    AND?: AlternativeScalarWhereWithAggregatesInput | AlternativeScalarWhereWithAggregatesInput[]
    OR?: AlternativeScalarWhereWithAggregatesInput[]
    NOT?: AlternativeScalarWhereWithAggregatesInput | AlternativeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alternative"> | number
    question_id?: IntWithAggregatesFilter<"Alternative"> | number
    response?: StringWithAggregatesFilter<"Alternative"> | string
    correct_alternative?: BoolWithAggregatesFilter<"Alternative"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Alternative"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Alternative"> | Date | string
  }

  export type Question_imagesWhereInput = {
    AND?: Question_imagesWhereInput | Question_imagesWhereInput[]
    OR?: Question_imagesWhereInput[]
    NOT?: Question_imagesWhereInput | Question_imagesWhereInput[]
    id?: IntFilter<"Question_images"> | number
    image_path?: StringFilter<"Question_images"> | string
    alt_text?: StringFilter<"Question_images"> | string
    question_id?: IntFilter<"Question_images"> | number
    created_at?: DateTimeFilter<"Question_images"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type Question_imagesOrderByWithRelationInput = {
    id?: SortOrder
    image_path?: SortOrder
    alt_text?: SortOrder
    question_id?: SortOrder
    created_at?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type Question_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Question_imagesWhereInput | Question_imagesWhereInput[]
    OR?: Question_imagesWhereInput[]
    NOT?: Question_imagesWhereInput | Question_imagesWhereInput[]
    image_path?: StringFilter<"Question_images"> | string
    alt_text?: StringFilter<"Question_images"> | string
    question_id?: IntFilter<"Question_images"> | number
    created_at?: DateTimeFilter<"Question_images"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "id">

  export type Question_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    image_path?: SortOrder
    alt_text?: SortOrder
    question_id?: SortOrder
    created_at?: SortOrder
    _count?: Question_imagesCountOrderByAggregateInput
    _avg?: Question_imagesAvgOrderByAggregateInput
    _max?: Question_imagesMaxOrderByAggregateInput
    _min?: Question_imagesMinOrderByAggregateInput
    _sum?: Question_imagesSumOrderByAggregateInput
  }

  export type Question_imagesScalarWhereWithAggregatesInput = {
    AND?: Question_imagesScalarWhereWithAggregatesInput | Question_imagesScalarWhereWithAggregatesInput[]
    OR?: Question_imagesScalarWhereWithAggregatesInput[]
    NOT?: Question_imagesScalarWhereWithAggregatesInput | Question_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question_images"> | number
    image_path?: StringWithAggregatesFilter<"Question_images"> | string
    alt_text?: StringWithAggregatesFilter<"Question_images"> | string
    question_id?: IntWithAggregatesFilter<"Question_images"> | number
    created_at?: DateTimeWithAggregatesFilter<"Question_images"> | Date | string
  }

  export type Quiz_attemptWhereInput = {
    AND?: Quiz_attemptWhereInput | Quiz_attemptWhereInput[]
    OR?: Quiz_attemptWhereInput[]
    NOT?: Quiz_attemptWhereInput | Quiz_attemptWhereInput[]
    id?: IntFilter<"Quiz_attempt"> | number
    student_id?: IntFilter<"Quiz_attempt"> | number
    quiz_id?: IntFilter<"Quiz_attempt"> | number
    started_at?: DateTimeFilter<"Quiz_attempt"> | Date | string
    finished_at?: DateTimeNullableFilter<"Quiz_attempt"> | Date | string | null
    status?: EnumAttemptStatusFilter<"Quiz_attempt"> | $Enums.AttemptStatus
    total_score?: DecimalFilter<"Quiz_attempt"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Quiz_attempt"> | Date | string
    modified_at?: DateTimeFilter<"Quiz_attempt"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    question_responses?: Question_responseListRelationFilter
  }

  export type Quiz_attemptOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    quiz_id?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    status?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    student?: StudentOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    question_responses?: Question_responseOrderByRelationAggregateInput
  }

  export type Quiz_attemptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Quiz_attemptWhereInput | Quiz_attemptWhereInput[]
    OR?: Quiz_attemptWhereInput[]
    NOT?: Quiz_attemptWhereInput | Quiz_attemptWhereInput[]
    student_id?: IntFilter<"Quiz_attempt"> | number
    quiz_id?: IntFilter<"Quiz_attempt"> | number
    started_at?: DateTimeFilter<"Quiz_attempt"> | Date | string
    finished_at?: DateTimeNullableFilter<"Quiz_attempt"> | Date | string | null
    status?: EnumAttemptStatusFilter<"Quiz_attempt"> | $Enums.AttemptStatus
    total_score?: DecimalFilter<"Quiz_attempt"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Quiz_attempt"> | Date | string
    modified_at?: DateTimeFilter<"Quiz_attempt"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    question_responses?: Question_responseListRelationFilter
  }, "id" | "id">

  export type Quiz_attemptOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    quiz_id?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    status?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: Quiz_attemptCountOrderByAggregateInput
    _avg?: Quiz_attemptAvgOrderByAggregateInput
    _max?: Quiz_attemptMaxOrderByAggregateInput
    _min?: Quiz_attemptMinOrderByAggregateInput
    _sum?: Quiz_attemptSumOrderByAggregateInput
  }

  export type Quiz_attemptScalarWhereWithAggregatesInput = {
    AND?: Quiz_attemptScalarWhereWithAggregatesInput | Quiz_attemptScalarWhereWithAggregatesInput[]
    OR?: Quiz_attemptScalarWhereWithAggregatesInput[]
    NOT?: Quiz_attemptScalarWhereWithAggregatesInput | Quiz_attemptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quiz_attempt"> | number
    student_id?: IntWithAggregatesFilter<"Quiz_attempt"> | number
    quiz_id?: IntWithAggregatesFilter<"Quiz_attempt"> | number
    started_at?: DateTimeWithAggregatesFilter<"Quiz_attempt"> | Date | string
    finished_at?: DateTimeNullableWithAggregatesFilter<"Quiz_attempt"> | Date | string | null
    status?: EnumAttemptStatusWithAggregatesFilter<"Quiz_attempt"> | $Enums.AttemptStatus
    total_score?: DecimalWithAggregatesFilter<"Quiz_attempt"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Quiz_attempt"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Quiz_attempt"> | Date | string
  }

  export type Question_responseWhereInput = {
    AND?: Question_responseWhereInput | Question_responseWhereInput[]
    OR?: Question_responseWhereInput[]
    NOT?: Question_responseWhereInput | Question_responseWhereInput[]
    id?: IntFilter<"Question_response"> | number
    question_id?: IntFilter<"Question_response"> | number
    marked_alternative_id?: IntFilter<"Question_response"> | number
    quiz_attempt_id?: IntFilter<"Question_response"> | number
    is_correct?: BoolFilter<"Question_response"> | boolean
    points_earned?: DecimalFilter<"Question_response"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Question_response"> | Date | string
    modified_at?: DateTimeFilter<"Question_response"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    marked_alternative?: XOR<AlternativeScalarRelationFilter, AlternativeWhereInput>
    quiz_attempt?: XOR<Quiz_attemptScalarRelationFilter, Quiz_attemptWhereInput>
  }

  export type Question_responseOrderByWithRelationInput = {
    id?: SortOrder
    question_id?: SortOrder
    marked_alternative_id?: SortOrder
    quiz_attempt_id?: SortOrder
    is_correct?: SortOrder
    points_earned?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    question?: QuestionOrderByWithRelationInput
    marked_alternative?: AlternativeOrderByWithRelationInput
    quiz_attempt?: Quiz_attemptOrderByWithRelationInput
  }

  export type Question_responseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Question_responseWhereInput | Question_responseWhereInput[]
    OR?: Question_responseWhereInput[]
    NOT?: Question_responseWhereInput | Question_responseWhereInput[]
    question_id?: IntFilter<"Question_response"> | number
    marked_alternative_id?: IntFilter<"Question_response"> | number
    quiz_attempt_id?: IntFilter<"Question_response"> | number
    is_correct?: BoolFilter<"Question_response"> | boolean
    points_earned?: DecimalFilter<"Question_response"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Question_response"> | Date | string
    modified_at?: DateTimeFilter<"Question_response"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    marked_alternative?: XOR<AlternativeScalarRelationFilter, AlternativeWhereInput>
    quiz_attempt?: XOR<Quiz_attemptScalarRelationFilter, Quiz_attemptWhereInput>
  }, "id" | "id">

  export type Question_responseOrderByWithAggregationInput = {
    id?: SortOrder
    question_id?: SortOrder
    marked_alternative_id?: SortOrder
    quiz_attempt_id?: SortOrder
    is_correct?: SortOrder
    points_earned?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    _count?: Question_responseCountOrderByAggregateInput
    _avg?: Question_responseAvgOrderByAggregateInput
    _max?: Question_responseMaxOrderByAggregateInput
    _min?: Question_responseMinOrderByAggregateInput
    _sum?: Question_responseSumOrderByAggregateInput
  }

  export type Question_responseScalarWhereWithAggregatesInput = {
    AND?: Question_responseScalarWhereWithAggregatesInput | Question_responseScalarWhereWithAggregatesInput[]
    OR?: Question_responseScalarWhereWithAggregatesInput[]
    NOT?: Question_responseScalarWhereWithAggregatesInput | Question_responseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question_response"> | number
    question_id?: IntWithAggregatesFilter<"Question_response"> | number
    marked_alternative_id?: IntWithAggregatesFilter<"Question_response"> | number
    quiz_attempt_id?: IntWithAggregatesFilter<"Question_response"> | number
    is_correct?: BoolWithAggregatesFilter<"Question_response"> | boolean
    points_earned?: DecimalWithAggregatesFilter<"Question_response"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Question_response"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Question_response"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    birth_date: Date | string
    cpf: string
    created_at?: Date | string
    modified_at?: Date | string
    role: $Enums.Role
    hashed_password: string
    teacher?: TeacherCreateNestedOneWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    birth_date: Date | string
    cpf: string
    created_at?: Date | string
    modified_at?: Date | string
    role: $Enums.Role
    hashed_password: string
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hashed_password?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hashed_password?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    birth_date: Date | string
    cpf: string
    created_at?: Date | string
    modified_at?: Date | string
    role: $Enums.Role
    hashed_password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hashed_password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hashed_password?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    created_at?: Date | string
    modified_at?: Date | string
    user: UserCreateNestedOneWithoutTeacherInput
    teacher_subjects?: Relationship_teacher_subjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    user_id: number
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subjects?: Relationship_teacher_subjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    teacher_subjects?: Relationship_teacher_subjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: Relationship_teacher_subjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    user_id: number
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    name: string
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subjects?: Relationship_teacher_subjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subjects?: Relationship_teacher_subjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: Relationship_teacher_subjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: Relationship_teacher_subjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Relationship_teacher_subjectCreateInput = {
    subject: SubjectCreateNestedOneWithoutTeacher_subjectsInput
    teacher: TeacherCreateNestedOneWithoutTeacher_subjectsInput
    teacher_subject_classes?: Relationship_teacher_subject_classCreateNestedManyWithoutTeacher_subjectInput
  }

  export type Relationship_teacher_subjectUncheckedCreateInput = {
    id?: number
    subject_id: number
    teacher_id: number
    teacher_subject_classes?: Relationship_teacher_subject_classUncheckedCreateNestedManyWithoutTeacher_subjectInput
  }

  export type Relationship_teacher_subjectUpdateInput = {
    subject?: SubjectUpdateOneRequiredWithoutTeacher_subjectsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutTeacher_subjectsNestedInput
    teacher_subject_classes?: Relationship_teacher_subject_classUpdateManyWithoutTeacher_subjectNestedInput
  }

  export type Relationship_teacher_subjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    teacher_subject_classes?: Relationship_teacher_subject_classUncheckedUpdateManyWithoutTeacher_subjectNestedInput
  }

  export type Relationship_teacher_subjectCreateManyInput = {
    id?: number
    subject_id: number
    teacher_id: number
  }

  export type Relationship_teacher_subjectUpdateManyMutationInput = {

  }

  export type Relationship_teacher_subjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type ClassCreateInput = {
    name: string
    shift: $Enums.Shift
    course: string
    created_at?: Date | string
    modified_at?: Date | string
    students?: StudentCreateNestedManyWithoutClassInput
    teacher_subject_classes?: Relationship_teacher_subject_classCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: number
    name: string
    shift: $Enums.Shift
    course: string
    created_at?: Date | string
    modified_at?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
    teacher_subject_classes?: Relationship_teacher_subject_classUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumShiftFieldUpdateOperationsInput | $Enums.Shift
    course?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutClassNestedInput
    teacher_subject_classes?: Relationship_teacher_subject_classUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumShiftFieldUpdateOperationsInput | $Enums.Shift
    course?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutClassNestedInput
    teacher_subject_classes?: Relationship_teacher_subject_classUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: number
    name: string
    shift: $Enums.Shift
    course: string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumShiftFieldUpdateOperationsInput | $Enums.Shift
    course?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumShiftFieldUpdateOperationsInput | $Enums.Shift
    course?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    enrollment: string
    created_at?: Date | string
    modified_at?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    class: ClassCreateNestedOneWithoutStudentsInput
    quiz_attempts?: Quiz_attemptCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    enrollment: string
    user_id: number
    class_id: number
    created_at?: Date | string
    modified_at?: Date | string
    quiz_attempts?: Quiz_attemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    enrollment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
    quiz_attempts?: Quiz_attemptUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz_attempts?: Quiz_attemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    enrollment: string
    user_id: number
    class_id: number
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    enrollment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Relationship_teacher_subject_classCreateInput = {
    class: ClassCreateNestedOneWithoutTeacher_subject_classesInput
    teacher_subject: Relationship_teacher_subjectCreateNestedOneWithoutTeacher_subject_classesInput
    quizzes?: QuizCreateNestedManyWithoutTeacher_subject_classInput
  }

  export type Relationship_teacher_subject_classUncheckedCreateInput = {
    id?: number
    class_id: number
    teacher_subject_id: number
    quizzes?: QuizUncheckedCreateNestedManyWithoutTeacher_subject_classInput
  }

  export type Relationship_teacher_subject_classUpdateInput = {
    class?: ClassUpdateOneRequiredWithoutTeacher_subject_classesNestedInput
    teacher_subject?: Relationship_teacher_subjectUpdateOneRequiredWithoutTeacher_subject_classesNestedInput
    quizzes?: QuizUpdateManyWithoutTeacher_subject_classNestedInput
  }

  export type Relationship_teacher_subject_classUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    teacher_subject_id?: IntFieldUpdateOperationsInput | number
    quizzes?: QuizUncheckedUpdateManyWithoutTeacher_subject_classNestedInput
  }

  export type Relationship_teacher_subject_classCreateManyInput = {
    id?: number
    class_id: number
    teacher_subject_id: number
  }

  export type Relationship_teacher_subject_classUpdateManyMutationInput = {

  }

  export type Relationship_teacher_subject_classUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    teacher_subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuizCreateInput = {
    title: string
    icon: string
    description: string
    duration_minutes?: number | null
    max_points?: Decimal | DecimalJsLike | number | string
    max_attempt?: number | null
    visibility?: $Enums.QuizVisibility
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subject_class: Relationship_teacher_subject_classCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    quiz_attempts?: Quiz_attemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: number
    title: string
    icon: string
    description: string
    duration_minutes?: number | null
    max_points?: Decimal | DecimalJsLike | number | string
    max_attempt?: number | null
    visibility?: $Enums.QuizVisibility
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subject_class_id: number
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    quiz_attempts?: Quiz_attemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subject_class?: Relationship_teacher_subject_classUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    quiz_attempts?: Quiz_attemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subject_class_id?: IntFieldUpdateOperationsInput | number
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    quiz_attempts?: Quiz_attemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: number
    title: string
    icon: string
    description: string
    duration_minutes?: number | null
    max_points?: Decimal | DecimalJsLike | number | string
    max_attempt?: number | null
    visibility?: $Enums.QuizVisibility
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subject_class_id: number
  }

  export type QuizUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subject_class_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateInput = {
    statement: string
    points: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
    question_images?: Question_imagesCreateNestedManyWithoutQuestionInput
    question_responses?: Question_responseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    statement: string
    points: Decimal | DecimalJsLike | number | string
    quiz_id: number
    created_at?: Date | string
    modified_at?: Date | string
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
    question_images?: Question_imagesUncheckedCreateNestedManyWithoutQuestionInput
    question_responses?: Question_responseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
    question_images?: Question_imagesUpdateManyWithoutQuestionNestedInput
    question_responses?: Question_responseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quiz_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
    question_images?: Question_imagesUncheckedUpdateManyWithoutQuestionNestedInput
    question_responses?: Question_responseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    statement: string
    points: Decimal | DecimalJsLike | number | string
    quiz_id: number
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quiz_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlternativeCreateInput = {
    response: string
    correct_alternative?: boolean
    created_at?: Date | string
    modified_at?: Date | string
    question: QuestionCreateNestedOneWithoutAlternativesInput
    question_responses?: Question_responseCreateNestedManyWithoutMarked_alternativeInput
  }

  export type AlternativeUncheckedCreateInput = {
    id?: number
    question_id: number
    response: string
    correct_alternative?: boolean
    created_at?: Date | string
    modified_at?: Date | string
    question_responses?: Question_responseUncheckedCreateNestedManyWithoutMarked_alternativeInput
  }

  export type AlternativeUpdateInput = {
    response?: StringFieldUpdateOperationsInput | string
    correct_alternative?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAlternativesNestedInput
    question_responses?: Question_responseUpdateManyWithoutMarked_alternativeNestedInput
  }

  export type AlternativeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    response?: StringFieldUpdateOperationsInput | string
    correct_alternative?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_responses?: Question_responseUncheckedUpdateManyWithoutMarked_alternativeNestedInput
  }

  export type AlternativeCreateManyInput = {
    id?: number
    question_id: number
    response: string
    correct_alternative?: boolean
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type AlternativeUpdateManyMutationInput = {
    response?: StringFieldUpdateOperationsInput | string
    correct_alternative?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlternativeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    response?: StringFieldUpdateOperationsInput | string
    correct_alternative?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_imagesCreateInput = {
    image_path: string
    alt_text: string
    created_at?: Date | string
    question: QuestionCreateNestedOneWithoutQuestion_imagesInput
  }

  export type Question_imagesUncheckedCreateInput = {
    id?: number
    image_path: string
    alt_text: string
    question_id: number
    created_at?: Date | string
  }

  export type Question_imagesUpdateInput = {
    image_path?: StringFieldUpdateOperationsInput | string
    alt_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutQuestion_imagesNestedInput
  }

  export type Question_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_path?: StringFieldUpdateOperationsInput | string
    alt_text?: StringFieldUpdateOperationsInput | string
    question_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_imagesCreateManyInput = {
    id?: number
    image_path: string
    alt_text: string
    question_id: number
    created_at?: Date | string
  }

  export type Question_imagesUpdateManyMutationInput = {
    image_path?: StringFieldUpdateOperationsInput | string
    alt_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_path?: StringFieldUpdateOperationsInput | string
    alt_text?: StringFieldUpdateOperationsInput | string
    question_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Quiz_attemptCreateInput = {
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    student: StudentCreateNestedOneWithoutQuiz_attemptsInput
    quiz: QuizCreateNestedOneWithoutQuiz_attemptsInput
    question_responses?: Question_responseCreateNestedManyWithoutQuiz_attemptInput
  }

  export type Quiz_attemptUncheckedCreateInput = {
    id?: number
    student_id: number
    quiz_id: number
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    question_responses?: Question_responseUncheckedCreateNestedManyWithoutQuiz_attemptInput
  }

  export type Quiz_attemptUpdateInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutQuiz_attemptsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutQuiz_attemptsNestedInput
    question_responses?: Question_responseUpdateManyWithoutQuiz_attemptNestedInput
  }

  export type Quiz_attemptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    quiz_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_responses?: Question_responseUncheckedUpdateManyWithoutQuiz_attemptNestedInput
  }

  export type Quiz_attemptCreateManyInput = {
    id?: number
    student_id: number
    quiz_id: number
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Quiz_attemptUpdateManyMutationInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Quiz_attemptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    quiz_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_responseCreateInput = {
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    question: QuestionCreateNestedOneWithoutQuestion_responsesInput
    marked_alternative: AlternativeCreateNestedOneWithoutQuestion_responsesInput
    quiz_attempt: Quiz_attemptCreateNestedOneWithoutQuestion_responsesInput
  }

  export type Question_responseUncheckedCreateInput = {
    id?: number
    question_id: number
    marked_alternative_id: number
    quiz_attempt_id: number
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Question_responseUpdateInput = {
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutQuestion_responsesNestedInput
    marked_alternative?: AlternativeUpdateOneRequiredWithoutQuestion_responsesNestedInput
    quiz_attempt?: Quiz_attemptUpdateOneRequiredWithoutQuestion_responsesNestedInput
  }

  export type Question_responseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    marked_alternative_id?: IntFieldUpdateOperationsInput | number
    quiz_attempt_id?: IntFieldUpdateOperationsInput | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_responseCreateManyInput = {
    id?: number
    question_id: number
    marked_alternative_id: number
    quiz_attempt_id: number
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Question_responseUpdateManyMutationInput = {
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_responseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    marked_alternative_id?: IntFieldUpdateOperationsInput | number
    quiz_attempt_id?: IntFieldUpdateOperationsInput | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    birth_date?: SortOrder
    cpf?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    role?: SortOrder
    hashed_password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    birth_date?: SortOrder
    cpf?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    role?: SortOrder
    hashed_password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    birth_date?: SortOrder
    cpf?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    role?: SortOrder
    hashed_password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Relationship_teacher_subjectListRelationFilter = {
    every?: Relationship_teacher_subjectWhereInput
    some?: Relationship_teacher_subjectWhereInput
    none?: Relationship_teacher_subjectWhereInput
  }

  export type Relationship_teacher_subjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type Relationship_teacher_subject_classListRelationFilter = {
    every?: Relationship_teacher_subject_classWhereInput
    some?: Relationship_teacher_subject_classWhereInput
    none?: Relationship_teacher_subject_classWhereInput
  }

  export type Relationship_teacher_subject_classOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Relationship_teacher_subjectTeacher_idSubject_idCompoundUniqueInput = {
    teacher_id: number
    subject_id: number
  }

  export type Relationship_teacher_subjectCountOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type Relationship_teacher_subjectAvgOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type Relationship_teacher_subjectMaxOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type Relationship_teacher_subjectMinOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type Relationship_teacher_subjectSumOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type EnumShiftFilter<$PrismaModel = never> = {
    equals?: $Enums.Shift | EnumShiftFieldRefInput<$PrismaModel>
    in?: $Enums.Shift[] | ListEnumShiftFieldRefInput<$PrismaModel>
    notIn?: $Enums.Shift[] | ListEnumShiftFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftFilter<$PrismaModel> | $Enums.Shift
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassNameShiftCourseCompoundUniqueInput = {
    name: string
    shift: $Enums.Shift
    course: string
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shift?: SortOrder
    course?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shift?: SortOrder
    course?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shift?: SortOrder
    course?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumShiftWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Shift | EnumShiftFieldRefInput<$PrismaModel>
    in?: $Enums.Shift[] | ListEnumShiftFieldRefInput<$PrismaModel>
    notIn?: $Enums.Shift[] | ListEnumShiftFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftWithAggregatesFilter<$PrismaModel> | $Enums.Shift
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftFilter<$PrismaModel>
    _max?: NestedEnumShiftFilter<$PrismaModel>
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type Quiz_attemptListRelationFilter = {
    every?: Quiz_attemptWhereInput
    some?: Quiz_attemptWhereInput
    none?: Quiz_attemptWhereInput
  }

  export type Quiz_attemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    enrollment?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    enrollment?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    enrollment?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
  }

  export type Relationship_teacher_subjectScalarRelationFilter = {
    is?: Relationship_teacher_subjectWhereInput
    isNot?: Relationship_teacher_subjectWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Relationship_teacher_subject_classTeacher_subject_idClass_idCompoundUniqueInput = {
    teacher_subject_id: number
    class_id: number
  }

  export type Relationship_teacher_subject_classCountOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    teacher_subject_id?: SortOrder
  }

  export type Relationship_teacher_subject_classAvgOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    teacher_subject_id?: SortOrder
  }

  export type Relationship_teacher_subject_classMaxOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    teacher_subject_id?: SortOrder
  }

  export type Relationship_teacher_subject_classMinOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    teacher_subject_id?: SortOrder
  }

  export type Relationship_teacher_subject_classSumOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    teacher_subject_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumQuizVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizVisibility | EnumQuizVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.QuizVisibility[] | ListEnumQuizVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizVisibility[] | ListEnumQuizVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizVisibilityFilter<$PrismaModel> | $Enums.QuizVisibility
  }

  export type Relationship_teacher_subject_classScalarRelationFilter = {
    is?: Relationship_teacher_subject_classWhereInput
    isNot?: Relationship_teacher_subject_classWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    max_points?: SortOrder
    max_attempt?: SortOrder
    visibility?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    teacher_subject_class_id?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    duration_minutes?: SortOrder
    max_points?: SortOrder
    max_attempt?: SortOrder
    teacher_subject_class_id?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    max_points?: SortOrder
    max_attempt?: SortOrder
    visibility?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    teacher_subject_class_id?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    max_points?: SortOrder
    max_attempt?: SortOrder
    visibility?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    teacher_subject_class_id?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
    duration_minutes?: SortOrder
    max_points?: SortOrder
    max_attempt?: SortOrder
    teacher_subject_class_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumQuizVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizVisibility | EnumQuizVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.QuizVisibility[] | ListEnumQuizVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizVisibility[] | ListEnumQuizVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.QuizVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizVisibilityFilter<$PrismaModel>
    _max?: NestedEnumQuizVisibilityFilter<$PrismaModel>
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type AlternativeListRelationFilter = {
    every?: AlternativeWhereInput
    some?: AlternativeWhereInput
    none?: AlternativeWhereInput
  }

  export type Question_imagesListRelationFilter = {
    every?: Question_imagesWhereInput
    some?: Question_imagesWhereInput
    none?: Question_imagesWhereInput
  }

  export type Question_responseListRelationFilter = {
    every?: Question_responseWhereInput
    some?: Question_responseWhereInput
    none?: Question_responseWhereInput
  }

  export type AlternativeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Question_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Question_responseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    statement?: SortOrder
    points?: SortOrder
    quiz_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    quiz_id?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    statement?: SortOrder
    points?: SortOrder
    quiz_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    statement?: SortOrder
    points?: SortOrder
    quiz_id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    quiz_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AlternativeCountOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    response?: SortOrder
    correct_alternative?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type AlternativeAvgOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
  }

  export type AlternativeMaxOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    response?: SortOrder
    correct_alternative?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type AlternativeMinOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    response?: SortOrder
    correct_alternative?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type AlternativeSumOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Question_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    image_path?: SortOrder
    alt_text?: SortOrder
    question_id?: SortOrder
    created_at?: SortOrder
  }

  export type Question_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
  }

  export type Question_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    image_path?: SortOrder
    alt_text?: SortOrder
    question_id?: SortOrder
    created_at?: SortOrder
  }

  export type Question_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    image_path?: SortOrder
    alt_text?: SortOrder
    question_id?: SortOrder
    created_at?: SortOrder
  }

  export type Question_imagesSumOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumAttemptStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttemptStatus | EnumAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttemptStatus[] | ListEnumAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttemptStatus[] | ListEnumAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttemptStatusFilter<$PrismaModel> | $Enums.AttemptStatus
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type Quiz_attemptCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    quiz_id?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
    status?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type Quiz_attemptAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    quiz_id?: SortOrder
    total_score?: SortOrder
  }

  export type Quiz_attemptMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    quiz_id?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
    status?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type Quiz_attemptMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    quiz_id?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
    status?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type Quiz_attemptSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    quiz_id?: SortOrder
    total_score?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAttemptStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttemptStatus | EnumAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttemptStatus[] | ListEnumAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttemptStatus[] | ListEnumAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttemptStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttemptStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttemptStatusFilter<$PrismaModel>
    _max?: NestedEnumAttemptStatusFilter<$PrismaModel>
  }

  export type AlternativeScalarRelationFilter = {
    is?: AlternativeWhereInput
    isNot?: AlternativeWhereInput
  }

  export type Quiz_attemptScalarRelationFilter = {
    is?: Quiz_attemptWhereInput
    isNot?: Quiz_attemptWhereInput
  }

  export type Question_responseCountOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    marked_alternative_id?: SortOrder
    quiz_attempt_id?: SortOrder
    is_correct?: SortOrder
    points_earned?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type Question_responseAvgOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    marked_alternative_id?: SortOrder
    quiz_attempt_id?: SortOrder
    points_earned?: SortOrder
  }

  export type Question_responseMaxOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    marked_alternative_id?: SortOrder
    quiz_attempt_id?: SortOrder
    is_correct?: SortOrder
    points_earned?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type Question_responseMinOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    marked_alternative_id?: SortOrder
    quiz_attempt_id?: SortOrder
    is_correct?: SortOrder
    points_earned?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type Question_responseSumOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    marked_alternative_id?: SortOrder
    quiz_attempt_id?: SortOrder
    points_earned?: SortOrder
  }

  export type TeacherCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type TeacherUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type TeacherUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeacherUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutTeacherInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type Relationship_teacher_subjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Relationship_teacher_subjectCreateWithoutTeacherInput, Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput> | Relationship_teacher_subjectCreateWithoutTeacherInput[] | Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Relationship_teacher_subjectCreateOrConnectWithoutTeacherInput | Relationship_teacher_subjectCreateOrConnectWithoutTeacherInput[]
    createMany?: Relationship_teacher_subjectCreateManyTeacherInputEnvelope
    connect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
  }

  export type Relationship_teacher_subjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Relationship_teacher_subjectCreateWithoutTeacherInput, Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput> | Relationship_teacher_subjectCreateWithoutTeacherInput[] | Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Relationship_teacher_subjectCreateOrConnectWithoutTeacherInput | Relationship_teacher_subjectCreateOrConnectWithoutTeacherInput[]
    createMany?: Relationship_teacher_subjectCreateManyTeacherInputEnvelope
    connect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    upsert?: UserUpsertWithoutTeacherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherInput, UserUpdateWithoutTeacherInput>, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type Relationship_teacher_subjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Relationship_teacher_subjectCreateWithoutTeacherInput, Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput> | Relationship_teacher_subjectCreateWithoutTeacherInput[] | Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Relationship_teacher_subjectCreateOrConnectWithoutTeacherInput | Relationship_teacher_subjectCreateOrConnectWithoutTeacherInput[]
    upsert?: Relationship_teacher_subjectUpsertWithWhereUniqueWithoutTeacherInput | Relationship_teacher_subjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: Relationship_teacher_subjectCreateManyTeacherInputEnvelope
    set?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    disconnect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    delete?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    connect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    update?: Relationship_teacher_subjectUpdateWithWhereUniqueWithoutTeacherInput | Relationship_teacher_subjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: Relationship_teacher_subjectUpdateManyWithWhereWithoutTeacherInput | Relationship_teacher_subjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: Relationship_teacher_subjectScalarWhereInput | Relationship_teacher_subjectScalarWhereInput[]
  }

  export type Relationship_teacher_subjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Relationship_teacher_subjectCreateWithoutTeacherInput, Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput> | Relationship_teacher_subjectCreateWithoutTeacherInput[] | Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Relationship_teacher_subjectCreateOrConnectWithoutTeacherInput | Relationship_teacher_subjectCreateOrConnectWithoutTeacherInput[]
    upsert?: Relationship_teacher_subjectUpsertWithWhereUniqueWithoutTeacherInput | Relationship_teacher_subjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: Relationship_teacher_subjectCreateManyTeacherInputEnvelope
    set?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    disconnect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    delete?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    connect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    update?: Relationship_teacher_subjectUpdateWithWhereUniqueWithoutTeacherInput | Relationship_teacher_subjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: Relationship_teacher_subjectUpdateManyWithWhereWithoutTeacherInput | Relationship_teacher_subjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: Relationship_teacher_subjectScalarWhereInput | Relationship_teacher_subjectScalarWhereInput[]
  }

  export type Relationship_teacher_subjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<Relationship_teacher_subjectCreateWithoutSubjectInput, Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput> | Relationship_teacher_subjectCreateWithoutSubjectInput[] | Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: Relationship_teacher_subjectCreateOrConnectWithoutSubjectInput | Relationship_teacher_subjectCreateOrConnectWithoutSubjectInput[]
    createMany?: Relationship_teacher_subjectCreateManySubjectInputEnvelope
    connect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
  }

  export type Relationship_teacher_subjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<Relationship_teacher_subjectCreateWithoutSubjectInput, Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput> | Relationship_teacher_subjectCreateWithoutSubjectInput[] | Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: Relationship_teacher_subjectCreateOrConnectWithoutSubjectInput | Relationship_teacher_subjectCreateOrConnectWithoutSubjectInput[]
    createMany?: Relationship_teacher_subjectCreateManySubjectInputEnvelope
    connect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
  }

  export type Relationship_teacher_subjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<Relationship_teacher_subjectCreateWithoutSubjectInput, Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput> | Relationship_teacher_subjectCreateWithoutSubjectInput[] | Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: Relationship_teacher_subjectCreateOrConnectWithoutSubjectInput | Relationship_teacher_subjectCreateOrConnectWithoutSubjectInput[]
    upsert?: Relationship_teacher_subjectUpsertWithWhereUniqueWithoutSubjectInput | Relationship_teacher_subjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: Relationship_teacher_subjectCreateManySubjectInputEnvelope
    set?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    disconnect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    delete?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    connect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    update?: Relationship_teacher_subjectUpdateWithWhereUniqueWithoutSubjectInput | Relationship_teacher_subjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: Relationship_teacher_subjectUpdateManyWithWhereWithoutSubjectInput | Relationship_teacher_subjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: Relationship_teacher_subjectScalarWhereInput | Relationship_teacher_subjectScalarWhereInput[]
  }

  export type Relationship_teacher_subjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<Relationship_teacher_subjectCreateWithoutSubjectInput, Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput> | Relationship_teacher_subjectCreateWithoutSubjectInput[] | Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: Relationship_teacher_subjectCreateOrConnectWithoutSubjectInput | Relationship_teacher_subjectCreateOrConnectWithoutSubjectInput[]
    upsert?: Relationship_teacher_subjectUpsertWithWhereUniqueWithoutSubjectInput | Relationship_teacher_subjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: Relationship_teacher_subjectCreateManySubjectInputEnvelope
    set?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    disconnect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    delete?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    connect?: Relationship_teacher_subjectWhereUniqueInput | Relationship_teacher_subjectWhereUniqueInput[]
    update?: Relationship_teacher_subjectUpdateWithWhereUniqueWithoutSubjectInput | Relationship_teacher_subjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: Relationship_teacher_subjectUpdateManyWithWhereWithoutSubjectInput | Relationship_teacher_subjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: Relationship_teacher_subjectScalarWhereInput | Relationship_teacher_subjectScalarWhereInput[]
  }

  export type SubjectCreateNestedOneWithoutTeacher_subjectsInput = {
    create?: XOR<SubjectCreateWithoutTeacher_subjectsInput, SubjectUncheckedCreateWithoutTeacher_subjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacher_subjectsInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutTeacher_subjectsInput = {
    create?: XOR<TeacherCreateWithoutTeacher_subjectsInput, TeacherUncheckedCreateWithoutTeacher_subjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutTeacher_subjectsInput
    connect?: TeacherWhereUniqueInput
  }

  export type Relationship_teacher_subject_classCreateNestedManyWithoutTeacher_subjectInput = {
    create?: XOR<Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput, Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput> | Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput[] | Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput[]
    connectOrCreate?: Relationship_teacher_subject_classCreateOrConnectWithoutTeacher_subjectInput | Relationship_teacher_subject_classCreateOrConnectWithoutTeacher_subjectInput[]
    createMany?: Relationship_teacher_subject_classCreateManyTeacher_subjectInputEnvelope
    connect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
  }

  export type Relationship_teacher_subject_classUncheckedCreateNestedManyWithoutTeacher_subjectInput = {
    create?: XOR<Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput, Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput> | Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput[] | Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput[]
    connectOrCreate?: Relationship_teacher_subject_classCreateOrConnectWithoutTeacher_subjectInput | Relationship_teacher_subject_classCreateOrConnectWithoutTeacher_subjectInput[]
    createMany?: Relationship_teacher_subject_classCreateManyTeacher_subjectInputEnvelope
    connect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
  }

  export type SubjectUpdateOneRequiredWithoutTeacher_subjectsNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacher_subjectsInput, SubjectUncheckedCreateWithoutTeacher_subjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacher_subjectsInput
    upsert?: SubjectUpsertWithoutTeacher_subjectsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTeacher_subjectsInput, SubjectUpdateWithoutTeacher_subjectsInput>, SubjectUncheckedUpdateWithoutTeacher_subjectsInput>
  }

  export type TeacherUpdateOneRequiredWithoutTeacher_subjectsNestedInput = {
    create?: XOR<TeacherCreateWithoutTeacher_subjectsInput, TeacherUncheckedCreateWithoutTeacher_subjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutTeacher_subjectsInput
    upsert?: TeacherUpsertWithoutTeacher_subjectsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutTeacher_subjectsInput, TeacherUpdateWithoutTeacher_subjectsInput>, TeacherUncheckedUpdateWithoutTeacher_subjectsInput>
  }

  export type Relationship_teacher_subject_classUpdateManyWithoutTeacher_subjectNestedInput = {
    create?: XOR<Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput, Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput> | Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput[] | Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput[]
    connectOrCreate?: Relationship_teacher_subject_classCreateOrConnectWithoutTeacher_subjectInput | Relationship_teacher_subject_classCreateOrConnectWithoutTeacher_subjectInput[]
    upsert?: Relationship_teacher_subject_classUpsertWithWhereUniqueWithoutTeacher_subjectInput | Relationship_teacher_subject_classUpsertWithWhereUniqueWithoutTeacher_subjectInput[]
    createMany?: Relationship_teacher_subject_classCreateManyTeacher_subjectInputEnvelope
    set?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    disconnect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    delete?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    connect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    update?: Relationship_teacher_subject_classUpdateWithWhereUniqueWithoutTeacher_subjectInput | Relationship_teacher_subject_classUpdateWithWhereUniqueWithoutTeacher_subjectInput[]
    updateMany?: Relationship_teacher_subject_classUpdateManyWithWhereWithoutTeacher_subjectInput | Relationship_teacher_subject_classUpdateManyWithWhereWithoutTeacher_subjectInput[]
    deleteMany?: Relationship_teacher_subject_classScalarWhereInput | Relationship_teacher_subject_classScalarWhereInput[]
  }

  export type Relationship_teacher_subject_classUncheckedUpdateManyWithoutTeacher_subjectNestedInput = {
    create?: XOR<Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput, Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput> | Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput[] | Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput[]
    connectOrCreate?: Relationship_teacher_subject_classCreateOrConnectWithoutTeacher_subjectInput | Relationship_teacher_subject_classCreateOrConnectWithoutTeacher_subjectInput[]
    upsert?: Relationship_teacher_subject_classUpsertWithWhereUniqueWithoutTeacher_subjectInput | Relationship_teacher_subject_classUpsertWithWhereUniqueWithoutTeacher_subjectInput[]
    createMany?: Relationship_teacher_subject_classCreateManyTeacher_subjectInputEnvelope
    set?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    disconnect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    delete?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    connect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    update?: Relationship_teacher_subject_classUpdateWithWhereUniqueWithoutTeacher_subjectInput | Relationship_teacher_subject_classUpdateWithWhereUniqueWithoutTeacher_subjectInput[]
    updateMany?: Relationship_teacher_subject_classUpdateManyWithWhereWithoutTeacher_subjectInput | Relationship_teacher_subject_classUpdateManyWithWhereWithoutTeacher_subjectInput[]
    deleteMany?: Relationship_teacher_subject_classScalarWhereInput | Relationship_teacher_subject_classScalarWhereInput[]
  }

  export type StudentCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type Relationship_teacher_subject_classCreateNestedManyWithoutClassInput = {
    create?: XOR<Relationship_teacher_subject_classCreateWithoutClassInput, Relationship_teacher_subject_classUncheckedCreateWithoutClassInput> | Relationship_teacher_subject_classCreateWithoutClassInput[] | Relationship_teacher_subject_classUncheckedCreateWithoutClassInput[]
    connectOrCreate?: Relationship_teacher_subject_classCreateOrConnectWithoutClassInput | Relationship_teacher_subject_classCreateOrConnectWithoutClassInput[]
    createMany?: Relationship_teacher_subject_classCreateManyClassInputEnvelope
    connect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type Relationship_teacher_subject_classUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<Relationship_teacher_subject_classCreateWithoutClassInput, Relationship_teacher_subject_classUncheckedCreateWithoutClassInput> | Relationship_teacher_subject_classCreateWithoutClassInput[] | Relationship_teacher_subject_classUncheckedCreateWithoutClassInput[]
    connectOrCreate?: Relationship_teacher_subject_classCreateOrConnectWithoutClassInput | Relationship_teacher_subject_classCreateOrConnectWithoutClassInput[]
    createMany?: Relationship_teacher_subject_classCreateManyClassInputEnvelope
    connect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
  }

  export type EnumShiftFieldUpdateOperationsInput = {
    set?: $Enums.Shift
  }

  export type StudentUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassInput | StudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassInput | StudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassInput | StudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type Relationship_teacher_subject_classUpdateManyWithoutClassNestedInput = {
    create?: XOR<Relationship_teacher_subject_classCreateWithoutClassInput, Relationship_teacher_subject_classUncheckedCreateWithoutClassInput> | Relationship_teacher_subject_classCreateWithoutClassInput[] | Relationship_teacher_subject_classUncheckedCreateWithoutClassInput[]
    connectOrCreate?: Relationship_teacher_subject_classCreateOrConnectWithoutClassInput | Relationship_teacher_subject_classCreateOrConnectWithoutClassInput[]
    upsert?: Relationship_teacher_subject_classUpsertWithWhereUniqueWithoutClassInput | Relationship_teacher_subject_classUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: Relationship_teacher_subject_classCreateManyClassInputEnvelope
    set?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    disconnect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    delete?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    connect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    update?: Relationship_teacher_subject_classUpdateWithWhereUniqueWithoutClassInput | Relationship_teacher_subject_classUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: Relationship_teacher_subject_classUpdateManyWithWhereWithoutClassInput | Relationship_teacher_subject_classUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: Relationship_teacher_subject_classScalarWhereInput | Relationship_teacher_subject_classScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassInput | StudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassInput | StudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassInput | StudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type Relationship_teacher_subject_classUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<Relationship_teacher_subject_classCreateWithoutClassInput, Relationship_teacher_subject_classUncheckedCreateWithoutClassInput> | Relationship_teacher_subject_classCreateWithoutClassInput[] | Relationship_teacher_subject_classUncheckedCreateWithoutClassInput[]
    connectOrCreate?: Relationship_teacher_subject_classCreateOrConnectWithoutClassInput | Relationship_teacher_subject_classCreateOrConnectWithoutClassInput[]
    upsert?: Relationship_teacher_subject_classUpsertWithWhereUniqueWithoutClassInput | Relationship_teacher_subject_classUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: Relationship_teacher_subject_classCreateManyClassInputEnvelope
    set?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    disconnect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    delete?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    connect?: Relationship_teacher_subject_classWhereUniqueInput | Relationship_teacher_subject_classWhereUniqueInput[]
    update?: Relationship_teacher_subject_classUpdateWithWhereUniqueWithoutClassInput | Relationship_teacher_subject_classUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: Relationship_teacher_subject_classUpdateManyWithWhereWithoutClassInput | Relationship_teacher_subject_classUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: Relationship_teacher_subject_classScalarWhereInput | Relationship_teacher_subject_classScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    connect?: ClassWhereUniqueInput
  }

  export type Quiz_attemptCreateNestedManyWithoutStudentInput = {
    create?: XOR<Quiz_attemptCreateWithoutStudentInput, Quiz_attemptUncheckedCreateWithoutStudentInput> | Quiz_attemptCreateWithoutStudentInput[] | Quiz_attemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Quiz_attemptCreateOrConnectWithoutStudentInput | Quiz_attemptCreateOrConnectWithoutStudentInput[]
    createMany?: Quiz_attemptCreateManyStudentInputEnvelope
    connect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
  }

  export type Quiz_attemptUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Quiz_attemptCreateWithoutStudentInput, Quiz_attemptUncheckedCreateWithoutStudentInput> | Quiz_attemptCreateWithoutStudentInput[] | Quiz_attemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Quiz_attemptCreateOrConnectWithoutStudentInput | Quiz_attemptCreateOrConnectWithoutStudentInput[]
    createMany?: Quiz_attemptCreateManyStudentInputEnvelope
    connect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type ClassUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    upsert?: ClassUpsertWithoutStudentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutStudentsInput, ClassUpdateWithoutStudentsInput>, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type Quiz_attemptUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Quiz_attemptCreateWithoutStudentInput, Quiz_attemptUncheckedCreateWithoutStudentInput> | Quiz_attemptCreateWithoutStudentInput[] | Quiz_attemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Quiz_attemptCreateOrConnectWithoutStudentInput | Quiz_attemptCreateOrConnectWithoutStudentInput[]
    upsert?: Quiz_attemptUpsertWithWhereUniqueWithoutStudentInput | Quiz_attemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: Quiz_attemptCreateManyStudentInputEnvelope
    set?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    disconnect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    delete?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    connect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    update?: Quiz_attemptUpdateWithWhereUniqueWithoutStudentInput | Quiz_attemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: Quiz_attemptUpdateManyWithWhereWithoutStudentInput | Quiz_attemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: Quiz_attemptScalarWhereInput | Quiz_attemptScalarWhereInput[]
  }

  export type Quiz_attemptUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Quiz_attemptCreateWithoutStudentInput, Quiz_attemptUncheckedCreateWithoutStudentInput> | Quiz_attemptCreateWithoutStudentInput[] | Quiz_attemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Quiz_attemptCreateOrConnectWithoutStudentInput | Quiz_attemptCreateOrConnectWithoutStudentInput[]
    upsert?: Quiz_attemptUpsertWithWhereUniqueWithoutStudentInput | Quiz_attemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: Quiz_attemptCreateManyStudentInputEnvelope
    set?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    disconnect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    delete?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    connect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    update?: Quiz_attemptUpdateWithWhereUniqueWithoutStudentInput | Quiz_attemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: Quiz_attemptUpdateManyWithWhereWithoutStudentInput | Quiz_attemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: Quiz_attemptScalarWhereInput | Quiz_attemptScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutTeacher_subject_classesInput = {
    create?: XOR<ClassCreateWithoutTeacher_subject_classesInput, ClassUncheckedCreateWithoutTeacher_subject_classesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeacher_subject_classesInput
    connect?: ClassWhereUniqueInput
  }

  export type Relationship_teacher_subjectCreateNestedOneWithoutTeacher_subject_classesInput = {
    create?: XOR<Relationship_teacher_subjectCreateWithoutTeacher_subject_classesInput, Relationship_teacher_subjectUncheckedCreateWithoutTeacher_subject_classesInput>
    connectOrCreate?: Relationship_teacher_subjectCreateOrConnectWithoutTeacher_subject_classesInput
    connect?: Relationship_teacher_subjectWhereUniqueInput
  }

  export type QuizCreateNestedManyWithoutTeacher_subject_classInput = {
    create?: XOR<QuizCreateWithoutTeacher_subject_classInput, QuizUncheckedCreateWithoutTeacher_subject_classInput> | QuizCreateWithoutTeacher_subject_classInput[] | QuizUncheckedCreateWithoutTeacher_subject_classInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTeacher_subject_classInput | QuizCreateOrConnectWithoutTeacher_subject_classInput[]
    createMany?: QuizCreateManyTeacher_subject_classInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutTeacher_subject_classInput = {
    create?: XOR<QuizCreateWithoutTeacher_subject_classInput, QuizUncheckedCreateWithoutTeacher_subject_classInput> | QuizCreateWithoutTeacher_subject_classInput[] | QuizUncheckedCreateWithoutTeacher_subject_classInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTeacher_subject_classInput | QuizCreateOrConnectWithoutTeacher_subject_classInput[]
    createMany?: QuizCreateManyTeacher_subject_classInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type ClassUpdateOneRequiredWithoutTeacher_subject_classesNestedInput = {
    create?: XOR<ClassCreateWithoutTeacher_subject_classesInput, ClassUncheckedCreateWithoutTeacher_subject_classesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeacher_subject_classesInput
    upsert?: ClassUpsertWithoutTeacher_subject_classesInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutTeacher_subject_classesInput, ClassUpdateWithoutTeacher_subject_classesInput>, ClassUncheckedUpdateWithoutTeacher_subject_classesInput>
  }

  export type Relationship_teacher_subjectUpdateOneRequiredWithoutTeacher_subject_classesNestedInput = {
    create?: XOR<Relationship_teacher_subjectCreateWithoutTeacher_subject_classesInput, Relationship_teacher_subjectUncheckedCreateWithoutTeacher_subject_classesInput>
    connectOrCreate?: Relationship_teacher_subjectCreateOrConnectWithoutTeacher_subject_classesInput
    upsert?: Relationship_teacher_subjectUpsertWithoutTeacher_subject_classesInput
    connect?: Relationship_teacher_subjectWhereUniqueInput
    update?: XOR<XOR<Relationship_teacher_subjectUpdateToOneWithWhereWithoutTeacher_subject_classesInput, Relationship_teacher_subjectUpdateWithoutTeacher_subject_classesInput>, Relationship_teacher_subjectUncheckedUpdateWithoutTeacher_subject_classesInput>
  }

  export type QuizUpdateManyWithoutTeacher_subject_classNestedInput = {
    create?: XOR<QuizCreateWithoutTeacher_subject_classInput, QuizUncheckedCreateWithoutTeacher_subject_classInput> | QuizCreateWithoutTeacher_subject_classInput[] | QuizUncheckedCreateWithoutTeacher_subject_classInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTeacher_subject_classInput | QuizCreateOrConnectWithoutTeacher_subject_classInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutTeacher_subject_classInput | QuizUpsertWithWhereUniqueWithoutTeacher_subject_classInput[]
    createMany?: QuizCreateManyTeacher_subject_classInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutTeacher_subject_classInput | QuizUpdateWithWhereUniqueWithoutTeacher_subject_classInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutTeacher_subject_classInput | QuizUpdateManyWithWhereWithoutTeacher_subject_classInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutTeacher_subject_classNestedInput = {
    create?: XOR<QuizCreateWithoutTeacher_subject_classInput, QuizUncheckedCreateWithoutTeacher_subject_classInput> | QuizCreateWithoutTeacher_subject_classInput[] | QuizUncheckedCreateWithoutTeacher_subject_classInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutTeacher_subject_classInput | QuizCreateOrConnectWithoutTeacher_subject_classInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutTeacher_subject_classInput | QuizUpsertWithWhereUniqueWithoutTeacher_subject_classInput[]
    createMany?: QuizCreateManyTeacher_subject_classInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutTeacher_subject_classInput | QuizUpdateWithWhereUniqueWithoutTeacher_subject_classInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutTeacher_subject_classInput | QuizUpdateManyWithWhereWithoutTeacher_subject_classInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type Relationship_teacher_subject_classCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<Relationship_teacher_subject_classCreateWithoutQuizzesInput, Relationship_teacher_subject_classUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: Relationship_teacher_subject_classCreateOrConnectWithoutQuizzesInput
    connect?: Relationship_teacher_subject_classWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type Quiz_attemptCreateNestedManyWithoutQuizInput = {
    create?: XOR<Quiz_attemptCreateWithoutQuizInput, Quiz_attemptUncheckedCreateWithoutQuizInput> | Quiz_attemptCreateWithoutQuizInput[] | Quiz_attemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Quiz_attemptCreateOrConnectWithoutQuizInput | Quiz_attemptCreateOrConnectWithoutQuizInput[]
    createMany?: Quiz_attemptCreateManyQuizInputEnvelope
    connect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type Quiz_attemptUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Quiz_attemptCreateWithoutQuizInput, Quiz_attemptUncheckedCreateWithoutQuizInput> | Quiz_attemptCreateWithoutQuizInput[] | Quiz_attemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Quiz_attemptCreateOrConnectWithoutQuizInput | Quiz_attemptCreateOrConnectWithoutQuizInput[]
    createMany?: Quiz_attemptCreateManyQuizInputEnvelope
    connect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumQuizVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.QuizVisibility
  }

  export type Relationship_teacher_subject_classUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<Relationship_teacher_subject_classCreateWithoutQuizzesInput, Relationship_teacher_subject_classUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: Relationship_teacher_subject_classCreateOrConnectWithoutQuizzesInput
    upsert?: Relationship_teacher_subject_classUpsertWithoutQuizzesInput
    connect?: Relationship_teacher_subject_classWhereUniqueInput
    update?: XOR<XOR<Relationship_teacher_subject_classUpdateToOneWithWhereWithoutQuizzesInput, Relationship_teacher_subject_classUpdateWithoutQuizzesInput>, Relationship_teacher_subject_classUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type Quiz_attemptUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Quiz_attemptCreateWithoutQuizInput, Quiz_attemptUncheckedCreateWithoutQuizInput> | Quiz_attemptCreateWithoutQuizInput[] | Quiz_attemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Quiz_attemptCreateOrConnectWithoutQuizInput | Quiz_attemptCreateOrConnectWithoutQuizInput[]
    upsert?: Quiz_attemptUpsertWithWhereUniqueWithoutQuizInput | Quiz_attemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: Quiz_attemptCreateManyQuizInputEnvelope
    set?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    disconnect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    delete?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    connect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    update?: Quiz_attemptUpdateWithWhereUniqueWithoutQuizInput | Quiz_attemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: Quiz_attemptUpdateManyWithWhereWithoutQuizInput | Quiz_attemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: Quiz_attemptScalarWhereInput | Quiz_attemptScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type Quiz_attemptUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Quiz_attemptCreateWithoutQuizInput, Quiz_attemptUncheckedCreateWithoutQuizInput> | Quiz_attemptCreateWithoutQuizInput[] | Quiz_attemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Quiz_attemptCreateOrConnectWithoutQuizInput | Quiz_attemptCreateOrConnectWithoutQuizInput[]
    upsert?: Quiz_attemptUpsertWithWhereUniqueWithoutQuizInput | Quiz_attemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: Quiz_attemptCreateManyQuizInputEnvelope
    set?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    disconnect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    delete?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    connect?: Quiz_attemptWhereUniqueInput | Quiz_attemptWhereUniqueInput[]
    update?: Quiz_attemptUpdateWithWhereUniqueWithoutQuizInput | Quiz_attemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: Quiz_attemptUpdateManyWithWhereWithoutQuizInput | Quiz_attemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: Quiz_attemptScalarWhereInput | Quiz_attemptScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type AlternativeCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
  }

  export type Question_imagesCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Question_imagesCreateWithoutQuestionInput, Question_imagesUncheckedCreateWithoutQuestionInput> | Question_imagesCreateWithoutQuestionInput[] | Question_imagesUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Question_imagesCreateOrConnectWithoutQuestionInput | Question_imagesCreateOrConnectWithoutQuestionInput[]
    createMany?: Question_imagesCreateManyQuestionInputEnvelope
    connect?: Question_imagesWhereUniqueInput | Question_imagesWhereUniqueInput[]
  }

  export type Question_responseCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Question_responseCreateWithoutQuestionInput, Question_responseUncheckedCreateWithoutQuestionInput> | Question_responseCreateWithoutQuestionInput[] | Question_responseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutQuestionInput | Question_responseCreateOrConnectWithoutQuestionInput[]
    createMany?: Question_responseCreateManyQuestionInputEnvelope
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
  }

  export type AlternativeUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
  }

  export type Question_imagesUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Question_imagesCreateWithoutQuestionInput, Question_imagesUncheckedCreateWithoutQuestionInput> | Question_imagesCreateWithoutQuestionInput[] | Question_imagesUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Question_imagesCreateOrConnectWithoutQuestionInput | Question_imagesCreateOrConnectWithoutQuestionInput[]
    createMany?: Question_imagesCreateManyQuestionInputEnvelope
    connect?: Question_imagesWhereUniqueInput | Question_imagesWhereUniqueInput[]
  }

  export type Question_responseUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Question_responseCreateWithoutQuestionInput, Question_responseUncheckedCreateWithoutQuestionInput> | Question_responseCreateWithoutQuestionInput[] | Question_responseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutQuestionInput | Question_responseCreateOrConnectWithoutQuestionInput[]
    createMany?: Question_responseCreateManyQuestionInputEnvelope
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
  }

  export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type AlternativeUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    upsert?: AlternativeUpsertWithWhereUniqueWithoutQuestionInput | AlternativeUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    set?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    disconnect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    delete?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    update?: AlternativeUpdateWithWhereUniqueWithoutQuestionInput | AlternativeUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AlternativeUpdateManyWithWhereWithoutQuestionInput | AlternativeUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
  }

  export type Question_imagesUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Question_imagesCreateWithoutQuestionInput, Question_imagesUncheckedCreateWithoutQuestionInput> | Question_imagesCreateWithoutQuestionInput[] | Question_imagesUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Question_imagesCreateOrConnectWithoutQuestionInput | Question_imagesCreateOrConnectWithoutQuestionInput[]
    upsert?: Question_imagesUpsertWithWhereUniqueWithoutQuestionInput | Question_imagesUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: Question_imagesCreateManyQuestionInputEnvelope
    set?: Question_imagesWhereUniqueInput | Question_imagesWhereUniqueInput[]
    disconnect?: Question_imagesWhereUniqueInput | Question_imagesWhereUniqueInput[]
    delete?: Question_imagesWhereUniqueInput | Question_imagesWhereUniqueInput[]
    connect?: Question_imagesWhereUniqueInput | Question_imagesWhereUniqueInput[]
    update?: Question_imagesUpdateWithWhereUniqueWithoutQuestionInput | Question_imagesUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: Question_imagesUpdateManyWithWhereWithoutQuestionInput | Question_imagesUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: Question_imagesScalarWhereInput | Question_imagesScalarWhereInput[]
  }

  export type Question_responseUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Question_responseCreateWithoutQuestionInput, Question_responseUncheckedCreateWithoutQuestionInput> | Question_responseCreateWithoutQuestionInput[] | Question_responseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutQuestionInput | Question_responseCreateOrConnectWithoutQuestionInput[]
    upsert?: Question_responseUpsertWithWhereUniqueWithoutQuestionInput | Question_responseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: Question_responseCreateManyQuestionInputEnvelope
    set?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    disconnect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    delete?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    update?: Question_responseUpdateWithWhereUniqueWithoutQuestionInput | Question_responseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: Question_responseUpdateManyWithWhereWithoutQuestionInput | Question_responseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: Question_responseScalarWhereInput | Question_responseScalarWhereInput[]
  }

  export type AlternativeUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    upsert?: AlternativeUpsertWithWhereUniqueWithoutQuestionInput | AlternativeUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    set?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    disconnect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    delete?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    update?: AlternativeUpdateWithWhereUniqueWithoutQuestionInput | AlternativeUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AlternativeUpdateManyWithWhereWithoutQuestionInput | AlternativeUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
  }

  export type Question_imagesUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Question_imagesCreateWithoutQuestionInput, Question_imagesUncheckedCreateWithoutQuestionInput> | Question_imagesCreateWithoutQuestionInput[] | Question_imagesUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Question_imagesCreateOrConnectWithoutQuestionInput | Question_imagesCreateOrConnectWithoutQuestionInput[]
    upsert?: Question_imagesUpsertWithWhereUniqueWithoutQuestionInput | Question_imagesUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: Question_imagesCreateManyQuestionInputEnvelope
    set?: Question_imagesWhereUniqueInput | Question_imagesWhereUniqueInput[]
    disconnect?: Question_imagesWhereUniqueInput | Question_imagesWhereUniqueInput[]
    delete?: Question_imagesWhereUniqueInput | Question_imagesWhereUniqueInput[]
    connect?: Question_imagesWhereUniqueInput | Question_imagesWhereUniqueInput[]
    update?: Question_imagesUpdateWithWhereUniqueWithoutQuestionInput | Question_imagesUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: Question_imagesUpdateManyWithWhereWithoutQuestionInput | Question_imagesUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: Question_imagesScalarWhereInput | Question_imagesScalarWhereInput[]
  }

  export type Question_responseUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Question_responseCreateWithoutQuestionInput, Question_responseUncheckedCreateWithoutQuestionInput> | Question_responseCreateWithoutQuestionInput[] | Question_responseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutQuestionInput | Question_responseCreateOrConnectWithoutQuestionInput[]
    upsert?: Question_responseUpsertWithWhereUniqueWithoutQuestionInput | Question_responseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: Question_responseCreateManyQuestionInputEnvelope
    set?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    disconnect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    delete?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    update?: Question_responseUpdateWithWhereUniqueWithoutQuestionInput | Question_responseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: Question_responseUpdateManyWithWhereWithoutQuestionInput | Question_responseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: Question_responseScalarWhereInput | Question_responseScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAlternativesInput = {
    create?: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAlternativesInput
    connect?: QuestionWhereUniqueInput
  }

  export type Question_responseCreateNestedManyWithoutMarked_alternativeInput = {
    create?: XOR<Question_responseCreateWithoutMarked_alternativeInput, Question_responseUncheckedCreateWithoutMarked_alternativeInput> | Question_responseCreateWithoutMarked_alternativeInput[] | Question_responseUncheckedCreateWithoutMarked_alternativeInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutMarked_alternativeInput | Question_responseCreateOrConnectWithoutMarked_alternativeInput[]
    createMany?: Question_responseCreateManyMarked_alternativeInputEnvelope
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
  }

  export type Question_responseUncheckedCreateNestedManyWithoutMarked_alternativeInput = {
    create?: XOR<Question_responseCreateWithoutMarked_alternativeInput, Question_responseUncheckedCreateWithoutMarked_alternativeInput> | Question_responseCreateWithoutMarked_alternativeInput[] | Question_responseUncheckedCreateWithoutMarked_alternativeInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutMarked_alternativeInput | Question_responseCreateOrConnectWithoutMarked_alternativeInput[]
    createMany?: Question_responseCreateManyMarked_alternativeInputEnvelope
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestionUpdateOneRequiredWithoutAlternativesNestedInput = {
    create?: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAlternativesInput
    upsert?: QuestionUpsertWithoutAlternativesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAlternativesInput, QuestionUpdateWithoutAlternativesInput>, QuestionUncheckedUpdateWithoutAlternativesInput>
  }

  export type Question_responseUpdateManyWithoutMarked_alternativeNestedInput = {
    create?: XOR<Question_responseCreateWithoutMarked_alternativeInput, Question_responseUncheckedCreateWithoutMarked_alternativeInput> | Question_responseCreateWithoutMarked_alternativeInput[] | Question_responseUncheckedCreateWithoutMarked_alternativeInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutMarked_alternativeInput | Question_responseCreateOrConnectWithoutMarked_alternativeInput[]
    upsert?: Question_responseUpsertWithWhereUniqueWithoutMarked_alternativeInput | Question_responseUpsertWithWhereUniqueWithoutMarked_alternativeInput[]
    createMany?: Question_responseCreateManyMarked_alternativeInputEnvelope
    set?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    disconnect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    delete?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    update?: Question_responseUpdateWithWhereUniqueWithoutMarked_alternativeInput | Question_responseUpdateWithWhereUniqueWithoutMarked_alternativeInput[]
    updateMany?: Question_responseUpdateManyWithWhereWithoutMarked_alternativeInput | Question_responseUpdateManyWithWhereWithoutMarked_alternativeInput[]
    deleteMany?: Question_responseScalarWhereInput | Question_responseScalarWhereInput[]
  }

  export type Question_responseUncheckedUpdateManyWithoutMarked_alternativeNestedInput = {
    create?: XOR<Question_responseCreateWithoutMarked_alternativeInput, Question_responseUncheckedCreateWithoutMarked_alternativeInput> | Question_responseCreateWithoutMarked_alternativeInput[] | Question_responseUncheckedCreateWithoutMarked_alternativeInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutMarked_alternativeInput | Question_responseCreateOrConnectWithoutMarked_alternativeInput[]
    upsert?: Question_responseUpsertWithWhereUniqueWithoutMarked_alternativeInput | Question_responseUpsertWithWhereUniqueWithoutMarked_alternativeInput[]
    createMany?: Question_responseCreateManyMarked_alternativeInputEnvelope
    set?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    disconnect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    delete?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    update?: Question_responseUpdateWithWhereUniqueWithoutMarked_alternativeInput | Question_responseUpdateWithWhereUniqueWithoutMarked_alternativeInput[]
    updateMany?: Question_responseUpdateManyWithWhereWithoutMarked_alternativeInput | Question_responseUpdateManyWithWhereWithoutMarked_alternativeInput[]
    deleteMany?: Question_responseScalarWhereInput | Question_responseScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutQuestion_imagesInput = {
    create?: XOR<QuestionCreateWithoutQuestion_imagesInput, QuestionUncheckedCreateWithoutQuestion_imagesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestion_imagesInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutQuestion_imagesNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestion_imagesInput, QuestionUncheckedCreateWithoutQuestion_imagesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestion_imagesInput
    upsert?: QuestionUpsertWithoutQuestion_imagesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutQuestion_imagesInput, QuestionUpdateWithoutQuestion_imagesInput>, QuestionUncheckedUpdateWithoutQuestion_imagesInput>
  }

  export type StudentCreateNestedOneWithoutQuiz_attemptsInput = {
    create?: XOR<StudentCreateWithoutQuiz_attemptsInput, StudentUncheckedCreateWithoutQuiz_attemptsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutQuiz_attemptsInput
    connect?: StudentWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutQuiz_attemptsInput = {
    create?: XOR<QuizCreateWithoutQuiz_attemptsInput, QuizUncheckedCreateWithoutQuiz_attemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuiz_attemptsInput
    connect?: QuizWhereUniqueInput
  }

  export type Question_responseCreateNestedManyWithoutQuiz_attemptInput = {
    create?: XOR<Question_responseCreateWithoutQuiz_attemptInput, Question_responseUncheckedCreateWithoutQuiz_attemptInput> | Question_responseCreateWithoutQuiz_attemptInput[] | Question_responseUncheckedCreateWithoutQuiz_attemptInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutQuiz_attemptInput | Question_responseCreateOrConnectWithoutQuiz_attemptInput[]
    createMany?: Question_responseCreateManyQuiz_attemptInputEnvelope
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
  }

  export type Question_responseUncheckedCreateNestedManyWithoutQuiz_attemptInput = {
    create?: XOR<Question_responseCreateWithoutQuiz_attemptInput, Question_responseUncheckedCreateWithoutQuiz_attemptInput> | Question_responseCreateWithoutQuiz_attemptInput[] | Question_responseUncheckedCreateWithoutQuiz_attemptInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutQuiz_attemptInput | Question_responseCreateOrConnectWithoutQuiz_attemptInput[]
    createMany?: Question_responseCreateManyQuiz_attemptInputEnvelope
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumAttemptStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttemptStatus
  }

  export type StudentUpdateOneRequiredWithoutQuiz_attemptsNestedInput = {
    create?: XOR<StudentCreateWithoutQuiz_attemptsInput, StudentUncheckedCreateWithoutQuiz_attemptsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutQuiz_attemptsInput
    upsert?: StudentUpsertWithoutQuiz_attemptsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutQuiz_attemptsInput, StudentUpdateWithoutQuiz_attemptsInput>, StudentUncheckedUpdateWithoutQuiz_attemptsInput>
  }

  export type QuizUpdateOneRequiredWithoutQuiz_attemptsNestedInput = {
    create?: XOR<QuizCreateWithoutQuiz_attemptsInput, QuizUncheckedCreateWithoutQuiz_attemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuiz_attemptsInput
    upsert?: QuizUpsertWithoutQuiz_attemptsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuiz_attemptsInput, QuizUpdateWithoutQuiz_attemptsInput>, QuizUncheckedUpdateWithoutQuiz_attemptsInput>
  }

  export type Question_responseUpdateManyWithoutQuiz_attemptNestedInput = {
    create?: XOR<Question_responseCreateWithoutQuiz_attemptInput, Question_responseUncheckedCreateWithoutQuiz_attemptInput> | Question_responseCreateWithoutQuiz_attemptInput[] | Question_responseUncheckedCreateWithoutQuiz_attemptInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutQuiz_attemptInput | Question_responseCreateOrConnectWithoutQuiz_attemptInput[]
    upsert?: Question_responseUpsertWithWhereUniqueWithoutQuiz_attemptInput | Question_responseUpsertWithWhereUniqueWithoutQuiz_attemptInput[]
    createMany?: Question_responseCreateManyQuiz_attemptInputEnvelope
    set?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    disconnect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    delete?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    update?: Question_responseUpdateWithWhereUniqueWithoutQuiz_attemptInput | Question_responseUpdateWithWhereUniqueWithoutQuiz_attemptInput[]
    updateMany?: Question_responseUpdateManyWithWhereWithoutQuiz_attemptInput | Question_responseUpdateManyWithWhereWithoutQuiz_attemptInput[]
    deleteMany?: Question_responseScalarWhereInput | Question_responseScalarWhereInput[]
  }

  export type Question_responseUncheckedUpdateManyWithoutQuiz_attemptNestedInput = {
    create?: XOR<Question_responseCreateWithoutQuiz_attemptInput, Question_responseUncheckedCreateWithoutQuiz_attemptInput> | Question_responseCreateWithoutQuiz_attemptInput[] | Question_responseUncheckedCreateWithoutQuiz_attemptInput[]
    connectOrCreate?: Question_responseCreateOrConnectWithoutQuiz_attemptInput | Question_responseCreateOrConnectWithoutQuiz_attemptInput[]
    upsert?: Question_responseUpsertWithWhereUniqueWithoutQuiz_attemptInput | Question_responseUpsertWithWhereUniqueWithoutQuiz_attemptInput[]
    createMany?: Question_responseCreateManyQuiz_attemptInputEnvelope
    set?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    disconnect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    delete?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    connect?: Question_responseWhereUniqueInput | Question_responseWhereUniqueInput[]
    update?: Question_responseUpdateWithWhereUniqueWithoutQuiz_attemptInput | Question_responseUpdateWithWhereUniqueWithoutQuiz_attemptInput[]
    updateMany?: Question_responseUpdateManyWithWhereWithoutQuiz_attemptInput | Question_responseUpdateManyWithWhereWithoutQuiz_attemptInput[]
    deleteMany?: Question_responseScalarWhereInput | Question_responseScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutQuestion_responsesInput = {
    create?: XOR<QuestionCreateWithoutQuestion_responsesInput, QuestionUncheckedCreateWithoutQuestion_responsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestion_responsesInput
    connect?: QuestionWhereUniqueInput
  }

  export type AlternativeCreateNestedOneWithoutQuestion_responsesInput = {
    create?: XOR<AlternativeCreateWithoutQuestion_responsesInput, AlternativeUncheckedCreateWithoutQuestion_responsesInput>
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestion_responsesInput
    connect?: AlternativeWhereUniqueInput
  }

  export type Quiz_attemptCreateNestedOneWithoutQuestion_responsesInput = {
    create?: XOR<Quiz_attemptCreateWithoutQuestion_responsesInput, Quiz_attemptUncheckedCreateWithoutQuestion_responsesInput>
    connectOrCreate?: Quiz_attemptCreateOrConnectWithoutQuestion_responsesInput
    connect?: Quiz_attemptWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutQuestion_responsesNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestion_responsesInput, QuestionUncheckedCreateWithoutQuestion_responsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestion_responsesInput
    upsert?: QuestionUpsertWithoutQuestion_responsesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutQuestion_responsesInput, QuestionUpdateWithoutQuestion_responsesInput>, QuestionUncheckedUpdateWithoutQuestion_responsesInput>
  }

  export type AlternativeUpdateOneRequiredWithoutQuestion_responsesNestedInput = {
    create?: XOR<AlternativeCreateWithoutQuestion_responsesInput, AlternativeUncheckedCreateWithoutQuestion_responsesInput>
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestion_responsesInput
    upsert?: AlternativeUpsertWithoutQuestion_responsesInput
    connect?: AlternativeWhereUniqueInput
    update?: XOR<XOR<AlternativeUpdateToOneWithWhereWithoutQuestion_responsesInput, AlternativeUpdateWithoutQuestion_responsesInput>, AlternativeUncheckedUpdateWithoutQuestion_responsesInput>
  }

  export type Quiz_attemptUpdateOneRequiredWithoutQuestion_responsesNestedInput = {
    create?: XOR<Quiz_attemptCreateWithoutQuestion_responsesInput, Quiz_attemptUncheckedCreateWithoutQuestion_responsesInput>
    connectOrCreate?: Quiz_attemptCreateOrConnectWithoutQuestion_responsesInput
    upsert?: Quiz_attemptUpsertWithoutQuestion_responsesInput
    connect?: Quiz_attemptWhereUniqueInput
    update?: XOR<XOR<Quiz_attemptUpdateToOneWithWhereWithoutQuestion_responsesInput, Quiz_attemptUpdateWithoutQuestion_responsesInput>, Quiz_attemptUncheckedUpdateWithoutQuestion_responsesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumShiftFilter<$PrismaModel = never> = {
    equals?: $Enums.Shift | EnumShiftFieldRefInput<$PrismaModel>
    in?: $Enums.Shift[] | ListEnumShiftFieldRefInput<$PrismaModel>
    notIn?: $Enums.Shift[] | ListEnumShiftFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftFilter<$PrismaModel> | $Enums.Shift
  }

  export type NestedEnumShiftWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Shift | EnumShiftFieldRefInput<$PrismaModel>
    in?: $Enums.Shift[] | ListEnumShiftFieldRefInput<$PrismaModel>
    notIn?: $Enums.Shift[] | ListEnumShiftFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftWithAggregatesFilter<$PrismaModel> | $Enums.Shift
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftFilter<$PrismaModel>
    _max?: NestedEnumShiftFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumQuizVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizVisibility | EnumQuizVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.QuizVisibility[] | ListEnumQuizVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizVisibility[] | ListEnumQuizVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizVisibilityFilter<$PrismaModel> | $Enums.QuizVisibility
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumQuizVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizVisibility | EnumQuizVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.QuizVisibility[] | ListEnumQuizVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizVisibility[] | ListEnumQuizVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.QuizVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizVisibilityFilter<$PrismaModel>
    _max?: NestedEnumQuizVisibilityFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAttemptStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttemptStatus | EnumAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttemptStatus[] | ListEnumAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttemptStatus[] | ListEnumAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttemptStatusFilter<$PrismaModel> | $Enums.AttemptStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAttemptStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttemptStatus | EnumAttemptStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttemptStatus[] | ListEnumAttemptStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttemptStatus[] | ListEnumAttemptStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttemptStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttemptStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttemptStatusFilter<$PrismaModel>
    _max?: NestedEnumAttemptStatusFilter<$PrismaModel>
  }

  export type TeacherCreateWithoutUserInput = {
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subjects?: Relationship_teacher_subjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    id?: number
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subjects?: Relationship_teacher_subjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type StudentCreateWithoutUserInput = {
    enrollment: string
    created_at?: Date | string
    modified_at?: Date | string
    class: ClassCreateNestedOneWithoutStudentsInput
    quiz_attempts?: Quiz_attemptCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: number
    enrollment: string
    class_id: number
    created_at?: Date | string
    modified_at?: Date | string
    quiz_attempts?: Quiz_attemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type TeacherUpsertWithoutUserInput = {
    update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutUserInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: Relationship_teacher_subjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: Relationship_teacher_subjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    enrollment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
    quiz_attempts?: Quiz_attemptUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollment?: StringFieldUpdateOperationsInput | string
    class_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz_attempts?: Quiz_attemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateWithoutTeacherInput = {
    name: string
    email: string
    birth_date: Date | string
    cpf: string
    created_at?: Date | string
    modified_at?: Date | string
    role: $Enums.Role
    hashed_password: string
    student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    email: string
    birth_date: Date | string
    cpf: string
    created_at?: Date | string
    modified_at?: Date | string
    role: $Enums.Role
    hashed_password: string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
  }

  export type Relationship_teacher_subjectCreateWithoutTeacherInput = {
    subject: SubjectCreateNestedOneWithoutTeacher_subjectsInput
    teacher_subject_classes?: Relationship_teacher_subject_classCreateNestedManyWithoutTeacher_subjectInput
  }

  export type Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput = {
    id?: number
    subject_id: number
    teacher_subject_classes?: Relationship_teacher_subject_classUncheckedCreateNestedManyWithoutTeacher_subjectInput
  }

  export type Relationship_teacher_subjectCreateOrConnectWithoutTeacherInput = {
    where: Relationship_teacher_subjectWhereUniqueInput
    create: XOR<Relationship_teacher_subjectCreateWithoutTeacherInput, Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput>
  }

  export type Relationship_teacher_subjectCreateManyTeacherInputEnvelope = {
    data: Relationship_teacher_subjectCreateManyTeacherInput | Relationship_teacher_subjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeacherInput = {
    update: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type UserUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hashed_password?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hashed_password?: StringFieldUpdateOperationsInput | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type Relationship_teacher_subjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Relationship_teacher_subjectWhereUniqueInput
    update: XOR<Relationship_teacher_subjectUpdateWithoutTeacherInput, Relationship_teacher_subjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<Relationship_teacher_subjectCreateWithoutTeacherInput, Relationship_teacher_subjectUncheckedCreateWithoutTeacherInput>
  }

  export type Relationship_teacher_subjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Relationship_teacher_subjectWhereUniqueInput
    data: XOR<Relationship_teacher_subjectUpdateWithoutTeacherInput, Relationship_teacher_subjectUncheckedUpdateWithoutTeacherInput>
  }

  export type Relationship_teacher_subjectUpdateManyWithWhereWithoutTeacherInput = {
    where: Relationship_teacher_subjectScalarWhereInput
    data: XOR<Relationship_teacher_subjectUpdateManyMutationInput, Relationship_teacher_subjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type Relationship_teacher_subjectScalarWhereInput = {
    AND?: Relationship_teacher_subjectScalarWhereInput | Relationship_teacher_subjectScalarWhereInput[]
    OR?: Relationship_teacher_subjectScalarWhereInput[]
    NOT?: Relationship_teacher_subjectScalarWhereInput | Relationship_teacher_subjectScalarWhereInput[]
    id?: IntFilter<"Relationship_teacher_subject"> | number
    subject_id?: IntFilter<"Relationship_teacher_subject"> | number
    teacher_id?: IntFilter<"Relationship_teacher_subject"> | number
  }

  export type Relationship_teacher_subjectCreateWithoutSubjectInput = {
    teacher: TeacherCreateNestedOneWithoutTeacher_subjectsInput
    teacher_subject_classes?: Relationship_teacher_subject_classCreateNestedManyWithoutTeacher_subjectInput
  }

  export type Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput = {
    id?: number
    teacher_id: number
    teacher_subject_classes?: Relationship_teacher_subject_classUncheckedCreateNestedManyWithoutTeacher_subjectInput
  }

  export type Relationship_teacher_subjectCreateOrConnectWithoutSubjectInput = {
    where: Relationship_teacher_subjectWhereUniqueInput
    create: XOR<Relationship_teacher_subjectCreateWithoutSubjectInput, Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput>
  }

  export type Relationship_teacher_subjectCreateManySubjectInputEnvelope = {
    data: Relationship_teacher_subjectCreateManySubjectInput | Relationship_teacher_subjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type Relationship_teacher_subjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Relationship_teacher_subjectWhereUniqueInput
    update: XOR<Relationship_teacher_subjectUpdateWithoutSubjectInput, Relationship_teacher_subjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<Relationship_teacher_subjectCreateWithoutSubjectInput, Relationship_teacher_subjectUncheckedCreateWithoutSubjectInput>
  }

  export type Relationship_teacher_subjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Relationship_teacher_subjectWhereUniqueInput
    data: XOR<Relationship_teacher_subjectUpdateWithoutSubjectInput, Relationship_teacher_subjectUncheckedUpdateWithoutSubjectInput>
  }

  export type Relationship_teacher_subjectUpdateManyWithWhereWithoutSubjectInput = {
    where: Relationship_teacher_subjectScalarWhereInput
    data: XOR<Relationship_teacher_subjectUpdateManyMutationInput, Relationship_teacher_subjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type SubjectCreateWithoutTeacher_subjectsInput = {
    name: string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type SubjectUncheckedCreateWithoutTeacher_subjectsInput = {
    id?: number
    name: string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type SubjectCreateOrConnectWithoutTeacher_subjectsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeacher_subjectsInput, SubjectUncheckedCreateWithoutTeacher_subjectsInput>
  }

  export type TeacherCreateWithoutTeacher_subjectsInput = {
    created_at?: Date | string
    modified_at?: Date | string
    user: UserCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutTeacher_subjectsInput = {
    id?: number
    user_id: number
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type TeacherCreateOrConnectWithoutTeacher_subjectsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutTeacher_subjectsInput, TeacherUncheckedCreateWithoutTeacher_subjectsInput>
  }

  export type Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput = {
    class: ClassCreateNestedOneWithoutTeacher_subject_classesInput
    quizzes?: QuizCreateNestedManyWithoutTeacher_subject_classInput
  }

  export type Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput = {
    id?: number
    class_id: number
    quizzes?: QuizUncheckedCreateNestedManyWithoutTeacher_subject_classInput
  }

  export type Relationship_teacher_subject_classCreateOrConnectWithoutTeacher_subjectInput = {
    where: Relationship_teacher_subject_classWhereUniqueInput
    create: XOR<Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput, Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput>
  }

  export type Relationship_teacher_subject_classCreateManyTeacher_subjectInputEnvelope = {
    data: Relationship_teacher_subject_classCreateManyTeacher_subjectInput | Relationship_teacher_subject_classCreateManyTeacher_subjectInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithoutTeacher_subjectsInput = {
    update: XOR<SubjectUpdateWithoutTeacher_subjectsInput, SubjectUncheckedUpdateWithoutTeacher_subjectsInput>
    create: XOR<SubjectCreateWithoutTeacher_subjectsInput, SubjectUncheckedCreateWithoutTeacher_subjectsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTeacher_subjectsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTeacher_subjectsInput, SubjectUncheckedUpdateWithoutTeacher_subjectsInput>
  }

  export type SubjectUpdateWithoutTeacher_subjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateWithoutTeacher_subjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUpsertWithoutTeacher_subjectsInput = {
    update: XOR<TeacherUpdateWithoutTeacher_subjectsInput, TeacherUncheckedUpdateWithoutTeacher_subjectsInput>
    create: XOR<TeacherCreateWithoutTeacher_subjectsInput, TeacherUncheckedCreateWithoutTeacher_subjectsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutTeacher_subjectsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutTeacher_subjectsInput, TeacherUncheckedUpdateWithoutTeacher_subjectsInput>
  }

  export type TeacherUpdateWithoutTeacher_subjectsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutTeacher_subjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Relationship_teacher_subject_classUpsertWithWhereUniqueWithoutTeacher_subjectInput = {
    where: Relationship_teacher_subject_classWhereUniqueInput
    update: XOR<Relationship_teacher_subject_classUpdateWithoutTeacher_subjectInput, Relationship_teacher_subject_classUncheckedUpdateWithoutTeacher_subjectInput>
    create: XOR<Relationship_teacher_subject_classCreateWithoutTeacher_subjectInput, Relationship_teacher_subject_classUncheckedCreateWithoutTeacher_subjectInput>
  }

  export type Relationship_teacher_subject_classUpdateWithWhereUniqueWithoutTeacher_subjectInput = {
    where: Relationship_teacher_subject_classWhereUniqueInput
    data: XOR<Relationship_teacher_subject_classUpdateWithoutTeacher_subjectInput, Relationship_teacher_subject_classUncheckedUpdateWithoutTeacher_subjectInput>
  }

  export type Relationship_teacher_subject_classUpdateManyWithWhereWithoutTeacher_subjectInput = {
    where: Relationship_teacher_subject_classScalarWhereInput
    data: XOR<Relationship_teacher_subject_classUpdateManyMutationInput, Relationship_teacher_subject_classUncheckedUpdateManyWithoutTeacher_subjectInput>
  }

  export type Relationship_teacher_subject_classScalarWhereInput = {
    AND?: Relationship_teacher_subject_classScalarWhereInput | Relationship_teacher_subject_classScalarWhereInput[]
    OR?: Relationship_teacher_subject_classScalarWhereInput[]
    NOT?: Relationship_teacher_subject_classScalarWhereInput | Relationship_teacher_subject_classScalarWhereInput[]
    id?: IntFilter<"Relationship_teacher_subject_class"> | number
    class_id?: IntFilter<"Relationship_teacher_subject_class"> | number
    teacher_subject_id?: IntFilter<"Relationship_teacher_subject_class"> | number
  }

  export type StudentCreateWithoutClassInput = {
    enrollment: string
    created_at?: Date | string
    modified_at?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    quiz_attempts?: Quiz_attemptCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClassInput = {
    id?: number
    enrollment: string
    user_id: number
    created_at?: Date | string
    modified_at?: Date | string
    quiz_attempts?: Quiz_attemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutClassInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type StudentCreateManyClassInputEnvelope = {
    data: StudentCreateManyClassInput | StudentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type Relationship_teacher_subject_classCreateWithoutClassInput = {
    teacher_subject: Relationship_teacher_subjectCreateNestedOneWithoutTeacher_subject_classesInput
    quizzes?: QuizCreateNestedManyWithoutTeacher_subject_classInput
  }

  export type Relationship_teacher_subject_classUncheckedCreateWithoutClassInput = {
    id?: number
    teacher_subject_id: number
    quizzes?: QuizUncheckedCreateNestedManyWithoutTeacher_subject_classInput
  }

  export type Relationship_teacher_subject_classCreateOrConnectWithoutClassInput = {
    where: Relationship_teacher_subject_classWhereUniqueInput
    create: XOR<Relationship_teacher_subject_classCreateWithoutClassInput, Relationship_teacher_subject_classUncheckedCreateWithoutClassInput>
  }

  export type Relationship_teacher_subject_classCreateManyClassInputEnvelope = {
    data: Relationship_teacher_subject_classCreateManyClassInput | Relationship_teacher_subject_classCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutClassInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutClassInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
  }

  export type StudentUpdateManyWithWhereWithoutClassInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutClassInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    enrollment?: StringFilter<"Student"> | string
    user_id?: IntFilter<"Student"> | number
    class_id?: IntFilter<"Student"> | number
    created_at?: DateTimeFilter<"Student"> | Date | string
    modified_at?: DateTimeFilter<"Student"> | Date | string
  }

  export type Relationship_teacher_subject_classUpsertWithWhereUniqueWithoutClassInput = {
    where: Relationship_teacher_subject_classWhereUniqueInput
    update: XOR<Relationship_teacher_subject_classUpdateWithoutClassInput, Relationship_teacher_subject_classUncheckedUpdateWithoutClassInput>
    create: XOR<Relationship_teacher_subject_classCreateWithoutClassInput, Relationship_teacher_subject_classUncheckedCreateWithoutClassInput>
  }

  export type Relationship_teacher_subject_classUpdateWithWhereUniqueWithoutClassInput = {
    where: Relationship_teacher_subject_classWhereUniqueInput
    data: XOR<Relationship_teacher_subject_classUpdateWithoutClassInput, Relationship_teacher_subject_classUncheckedUpdateWithoutClassInput>
  }

  export type Relationship_teacher_subject_classUpdateManyWithWhereWithoutClassInput = {
    where: Relationship_teacher_subject_classScalarWhereInput
    data: XOR<Relationship_teacher_subject_classUpdateManyMutationInput, Relationship_teacher_subject_classUncheckedUpdateManyWithoutClassInput>
  }

  export type UserCreateWithoutStudentInput = {
    name: string
    email: string
    birth_date: Date | string
    cpf: string
    created_at?: Date | string
    modified_at?: Date | string
    role: $Enums.Role
    hashed_password: string
    teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: number
    name: string
    email: string
    birth_date: Date | string
    cpf: string
    created_at?: Date | string
    modified_at?: Date | string
    role: $Enums.Role
    hashed_password: string
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type ClassCreateWithoutStudentsInput = {
    name: string
    shift: $Enums.Shift
    course: string
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subject_classes?: Relationship_teacher_subject_classCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    shift: $Enums.Shift
    course: string
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subject_classes?: Relationship_teacher_subject_classUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type Quiz_attemptCreateWithoutStudentInput = {
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    quiz: QuizCreateNestedOneWithoutQuiz_attemptsInput
    question_responses?: Question_responseCreateNestedManyWithoutQuiz_attemptInput
  }

  export type Quiz_attemptUncheckedCreateWithoutStudentInput = {
    id?: number
    quiz_id: number
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    question_responses?: Question_responseUncheckedCreateNestedManyWithoutQuiz_attemptInput
  }

  export type Quiz_attemptCreateOrConnectWithoutStudentInput = {
    where: Quiz_attemptWhereUniqueInput
    create: XOR<Quiz_attemptCreateWithoutStudentInput, Quiz_attemptUncheckedCreateWithoutStudentInput>
  }

  export type Quiz_attemptCreateManyStudentInputEnvelope = {
    data: Quiz_attemptCreateManyStudentInput | Quiz_attemptCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hashed_password?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hashed_password?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ClassUpsertWithoutStudentsInput = {
    update: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumShiftFieldUpdateOperationsInput | $Enums.Shift
    course?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subject_classes?: Relationship_teacher_subject_classUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumShiftFieldUpdateOperationsInput | $Enums.Shift
    course?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subject_classes?: Relationship_teacher_subject_classUncheckedUpdateManyWithoutClassNestedInput
  }

  export type Quiz_attemptUpsertWithWhereUniqueWithoutStudentInput = {
    where: Quiz_attemptWhereUniqueInput
    update: XOR<Quiz_attemptUpdateWithoutStudentInput, Quiz_attemptUncheckedUpdateWithoutStudentInput>
    create: XOR<Quiz_attemptCreateWithoutStudentInput, Quiz_attemptUncheckedCreateWithoutStudentInput>
  }

  export type Quiz_attemptUpdateWithWhereUniqueWithoutStudentInput = {
    where: Quiz_attemptWhereUniqueInput
    data: XOR<Quiz_attemptUpdateWithoutStudentInput, Quiz_attemptUncheckedUpdateWithoutStudentInput>
  }

  export type Quiz_attemptUpdateManyWithWhereWithoutStudentInput = {
    where: Quiz_attemptScalarWhereInput
    data: XOR<Quiz_attemptUpdateManyMutationInput, Quiz_attemptUncheckedUpdateManyWithoutStudentInput>
  }

  export type Quiz_attemptScalarWhereInput = {
    AND?: Quiz_attemptScalarWhereInput | Quiz_attemptScalarWhereInput[]
    OR?: Quiz_attemptScalarWhereInput[]
    NOT?: Quiz_attemptScalarWhereInput | Quiz_attemptScalarWhereInput[]
    id?: IntFilter<"Quiz_attempt"> | number
    student_id?: IntFilter<"Quiz_attempt"> | number
    quiz_id?: IntFilter<"Quiz_attempt"> | number
    started_at?: DateTimeFilter<"Quiz_attempt"> | Date | string
    finished_at?: DateTimeNullableFilter<"Quiz_attempt"> | Date | string | null
    status?: EnumAttemptStatusFilter<"Quiz_attempt"> | $Enums.AttemptStatus
    total_score?: DecimalFilter<"Quiz_attempt"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Quiz_attempt"> | Date | string
    modified_at?: DateTimeFilter<"Quiz_attempt"> | Date | string
  }

  export type ClassCreateWithoutTeacher_subject_classesInput = {
    name: string
    shift: $Enums.Shift
    course: string
    created_at?: Date | string
    modified_at?: Date | string
    students?: StudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeacher_subject_classesInput = {
    id?: number
    name: string
    shift: $Enums.Shift
    course: string
    created_at?: Date | string
    modified_at?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeacher_subject_classesInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeacher_subject_classesInput, ClassUncheckedCreateWithoutTeacher_subject_classesInput>
  }

  export type Relationship_teacher_subjectCreateWithoutTeacher_subject_classesInput = {
    subject: SubjectCreateNestedOneWithoutTeacher_subjectsInput
    teacher: TeacherCreateNestedOneWithoutTeacher_subjectsInput
  }

  export type Relationship_teacher_subjectUncheckedCreateWithoutTeacher_subject_classesInput = {
    id?: number
    subject_id: number
    teacher_id: number
  }

  export type Relationship_teacher_subjectCreateOrConnectWithoutTeacher_subject_classesInput = {
    where: Relationship_teacher_subjectWhereUniqueInput
    create: XOR<Relationship_teacher_subjectCreateWithoutTeacher_subject_classesInput, Relationship_teacher_subjectUncheckedCreateWithoutTeacher_subject_classesInput>
  }

  export type QuizCreateWithoutTeacher_subject_classInput = {
    title: string
    icon: string
    description: string
    duration_minutes?: number | null
    max_points?: Decimal | DecimalJsLike | number | string
    max_attempt?: number | null
    visibility?: $Enums.QuizVisibility
    created_at?: Date | string
    modified_at?: Date | string
    questions?: QuestionCreateNestedManyWithoutQuizInput
    quiz_attempts?: Quiz_attemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutTeacher_subject_classInput = {
    id?: number
    title: string
    icon: string
    description: string
    duration_minutes?: number | null
    max_points?: Decimal | DecimalJsLike | number | string
    max_attempt?: number | null
    visibility?: $Enums.QuizVisibility
    created_at?: Date | string
    modified_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    quiz_attempts?: Quiz_attemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutTeacher_subject_classInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutTeacher_subject_classInput, QuizUncheckedCreateWithoutTeacher_subject_classInput>
  }

  export type QuizCreateManyTeacher_subject_classInputEnvelope = {
    data: QuizCreateManyTeacher_subject_classInput | QuizCreateManyTeacher_subject_classInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutTeacher_subject_classesInput = {
    update: XOR<ClassUpdateWithoutTeacher_subject_classesInput, ClassUncheckedUpdateWithoutTeacher_subject_classesInput>
    create: XOR<ClassCreateWithoutTeacher_subject_classesInput, ClassUncheckedCreateWithoutTeacher_subject_classesInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutTeacher_subject_classesInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutTeacher_subject_classesInput, ClassUncheckedUpdateWithoutTeacher_subject_classesInput>
  }

  export type ClassUpdateWithoutTeacher_subject_classesInput = {
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumShiftFieldUpdateOperationsInput | $Enums.Shift
    course?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeacher_subject_classesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shift?: EnumShiftFieldUpdateOperationsInput | $Enums.Shift
    course?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type Relationship_teacher_subjectUpsertWithoutTeacher_subject_classesInput = {
    update: XOR<Relationship_teacher_subjectUpdateWithoutTeacher_subject_classesInput, Relationship_teacher_subjectUncheckedUpdateWithoutTeacher_subject_classesInput>
    create: XOR<Relationship_teacher_subjectCreateWithoutTeacher_subject_classesInput, Relationship_teacher_subjectUncheckedCreateWithoutTeacher_subject_classesInput>
    where?: Relationship_teacher_subjectWhereInput
  }

  export type Relationship_teacher_subjectUpdateToOneWithWhereWithoutTeacher_subject_classesInput = {
    where?: Relationship_teacher_subjectWhereInput
    data: XOR<Relationship_teacher_subjectUpdateWithoutTeacher_subject_classesInput, Relationship_teacher_subjectUncheckedUpdateWithoutTeacher_subject_classesInput>
  }

  export type Relationship_teacher_subjectUpdateWithoutTeacher_subject_classesInput = {
    subject?: SubjectUpdateOneRequiredWithoutTeacher_subjectsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutTeacher_subjectsNestedInput
  }

  export type Relationship_teacher_subjectUncheckedUpdateWithoutTeacher_subject_classesInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuizUpsertWithWhereUniqueWithoutTeacher_subject_classInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutTeacher_subject_classInput, QuizUncheckedUpdateWithoutTeacher_subject_classInput>
    create: XOR<QuizCreateWithoutTeacher_subject_classInput, QuizUncheckedCreateWithoutTeacher_subject_classInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutTeacher_subject_classInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutTeacher_subject_classInput, QuizUncheckedUpdateWithoutTeacher_subject_classInput>
  }

  export type QuizUpdateManyWithWhereWithoutTeacher_subject_classInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutTeacher_subject_classInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: IntFilter<"Quiz"> | number
    title?: StringFilter<"Quiz"> | string
    icon?: StringFilter<"Quiz"> | string
    description?: StringFilter<"Quiz"> | string
    duration_minutes?: IntNullableFilter<"Quiz"> | number | null
    max_points?: DecimalFilter<"Quiz"> | Decimal | DecimalJsLike | number | string
    max_attempt?: IntNullableFilter<"Quiz"> | number | null
    visibility?: EnumQuizVisibilityFilter<"Quiz"> | $Enums.QuizVisibility
    created_at?: DateTimeFilter<"Quiz"> | Date | string
    modified_at?: DateTimeFilter<"Quiz"> | Date | string
    teacher_subject_class_id?: IntFilter<"Quiz"> | number
  }

  export type Relationship_teacher_subject_classCreateWithoutQuizzesInput = {
    class: ClassCreateNestedOneWithoutTeacher_subject_classesInput
    teacher_subject: Relationship_teacher_subjectCreateNestedOneWithoutTeacher_subject_classesInput
  }

  export type Relationship_teacher_subject_classUncheckedCreateWithoutQuizzesInput = {
    id?: number
    class_id: number
    teacher_subject_id: number
  }

  export type Relationship_teacher_subject_classCreateOrConnectWithoutQuizzesInput = {
    where: Relationship_teacher_subject_classWhereUniqueInput
    create: XOR<Relationship_teacher_subject_classCreateWithoutQuizzesInput, Relationship_teacher_subject_classUncheckedCreateWithoutQuizzesInput>
  }

  export type QuestionCreateWithoutQuizInput = {
    statement: string
    points: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
    question_images?: Question_imagesCreateNestedManyWithoutQuestionInput
    question_responses?: Question_responseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    id?: number
    statement: string
    points: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
    question_images?: Question_imagesUncheckedCreateNestedManyWithoutQuestionInput
    question_responses?: Question_responseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type Quiz_attemptCreateWithoutQuizInput = {
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    student: StudentCreateNestedOneWithoutQuiz_attemptsInput
    question_responses?: Question_responseCreateNestedManyWithoutQuiz_attemptInput
  }

  export type Quiz_attemptUncheckedCreateWithoutQuizInput = {
    id?: number
    student_id: number
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    question_responses?: Question_responseUncheckedCreateNestedManyWithoutQuiz_attemptInput
  }

  export type Quiz_attemptCreateOrConnectWithoutQuizInput = {
    where: Quiz_attemptWhereUniqueInput
    create: XOR<Quiz_attemptCreateWithoutQuizInput, Quiz_attemptUncheckedCreateWithoutQuizInput>
  }

  export type Quiz_attemptCreateManyQuizInputEnvelope = {
    data: Quiz_attemptCreateManyQuizInput | Quiz_attemptCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type Relationship_teacher_subject_classUpsertWithoutQuizzesInput = {
    update: XOR<Relationship_teacher_subject_classUpdateWithoutQuizzesInput, Relationship_teacher_subject_classUncheckedUpdateWithoutQuizzesInput>
    create: XOR<Relationship_teacher_subject_classCreateWithoutQuizzesInput, Relationship_teacher_subject_classUncheckedCreateWithoutQuizzesInput>
    where?: Relationship_teacher_subject_classWhereInput
  }

  export type Relationship_teacher_subject_classUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: Relationship_teacher_subject_classWhereInput
    data: XOR<Relationship_teacher_subject_classUpdateWithoutQuizzesInput, Relationship_teacher_subject_classUncheckedUpdateWithoutQuizzesInput>
  }

  export type Relationship_teacher_subject_classUpdateWithoutQuizzesInput = {
    class?: ClassUpdateOneRequiredWithoutTeacher_subject_classesNestedInput
    teacher_subject?: Relationship_teacher_subjectUpdateOneRequiredWithoutTeacher_subject_classesNestedInput
  }

  export type Relationship_teacher_subject_classUncheckedUpdateWithoutQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    teacher_subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    statement?: StringFilter<"Question"> | string
    points?: DecimalFilter<"Question"> | Decimal | DecimalJsLike | number | string
    quiz_id?: IntFilter<"Question"> | number
    created_at?: DateTimeFilter<"Question"> | Date | string
    modified_at?: DateTimeFilter<"Question"> | Date | string
  }

  export type Quiz_attemptUpsertWithWhereUniqueWithoutQuizInput = {
    where: Quiz_attemptWhereUniqueInput
    update: XOR<Quiz_attemptUpdateWithoutQuizInput, Quiz_attemptUncheckedUpdateWithoutQuizInput>
    create: XOR<Quiz_attemptCreateWithoutQuizInput, Quiz_attemptUncheckedCreateWithoutQuizInput>
  }

  export type Quiz_attemptUpdateWithWhereUniqueWithoutQuizInput = {
    where: Quiz_attemptWhereUniqueInput
    data: XOR<Quiz_attemptUpdateWithoutQuizInput, Quiz_attemptUncheckedUpdateWithoutQuizInput>
  }

  export type Quiz_attemptUpdateManyWithWhereWithoutQuizInput = {
    where: Quiz_attemptScalarWhereInput
    data: XOR<Quiz_attemptUpdateManyMutationInput, Quiz_attemptUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutQuestionsInput = {
    title: string
    icon: string
    description: string
    duration_minutes?: number | null
    max_points?: Decimal | DecimalJsLike | number | string
    max_attempt?: number | null
    visibility?: $Enums.QuizVisibility
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subject_class: Relationship_teacher_subject_classCreateNestedOneWithoutQuizzesInput
    quiz_attempts?: Quiz_attemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: number
    title: string
    icon: string
    description: string
    duration_minutes?: number | null
    max_points?: Decimal | DecimalJsLike | number | string
    max_attempt?: number | null
    visibility?: $Enums.QuizVisibility
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subject_class_id: number
    quiz_attempts?: Quiz_attemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type AlternativeCreateWithoutQuestionInput = {
    response: string
    correct_alternative?: boolean
    created_at?: Date | string
    modified_at?: Date | string
    question_responses?: Question_responseCreateNestedManyWithoutMarked_alternativeInput
  }

  export type AlternativeUncheckedCreateWithoutQuestionInput = {
    id?: number
    response: string
    correct_alternative?: boolean
    created_at?: Date | string
    modified_at?: Date | string
    question_responses?: Question_responseUncheckedCreateNestedManyWithoutMarked_alternativeInput
  }

  export type AlternativeCreateOrConnectWithoutQuestionInput = {
    where: AlternativeWhereUniqueInput
    create: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput>
  }

  export type AlternativeCreateManyQuestionInputEnvelope = {
    data: AlternativeCreateManyQuestionInput | AlternativeCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type Question_imagesCreateWithoutQuestionInput = {
    image_path: string
    alt_text: string
    created_at?: Date | string
  }

  export type Question_imagesUncheckedCreateWithoutQuestionInput = {
    id?: number
    image_path: string
    alt_text: string
    created_at?: Date | string
  }

  export type Question_imagesCreateOrConnectWithoutQuestionInput = {
    where: Question_imagesWhereUniqueInput
    create: XOR<Question_imagesCreateWithoutQuestionInput, Question_imagesUncheckedCreateWithoutQuestionInput>
  }

  export type Question_imagesCreateManyQuestionInputEnvelope = {
    data: Question_imagesCreateManyQuestionInput | Question_imagesCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type Question_responseCreateWithoutQuestionInput = {
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    marked_alternative: AlternativeCreateNestedOneWithoutQuestion_responsesInput
    quiz_attempt: Quiz_attemptCreateNestedOneWithoutQuestion_responsesInput
  }

  export type Question_responseUncheckedCreateWithoutQuestionInput = {
    id?: number
    marked_alternative_id: number
    quiz_attempt_id: number
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Question_responseCreateOrConnectWithoutQuestionInput = {
    where: Question_responseWhereUniqueInput
    create: XOR<Question_responseCreateWithoutQuestionInput, Question_responseUncheckedCreateWithoutQuestionInput>
  }

  export type Question_responseCreateManyQuestionInputEnvelope = {
    data: Question_responseCreateManyQuestionInput | Question_responseCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subject_class?: Relationship_teacher_subject_classUpdateOneRequiredWithoutQuizzesNestedInput
    quiz_attempts?: Quiz_attemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subject_class_id?: IntFieldUpdateOperationsInput | number
    quiz_attempts?: Quiz_attemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type AlternativeUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AlternativeWhereUniqueInput
    update: XOR<AlternativeUpdateWithoutQuestionInput, AlternativeUncheckedUpdateWithoutQuestionInput>
    create: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput>
  }

  export type AlternativeUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AlternativeWhereUniqueInput
    data: XOR<AlternativeUpdateWithoutQuestionInput, AlternativeUncheckedUpdateWithoutQuestionInput>
  }

  export type AlternativeUpdateManyWithWhereWithoutQuestionInput = {
    where: AlternativeScalarWhereInput
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AlternativeScalarWhereInput = {
    AND?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
    OR?: AlternativeScalarWhereInput[]
    NOT?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
    id?: IntFilter<"Alternative"> | number
    question_id?: IntFilter<"Alternative"> | number
    response?: StringFilter<"Alternative"> | string
    correct_alternative?: BoolFilter<"Alternative"> | boolean
    created_at?: DateTimeFilter<"Alternative"> | Date | string
    modified_at?: DateTimeFilter<"Alternative"> | Date | string
  }

  export type Question_imagesUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Question_imagesWhereUniqueInput
    update: XOR<Question_imagesUpdateWithoutQuestionInput, Question_imagesUncheckedUpdateWithoutQuestionInput>
    create: XOR<Question_imagesCreateWithoutQuestionInput, Question_imagesUncheckedCreateWithoutQuestionInput>
  }

  export type Question_imagesUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Question_imagesWhereUniqueInput
    data: XOR<Question_imagesUpdateWithoutQuestionInput, Question_imagesUncheckedUpdateWithoutQuestionInput>
  }

  export type Question_imagesUpdateManyWithWhereWithoutQuestionInput = {
    where: Question_imagesScalarWhereInput
    data: XOR<Question_imagesUpdateManyMutationInput, Question_imagesUncheckedUpdateManyWithoutQuestionInput>
  }

  export type Question_imagesScalarWhereInput = {
    AND?: Question_imagesScalarWhereInput | Question_imagesScalarWhereInput[]
    OR?: Question_imagesScalarWhereInput[]
    NOT?: Question_imagesScalarWhereInput | Question_imagesScalarWhereInput[]
    id?: IntFilter<"Question_images"> | number
    image_path?: StringFilter<"Question_images"> | string
    alt_text?: StringFilter<"Question_images"> | string
    question_id?: IntFilter<"Question_images"> | number
    created_at?: DateTimeFilter<"Question_images"> | Date | string
  }

  export type Question_responseUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Question_responseWhereUniqueInput
    update: XOR<Question_responseUpdateWithoutQuestionInput, Question_responseUncheckedUpdateWithoutQuestionInput>
    create: XOR<Question_responseCreateWithoutQuestionInput, Question_responseUncheckedCreateWithoutQuestionInput>
  }

  export type Question_responseUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Question_responseWhereUniqueInput
    data: XOR<Question_responseUpdateWithoutQuestionInput, Question_responseUncheckedUpdateWithoutQuestionInput>
  }

  export type Question_responseUpdateManyWithWhereWithoutQuestionInput = {
    where: Question_responseScalarWhereInput
    data: XOR<Question_responseUpdateManyMutationInput, Question_responseUncheckedUpdateManyWithoutQuestionInput>
  }

  export type Question_responseScalarWhereInput = {
    AND?: Question_responseScalarWhereInput | Question_responseScalarWhereInput[]
    OR?: Question_responseScalarWhereInput[]
    NOT?: Question_responseScalarWhereInput | Question_responseScalarWhereInput[]
    id?: IntFilter<"Question_response"> | number
    question_id?: IntFilter<"Question_response"> | number
    marked_alternative_id?: IntFilter<"Question_response"> | number
    quiz_attempt_id?: IntFilter<"Question_response"> | number
    is_correct?: BoolFilter<"Question_response"> | boolean
    points_earned?: DecimalFilter<"Question_response"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Question_response"> | Date | string
    modified_at?: DateTimeFilter<"Question_response"> | Date | string
  }

  export type QuestionCreateWithoutAlternativesInput = {
    statement: string
    points: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    question_images?: Question_imagesCreateNestedManyWithoutQuestionInput
    question_responses?: Question_responseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAlternativesInput = {
    id?: number
    statement: string
    points: Decimal | DecimalJsLike | number | string
    quiz_id: number
    created_at?: Date | string
    modified_at?: Date | string
    question_images?: Question_imagesUncheckedCreateNestedManyWithoutQuestionInput
    question_responses?: Question_responseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAlternativesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
  }

  export type Question_responseCreateWithoutMarked_alternativeInput = {
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    question: QuestionCreateNestedOneWithoutQuestion_responsesInput
    quiz_attempt: Quiz_attemptCreateNestedOneWithoutQuestion_responsesInput
  }

  export type Question_responseUncheckedCreateWithoutMarked_alternativeInput = {
    id?: number
    question_id: number
    quiz_attempt_id: number
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Question_responseCreateOrConnectWithoutMarked_alternativeInput = {
    where: Question_responseWhereUniqueInput
    create: XOR<Question_responseCreateWithoutMarked_alternativeInput, Question_responseUncheckedCreateWithoutMarked_alternativeInput>
  }

  export type Question_responseCreateManyMarked_alternativeInputEnvelope = {
    data: Question_responseCreateManyMarked_alternativeInput | Question_responseCreateManyMarked_alternativeInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutAlternativesInput = {
    update: XOR<QuestionUpdateWithoutAlternativesInput, QuestionUncheckedUpdateWithoutAlternativesInput>
    create: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAlternativesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAlternativesInput, QuestionUncheckedUpdateWithoutAlternativesInput>
  }

  export type QuestionUpdateWithoutAlternativesInput = {
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    question_images?: Question_imagesUpdateManyWithoutQuestionNestedInput
    question_responses?: Question_responseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAlternativesInput = {
    id?: IntFieldUpdateOperationsInput | number
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quiz_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_images?: Question_imagesUncheckedUpdateManyWithoutQuestionNestedInput
    question_responses?: Question_responseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type Question_responseUpsertWithWhereUniqueWithoutMarked_alternativeInput = {
    where: Question_responseWhereUniqueInput
    update: XOR<Question_responseUpdateWithoutMarked_alternativeInput, Question_responseUncheckedUpdateWithoutMarked_alternativeInput>
    create: XOR<Question_responseCreateWithoutMarked_alternativeInput, Question_responseUncheckedCreateWithoutMarked_alternativeInput>
  }

  export type Question_responseUpdateWithWhereUniqueWithoutMarked_alternativeInput = {
    where: Question_responseWhereUniqueInput
    data: XOR<Question_responseUpdateWithoutMarked_alternativeInput, Question_responseUncheckedUpdateWithoutMarked_alternativeInput>
  }

  export type Question_responseUpdateManyWithWhereWithoutMarked_alternativeInput = {
    where: Question_responseScalarWhereInput
    data: XOR<Question_responseUpdateManyMutationInput, Question_responseUncheckedUpdateManyWithoutMarked_alternativeInput>
  }

  export type QuestionCreateWithoutQuestion_imagesInput = {
    statement: string
    points: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
    question_responses?: Question_responseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuestion_imagesInput = {
    id?: number
    statement: string
    points: Decimal | DecimalJsLike | number | string
    quiz_id: number
    created_at?: Date | string
    modified_at?: Date | string
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
    question_responses?: Question_responseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuestion_imagesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestion_imagesInput, QuestionUncheckedCreateWithoutQuestion_imagesInput>
  }

  export type QuestionUpsertWithoutQuestion_imagesInput = {
    update: XOR<QuestionUpdateWithoutQuestion_imagesInput, QuestionUncheckedUpdateWithoutQuestion_imagesInput>
    create: XOR<QuestionCreateWithoutQuestion_imagesInput, QuestionUncheckedCreateWithoutQuestion_imagesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutQuestion_imagesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutQuestion_imagesInput, QuestionUncheckedUpdateWithoutQuestion_imagesInput>
  }

  export type QuestionUpdateWithoutQuestion_imagesInput = {
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
    question_responses?: Question_responseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuestion_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quiz_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
    question_responses?: Question_responseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type StudentCreateWithoutQuiz_attemptsInput = {
    enrollment: string
    created_at?: Date | string
    modified_at?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    class: ClassCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutQuiz_attemptsInput = {
    id?: number
    enrollment: string
    user_id: number
    class_id: number
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type StudentCreateOrConnectWithoutQuiz_attemptsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutQuiz_attemptsInput, StudentUncheckedCreateWithoutQuiz_attemptsInput>
  }

  export type QuizCreateWithoutQuiz_attemptsInput = {
    title: string
    icon: string
    description: string
    duration_minutes?: number | null
    max_points?: Decimal | DecimalJsLike | number | string
    max_attempt?: number | null
    visibility?: $Enums.QuizVisibility
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subject_class: Relationship_teacher_subject_classCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuiz_attemptsInput = {
    id?: number
    title: string
    icon: string
    description: string
    duration_minutes?: number | null
    max_points?: Decimal | DecimalJsLike | number | string
    max_attempt?: number | null
    visibility?: $Enums.QuizVisibility
    created_at?: Date | string
    modified_at?: Date | string
    teacher_subject_class_id: number
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuiz_attemptsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuiz_attemptsInput, QuizUncheckedCreateWithoutQuiz_attemptsInput>
  }

  export type Question_responseCreateWithoutQuiz_attemptInput = {
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    question: QuestionCreateNestedOneWithoutQuestion_responsesInput
    marked_alternative: AlternativeCreateNestedOneWithoutQuestion_responsesInput
  }

  export type Question_responseUncheckedCreateWithoutQuiz_attemptInput = {
    id?: number
    question_id: number
    marked_alternative_id: number
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Question_responseCreateOrConnectWithoutQuiz_attemptInput = {
    where: Question_responseWhereUniqueInput
    create: XOR<Question_responseCreateWithoutQuiz_attemptInput, Question_responseUncheckedCreateWithoutQuiz_attemptInput>
  }

  export type Question_responseCreateManyQuiz_attemptInputEnvelope = {
    data: Question_responseCreateManyQuiz_attemptInput | Question_responseCreateManyQuiz_attemptInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutQuiz_attemptsInput = {
    update: XOR<StudentUpdateWithoutQuiz_attemptsInput, StudentUncheckedUpdateWithoutQuiz_attemptsInput>
    create: XOR<StudentCreateWithoutQuiz_attemptsInput, StudentUncheckedCreateWithoutQuiz_attemptsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutQuiz_attemptsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutQuiz_attemptsInput, StudentUncheckedUpdateWithoutQuiz_attemptsInput>
  }

  export type StudentUpdateWithoutQuiz_attemptsInput = {
    enrollment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutQuiz_attemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpsertWithoutQuiz_attemptsInput = {
    update: XOR<QuizUpdateWithoutQuiz_attemptsInput, QuizUncheckedUpdateWithoutQuiz_attemptsInput>
    create: XOR<QuizCreateWithoutQuiz_attemptsInput, QuizUncheckedCreateWithoutQuiz_attemptsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuiz_attemptsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuiz_attemptsInput, QuizUncheckedUpdateWithoutQuiz_attemptsInput>
  }

  export type QuizUpdateWithoutQuiz_attemptsInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subject_class?: Relationship_teacher_subject_classUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuiz_attemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subject_class_id?: IntFieldUpdateOperationsInput | number
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type Question_responseUpsertWithWhereUniqueWithoutQuiz_attemptInput = {
    where: Question_responseWhereUniqueInput
    update: XOR<Question_responseUpdateWithoutQuiz_attemptInput, Question_responseUncheckedUpdateWithoutQuiz_attemptInput>
    create: XOR<Question_responseCreateWithoutQuiz_attemptInput, Question_responseUncheckedCreateWithoutQuiz_attemptInput>
  }

  export type Question_responseUpdateWithWhereUniqueWithoutQuiz_attemptInput = {
    where: Question_responseWhereUniqueInput
    data: XOR<Question_responseUpdateWithoutQuiz_attemptInput, Question_responseUncheckedUpdateWithoutQuiz_attemptInput>
  }

  export type Question_responseUpdateManyWithWhereWithoutQuiz_attemptInput = {
    where: Question_responseScalarWhereInput
    data: XOR<Question_responseUpdateManyMutationInput, Question_responseUncheckedUpdateManyWithoutQuiz_attemptInput>
  }

  export type QuestionCreateWithoutQuestion_responsesInput = {
    statement: string
    points: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
    question_images?: Question_imagesCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuestion_responsesInput = {
    id?: number
    statement: string
    points: Decimal | DecimalJsLike | number | string
    quiz_id: number
    created_at?: Date | string
    modified_at?: Date | string
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
    question_images?: Question_imagesUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuestion_responsesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestion_responsesInput, QuestionUncheckedCreateWithoutQuestion_responsesInput>
  }

  export type AlternativeCreateWithoutQuestion_responsesInput = {
    response: string
    correct_alternative?: boolean
    created_at?: Date | string
    modified_at?: Date | string
    question: QuestionCreateNestedOneWithoutAlternativesInput
  }

  export type AlternativeUncheckedCreateWithoutQuestion_responsesInput = {
    id?: number
    question_id: number
    response: string
    correct_alternative?: boolean
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type AlternativeCreateOrConnectWithoutQuestion_responsesInput = {
    where: AlternativeWhereUniqueInput
    create: XOR<AlternativeCreateWithoutQuestion_responsesInput, AlternativeUncheckedCreateWithoutQuestion_responsesInput>
  }

  export type Quiz_attemptCreateWithoutQuestion_responsesInput = {
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
    student: StudentCreateNestedOneWithoutQuiz_attemptsInput
    quiz: QuizCreateNestedOneWithoutQuiz_attemptsInput
  }

  export type Quiz_attemptUncheckedCreateWithoutQuestion_responsesInput = {
    id?: number
    student_id: number
    quiz_id: number
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Quiz_attemptCreateOrConnectWithoutQuestion_responsesInput = {
    where: Quiz_attemptWhereUniqueInput
    create: XOR<Quiz_attemptCreateWithoutQuestion_responsesInput, Quiz_attemptUncheckedCreateWithoutQuestion_responsesInput>
  }

  export type QuestionUpsertWithoutQuestion_responsesInput = {
    update: XOR<QuestionUpdateWithoutQuestion_responsesInput, QuestionUncheckedUpdateWithoutQuestion_responsesInput>
    create: XOR<QuestionCreateWithoutQuestion_responsesInput, QuestionUncheckedCreateWithoutQuestion_responsesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutQuestion_responsesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutQuestion_responsesInput, QuestionUncheckedUpdateWithoutQuestion_responsesInput>
  }

  export type QuestionUpdateWithoutQuestion_responsesInput = {
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
    question_images?: Question_imagesUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuestion_responsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quiz_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
    question_images?: Question_imagesUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AlternativeUpsertWithoutQuestion_responsesInput = {
    update: XOR<AlternativeUpdateWithoutQuestion_responsesInput, AlternativeUncheckedUpdateWithoutQuestion_responsesInput>
    create: XOR<AlternativeCreateWithoutQuestion_responsesInput, AlternativeUncheckedCreateWithoutQuestion_responsesInput>
    where?: AlternativeWhereInput
  }

  export type AlternativeUpdateToOneWithWhereWithoutQuestion_responsesInput = {
    where?: AlternativeWhereInput
    data: XOR<AlternativeUpdateWithoutQuestion_responsesInput, AlternativeUncheckedUpdateWithoutQuestion_responsesInput>
  }

  export type AlternativeUpdateWithoutQuestion_responsesInput = {
    response?: StringFieldUpdateOperationsInput | string
    correct_alternative?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAlternativesNestedInput
  }

  export type AlternativeUncheckedUpdateWithoutQuestion_responsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    response?: StringFieldUpdateOperationsInput | string
    correct_alternative?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Quiz_attemptUpsertWithoutQuestion_responsesInput = {
    update: XOR<Quiz_attemptUpdateWithoutQuestion_responsesInput, Quiz_attemptUncheckedUpdateWithoutQuestion_responsesInput>
    create: XOR<Quiz_attemptCreateWithoutQuestion_responsesInput, Quiz_attemptUncheckedCreateWithoutQuestion_responsesInput>
    where?: Quiz_attemptWhereInput
  }

  export type Quiz_attemptUpdateToOneWithWhereWithoutQuestion_responsesInput = {
    where?: Quiz_attemptWhereInput
    data: XOR<Quiz_attemptUpdateWithoutQuestion_responsesInput, Quiz_attemptUncheckedUpdateWithoutQuestion_responsesInput>
  }

  export type Quiz_attemptUpdateWithoutQuestion_responsesInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutQuiz_attemptsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutQuiz_attemptsNestedInput
  }

  export type Quiz_attemptUncheckedUpdateWithoutQuestion_responsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    quiz_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Relationship_teacher_subjectCreateManyTeacherInput = {
    id?: number
    subject_id: number
  }

  export type Relationship_teacher_subjectUpdateWithoutTeacherInput = {
    subject?: SubjectUpdateOneRequiredWithoutTeacher_subjectsNestedInput
    teacher_subject_classes?: Relationship_teacher_subject_classUpdateManyWithoutTeacher_subjectNestedInput
  }

  export type Relationship_teacher_subjectUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_subject_classes?: Relationship_teacher_subject_classUncheckedUpdateManyWithoutTeacher_subjectNestedInput
  }

  export type Relationship_teacher_subjectUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type Relationship_teacher_subjectCreateManySubjectInput = {
    id?: number
    teacher_id: number
  }

  export type Relationship_teacher_subjectUpdateWithoutSubjectInput = {
    teacher?: TeacherUpdateOneRequiredWithoutTeacher_subjectsNestedInput
    teacher_subject_classes?: Relationship_teacher_subject_classUpdateManyWithoutTeacher_subjectNestedInput
  }

  export type Relationship_teacher_subjectUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    teacher_subject_classes?: Relationship_teacher_subject_classUncheckedUpdateManyWithoutTeacher_subjectNestedInput
  }

  export type Relationship_teacher_subjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type Relationship_teacher_subject_classCreateManyTeacher_subjectInput = {
    id?: number
    class_id: number
  }

  export type Relationship_teacher_subject_classUpdateWithoutTeacher_subjectInput = {
    class?: ClassUpdateOneRequiredWithoutTeacher_subject_classesNestedInput
    quizzes?: QuizUpdateManyWithoutTeacher_subject_classNestedInput
  }

  export type Relationship_teacher_subject_classUncheckedUpdateWithoutTeacher_subjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    quizzes?: QuizUncheckedUpdateManyWithoutTeacher_subject_classNestedInput
  }

  export type Relationship_teacher_subject_classUncheckedUpdateManyWithoutTeacher_subjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type StudentCreateManyClassInput = {
    id?: number
    enrollment: string
    user_id: number
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Relationship_teacher_subject_classCreateManyClassInput = {
    id?: number
    teacher_subject_id: number
  }

  export type StudentUpdateWithoutClassInput = {
    enrollment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    quiz_attempts?: Quiz_attemptUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz_attempts?: Quiz_attemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Relationship_teacher_subject_classUpdateWithoutClassInput = {
    teacher_subject?: Relationship_teacher_subjectUpdateOneRequiredWithoutTeacher_subject_classesNestedInput
    quizzes?: QuizUpdateManyWithoutTeacher_subject_classNestedInput
  }

  export type Relationship_teacher_subject_classUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_subject_id?: IntFieldUpdateOperationsInput | number
    quizzes?: QuizUncheckedUpdateManyWithoutTeacher_subject_classNestedInput
  }

  export type Relationship_teacher_subject_classUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type Quiz_attemptCreateManyStudentInput = {
    id?: number
    quiz_id: number
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Quiz_attemptUpdateWithoutStudentInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuiz_attemptsNestedInput
    question_responses?: Question_responseUpdateManyWithoutQuiz_attemptNestedInput
  }

  export type Quiz_attemptUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_responses?: Question_responseUncheckedUpdateManyWithoutQuiz_attemptNestedInput
  }

  export type Quiz_attemptUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateManyTeacher_subject_classInput = {
    id?: number
    title: string
    icon: string
    description: string
    duration_minutes?: number | null
    max_points?: Decimal | DecimalJsLike | number | string
    max_attempt?: number | null
    visibility?: $Enums.QuizVisibility
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type QuizUpdateWithoutTeacher_subject_classInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    quiz_attempts?: Quiz_attemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutTeacher_subject_classInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    quiz_attempts?: Quiz_attemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutTeacher_subject_classInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    max_points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_attempt?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: EnumQuizVisibilityFieldUpdateOperationsInput | $Enums.QuizVisibility
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyQuizInput = {
    id?: number
    statement: string
    points: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Quiz_attemptCreateManyQuizInput = {
    id?: number
    student_id: number
    started_at?: Date | string
    finished_at?: Date | string | null
    status?: $Enums.AttemptStatus
    total_score?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type QuestionUpdateWithoutQuizInput = {
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
    question_images?: Question_imagesUpdateManyWithoutQuestionNestedInput
    question_responses?: Question_responseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
    question_images?: Question_imagesUncheckedUpdateManyWithoutQuestionNestedInput
    question_responses?: Question_responseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    statement?: StringFieldUpdateOperationsInput | string
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Quiz_attemptUpdateWithoutQuizInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutQuiz_attemptsNestedInput
    question_responses?: Question_responseUpdateManyWithoutQuiz_attemptNestedInput
  }

  export type Quiz_attemptUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_responses?: Question_responseUncheckedUpdateManyWithoutQuiz_attemptNestedInput
  }

  export type Quiz_attemptUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttemptStatusFieldUpdateOperationsInput | $Enums.AttemptStatus
    total_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlternativeCreateManyQuestionInput = {
    id?: number
    response: string
    correct_alternative?: boolean
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Question_imagesCreateManyQuestionInput = {
    id?: number
    image_path: string
    alt_text: string
    created_at?: Date | string
  }

  export type Question_responseCreateManyQuestionInput = {
    id?: number
    marked_alternative_id: number
    quiz_attempt_id: number
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type AlternativeUpdateWithoutQuestionInput = {
    response?: StringFieldUpdateOperationsInput | string
    correct_alternative?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_responses?: Question_responseUpdateManyWithoutMarked_alternativeNestedInput
  }

  export type AlternativeUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    response?: StringFieldUpdateOperationsInput | string
    correct_alternative?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question_responses?: Question_responseUncheckedUpdateManyWithoutMarked_alternativeNestedInput
  }

  export type AlternativeUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    response?: StringFieldUpdateOperationsInput | string
    correct_alternative?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_imagesUpdateWithoutQuestionInput = {
    image_path?: StringFieldUpdateOperationsInput | string
    alt_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_imagesUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_path?: StringFieldUpdateOperationsInput | string
    alt_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_imagesUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_path?: StringFieldUpdateOperationsInput | string
    alt_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_responseUpdateWithoutQuestionInput = {
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    marked_alternative?: AlternativeUpdateOneRequiredWithoutQuestion_responsesNestedInput
    quiz_attempt?: Quiz_attemptUpdateOneRequiredWithoutQuestion_responsesNestedInput
  }

  export type Question_responseUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    marked_alternative_id?: IntFieldUpdateOperationsInput | number
    quiz_attempt_id?: IntFieldUpdateOperationsInput | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_responseUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    marked_alternative_id?: IntFieldUpdateOperationsInput | number
    quiz_attempt_id?: IntFieldUpdateOperationsInput | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_responseCreateManyMarked_alternativeInput = {
    id?: number
    question_id: number
    quiz_attempt_id: number
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Question_responseUpdateWithoutMarked_alternativeInput = {
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutQuestion_responsesNestedInput
    quiz_attempt?: Quiz_attemptUpdateOneRequiredWithoutQuestion_responsesNestedInput
  }

  export type Question_responseUncheckedUpdateWithoutMarked_alternativeInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    quiz_attempt_id?: IntFieldUpdateOperationsInput | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_responseUncheckedUpdateManyWithoutMarked_alternativeInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    quiz_attempt_id?: IntFieldUpdateOperationsInput | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_responseCreateManyQuiz_attemptInput = {
    id?: number
    question_id: number
    marked_alternative_id: number
    is_correct: boolean
    points_earned?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    modified_at?: Date | string
  }

  export type Question_responseUpdateWithoutQuiz_attemptInput = {
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutQuestion_responsesNestedInput
    marked_alternative?: AlternativeUpdateOneRequiredWithoutQuestion_responsesNestedInput
  }

  export type Question_responseUncheckedUpdateWithoutQuiz_attemptInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    marked_alternative_id?: IntFieldUpdateOperationsInput | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Question_responseUncheckedUpdateManyWithoutQuiz_attemptInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    marked_alternative_id?: IntFieldUpdateOperationsInput | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_earned?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}