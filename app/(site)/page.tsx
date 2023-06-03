import Header from "@/components/Header";

export default function Home() {
    return (
        <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
            <Header>
                <div className="mb-2">
                    <h1 className="text-3xl font-semibold text-white">
                        Welcome back
                    </h1>
                </div>
            </Header>
        </div>
    );
}
