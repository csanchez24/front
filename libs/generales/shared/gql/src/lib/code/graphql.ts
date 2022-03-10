import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateGener05Input = {
  code: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Float'];
};

export type Gener02 = {
  __typename?: 'Gener02';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  roles: Array<Gener21>;
};

export type Gener04 = {
  __typename?: 'Gener04';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  message: Scalars['String'];
  read: Scalars['Boolean'];
  updatedAt: Scalars['String'];
};

export type Gener05 = {
  __typename?: 'Gener05';
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  order: Scalars['Float'];
};

export type Gener21 = {
  __typename?: 'Gener21';
  description: Scalars['String'];
  id: Scalars['ID'];
  role: Scalars['String'];
  users: Array<Gener02>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGener05: Gener05;
  updateGener02: Gener02;
};


export type MutationCreateGener05Args = {
  createGener05Input: CreateGener05Input;
};


export type MutationUpdateGener02Args = {
  updateGener02Input: UpdateGener02Input;
};

export type Query = {
  __typename?: 'Query';
  allGener05: Array<Gener05>;
  gener04: Array<Gener04>;
  gener05: Gener05;
  getProfile: Gener02;
  login?: Maybe<Auth>;
};


export type QueryGener05Args = {
  id: Scalars['Int'];
};


export type QueryLoginArgs = {
  loginInput: AuthInput;
};

export type UpdateGener02Input = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['Float']>>;
};

export type Gener04QueryVariables = Exact<{ [key: string]: never; }>;


export type Gener04Query = { __typename?: 'Query', gener04: Array<{ __typename?: 'Gener04', id: string, message: string, read: boolean, createdAt: string, updatedAt: string }> };

export type LoginQueryVariables = Exact<{
  loginInput: AuthInput;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'Auth', token: string } | null };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'Gener02', id: string, firstName: string, lastName: string, email: string, isActive: boolean, roles: Array<{ __typename?: 'Gener21', id: string, role: string, description: string }> } };

export type UpdateGener02MutationVariables = Exact<{
  updateGener02Input: UpdateGener02Input;
}>;


export type UpdateGener02Mutation = { __typename?: 'Mutation', updateGener02: { __typename?: 'Gener02', id: string, firstName: string, lastName: string, email: string } };


export const Gener04Document = gql`
    query Gener04 {
  gener04 {
    id
    message
    read
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGener04Query__
 *
 * To run a query within a React component, call `useGener04Query` and pass it any options that fit your needs.
 * When your component renders, `useGener04Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGener04Query({
 *   variables: {
 *   },
 * });
 */
export function useGener04Query(baseOptions?: Apollo.QueryHookOptions<Gener04Query, Gener04QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Gener04Query, Gener04QueryVariables>(Gener04Document, options);
      }
export function useGener04LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Gener04Query, Gener04QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Gener04Query, Gener04QueryVariables>(Gener04Document, options);
        }
export type Gener04QueryHookResult = ReturnType<typeof useGener04Query>;
export type Gener04LazyQueryHookResult = ReturnType<typeof useGener04LazyQuery>;
export type Gener04QueryResult = Apollo.QueryResult<Gener04Query, Gener04QueryVariables>;
export const LoginDocument = gql`
    query Login($loginInput: AuthInput!) {
  login(loginInput: $loginInput) {
    token
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  getProfile {
    id
    firstName
    lastName
    email
    isActive
    roles {
      id
      role
      description
    }
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const UpdateGener02Document = gql`
    mutation updateGener02($updateGener02Input: UpdateGener02Input!) {
  updateGener02(updateGener02Input: $updateGener02Input) {
    id
    firstName
    lastName
    email
  }
}
    `;
export type UpdateGener02MutationFn = Apollo.MutationFunction<UpdateGener02Mutation, UpdateGener02MutationVariables>;

/**
 * __useUpdateGener02Mutation__
 *
 * To run a mutation, you first call `useUpdateGener02Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGener02Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGener02Mutation, { data, loading, error }] = useUpdateGener02Mutation({
 *   variables: {
 *      updateGener02Input: // value for 'updateGener02Input'
 *   },
 * });
 */
export function useUpdateGener02Mutation(baseOptions?: Apollo.MutationHookOptions<UpdateGener02Mutation, UpdateGener02MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGener02Mutation, UpdateGener02MutationVariables>(UpdateGener02Document, options);
      }
export type UpdateGener02MutationHookResult = ReturnType<typeof useUpdateGener02Mutation>;
export type UpdateGener02MutationResult = Apollo.MutationResult<UpdateGener02Mutation>;
export type UpdateGener02MutationOptions = Apollo.BaseMutationOptions<UpdateGener02Mutation, UpdateGener02MutationVariables>;