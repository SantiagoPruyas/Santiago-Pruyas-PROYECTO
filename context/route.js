import React from "react";
import {useRouter} from "next/router"
import { useAuth } from "./auth";

export function publicPage(Component) {
    return function PublicPage(props) {
        const auth = useAuth()
        const router = useRouter()
        if (auth.currentUser) {
            router.replace("/")
            return <h1>Loading...</h1>
        }
        return <Component {...props} />
    }
}

export function privatePage(Component) {
    return function PrivatePage(props) {
        const auth = useAuth()
        const router = useRouter()
        if (!auth.currentUser) {
            router.replace("/login")
            return <h1>Loading...</h1>
        }
        return <Component {...props} />
    }
}