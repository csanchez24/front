import { Formik } from 'formik';
import * as Yup from 'yup';

import { BaseButton } from '../components/base/button';
import { BaseInput } from '../components/base/input';

interface LoginValues {
  email: string;
  password: string;
}

export function Login() {
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
    console.log(values);
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
                    handleBlur,
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
                        <BaseInput
                          type="email"
                          id="email"
                          name="email"
                          label="Email"
                          value={values.email}
                          error={errors.email}
                          touched={touched.email || false}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                      </div>
                      <div className="mb-3">
                        <BaseInput
                          type="password"
                          id="password"
                          name="password"
                          label="Password"
                          value={values.password}
                          error={errors.password}
                          touched={touched.password || false}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                      </div>
                      <div>
                        <BaseButton
                          type="submit"
                          color="primary"
                          disabled={!(dirty && isValid)}
                        >
                          Sign in
                        </BaseButton>
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
