import { Page } from "@/components";

export default function NotFound() {

    return(
        <div className="notFound">
            <img src="./images/404.png" alt="" className="notFound__icon"/>
            <h1 className="notFound__title">404: Not found</h1>
        </div>
    )
}