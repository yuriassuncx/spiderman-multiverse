import { Cards } from "../components/Cards";
import { Header } from "../components/Header";

export function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Header />
            <Cards />
        </div>
    );
}