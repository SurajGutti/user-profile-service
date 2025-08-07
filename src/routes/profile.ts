import { FastifyPluginAsync } from 'fastify';

const profileRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get('/', async () => {
      return fastify.prisma.profile.findMany();
  });

  fastify.get('/:id', async (request) => {
    const { id } = request.params as { id: string };
      return fastify.prisma.profile.findUnique({ where: { id: Number(id) } });
  });

  fastify.post('/', async (request) => {
    const { firstName, lastName, dateOfBirth } = request.body as any;
      return fastify.prisma.profile.create({
        data: { firstName, lastName, dateOfBirth: new Date(dateOfBirth) },
    });
  });

  fastify.put('/:id', async (request) => {
    const { id } = request.params as { id: string };
    const { firstName, lastName, dateOfBirth } = request.body as any;
    return fastify.prisma.profile.update({
      where: { id: Number(id) },
      data: { firstName, lastName, dateOfBirth: new Date(dateOfBirth) },
    });
  });
};

export default profileRoutes;
