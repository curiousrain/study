import "../table/table.scss"



function Table(props) {
    const { words } = props;
    return (
        <table className="table-container">
            <thead className="columns-container">
                <tr className="columns">
                    <th className="column-name">hebrew</th>
                    <th className="column-name">english</th>
                    <th className="column-name">transcription</th>
                    <th className="">Добавить</th>
                </tr>
            </thead>
            <tbody className="rows-container">
                {words.map((word, index) => <tr key={index}>
                    <td className="row-content">{word.hebrew}</td>
                    <td className="row-content">{word.english}</td>
                    <td className="row-content">{word.transcription}</td>
                    <td className="row-content row-content-buttons">
                        {/* <button className="row-button-save"></button> */}
                        <button className="row-button-edit"></button>
                        <button className="row-button-delete"></button>
                    </td>
                </tr>)}
            </tbody>
        </table>

    )
}

export default Table;