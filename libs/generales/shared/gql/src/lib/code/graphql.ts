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

export type Application = {
  __typename?: 'Application';
  code: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Float'];
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateApplicationInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Float'];
};

export enum Languague {
  En = 'EN',
  Es = 'ES'
}

export type Mutation = {
  __typename?: 'Mutation';
  createApplication: Application;
  updateNotification: Notification;
  updateUser: User;
};


export type MutationCreateApplicationArgs = {
  createApplicationInput: CreateApplicationInput;
};


export type MutationUpdateNotificationArgs = {
  updateNotificationInput: UpdateNotificationInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Notification = {
  __typename?: 'Notification';
  created_at: Scalars['String'];
  id: Scalars['ID'];
  message: Scalars['String'];
  read: Scalars['Boolean'];
  title: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allApplication: Array<Application>;
  application: Application;
  getProfile: User;
  login?: Maybe<Auth>;
  notification: Array<Notification>;
};


export type QueryApplicationArgs = {
  id: Scalars['Int'];
};


export type QueryLoginArgs = {
  loginInput: AuthInput;
};

export type Role = {
  __typename?: 'Role';
  description: Scalars['String'];
  id: Scalars['ID'];
  role: Scalars['String'];
  users: Array<User>;
};

export type UpdateNotificationInput = {
  id: Scalars['String'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  languague?: InputMaybe<Languague>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['Float']>>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
  languague: Languague;
  last_name: Scalars['String'];
  password: Scalars['String'];
  roles: Array<Role>;
};

export type AllApplicationQueryVariables = Exact<{ [key: string]: never; }>;


export type AllApplicationQuery = { __typename?: 'Query', allApplication: Array<{ __typename?: 'Application', id: string, name: string, image: string, order: number }> };

export type LoginQueryVariables = Exact<{
  loginInput: AuthInput;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'Auth', token: string } | null };

export type NotificationQueryVariables = Exact<{ [key: string]: never; }>;


export type NotificationQuery = { __typename?: 'Query', notification: Array<{ __typename?: 'Notification', id: string, title: string, message: string, read: boolean, created_at: string, updated_at: string }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, languague: Languague, is_active: boolean, roles: Array<{ __typename?: 'Role', id: string, role: string, description: string }> } };

export type UpdateNotificationMutationVariables = Exact<{
  updateNotificationInput: UpdateNotificationInput;
}>;


export type UpdateNotificationMutation = { __typename?: 'Mutation', updateNotification: { __typename?: 'Notification', id: string, title: string, message: string, read: boolean, created_at: string, updated_at: string } };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, languague: Languague } };


export const AllApplicationDocument = gql`
    query AllApplication {
  allApplication {
    id
    name
    image
    order
  }
}
    `;

/**
 * __useAllApplicationQuery__
 *
 * To run a query within a React component, call `useAllApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllApplicationQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllApplicationQuery(baseOptions?: Apollo.QueryHookOptions<AllApplicationQuery, AllApplicationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllApplicationQuery, AllApplicationQueryVariables>(AllApplicationDocument, options);
      }
export function useAllApplicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllApplicationQuery, AllApplicationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllApplicationQuery, AllApplicationQueryVariables>(AllApplicationDocument, options);
        }
export type AllApplicationQueryHookResult = ReturnType<typeof useAllApplicationQuery>;
export type AllApplicationLazyQueryHookResult = ReturnType<typeof useAllApplicationLazyQuery>;
export type AllApplicationQueryResult = Apollo.QueryResult<AllApplicationQuery, AllApplicationQueryVariables>;
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
export const NotificationDocument = gql`
    query Notification {
  notification {
    id
    title
    message
    read
    created_at
    updated_at
  }
}
    `;

/**
 * __useNotificationQuery__
 *
 * To run a query within a React component, call `useNotificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotificationQuery(baseOptions?: Apollo.QueryHookOptions<NotificationQuery, NotificationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotificationQuery, NotificationQueryVariables>(NotificationDocument, options);
      }
export function useNotificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotificationQuery, NotificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotificationQuery, NotificationQueryVariables>(NotificationDocument, options);
        }
export type NotificationQueryHookResult = ReturnType<typeof useNotificationQuery>;
export type NotificationLazyQueryHookResult = ReturnType<typeof useNotificationLazyQuery>;
export type NotificationQueryResult = Apollo.QueryResult<NotificationQuery, NotificationQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  getProfile {
    id
    first_name
    last_name
    email
    languague
    is_active
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
export const UpdateNotificationDocument = gql`
    mutation updateNotification($updateNotificationInput: UpdateNotificationInput!) {
  updateNotification(updateNotificationInput: $updateNotificationInput) {
    id
    title
    message
    read
    created_at
    updated_at
  }
}
    `;
export type UpdateNotificationMutationFn = Apollo.MutationFunction<UpdateNotificationMutation, UpdateNotificationMutationVariables>;

/**
 * __useUpdateNotificationMutation__
 *
 * To run a mutation, you first call `useUpdateNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNotificationMutation, { data, loading, error }] = useUpdateNotificationMutation({
 *   variables: {
 *      updateNotificationInput: // value for 'updateNotificationInput'
 *   },
 * });
 */
export function useUpdateNotificationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNotificationMutation, UpdateNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNotificationMutation, UpdateNotificationMutationVariables>(UpdateNotificationDocument, options);
      }
export type UpdateNotificationMutationHookResult = ReturnType<typeof useUpdateNotificationMutation>;
export type UpdateNotificationMutationResult = Apollo.MutationResult<UpdateNotificationMutation>;
export type UpdateNotificationMutationOptions = Apollo.BaseMutationOptions<UpdateNotificationMutation, UpdateNotificationMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    id
    first_name
    last_name
    email
    languague
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;