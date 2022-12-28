import { Prisma, PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

process.on('SIGKILL', () => {
  db.$disconnect();
});
process.on('SIGINT', () => {
  db.$disconnect();
});
process.on('SIGTERM', () => {
  db.$disconnect();
})
process.on('exit', () => {
  db.$disconnect();
});
