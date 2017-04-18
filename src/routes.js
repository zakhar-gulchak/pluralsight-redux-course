import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomeComponent from './components/home/homeComponent';
import AboutComponent from './components/about/aboutComponent';
import CoursesComponent from './components/course/coursesComponent';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeComponent} />
        <Route path="about" component={AboutComponent} />
        <Route path="courses" component={CoursesComponent} />
    </Route>
);
