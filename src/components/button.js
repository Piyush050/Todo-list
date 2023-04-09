
const Values = (props) => {
    return (
        <div key={props.index} className="data_value">
            <h4>{props.element.task}</h4>
        </div>
    )
}

export default Values;
