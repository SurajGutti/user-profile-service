import Fastify from 'fastify';
import profileRoutes from './routes/profile.js';
import prismaPlugin from './plugins/prisma.js';

const app = Fastify({ logger: true });

await app.register(prismaPlugin);
await app.register(profileRoutes, { prefix: '/profiles' });

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
