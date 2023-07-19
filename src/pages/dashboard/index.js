import { useLoaderData } from "react-router-dom"

export default function Dashboard() {
    const runs = useLoaderData();

    return (
        <section>
            <header>
                <h1>Dashboard</h1>
            </header>
            <main>
                run value: {JSON.stringify(runs)}
            </main>
        </section>
    )
}