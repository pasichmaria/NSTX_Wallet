'use client'
import {useMutation, useQuery} from "react-query";
import {useState} from "react";
import {User} from "@/interfaces";
import {getUser, login, logout} from "@/api/userAPI";
import {useRouter} from "next/navigation";


interface AuthProps {
    onSuccess?: (data: string) => void;
    onError?: (error: unknown) => void;
}

export const useAuth = ({ onSuccess, onError }: AuthProps) => {
    const loginQuery = useMutation<
        string,
        unknown,
        {
            email: string;
            password: string;
        }
    >("user", async (data) => login(data), {
        onSuccess: async (data) => {
            if (onSuccess) {
                onSuccess(data);
            }
            sessionStorage.setItem("token", data);
        },
        onError: async (error) => {
            if (onError) {
                onError(error);
            }
        },
    });
    return {
        login: loginQuery.mutate,
    };
};

export const useLogout = ({ onError }: AuthProps) => {
const router = useRouter();
    const logoutQuery = useMutation("logout", async () => logout(), {
        onSuccess: async () => {
            sessionStorage.removeItem("token");
            router.push("/auth/login");
        },
        onError: async (error) => {
            if (onError) {
                onError(error);
            }
        },
    });

    return {
        logout: logoutQuery.mutate,
    };
};

export const useUser = () => {

    const [_user, setUser] = useState<User | null>(null);

    const userQuery = useQuery(["user"], () => getUser(), {
        onSuccess: (data) => {
            setUser(data);
        },
        onError: () => {
            setUser(null);
        },
        enabled: !!sessionStorage.getItem("token"),
        staleTime: 1000 * 60 * 5,
    });
    return {
        getUser: userQuery.refetch,
        user: userQuery.data,
        isLoadingUser: userQuery.isLoading,
        isErrorUser: userQuery.isError,
    };
};


