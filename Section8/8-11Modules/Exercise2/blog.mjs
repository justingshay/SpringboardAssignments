import { Post } from './post.mjs';

let title = "BIG NEWS!!!";
let content = "Let me just say, exciting things are happening...";

const today = new Post(title, content);
today.publish();