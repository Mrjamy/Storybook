import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export const task = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

export default {
    title: 'Task',
    excludeStories: ['task', 'actions'],
};

export const Default = () => <Task task={task} {...actions} />;

Default.story = {
    name: 'default',
};

export const Pinned = () => <Task task={{...task, state: 'TASK_PINNED'}} {...actions} />;

Pinned.story = {
    name: 'pinned',
};

export const Archived = () => <Task task={{...task, state: 'TASK_ARCHIVED'}} {...actions} />;

Archived.story = {
    name: 'archived',
};
