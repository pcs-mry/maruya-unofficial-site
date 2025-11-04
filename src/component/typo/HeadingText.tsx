import { Children } from "react"

export default function HeadingText({ children }: { children: string }) {
    return (
        <>
            <h1 className="font-bold text-5xl mb-3">
                {Children.map(children, child =>
                    <>
                        {child}
                    </>
                )}
            </h1>
        </>
    )
}