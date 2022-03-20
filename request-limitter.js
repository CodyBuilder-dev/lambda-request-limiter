import { createClient } from 'redis';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const handler = async (event, context, callback) => {
    const client = createClient({
        // url: 'redis://[your-redis-endpoint]'
    });
    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();
  

    var tokenLimit = 5;
        
    // 토큰 공간 판별

    await client.watch('token');
    var token = Number(await client.get('token'));
    await sleep(2000);
    
    if(token < tokenLimit ) {
        token += 1
        await client.multi().set('token',token).exec();
        // await client.quit();
        return 'Your Request Passed, now token:' + (token);
    } else {
        // await client.quit();
        return 'Your Request Blocked, now token:' + token;
    }
}