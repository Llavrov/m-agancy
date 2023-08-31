import QUTag from "@/components/common/tag/QUTag";

interface QUIllustrationProps {
    imageSrc: string;
    tags: string[];
}

export default function QUIllustration({imageSrc, tags = []}: QUIllustrationProps) {
    return (
        <div className="w-full relative">
            <div className="absolute left-[20px] top-[20px] flex gap-[9px]">
                {
                    tags.map((tag, index) => (
                        <QUTag light={false} key={index}>{tag}</QUTag>
                    ))
                }
            </div>

            <img className="w-[100%]" src={imageSrc} alt='illustartion'/>
        </div>
    );
}