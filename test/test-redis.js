const Redis = require('ioredis')

const redis = new Redis()

async function test() {
  await redis.set('yqf', {name: 'yqf'})
  await redis.setBuffer('bf', Buffer.from('jhs'))
  const keys = await redis.keys('*')
  console.log(keys)
}

test()