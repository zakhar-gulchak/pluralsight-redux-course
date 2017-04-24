import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './courseForm';

class ManageCourseComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    render() {
        return (
            <CourseForm course={this.state.course} errors={this.state.errors} allAuthors={[]} />
        );
    }
}

ManageCourseComponent.propTypes = {
    course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    return { course };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourseComponent);
