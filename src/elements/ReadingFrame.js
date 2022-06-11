import React from 'react';
import {connect} from "react-redux";


class ReadingFrame extends React.Component {

render() {
    return (
    <section>
        <div className="read__details" id="readDetails">
            <iframe src={"https://wolnelektury.pl/katalog/lektura/" + this.props.slug.data + ".html#book-text"}

    width={"100%"} height={"1000"} title={"Iframe Example"}/>
        </div>
    </section>
    )}

}

// Получаю данные из store
const mapStateToProps = function (state) {
        return {
            slug: state.slug
        };
    }
;

// Подключаюсь к store
export default connect(mapStateToProps)(ReadingFrame);
