'use client';
import { PortableText } from "next-sanity";

const PortableTextComponent = ({ value }) => {
    return (
        <PortableText value={value} />
    )
}

export default PortableTextComponent;