/* eslint-disable prettier/prettier */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function seed() {
  await prisma.post.createMany({
    data: [
      { title: 'This is a Title', content: 'This is a Content' },
      { title: 'Title number 2', content: 'Content Number 2' },
    ],
  });
}
seed();