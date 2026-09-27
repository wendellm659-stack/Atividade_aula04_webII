import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

async function main() {
  const authors = await prisma.authors.findMany({
    include: {
      books: true,
    },
  })

  console.log("Lista de Autores e seus Livros:")
  console.log(JSON.stringify(authors, null, 2))
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })