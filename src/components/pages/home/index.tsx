import Services from "@/components/pages/home/services/services";
import Main from "@/components/pages/home/main/main";
import Form from "@/components/pages/home/form/form";
import ReasonToBuy from "@/components/pages/home/reasonToBuy";
import Projects from "@/components/pages/home/projects";
import UTP from "@/components/pages/home/utp";

export default function QUHome() {
    return (
        <div className="w-full flex min-h-screen flex-col items-center bg-[color:var(--light-background)]">
            <Main/>
            <div className="overflow-x-hidden bg-primary flex items-center gap-10 flex-col relative w-full">
                <ReasonToBuy />
                <Services />
            </div>
            <div className="overflow-x-hidden flex items-center gap-10 flex-col relative w-full">
                <UTP />
                <Projects />
                <Form />
            </div>
        </div>
    )
}
