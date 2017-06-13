import path from 'path';
import sassTrue from 'sass-true';

const sassFile = path.join(__dirname, 'sass', 'test.scss');

sassTrue.runSass({
  file: sassFile
}, describe, it);