import Image from 'next/image';
import { type ReactElement } from 'react';
import { type QUIconProps } from './QUIconProps';

export default function QUIcon({ className, width, height, edgeLength = 24, icon }: QUIconProps): ReactElement {
    return (
        <div style={{ height: `${height ?? edgeLength}px`, width: `${width ?? edgeLength}px` }} className="select-none">
            <Image src={icon} width={width ?? edgeLength} className={className} height={height ?? edgeLength} alt={`Quado icon ${icon}`} />
        </div>
    );
}
