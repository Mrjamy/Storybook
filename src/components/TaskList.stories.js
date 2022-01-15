import React from 'react';

import TaskList from './TaskList';
import { task, actions } from './Task.stories';

export const listGenerator = (count = 6) => {
    const rows = [];
    for (let i = 1; i < count+1; i++) {
        rows.push({...task, id: i, title: `Task ${i}`})
    }

    return rows;
}

export const defaultTasks = listGenerator();

export const withPinnedTasks = [
    ...defaultTasks.slice(0, 5),
    {id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
];

export default {
    title: 'TaskList',
    decorators: [(story) => <div style={{padding: '3rem'}}>{story()}</div>],
    excludeStories: ['defaultTasks', 'listGenerator', 'withPinnedTasks'],
};

export const Default = () => <TaskList tasks={defaultTasks} {...actions} />;

Default.story = {
    name: 'default',
};

export const WithPinnedTasks = () => <TaskList tasks={withPinnedTasks} {...actions} />;

WithPinnedTasks.story = {
    name: 'withPinnedTasks',
};

export const Loading = () => <TaskList loading tasks={defaultTasks} {...actions} />;

Loading.story = {
    name: 'loading',
};

export const Empty = () => <TaskList tasks={[]} {...actions} />;

Empty.story = {
    name: 'empty',
};
