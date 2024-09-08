"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useAuth, useUser } from "@/hooks/useClient";
import { useRouter } from "next/navigation";
import {Button, Col, Input, Row} from "@/components";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});

export default function Login() {
  const router = useRouter();
  const { getUser } = useUser();

  const { login } = useAuth({
    onSuccess: () => {
      router.push("/portfolio");
      getUser().then();
    },
    onError: () => {}
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: values => {
      login(values);
    }
  });

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen text-white">
      <Col className="w-full bg-gradient-to-br box-shadow from-green-600 to-cyan-400 items-center justify-center p-8">
        <div className="text-center text-white">
          <h2 className="text-3xl mb-4">Welcome Back!</h2>
          <p className="text-lg">
            Get ready to explore the best trading experience with seamless
            transactions and top-tier security.
          </p>
        </div>
      </Col>

      <Row className="flex-1 flex items-center justify-center p-4">
        <Col className="w-full max-w-md p-8 items-center">
          <form onSubmit={formik.handleSubmit} className="space-y-6 w-full">
            <Input
              fullWidth={true}
              label="Email Address"
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email ? formik.errors.email : undefined}
            />
            <Input
              fullWidth={true}
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.password ? formik.errors.password : undefined
              }
            />
            <Button type="submit" className="w-full" color="cyan">
              Login
            </Button>
          </form>

          <p className="mt-6 text-gray-400 text-center">
            Don’t have an account?{" "}
            <Link
              href="/auth/sign-up"
              className="text-[#00f0ff] hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </Col>
      </Row>
    </div>
  );
}
