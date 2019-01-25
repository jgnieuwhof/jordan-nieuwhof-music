import { format } from 'date-fns';

export const toHuman = date => format(date, 'MMM Do, YYYY');
