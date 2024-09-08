"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { register } from "@/api/userAPI";

import { Button, Col, Input, Row } from "@/components";

interface SignUpFormValues {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export default function Signup() {
    const router = useRouter();

    const formik = useFormik<SignUpFormValues>({
        initialValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
        }),
        onSubmit: async (values) => {
            await register(values);
            router.push("/auth/login");
        },
    });

    return (
        <div className="flex flex-col w-full items-center justify-center min-h-screen text-white">
            <Col className="w-full bg-gradient-to-br box-shadow from-green-600 to-cyan-400 items-center justify-center p-8">
                <div className="text-center text-white">
                    <h2 className="text-3xl mb-4">Join Us Today!</h2>
                    <p className="text-lg">
                        Create an account and dive into the world of seamless transactions and top-tier security.
                    </p>
                </div>
            </Col>

            <Row className="flex-1 flex items-center justify-center p-4">
                <Col className="p-8 items-center">
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <Row className="flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                            <Col className="w-full md:w-auto">
                                <Input
                                    label="First Name"
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    autoComplete="given-name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.firstName ? formik.errors.firstName : undefined}
                                />
                            </Col>
                            <Col className="w-full md:w-auto">
                                <Input
                                    label="Last Name"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    autoComplete="family-name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.lastName ? formik.errors.lastName : undefined}
                                />
                            </Col>
                        </Row>
                        <Col className="space-y-4 w-full">
                            <Input
                                label="Email Address"
                                type="email"
                                name="email"
                                fullWidth={true}
                                placeholder="Email Address"
                                autoComplete="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email ? formik.errors.email : undefined}
                            />
                        </Col>
                        <Col className="space-y-4 w-full">
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                fullWidth={true}
                                placeholder="Password"
                                autoComplete="new-password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password ? formik.errors.password : undefined}
                            />
                        </Col>

                        <Button type="submit" className="w-full" color="cyan">
                            Sign Up
                        </Button>
                    </form>

                    <p className="mt-6 text-gray-400 text-center">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="text-[#00f0ff] hover:underline">
                            Login
                        </Link>
                    </p>
                </Col>
            </Row>
        </div>
    );
}
