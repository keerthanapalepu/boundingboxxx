import * as React from 'react';
import { createStore } from '@react-pdf-viewer/core';
const jumpToPagePlugin = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const store = React.useMemo(() => createStore(), []);
    return {
        install: (pluginFunctions) => {
            store.update('jumpToPage', pluginFunctions.jumpToPage);
        },
        jumpToPage: (pageIndex) => {
            const fn = store.get('jumpToPage');
            if (fn) {
                fn(pageIndex);
            }
        },
    };
};
export default jumpToPagePlugin;
