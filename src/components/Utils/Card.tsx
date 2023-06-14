import "./Card.css"
export const OscarCard = (props: any) => {
    return (
        <div className="oscarcard">
            <div className="oscarcard-title"><h1>{props.title}</h1></div>
            {props.children}
        </div>
    )
}