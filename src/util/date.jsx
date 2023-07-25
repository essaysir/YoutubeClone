import TimeAgo from 'timeago-react'; 
import * as timeago from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko'

// register it.
timeago.register('ko', ko); 

export function formatAgo( date , lang = 'en_US'){
    return <TimeAgo datetime={date} locale={lang} />
}