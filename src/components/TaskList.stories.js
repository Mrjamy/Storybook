import React from 'react';

import TaskList from './TaskList';
import { task, actions } from './Task.stories';

export const defaultTasks = [
    {...task, id: '1', title: 'Task 1'},
    {...task, id: '2', title: 'Task 2'},
    {...task, id: '3', title: 'Task 3'},
    {...task, id: '4', title: 'Task 4'},
    {...task, id: '5', title: 'Task 5'},
    {...task, id: '6', title: 'Task 6'},
];

export const withPinnedTasks = [
    ...defaultTasks.slice(0, 5),
    {id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
];

export default {
    title: 'TaskList',
    decorators: [(story) => <div style={{padding: '3rem'}}>{story()}</div>],
    excludeStories: ['defaultTasks', 'withPinnedTasks'],
};

export const Default = () => <TaskList tasks={defaultTasks} {...actions} />;

Default.story = {
    name: 'default',
};

export const WithPinnedTasks = () => <TaskList tasks={withPinnedTasks} {...actions} />;

WithPinnedTasks.story = {
    name: 'withPinnedTasks',
};

export const Loading = () => <TaskList loading tasks={[]} {...actions} />;

Loading.story = {
    name: 'loading',
};

export const Empty = () => <TaskList tasks={[]} {...actions} />;

Empty.story = {
    name: 'empty',
};
