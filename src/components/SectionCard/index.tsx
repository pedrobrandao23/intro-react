import "./styles.css";

interface SectionCardProps {
    picture: string;
    text: string
}

function SectionCard(props: SectionCardProps) {
    return (
    <div className="section-card">
        <img src={props.picture}></img>
        <a><p>{props.text}</p></a>
    </div>

    );
}

export default SectionCard;