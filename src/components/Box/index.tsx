import { JsxClosingElement } from "typescript";
import "./styles.css";

interface BoxProps {
    background: string;
    size?: string;
    children?: JSX.Element;
}

function Box(props: BoxProps) {
    return (
    <section className={`box ${props.background} ${props.size}`}>
    {props.children}
    </section>

    );
}

export default Box;