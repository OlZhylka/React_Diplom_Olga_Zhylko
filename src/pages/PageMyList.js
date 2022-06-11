import React from 'react';
import './PageMyList.scss';
import BookInMyList from "../elements/BookInMyList";
import {connect} from "react-redux";

class PageMyList extends React.PureComponent {

    render() {
        const listOfMyBooks = Object.keys(this.props.section).map((slug) => {
                return <BookInMyList key={slug} slug={slug} bookTitle={this.props.section[slug].title}
                                     bookAuthor={this.props.section[slug].author}/>
            }
        );

        return (
            <section className={"listLiterature"}>
                <h2>Список литературы</h2>
                <div>
                    {listOfMyBooks}
                </div>
            </section>
        );

    }

}

const mapStateToProps = function (state) {
    return {
        section: state.section.data,
    };
};
export default connect(mapStateToProps)(PageMyList);
    