import React from "react";
import { Breadcrumb } from "rsuite";
import '../styles/page.utils.css';


export function BreadcrumbPage({separator, e}) {
    return (
        <Breadcrumb separator={separator} className="breadcrumb__page">
            <Breadcrumb.Item href="/">
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/doc">
                Document
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{e}</Breadcrumb.Item>
        </Breadcrumb>
    );
}