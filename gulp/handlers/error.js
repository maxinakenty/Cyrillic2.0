import notifier from 'node-notifier';

export default function (error) {
  notifier.notify({
    title: error.plugin,
    message: error.message,
  });

  console.error(`${error.plugin}: ${error.message}`);

  if (typeof this.emit === 'function') {
    this.emit('end');
  }
}
