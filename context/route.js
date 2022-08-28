import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "./auth";
import CircularProgressWithLabel from "../Component/Loading";
import styles from "../styles/Loading.module.css";

export function publicPage(Component) {
    return function PublicPage(props) {
        const auth = useAuth()
        const router = useRouter()
        if (auth.currentUser) {
            router.replace("/")
            return <div className={styles.loading}>
                <CircularProgressWithLabel >
                </CircularProgressWithLabel>
            </div>
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
            return <div className={styles.loading}>
                <CircularProgressWithLabel >
                </CircularProgressWithLabel>
            </div>
        }
        return <Component {...props} />
    }
}