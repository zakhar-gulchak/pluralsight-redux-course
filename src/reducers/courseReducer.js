export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            state.push(action.course);
            return [...state,
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}
