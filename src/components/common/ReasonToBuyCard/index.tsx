import styles from "@/components/common/contactUs/contact-us.module.css";
import React, {ReactNode} from "react";
import useResponsive from "@/hooks/useResponsive";

type ReasonToBuyCardProps = {
    title: string,
    description: ReactNode,
    number: string,
}

export default function ReasonToBuyCard({title, description, number}: ReasonToBuyCardProps) {
    const { isMobile } = useResponsive();

    return (
        <div className="flex max-w-[380px] gap-3">
            <p className="text-white text-text-l my-2">{number}</p>
            <div className="">
                <p className="text-white text-heading-m m-0">{title}</p>
                <p className="text-white text-text-m">{description}</p>
            </div>
        </div>
    )
}
