import { createClient } from 'redis';

export const handler = async (event, context, callback) => {
    const client = createClient({
        // url: 'redis://[your-redis-endpoint]'
    });
    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();
  
    await client.set('tokenLimit',5);
    await client.set('token',0);
    
    await client.quit();
    return 'Token refilled';
}