import { Button, PasswordInput, TextInput } from '@mantine/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useLoginLazyQuery } from '@front/generales/shared/gql';
import { useNavigate } from 'react-router-dom';

interface LoginValues {
  email: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();
  const [login] = useLoginLazyQuery({
    onCompleted(login) {
      console.log(login);
      if (!login.login) {
        console.log('no login');
        return;
      }
      localStorage.setItem('auth', login.login?.token as string);
      navigate('/home');
    },
  });
  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('Required').min(4, 'Mininum 4 chars'),
  });

  const initialValues: LoginValues = {
    email: '',
    password: '',
  };

  const submitForm = (values: LoginValues) => {
    const { email, password } = values;
    login({
      variables: { loginInput: { email, password } },
    });
  };

  return (
    <div className="min-h-full flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <Formik
                initialValues={initialValues}
                validationSchema={signInSchema}
                onSubmit={submitForm}
              >
                {(formik) => {
                  const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    isValid,
                    dirty,
                  } = formik;
                  return (
                    <form
                      name="form"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="mb-3">
                        <TextInput
                          name="email"
                          label="Email"
                          placeholder="Email"
                          radius="sm"
                          size="md"
                          error={touched.email && errors.email}
                          value={values.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <PasswordInput
                          name="password"
                          label="Password"
                          placeholder="Password"
                          radius="sm"
                          size="md"
                          error={errors.password}
                          value={values.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Button
                          radius="sm"
                          size="lg"
                          disabled={!(dirty && isValid)}
                          type="submit"
                          color="indigo"
                          className="bg-indigo-500"
                        >
                          Sign In
                        </Button>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
