console.log('module.js');

async function start() {
  return 'async working';
}

start().then(console.log)
